document.addEventListener('DOMContentLoaded', function() {
    // Rediriger si déjà connecté
    if (isAuthenticated()) {
        redirectToDashboard();
        return;
    }
    
    // Gérer la soumission du formulaire
    const registerForm = document.getElementById('register-form');
    
    registerForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Réinitialiser les erreurs
        document.getElementById('name-error').textContent = '';
        document.getElementById('email-error').textContent = '';
        document.getElementById('password-error').textContent = '';
        document.getElementById('password-confirmation-error').textContent = '';
        document.getElementById('role-error').textContent = '';
        document.getElementById('terms-error').textContent = '';
        document.getElementById('error-message').style.display = 'none';
        
        // Valider le formulaire côté client
        let isValid = true;
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const passwordConfirmation = document.getElementById('password_confirmation').value;
        const terms = document.getElementById('terms').checked;
        
        if (name.length < 2) {
            document.getElementById('name-error').textContent = 'Le nom doit contenir au moins 2 caractères';
            isValid = false;
        }
        
        if (!email) {
            document.getElementById('email-error').textContent = "L'email est requis";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            document.getElementById('email-error').textContent = "L'email est invalide";
            isValid = false;
        }
        
        if (!password) {
            document.getElementById('password-error').textContent = 'Le mot de passe est requis';
            isValid = false;
        } else if (password.length < 8) {
            document.getElementById('password-error').textContent = 'Le mot de passe doit contenir au moins 8 caractères';
            isValid = false;
        }
        
        if (password !== passwordConfirmation) {
            document.getElementById('password-confirmation-error').textContent = 'Les mots de passe ne correspondent pas';
            isValid = false;
        }
        
        if (!terms) {
            document.getElementById('terms-error').textContent = 'Vous devez accepter les conditions d\'utilisation';
            isValid = false;
        }
        
        if (!isValid) {
            return;
        }
        
        const registerBtn = document.getElementById('register-btn');
        registerBtn.textContent = 'Inscription en cours...';
        registerBtn.disabled = true;
        
        const userData = {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
            role: document.getElementById('role').value
        };
        
        try {
            const result = await register(userData);
            
            if (result.success) {
                // Rediriger vers le tableau de bord approprié
                redirectToDashboard();
            }
        } catch (error) {
            console.error('Register Error:', error);
            
            if (error.data && error.data.errors) {
                // Afficher les erreurs de validation
                const errors = error.data.errors;
                
                if (errors.name) {
                    document.getElementById('name-error').textContent = errors.name[0];
                }
                
                if (errors.email) {
                    document.getElementById('email-error').textContent = errors.email[0];
                }
                
                if (errors.password) {
                    document.getElementById('password-error').textContent = errors.password[0];
                }
                
                if (errors.role) {
                    document.getElementById('role-error').textContent = errors.role[0];
                }
            } else if (error.data && error.data.message) {
                // Afficher le message d'erreur général
                const errorElement = document.getElementById('error-message');
                errorElement.textContent = error.data.message;
                errorElement.style.display = 'block';
            } else {
                // Afficher une erreur générique
                const errorElement = document.getElementById('error-message');
                errorElement.textContent = "Une erreur est survenue lors de l'inscription. Veuillez réessayer.";
                errorElement.style.display = 'block';
            }
            
            registerBtn.textContent = "S'inscrire";
            registerBtn.disabled = false;
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