# Projet

Création d'un carroussel avec gestion aléatoire des images

## Pour commencer

Télécharger le dépôt Git pour initialiser le projet

### Pré-requis

- Composer
- Node.js

### Installation

#### Backend
Créer une base de données et modifier le fichier .env pour qu'il pointe vers la base de données.
```bash
DATABASE_URL=mysql://root@127.0.0.1:3306/nom_de_la_base_de_donnees
```
Lancer la commande ``composer install`` pour installer Symfony et les dépendances.
Ensuite, lancer la commande ``symfony console doctrine:migration:migrate`` pour créer la base de données.

#### Frontend
Lancer la commande ``npm install`` pour installer les modules.

## Démarrage

#### Backend
Lancer la commande ``symfony serve`` pour lancer Symfony.
Accès à la partie backend de l'application en local : http://127.0.0.1:8000

#### Frontend
Lancer la commande ``npm run serve`` pour lancer Vue.js.
Accès à la partie frontend de l'application en local : http://127.0.0.1:8080

### Technologies utilisées

Symfony version 5
Vue.js version 3

### Aides à la réalisation du projet

[Carroussel](https://www.youtube.com/watch?v=YAhCVgKcis4)

Et les documentations des technologies utilisées.