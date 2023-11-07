# NoSQL Databases
__Tech Stack__
* React
* Firebase

React is a web-framework written in JavaScript. 

Firebase is a NoSQL database management system. In this app, it's used to prototype the features of NoSQL databases.

### Run the App
1. Firebase Setup
   1. Sign up for a [Firebase account](https://firebase.google.com/) with the free Spark plan
   2. Create a new project 
   3. Create a web app for the project
   4. Copy the web app's Firebase configuration into `firebaseConfig` in `src/index.js`
     ```
     const firebaseConfig = {
        apiKey: "s3cret",
        authDomain: "s3cret",
        projectId: "s3cret",
        storageBucket: "s3cret",
        messagingSenderId: "s3cret",
        appId: "s3cret"
      };
     ```
   5. Open the Firestore Database dashboard under `Build > Firestore Database` in the left hand panel.
   6. Initialize the Firestore Database, then create a new collection titled `doggos`
2. Install the necessary packages from `package.json`
  ```
  npm install
  ```
1. Run the app
  ```
  npm start
  ```
