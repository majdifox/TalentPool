// Fonctions d'authentification
async function login(credentials) {
    try {
        const response = await apiRequest('/auth/login', 'POST', credentials);
        
        // Extraire le token et les données utilisateur avec plus de flexibilité
        let authToken = null;
        let userData = null;
        
        // Vérifier différentes structures possibles pour le token
        if (response.token) {
            authToken = response.token;
        } else if (response.access_token) {
            authToken = response.access_token;
        } else if (response.data && response.data.token) {
            authToken = response.data.token;
        } else if (response.data && response.data.access_token) {
            authToken = response.data.access_token;
        }
        
        // Vérifier différentes structures possibles pour les données utilisateur
        if (response.user) {
            userData = response.user;
        } else if (response.data && response.data.user) {
            userData = response.data.user;
        } else {
            // Essayer d'obtenir les informations de l'utilisateur
            try {
                const userResponse = await apiRequest('/utilisateurs/profil', 'GET');
                userData = userResponse.data || userResponse;
            } catch (userError) {
                console.error('Erreur lors de la récupération du profil:', userError);
                // Créer un utilisateur minimal à partir des informations disponibles
                userData = {
                    name: 'Utilisateur',
                    email: credentials.email,
                    role: 'utilisateur'
                };
            }
        }
        
        if (authToken) {
            // Stocker les informations d'authentification
            localStorage.setItem('auth_token', authToken);
            localStorage.setItem('auth_user', JSON.stringify(userData));
            return { success: true, user: userData };
        } else {
            console.error('Aucun token trouvé dans la réponse:', response);
            throw new Error('Format de réponse invalide: aucun token trouvé');
        }
    } catch (error) {
        console.error('Login Error:', error);
        throw error;
    }
}

async function register(userData) {
    try {
        const response = await apiRequest('/auth/register', 'POST', userData);
        
        // Extraire le token et les données utilisateur
        let authToken = null;
        let userInfo = null;
        
        if (response.token) {
            authToken = response.token;
        } else if (response.access_token) {
            authToken = response.access_token;
        }
        
        if (response.user) {
            userInfo = response.user;
        } else if (response.data && response.data.user) {
            userInfo = response.data.user;
        }
        
        if (authToken && userInfo) {
            // Stocker les informations d'authentification
            localStorage.setItem('auth_token', authToken);
            localStorage.setItem('auth_user', JSON.stringify(userInfo));
        }
        
        return { success: true, data: response, user: userInfo };
    } catch (error) {
        console.error('Register Error:', error);
        throw error;
    }
}

async function forgotPassword(email) {
    try {
        const response = await apiRequest('/auth/password/forgot', 'POST', { email });
        return { success: true, data: response };
    } catch (error) {
        console.error('Forgot Password Error:', error);
        throw error;
    }
}

async function resetPassword(data) {
    try {
        const response = await apiRequest('/auth/password/reset', 'POST', data);
        return { success: true, data: response };
    } catch (error) {
        console.error('Reset Password Error:', error);
        throw error;
    }
}

async function logout() {
    try {
        // Essayer de se déconnecter côté serveur
        await apiRequest('/auth/logout', 'POST');
    } catch (error) {
        console.error('Logout Error:', error);
    } finally {
        // Nettoyer côté client même si la déconnexion côté serveur échoue
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_user');
    }
}

// Vérifier si l'utilisateur est authentifié
function isAuthenticated() {
    return !!localStorage.getItem('auth_token');
}

// Rediriger si non authentifié
function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = '../../pages/auth/login.html';
        return false;
    }
    return true;
}

// Obtenir l'utilisateur actuel
function getCurrentUser() {
    const userJson = localStorage.getItem('auth_user');
    if (!userJson) {
        return null;
    }
    return JSON.parse(userJson);
}

// Vérifier si l'utilisateur a un rôle spécifique
function hasRole(role) {
    const user = getCurrentUser();
    if (!user) {
        return false;
    }
    return user.role === role;
}