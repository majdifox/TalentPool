document.addEventListener('DOMContentLoaded', function() {
    // Rediriger si déjà connecté
    if (isAuthenticated()) {
        redirectToDashboard();
        return;
    }
    
    // Vérifier s'il y a un message de succès dans l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const successMessage = urlParams.get('message');
    
    if (successMessage) {
        const successElement = document.getElementById('success-message');
        successElement.textContent = successMessage;
        successElement.style.display = 'block';
    }
    
    // Gérer la soumission du formulaire
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Réinitialiser les erreurs
        document.getElementById('email-error').textContent = '';
        document.getElementById('password-error').textContent = '';
        document.getElementById('error-message').style.display = 'none';
        
        const loginBtn = document.getElementById('login-btn');
        loginBtn.textContent = 'Connexion en cours...';
        loginBtn.disabled = true;
        
        const credentials = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };
        
        try {
            console.log('Tentative de connexion avec:', credentials);
            const result = await login(credentials);
            
            console.log('Résultat de connexion:', result);
            
            if (result.success) {
                redirectToDashboard();
            }
        } catch (error) {
            console.error('Erreur détaillée:', error);
            
            if (error.data && error.data.errors) {
                // Afficher les erreurs de validation
                const errors = error.data.errors;
                
                if (errors.email) {
                    document.getElementById('email-error').textContent = errors.email[0];
                }
                
                if (errors.password) {
                    document.getElementById('password-error').textContent = errors.password[0];
                }
            } else if (error.data && error.data.message) {
                // Afficher le message d'erreur général
                const errorElement = document.getElementById('error-message');
                errorElement.textContent = error.data.message;
                errorElement.style.display = 'block';
            } else {
                // Afficher une erreur générique
                const errorElement = document.getElementById('error-message');
                errorElement.textContent = 'Une erreur est survenue lors de la connexion. Veuillez réessayer.';
                errorElement.style.display = 'block';
            }
            
            loginBtn.textContent = 'Se connecter';
            loginBtn.disabled = false;
        }
    });
});

// Rediriger vers le tableau de bord approprié selon le rôle
function redirectToDashboard() {
    const user = getCurrentUser();
    
    if (!user) {
        return;
    }
    
    switch (user.role) {
        case 'admin':
            window.location.href = '../admin/dashboard.html';
            break;
        case 'recruteur':
            window.location.href = '../recruteur/dashboard.html';
            break;
        case 'candidat':
            window.location.href = '../candidat/dashboard.html';
            break;
        default:
            window.location.href = '../../index.html';
    }
}