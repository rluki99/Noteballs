# Noteballs App

Note Balls is a full-stack note-taking application built with Vue 3, utilizing the Composition API for the frontend and Firebase 10 for the backend. The app allows users to create, edit, and delete notes while providing real-time synchronization across devices.

<img src="https://github.com/rluki99/Noteballs/assets/120097849/a0e736b8-e793-4240-9c43-636ac272b84c" width="700px" alt="obraz">

<img src="https://github.com/rluki99/Noteballs/assets/120097849/90a9e442-5802-4a6c-b566-dcefdcc5825d" width="300px" alt="obraz">


## Credentials for Demo

For demo purposes, you can use the following credentials to log in:
#### **LIVE:** https://noteballs-omega.vercel.app/#/

- **Username:** lukas@test.com
- **Password:** test123

- **Username:** steve@test.com
- **Password:** test123

## Features

- **Note Management:** Display a list of notes with character count, edit, and delete options and statistics.
- **Add and Edit Notes:** Users can add new notes and edit existing ones, saving changes seamlessly.
- **Responsive Design:** Utilizes the Bulma CSS library for a presentable and responsive user interface, adapting to both desktop and mobile devices.

## Frontend Implementation (Vue 3 Composition API, Vue Router, Pinia, Bulma CSS, Javascript)

The frontend of the app is built with Vue 3 and employs various concepts covered in the course, including:

- **Composition API:** Leveraging reactive data, methods, computed properties, and watches.
- **Vue Router:** Implementing view routes to navigate between pages.
- **Bulma CSS:** Styling the app for a visually appealing and responsive layout.
- **State Management with Pinia:** Setting up Pinia store from scratch for efficient state management.
- **Lifecycle Hooks and Directives:** Integrating these Vue features for enhanced functionality.

## Backend Integration (Firebase 10)

The backend integration is focused on turning the app into a full-stack application using Firebase 10. Key features include:

- **Firebase Cloud Firestore:** A real-time NoSQL database for storing and syncing app data across devices.
- **Authentication:** Enabling user registration and login functionality, with unique data sets for each user.
- **Real-Time Data Sync:** Ensuring instant updates and changes in the app across multiple devices.
- **Firebase Rules:** Implementing security measures to restrict user access and edits to their own data.


## Additional Features

- **Loading Indicator:** A progress bar appears while notes are loading.
- **Navigation Guards:** Implemented to restrict access to certain pages based on user authentication status.

