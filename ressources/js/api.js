// Configuration de l'API
const API_URL = 'http://127.0.0.1:8000/api';

// Fonction pour effectuer des requêtes API
async function apiRequest(endpoint, method = 'GET', data = null) {
    const url = `${API_URL}${endpoint}`;
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    
    // Ajouter le token d'authentification si disponible
    const token = localStorage.getItem('auth_token');
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    
    const options = {
        method,
        headers,
        credentials: 'include'
    };
    
    if (data) {
        options.body = JSON.stringify(data);
    }
    
    try {
        const response = await fetch(url, options);
        const responseData = await response.json();
        
        if (!response.ok) {
            throw {
                status: response.status,
                data: responseData
            };
        }
        
        return responseData;
    } catch (error) {
        console.error('API Request Error:', error);
        throw error;
    }
}