<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\App;
use App\Models\Offer;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Mail\AppStatusUpdated;
use Illuminate\Support\Facades\Mail;

class AppController extends Controller
{
// apply for a job ...
    public function apply(Request $request, $offerID)
    {
        $request->validate([
            'cv' => 'required|file|mimes:pdf,doc,docx|max:2048',
            'letter' => 'required|string',
        ]);

        $candidate = Auth::user();

        $existingApp = App::where('candidate_id', $candidate->id)->where('offer_id', $offerID)->first();

        if ($existingApp) {
            return response()->json(['message' => 'You have already applied to this job.'], 400);
        }

        $cvPath = $request->file('cv')->store('cvs', 'public');

        $app = App::create([
            'candidate_id' => $candidate->id,
            'offer_id' => $offerID,
            'cv' => $cvPath,
            'letter' => $request->letter,
            'status' => 'pending',
        ]);

        return response()->json(['message' => 'App submitted successfully!', 'data' => $app], 201);
    }

    public function withdraw($appID)
    {
        $candidate = Auth::user();

        $app = App::where('id', $appID)->where('candidate_id', $candidate->id)->first();

        if (!$app) {
            return response()->json(['message' => 'App not found or you do not have permission to delete it.'], 404);
        }

        Storage::disk('public')->delete($app->cv);

        $app->delete();

        return response()->json(['message' => 'App withdrawn successfully!'], 200);
    }

    public function getApps(Request $request)
    {
        $recruiter = Auth::user();

        $offer = Offer::where('recruiter_id', $recruiter->id)->pluck('id');

        $apps = App::whereIn('offer_id', $offer)->with(['candidate', 'offer'])->get();

        if ($request->has('status')) {
            $apps = $apps->where('status', $request->status);
        }

        return response()->json(['data' => $apps], 200);
    }

    public function updateAppStatus(Request $request, $appID)
    {
        $recruiter = Auth::user();

        if ($recruiter->role !== 'recruiter') {
            return response()->json(['message' => 'Only recruiters can update application status.'], 403);
        }

        $request->validate([
            'status' => 'required|in:pending,reviewed,accepted,rejected',
        ]);

        $application = App::find($appID);

        if (!$application) {
            return response()->json(['message' => 'Application not found.'], 404);
        }

        $offer = Offer::where('id', $application->offer_id)->where('recruiter_id', $recruiter->id)->first();

        if (!$offer) {
            return response()->json(['message' => 'You are not allowed to edit this application.'], 403);
        }

        $application->status = $request->status;
        $application->save();

        Mail::to($application->candidate->email)->send(new AppStatusUpdated($application));

        return response()->json(['message' => 'Application status successfully updated!', 'data' => $application], 200);
    }

    public function getRecruiterStats()
    {
        $recruiter = Auth::user();

        if ($recruiter->role !== 'recruiter') {
            return response()->json(['message' => 'Only recruiters can access these statistics.'], 403);
        }

        $offers = Offer::where('recruiter_id', $recruiter->id)->get();

        // Initialize statistics
        $statistics = [
            'total_offers' => $offers->count(),
            'total_applications' => 0,
            'applications_by_status' => [
                'pending' => 0,
                'reviewed' => 0,
                'accepted' => 0,
                'rejected' => 0,
            ],
            'applications_by_offer' => [],
        ];

        // Calculate statistics
        foreach ($offers as $offer) {
            $applications = App::where('offer_id', $offer->id)->get();

            $statistics['total_applications'] += $applications->count();

            foreach ($applications as $application) {
                $statistics['applications_by_status'][$application->status]++;
            }

            $statistics['applications_by_offer'][] = [
                'offer_title' => $offer->title,
                'total_applications' => $applications->count(),
                'applications_by_status' => [
                    'pending' => $applications->where('status', 'pending')->count(),
                    'reviewed' => $applications->where('status', 'reviewed')->count(),
                    'accepted' => $applications->where('status', 'accepted')->count(),
                    'rejected' => $applications->where('status', 'rejected')->count(),
                ],
            ];
        }

        return response()->json(['data' => $statistics], 200);
    }
}