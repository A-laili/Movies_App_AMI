# MoviesApp

MoviesApp est une application mobile développée avec React Native qui permet aux utilisateurs d'accéder à une vaste base de données de films via une API externe. L'application offre également la possibilité de visualiser les bandes-annonces des films, de localiser les cinémas à proximité, et intègre une fonctionnalité de reconnaissance faciale pour détecter l'âge des utilisateurs.

## Fonctionnalités

1. **Page d'accueil** : Affiche une liste de films populaires récupérés de l'API.
2. **Recherche** : Utilisez la barre de recherche pour trouver des films spécifiques.
3. **Détails du film** : Cliquez sur un film pour voir ses détails et regarder la bande-annonce.
4. **Localisation des cinémas** : Accédez à la section "Cinémas à proximité" pour voir les cinémas proches de votre position actuelle.
5. **Reconnaissance faciale** : À l'ouverture d'un film, l'application utilise la caméra pour détecter l'âge de l'utilisateur. Si l'âge estimé est inférieur à celui requis pour le film, l'accès est restreint.

## Installation

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn
- React Native CLI
- Android Studio (pour les utilisateurs Android)
- Xcode (pour les utilisateurs iOS)
- Une API key pour l'API des films (par exemple, [The Movie Database (TMDb)](https://www.themoviedb.org/))
- Une API key pour un service de géolocalisation (par exemple, Google Places API

## Technologies utilisées

- **React Native** : Framework principal pour le développement mobile.
- **API externe des films** : Pour récupérer les informations sur les films et les bandes-annonces.
- **API de géolocalisation** : Pour localiser les cinémas à proximité.
- **Reconnaissance faciale** : Implémentée via des bibliothèques de reconnaissance faciale pour estimer l'âge des utilisateurs.
