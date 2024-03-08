# React + TypeScript + Vite

# Project Name: d-movies

#### Build:

![Static Badge](https://img.shields.io/badge/npm-v10.2.3-red?logo=npm&style=for-the-badge)
![Static Badge](https://img.shields.io/badge/nodejs-v20.10.0-%23339933?logo=nodedotjs&style=for-the-badge)
![Static Badge](https://img.shields.io/badge/react-v18.2.8-%23f44336?logo=react&style=for-the-badge)

![Static Badge](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-squaret&style=for-the-badge)
![Static Badge](https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss&style=for-the-badge)

#### integrations

![firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)

![tmdb](https://res.cloudinary.com/dboxtzegl/image/upload/f_auto,q_auto/hzwonpdzae4xsy907tmu)

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

## Authentication in the application is obtained through user registration with the username and password method, the authentication methods through Google and Facebook are not developed at the moment.

![Descripción de la imagen](https://res.cloudinary.com/dboxtzegl/image/upload/f_auto,q_auto/kjbv3ayubfrezbn7nekb)

![Descripción de la imagen](https://res.cloudinary.com/dboxtzegl/image/upload/f_auto,q_auto/yrzvjmtqsybiho0sxytt)

![Descripción de la imagen](https://res.cloudinary.com/dboxtzegl/image/upload/f_auto,q_auto/om137v5ffc8c7hxhl8ez)
