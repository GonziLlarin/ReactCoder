import { initializeApp } from "firebase/app";
import { getFirestore } from  'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCakRJ-uaFhx2Qd_CDJGu0Fkp5mwCNBtNA",
    authDomain: "coderreact-88b6d.firebaseapp.com",
    projectId: "coderreact-88b6d",
    storageBucket: "coderreact-88b6d.appspot.com",
    messagingSenderId: "422225311457",
    appId: "1:422225311457:web:391b8b8e491ed36df829a0"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)