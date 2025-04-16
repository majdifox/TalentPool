# 🚀 TalentPool - Interface Utilisateur

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Status](https://img.shields.io/badge/status-en%20développement-orange.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

> Une interface utilisateur moderne et intuitive pour la plateforme de recrutement TalentPool, développée en JavaScript natif pour une consommation efficace de l'API TalentPool.

![TalentPool Banner](https://via.placeholder.com/800x200?text=TalentPool+Platform)

## 📋 Table des matières

- [Aperçu](#-aperçu)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Structure du projet](#-structure-du-projet)
- [Consommation de l'API](#-consommation-de-lapi)
- [Utilisation](#-utilisation)
- [Captures d'écran](#-captures-décran)
- [Équipe](#-équipe)
- [Contribution](#-contribution)
- [Licence](#-licence)

## 🌟 Aperçu

TalentPool est une plateforme de recrutement qui connecte les recruteurs et les candidats. Cette interface utilisateur est développée en JavaScript natif, optimisée pour consommer l'API TalentPool de manière efficace et performante, offrant une expérience fluide et réactive.

## ✨ Fonctionnalités

### 📢 Gestion des Annonces
- 📋 Affichage de la liste des annonces avec pagination
- 📝 Création, modification et suppression d'annonces via l'API
- 🔍 Recherche et filtrage avancés
- 👁️ Vue détaillée des annonces

### 📬 Gestion des Candidatures
- 📤 Formulaire d'envoi de candidature avec upload de CV et lettre de motivation
- 📋 Liste des candidatures envoyées avec option de retrait
- 🔍 Filtrage des candidatures pour les recruteurs
- 📄 Prévisualisation des documents

### 📊 Suivi des Candidatures
- 🚦 Affichage du statut des candidatures (en attente, acceptée, refusée)
- 🔔 Système de notifications visuelles
- 📱 Mises à jour en temps réel via l'API

### 🔐 Authentification et Sécurité
- 🔑 Connexion sécurisée par email et mot de passe
- 👤 Inscription avec choix de rôle (candidat ou recruteur)
- 🔄 Réinitialisation du mot de passe
- 🛡️ Protection des routes sensibles
- 🔒 Gestion des tokens JWT

### 📈 Statistiques et Rapports
- 📊 Tableau de bord pour les recruteurs
- 📉 Visualisations graphiques des données
- 📑 Page d'administration avec résumé des activités
- 📤 Export des données

## 💻 Technologies

- 🌐 HTML5, CSS3, JavaScript ES6+ natif
- 🔄 Consommation d'API REST avec Fetch API / Axios
- 🎨 CSS personnalisé avec variables CSS
- 📱 Design responsive avec Media Queries
- 🔒 Gestion de l'authentification JWT
- 📦 Bundler: Webpack / Parcel
- 🧪 Tests: Jest
- 🚀 Déploiement: Vercel / Netlify

## 🚀 Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-organisation/talentpool-ui.git

# Accéder au répertoire
cd talentpool-ui

# Installer les dépendances
npm install
# ou
yarn install

# Configurer les variables d'environnement
cp .env.example .env
# Éditer le fichier .env avec l'URL de l'API

# Lancer le serveur de développement
npm run dev
# ou
Voici un README.md complet et adapté, mentionnant spécifiquement l'utilisation de JavaScript pour la consommation d'API:

```markdown
# 🚀 TalentPool - Interface Utilisateur

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Status](https://img.shields.io/badge/status-en%20développement-orange.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

> Une interface utilisateur moderne et intuitive pour la plateforme de recrutement TalentPool, développée en JavaScript natif pour une consommation efficace de l'API TalentPool.

![TalentPool Banner](https://via.placeholder.com/800x200?text=TalentPool+Platform)

## 📋 Table des matières

- [Aperçu](#-aperçu)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Structure du projet](#-structure-du-projet)
- [Consommation de l'API](#-consommation-de-lapi)
- [Utilisation](#-utilisation)
- [Captures d'écran](#-captures-décran)
- [Équipe](#-équipe)
- [Contribution](#-contribution)
- [Licence](#-licence)

## 🌟 Aperçu

TalentPool est une plateforme de recrutement qui connecte les recruteurs et les candidats. Cette interface utilisateur est développée en JavaScript natif, optimisée pour consommer l'API TalentPool de manière efficace et performante, offrant une expérience fluide et réactive.

## ✨ Fonctionnalités

### 📢 Gestion des Annonces
- 📋 Affichage de la liste des annonces avec pagination
- 📝 Création, modification et suppression d'annonces via l'API
- 🔍 Recherche et filtrage avancés
- 👁️ Vue détaillée des annonces

### 📬 Gestion des Candidatures
- 📤 Formulaire d'envoi de candidature avec upload de CV et lettre de motivation
- 📋 Liste des candidatures envoyées avec option de retrait
- 🔍 Filtrage des candidatures pour les recruteurs
- 📄 Prévisualisation des documents

### 📊 Suivi des Candidatures
- 🚦 Affichage du statut des candidatures (en attente, acceptée, refusée)
- 🔔 Système de notifications visuelles
- 📱 Mises à jour en temps réel via l'API

### 🔐 Authentification et Sécurité
- 🔑 Connexion sécurisée par email et mot de passe
- 👤 Inscription avec choix de rôle (candidat ou recruteur)
- 🔄 Réinitialisation du mot de passe
- 🛡️ Protection des routes sensibles
- 🔒 Gestion des tokens JWT

### 📈 Statistiques et Rapports
- 📊 Tableau de bord pour les recruteurs
- 📉 Visualisations graphiques des données
- 📑 Page d'administration avec résumé des activités
- 📤 Export des données

## 💻 Technologies

- 🌐 HTML5, CSS3, JavaScript ES6+ natif
- 🔄 Consommation d'API REST avec Fetch API / Axios
- 🎨 CSS personnalisé avec variables CSS
- 📱 Design responsive avec Media Queries
- 🔒 Gestion de l'authentification JWT
- 📦 Bundler: Webpack / Parcel
- 🧪 Tests: Jest
- 🚀 Déploiement: Vercel / Netlify

## 🚀 Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-organisation/talentpool-ui.git

# Accéder au répertoire
cd talentpool-ui

# Installer les dépendances
npm install
# ou
yarn install

# Configurer les variables d'environnement
cp .env.example .env
# Éditer le fichier .env avec l'URL de l'API

# Lancer le serveur de développement
npm run dev
# ou
yarn dev
```

## 📂 Structure du projet

```plaintext
talentpool-ui/
├── css/                  # Styles CSS
│   ├── main.css          # Styles principaux
│   ├── components.css    # Styles des composants
│   └── responsive.css    # Styles responsives
├── js/                   # Scripts JavaScript
│   ├── api/              # Services d'API
│   │   ├── config.js     # Configuration de l'API
│   │   ├── auth.js       # Endpoints d'authentification
│   │   ├── annonces.js   # Endpoints des annonces
│   │   └── candidatures.js # Endpoints des candidatures
│   ├── utils/            # Utilitaires JavaScript
│   └── components/       # Composants JS
├── images/               # Images et assets
├── pages/                # Pages de l'application
│   ├── auth.js           # Authentification
│   ├── annonces.js       # Gestion des annonces
│   ├── candidatures.js   # Gestion des candidatures
│   ├── suivi.js          # Suivi des candidatures
│   └── dashboard.js      # Tableau de bord et statistiques
├── index.html            # Page d'entrée
├── app.js                # Point d'entrée JavaScript
└── README.md             # Documentation
```

## 🔌 Consommation de l'API

Notre interface utilise JavaScript natif pour consommer l'API TalentPool de manière efficace:

```javascript
// Exemple de consommation de l'API avec Fetch
async function getAnnonces(page = 1, filters = {}) {
  const token = localStorage.getItem('token');
  
  try {
    const queryParams = new URLSearchParams({
      page,
      ...filters
    }).toString();
    
    const response = await fetch(`${API_URL}/annonces?${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des annonces');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur API:', error);
    throw error;
  }
}

// Utilisation
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const annoncesData = await getAnnonces();
    renderAnnonces(annoncesData.items);
  } catch (error) {
    showErrorNotification(error.message);
  }
});
```

### Gestion des tokens et authentification

```javascript
// Service d'authentification
const authService = {
  async login(email, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Échec de connexion');
    }
    
    // Stocker le token
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    
    return data;
  },
  
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login.html';
  },
  
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
};
```

## 🖥️ Utilisation

### 👤 Pour les candidats:

1. Créez un compte en tant que candidat
2. Parcourez les annonces disponibles
3. Postulez en téléchargeant votre CV et lettre de motivation
4. Suivez le statut de vos candidatures


### 👔 Pour les recruteurs:

1. Créez un compte en tant que recruteur
2. Publiez des offres d'emploi
3. Consultez les candidatures reçues
4. Gérez le processus de recrutement via le tableau de bord


## 📸 Captures d'écran

| Page d'accueil | Tableau de bord | Liste des annonces
|-----|-----|-----
| 

 | 

 | 




| Détail d'une annonce | Formulaire de candidature | Suivi des candidatures
|-----|-----|-----
| 

 | 

 | 




## 🔄 Intégration continue

Le projet utilise GitHub Actions pour l'intégration continue:

- 🧪 Exécution automatique des tests
- 🔍 Analyse de code avec ESLint
- 📦 Build automatique
- 🚀 Déploiement automatique sur l'environnement de staging


## 👥 Équipe

- 👨‍💻 [Votre Nom](https://github.com/votre-username) - Développeur principal
- 👩‍💻 [Membre de l'équipe](https://github.com/membre-username) - Designer UI/UX


## 🤝 Contribution

Les contributions sont les bienvenues! Veuillez suivre ces étapes:

1. 🍴 Forkez le projet
2. 🔄 Créez votre branche de fonctionnalité (`git checkout -b feature/amazing-feature`)
3. 💾 Committez vos changements (`git commit -m 'Add some amazing feature'`)
4. 📤 Poussez vers la branche (`git push origin feature/amazing-feature`)
5. 🔍 Ouvrez une Pull Request


## 🐛 Signalement de bugs

Si vous trouvez un bug, veuillez ouvrir un ticket en utilisant le modèle de bug report et inclure:

- Une description claire du bug
- Les étapes pour reproduire
- Le comportement attendu
- Des captures d'écran si possible
- Votre environnement (navigateur, OS)


## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus d'informations.