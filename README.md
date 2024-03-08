# React + TypeScript + Vite

# Project Name: d-movies

#### Build:

![Static Badge](https://img.shields.io/badge/npm-v10.2.3-red?logo=npm&style=for-the-badge)
![Static Badge](https://img.shields.io/badge/nodejs-v20.10.0-%23339933?logo=nodedotjs&style=for-the-badge)
![Static Badge](https://img.shields.io/badge/react-v18.2.8-%23f44336?logo=react&style=for-the-badge)

## Getting Started

These are the steps to install and run the project locally.

### Installation

1. Git clone SSH `git clone git@github.com:d4n7el/d-movies.git` OR HTTP ` git clone https://github.com/d4n7el/d-movies.git`
2. Go to the main project folder.
3. Install dependencies `npm i` OR `yarn install`.
4. Create .env files `touch .env && touch .env.dev`.
5. Copy and paste the content of env.template into the created files.
6. Start the local server `npm run dev` OR `yarn run dev`

## Configure environments

- All variables that were created in the .env files must have a value assigned

### Environment Variables Description

This repository utilizes a set of environment variables to configure and access external services. Below are the details of the required environment variables:

- VITE_APP_API_KEY_FIREBASE: This environment variable contains the API key required for authentication and access to Firebase.

- VITE_APP_AUTH_DOMAIN: Defines the authentication domain used by the application.

- VITE_APP_PROJECT_ID: Is the unique identifier of the project in Firebase.

- VITE_APP_STORAGE_BUCKET: Specifies the Firebase storage bucket where files and data can be stored.

- VITE_APP_MESSAGING_SENDER_ID: Sender ID for Firebase Cloud Messaging.

- VITE_APP_ID: Firebase application identifier.

- VITE_APP_BASE_URL_MOVIE_BD: Base URL of The Movie Database (TMDb) API, used to make requests to its movie database.

- VITE_APP_API_KEY_MOVIE_BD: API key required to authenticate and access The Movie Database (TMDb) API.

- VITE_APP_URL_IMAGES_MOVIE_BD: Base URL for accessing movie images hosted on The Movie Database (TMDb).

# NOTE

## If you are the person in charge of carrying out the tests, these variables will be shared in the main email thread.
