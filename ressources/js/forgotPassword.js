document.addEventListener('DOMContentLoaded', function() {
    // Gérer la soumission du formulaire
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    
    forgotPasswordForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Réinitialiser les erreurs
        document.getElementById('email-error').textContent = '';
        document.getElementById('error-message').style.display = 'none';
        document.getElementById('success-message').style.display = 'none';
        
        const email = document.getElementById('email').value;
        
        // Valider l'email
        if (!email) {
            document.getElementById('email-error').textContent = "L'email est requis";
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            document.getElementById('email-error').textContent = "L'email est invalide";
            return;
        }
        
        const resetBtn = document.getElementById('reset-btn');
        resetBtn.textContent = 'Envoi en cours...';
        resetBtn.disabled = true;
        
        try {
            const result = await forgotPassword(email);
            
            if (result.success) {
                // Afficher le message de succès
                const successElement = document.getElementById('success-message');
                successElement.textContent = 'Un email de réinitialisation a été envoyé à votre adresse email. Veuillez vérifier votre boîte de réception.';
                successElement.style.display = 'block';
                
                // Cacher le formulaire
                forgotPasswordForm.style.display = 'none';
            }
        } catch (error) {
            console.error('Forgot Password Error:', error);
            
            if (error.data && error.data.message) {
                // Afficher le message d'erreur
                const errorElement = document.getElementById('error-message');
                errorElement.textContent = error.data.message;
                errorElement.style.display = 'block';
            } else {
                // Afficher une erreur générique
                const errorElement = document.getElementById('error-message');
                errorElement.textContent = 'Une erreur est survenue. Veuillez réessayer.';
                errorElement.style.display = 'block';
            }
            
            resetBtn.textContent = 'Envoyer le lien de réinitialisation';
            resetBtn.disabled = false;
        }
    });
});