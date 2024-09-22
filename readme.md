# Project
Creation of a carousel with random image management

## Getting Started
Download the Git repository to initialize the project.

## Prerequisites
Composer
Node.js
## Installation
### Backend
Create a database and modify the .env file to point to the database.
```
DATABASE_URL=mysql://root@127.0.0.1:3306/database_name
```
Run the command `composer install` to install Symfony and its dependencies.
Then, run the command symfony console `doctrine:migration:migrate` to create the database.

### Frontend
Run the command `npm install` to install the necessary modules.

## Starting the Application
### Backend
Run the command `symfony serve` to launch Symfony.
Access the backend of the application locally at: http://127.0.0.1:8000

### Frontend
Run the command `npm run serve` to launch Vue.js.
Access the frontend of the application locally at: http://127.0.0.1:8080

## Technologies Used
Symfony version 5
Vue.js version 3
