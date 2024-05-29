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
- Une API key pour un service de géolocalisation (par exemple, Google Places API)

### Étapes d'installation

1. Clonez le dépôt :
    ```sh
    git clone https://github.com/votre-utilisateur/MoviesApp.git
    cd MoviesApp
    ```

2. Installez les dépendances :
    ```sh
    npm install
    # ou si vous utilisez yarn
    yarn install
    ```

3. Ajoutez vos clés API :
   - Créez un fichier `.env` à la racine du projet.
   - Ajoutez votre clé API pour l'API des films, l'API de géolocalisation et toute autre configuration nécessaire :
     ```env
     MOVIE_API_KEY=your_movie_api_key_here
     GEOLOCATION_API_KEY=your_geolocation_api_key_here
     ```

4. Exécutez l'application :
    ```sh
    npx react-native run-android
    # ou
    npx react-native run-ios
    ```

## Technologies utilisées

- **React Native** : Framework principal pour le développement mobile.
- **Node.js** : Environnement d'exécution pour exécuter JavaScript côté serveur.
- **Axios** : Librairie pour faire des requêtes HTTP vers les API.
- **Bootstrap** : Framework CSS pour styliser l'application.
- **face-api.js** : Librairie pour la reconnaissance faciale et l'estimation de l'âge.
- **StreetMap** : API pour la localisation des cinémas à proximité.
- **The Movie Database (TMDb)** : API externe pour récupérer les informations sur les films et les bandes-annonces.

## Contribuer

Les contributions sont les bienvenues ! Pour des modifications majeures, veuillez ouvrir une issue d'abord pour discuter de ce que vous souhaitez changer.

1. Fork le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos modifications (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

