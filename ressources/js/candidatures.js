// Fonctions pour gérer les candidatures

// Récupérer toutes les candidatures de l'utilisateur connecté
async function getCandidatures() {
    try {
        const response = await apiRequest('/candidatures/mes-candidatures', 'GET');
        return response.data || response;
    } catch (error) {
        console.error('Erreur lors de la récupération des candidatures:', error);
        throw error;
    }
}

// Récupérer une candidature par son ID
async function getCandidatureById(id) {
    try {
        const response = await apiRequest(`/candidatures/${id}`, 'GET');
        return response.data || response;
    } catch (error) {
        console.error(`Erreur lors de la récupération de la candidature ${id}:`, error);
        throw error;
    }
}

// Récupérer les candidatures pour une annonce spécifique
async function getCandidaturesByAnnonce(annonceId) {
    try {
        const response = await apiRequest(`/candidatures/annonce/${annonceId}`, 'GET');
        return response.data || response;
    } catch (error) {
        console.error(`Erreur lors de la récupération des candidatures pour l'annonce ${annonceId}:`, error);
        throw error;
    }
}

// Récupérer les candidatures pour le recruteur connecté
async function getCandidaturesByRecruteur() {
    try {
        const response = await apiRequest('/candidatures', 'GET');
        return response.data || response;
    } catch (error) {
        console.error('Erreur lors de la récupération des candidatures du recruteur:', error);
        throw error;
    }
}

// Créer une nouvelle candidature
async function createCandidature(formData) {
    try {
        // Utiliser apiUpload car nous envoyons un fichier
        const response = await apiUpload('/candidatures', formData);
        return response.data || response;
    } catch (error) {
        console.error('Erreur lors de la création de la candidature:', error);
        throw error;
    }
}

// Mettre à jour le statut d'une candidature
async function updateCandidatureStatus(id, statut) {
    try {
        const response = await apiRequest(`/candidatures/${id}/statut`, 'PUT', { statut });
        return response.data || response;
    } catch (error) {
        console.error(`Erreur lors de la mise à jour du statut de la candidature ${id}:`, error);
        throw error;
    }
}

// Supprimer une candidature
async function deleteCandidature(id) {
    try {
        const response = await apiRequest(`/candidatures/${id}`, 'DELETE');
        return response.data || response;
    } catch (error) {
        console.error(`Erreur lors de la suppression de la candidature ${id}:`, error);
        throw error;
    }
}

// Télécharger le CV d'une candidature
async function downloadCV(candidatureId) {
    try {
        const blob = await apiDownload(`/candidatures/${candidatureId}/cv`);
        
        // Créer un lien de téléchargement
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `cv_candidature_${candidatureId}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        
        return true;
    } catch (error) {
        console.error(`Erreur lors du téléchargement du CV pour la candidature ${candidatureId}:`, error);
        throw error;
    }
}