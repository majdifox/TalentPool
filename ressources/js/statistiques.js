// Fonctions pour gérer les statistiques

// Récupérer les statistiques du recruteur connecté
async function getRecruteurStats() {
    try {
        const response = await apiRequest('/stats/recruteur', 'GET');
        return response.data || response;
    } catch (error) {
        console.error('Erreur lors de la récupération des statistiques du recruteur:', error);
        throw error;
    }
}

// Récupérer les statistiques globales (admin)
async function getGlobalStats() {
    try {
        const response = await apiRequest('/stats/globales', 'GET');
        return response.data || response;
    } catch (error) {
        console.error('Erreur lors de la récupération des statistiques globales:', error);
        throw error;
    }
}

// Calculer le taux de conversion des candidatures
function calculateConversionRate(acceptedCount, totalCount) {
    if (totalCount === 0) {
        return 0;
    }
    return (acceptedCount / totalCount) * 100;
}

// Calculer le temps moyen de traitement des candidatures (en jours)
function calculateAverageProcessingTime(candidatures) {
    if (!candidatures || candidatures.length === 0) {
        return 0;
    }
    
    const processedCandidatures = candidatures.filter(c => 
        c.statut === 'acceptee' || c.statut === 'refusee'
    );
    
    if (processedCandidatures.length === 0) {
        return 0;
    }
    
    const totalDays = processedCandidatures.reduce((sum, candidature) => {
        const createdDate = new Date(candidature.created_at);
        const updatedDate = new Date(candidature.updated_at);
        const diffTime = Math.abs(updatedDate - createdDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return sum + diffDays;
    }, 0);
    
    return totalDays / processedCandidatures.length;
}

// Générer des données pour les graphiques
function generateChartData(data, labels, backgroundColor) {
    return {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: backgroundColor
        }]
    };
}