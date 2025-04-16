// Fonctions pour l'administration

// Récupérer tous les utilisateurs
async function getUsers() {
    try {
        const response = await apiRequest('/admin/users', 'GET');
        return response.data || response;
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
        // Simuler des données pour le développement
        return simulateUsers();
    }
}

// Récupérer un utilisateur par son ID
async function getUserById(id) {
    try {
        const response = await apiRequest(`/admin/users/${id}`, 'GET');
        return response.data || response;
    } catch (error) {
        console.error(`Erreur lors de la récupération de l'utilisateur ${id}:`, error);
        // Simuler des données pour le développement
        const users = simulateUsers();
        return users.find(user => user.id === parseInt(id)) || null;
    }
}

// Mettre à jour un utilisateur
async function updateUser(id, userData) {
    try {
        const response = await apiRequest(`/admin/users/${id}`, 'PUT', userData);
        return response.data || response;
    } catch (error) {
        console.error(`Erreur lors de la mise à jour de l'utilisateur ${id}:`, error);
        throw error;
    }
}

// Supprimer un utilisateur
async function deleteUser(id) {
    try {
        const response = await apiRequest(`/utilisateurs/${id}`, 'DELETE');
        return response.data || response;
    } catch (error) {
        console.error(`Erreur lors de la suppression de l'utilisateur ${id}:`, error);
        throw error;
    }
}

// Fonction pour simuler des données utilisateurs (pour le développement)
function simulateUsers() {
    return [
        {
            id: 1,
            name: 'Admin User',
            email: 'admin@example.com',
            role: 'admin',
            created_at: '2025-01-01T00:00:00.000Z'
        },
        {
            id: 2,
            name: 'Recruteur Example',
            email: 'recruteur@example.com',
            role: 'recruteur',
            created_at: '2025-01-02T00:00:00.000Z'
        },
        {
            id: 3,
            name: 'Candidat Test',
            email: 'candidat@example.com',
            role: 'candidat',
            created_at: '2025-01-03T00:00:00.000Z'
        },
        {
            id: 4,
            name: 'John Doe',
            email: 'john@example.com',
            role: 'candidat',
            created_at: '2025-01-04T00:00:00.000Z'
        },
        {
            id: 5,
            name: 'Jane Smith',
            email: 'jane@example.com',
            role: 'recruteur',
            created_at: '2025-01-05T00:00:00.000Z'
        }
    ];
}