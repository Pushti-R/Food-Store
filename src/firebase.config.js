import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBXsdng5pYnG7R_7uyyPpwFAEg3vX6xXpI",
    authDomain: "restaurant-ad803.firebaseapp.com",
    databaseURL: "https://restaurant-ad803-default-rtdb.firebaseio.com",
    projectId: "restaurant-ad803",
    storageBucket: "restaurant-ad803.appspot.com",
    messagingSenderId: "176710564161",
    appId: "1:176710564161:web:c4f9a76f004db972a5c9c0"
  };


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};
  