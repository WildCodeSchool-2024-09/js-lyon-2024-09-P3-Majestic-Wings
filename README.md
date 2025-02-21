# Majestic-Wings

Majestic-Wings est un projet de groupe composé de 4 personnes Nadir Haddouche, Fouzy Chikouche, Daniel Stacoffe et Théophile Simoës Das Neves. 

Le but de ce projet est de proposer un site web de location de jet privé à destination d'une clientèle selecte. 

Plusieurs features sont proposées : 

- La possibilité de voir les différents jet de la flotte Majestic-Wings
- Les différentes prestations proposées dans chaque cabine
- Une map interactive affichant les aéroports de départs disponible
- Créer un compte
- Une fois le compte créé pouvoir s'identifier avec une adresse mail et un mot de passe
- Et enfin pouvoir réserver un avion

D'autres features, encore à definir, seront à implémenter par la suite afin de faire évoluer le projet.

## Installation & Utilisation

1. Installez le plugin **Biome** dans VSCode et configurez-le.
2. Clonez ce dépôt, puis accédez au répertoire cloné.
3. Créez des fichiers d'environnement (`.env`) dans les répertoires `server` et `client` : vous pouvez copier les fichiers `.env.sample` comme modèles (**ne les supprimez pas**).

### Mettre en place la base de données

**Créer et remplir le fichier `.env`** dans le dossier `server` :

```plaintext
DB_HOST=localhost
DB_PORT=3306
DB_USER=not_root
DB_PASSWORD=password
DB_NAME=my_database
```

## Les choses à retenir 

### Commandes de Base

Après avoir clone le repo en local, créé et remplis les fichiers .env côté server et client, suivez les instructions ci-dessous dans l'ordre : 

| Commande               | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `npm install`          | Installe les dépendances pour le client et le serveur                       |
| `npm run db:migrate`   | Met à jour la base de données à partir d'un schéma défini                   |
| `npm run dev`          | Démarre les deux serveurs (client et serveur) dans un seul terminal         |
| `npm run check`        | Exécute les outils de validation (linting et formatage)                     |
| `npm run test`         | Exécute les tests unitaires et d'intégration                                |

### Contribution

Nous accueillons avec plaisir les contributions ! Veuillez suivre ces étapes pour contribuer :

1. **Fork** le dépôt.
2. **Clone** votre fork sur votre machine locale.
3. Créez une nouvelle branche pour votre fonctionnalité ou bug fix (`git switch -c feature/your-feature-name`).
4. **Commit** vos modifications (`git commit -m 'Add some feature'`).
5. **Push** vers votre branche (`git push origin feature/your-feature-name`).
6. Créez une **Pull Request** sur le dépôt principal.

**Guide de Contribution** :

- Assurez-vous que votre code respecte les standards de codage en exécutant `npm run check` avant de pousser vos modifications.
- Ajoutez des tests pour toute nouvelle fonctionnalité ou correction de bug.
- Documentez clairement vos modifications dans la description de la pull request.
