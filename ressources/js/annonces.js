// Fonctions pour gérer les annonces

// Récupérer toutes les annonces
async function getAnnonces() {
    try {
        const response = await apiRequest('/annonces', 'GET');
        return response.data || response;
    } catch (error) {
        console.error('Erreur lors de la récupération des annonces:', error);
        throw error;
    }
}

// Récupérer une annonce par son ID
async function getAnnonceById(id) {
    try {
        const response = await apiRequest(`/annonces/${id}`, 'GET');
        return response.data || response;
    } catch (error) {
        console.error(`Erreur lors de la récupération de l'annonce ${id}:`, error);
        throw error;
    }
}

// Récupérer les annonces du recruteur connecté
async function getMesAnnonces() {
    try {
        // On utilise le même endpoint mais le backend filtrera selon l'utilisateur connecté
        const response = await apiRequest('/annonces', 'GET');
        const annonces = response.data || response;
        
        // Filtrer les annonces du recruteur connecté côté client si nécessaire
        const user = getCurrentUser();
        if (user && user.role === 'recruteur') {
            return annonces.filter(annonce => annonce.user_id === user.id);
        }
        
        return annonces;
    } catch (error) {
        console.error('Erreur lors de la récupération de mes annonces:', error);
        throw error;
    }
}

// Créer une nouvelle annonce
async function createAnnonce(annonceData) {
    try {
        const response = await apiRequest('/annonces', 'POST', annonceData);
        return response.data || response;
    } catch (error) {
        console.error('Erreur lors de la création de l\'annonce:', error);
        throw error;
    }
}

// Mettre à jour une annonce
async function updateAnnonce(id, annonceData) {
    try {
        const response = await apiRequest(`/annonces/${id}`, 'PUT', annonceData);
        return response.data || response;
    } catch (error) {
        console.error(`Erreur lors de la mise à jour de l'annonce ${id}:`, error);
        throw error;
    }
}

// Supprimer une annonce
async function deleteAnnonce(id) {
    try {
        const response = await apiRequest(`/annonces/${id}`, 'DELETE');
        return response.data || response;
    } catch (error) {
        console.error(`Erreur lors de la suppression de l'annonce ${id}:`, error);
        throw error;
    }
}

// Rechercher des annonces
async function searchAnnonces(searchParams) {
    try {
        // Construire la chaîne de requête
        const queryParams = new URLSearchParams();
        
        for (const [key, value] of Object.entries(searchParams)) {
            if (value) {
                queryParams.append(key, value);
            }
        }
        
        const queryString = queryParams.toString();
        const endpoint = queryString ? `/annonces?${queryString}` : '/annonces';
        
        const response = await apiRequest(endpoint, 'GET');
        return response.data || response;
    } catch (error) {
        console.error('Erreur lors de la recherche d\'annonces:', error);
        throw error;
    }
}