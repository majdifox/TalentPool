document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si l'utilisateur est authentifié
    if (!requireAuth()) {
        return;
    }
    
    // Récupérer les informations de l'utilisateur
    const userJson = localStorage.getItem('auth_user');
    
    if (!userJson) {
        logout();
        window.location.href = '../pages/login.html';
        return;
    }
    
    const user = JSON.parse(userJson);
    
    // Afficher les informations de l'utilisateur
    document.getElementById('user-name').textContent = user.name || 'Utilisateur';
    document.getElementById('user-role').textContent = user.role || 'utilisateur';
    
    // Afficher les sections en fonction du rôle
    if (user.role === 'admin') {
        document.getElementById('admin-section').style.display = 'block';
    } else if (user.role === 'recruteur') {
        document.getElementById('recruiter-section').style.display = 'block';
    } else if (user.role === 'candidat') {
        document.getElementById('candidate-section').style.display = 'block';
    }
    
    // Gérer la déconnexion
    document.getElementById('logout-btn').addEventListener('click', async function() {
        await logout();
        window.location.href = '../index.html';
    });
});