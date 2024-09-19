# ChatBot - React & TypeScript avec l'API de Gemini

Ce projet est un chatbot simple développé avec **Vite**, **React**, **TypeScript** et **TailwindCSS**, utilisant l'**API Gemini** pour gérer les interactions de chat. Il permet aux utilisateurs de saisir des messages et de recevoir des réponses en temps réel tout en maintenant le fil de la conversation. Le bot est nommé **Jarvis** et les messages échangés sont affichés de manière fluide avec un système de scroll automatique.

## Fonctionnalités principales

- **Interaction en temps réel** : Envoyez des messages à Jarvis et recevez des réponses instantanées via l'API Gemini.
- **Suivi du fil de la conversation** : Le chatbot conserve le contexte de la conversation afin de répondre de manière cohérente à vos messages.
- **Scroll automatique** : L'interface défile automatiquement vers le bas lorsque de nouveaux messages sont reçus.
- **Interface responsive** : Conception élégante et adaptable utilisant TailwindCSS.
- **Gestion des états avec React Hooks** : Utilisation de `useState` et `useEffect` pour gérer les messages et le scroll automatique.

## Structure du projet

```bash
├── src
│   ├── components
│   │   └── Navbar.tsx    # Composant Navbar avec champ d'input et bouton
│   ├── AIConnect.ts      # Fichier de gestion des appels API Gemini
│   └── App.tsx           # Composant principal du projet
├── public
│   └── index.html        # Fichier HTML principal
├── package.json          # Dépendances et scripts npm
└── tailwind.config.js    # Configuration TailwindCSS
```

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

Node.js (v14 ou supérieur)
npm (v6 ou supérieur) ou yarn (si vous préférez utiliser Yarn)
Vite pour le démarrage rapide du projet avec React
API Token Gemini pour accéder à l'API d'intelligence artificielle

## Installation et configuration

1. Clonez le dépôt sur votre machine locale :

```
git clone https://github.com/MaxYvesMastrodicasa/ChatBot_Gemini.git

cd .\ChatBot_Gemini
```

2. Installez les dépendances du projet :

```
npm install
```

3. Configurez l'API Gemini :

Créer un fichier cle.ts, ajoutez votre Token API Gemini.

Le fichier cle.ts devrait ressembler à ceci :

```
const GOOGLE_API_KEY = "Votre_Cle-API";

export default GOOGLE_API_KEY;
```

4. Démarrez le serveur de développement avec Vite :

```
npm run dev
```

Vous pouvez maintenant accéder à votre application en ouvrant http://localhost:5173 dans votre navigateur.

## Utilisation

1. **Envoyez un message :** En bas de l'écran, vous trouverez un champ d'input où vous pouvez entrer un message. En cliquant sur le bouton "Envoyer", votre message sera envoyé à l'API Gemini et vous verrez la réponse de Jarvis apparaître dans la conversation.

2. **Suivi du fil de la conversation :** Les messages échangés entre vous et Jarvis sont conservés et affichés dans l'interface. Chaque message est clairement identifié par l'expéditeur ("Vous" pour l'utilisateur, "Jarvis" pour le bot).

3. **Scroll automatique :** À chaque nouvelle réponse, la zone de chat défile automatiquement vers le bas pour vous montrer les derniers messages sans avoir à faire défiler manuellement.

4. **Boutons de suppression et de modification de message pour l'utilisateur:** Cliquez sur l'icône :
- D'édition afin de réafficher votre message dans la barre d'input afin de le modifier et de le renvoyer, le message de Jarvis sera modifier également pour répondre à votre nouveau message. 
- De suppression afin de supprimer votre message, le message de réponse qu'avait renvoyer Jarvis sera disparaîtra également.

5. **Bouton de nouveau message pour Jarvis:** Cliquez sur l'icône de reload afin de pouvoir obtenir un nouveau message de la part de Jarvis si la réponse précédente ne vous plaît pas.

## Déploiement

Le projet peut être déployé facilement sur Vercel ou n'importe quelle autre plateforme de déploiement compatible avec React. Si vous utilisez Vercel, suivez ces étapes :

1. Liez votre dépôt GitHub à Vercel.
2. Configurez les variables d'environnement pour inclure votre token API Gemini dans l'interface de Vercel.
3. Lancez le déploiement. Une fois terminé, vous pourrez accéder à votre chatbot en ligne.

## Dépendances principales

- React : Framework JavaScript pour la création d'interfaces utilisateur.
- TypeScript : Superset de JavaScript qui permet de typer les variables et de bénéficier d'une meilleure sécurité du code.
- TailwindCSS : Framework de CSS utilitaire pour concevoir rapidement des interfaces réactives.
- Vite : Un bundler léger et rapide pour les projets frontend.

## Améliorations futures

- Amélioration de la gestion du contexte : Ajouter un mécanisme plus sophistiqué pour conserver le contexte de la conversation sur plusieurs sessions.
- Personnalisation de Jarvis : Permettre à l'utilisateur de configurer des paramètres spécifiques pour Jarvis, tels que le ton des réponses ou la longueur des réponses.

## Auteurs

Max-Yves Mastrodicasa et Maxime Stajszczyk - Développeurs principaux
