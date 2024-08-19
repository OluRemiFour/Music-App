import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGiNkRdwIJVMP_Qv1ILDlFgck5n8G2Cbs",
  authDomain: "mrgabproject.firebaseapp.com",
  projectId: "mrgabproject",
  storageBucket: "mrgabproject.appspot.com",
  messagingSenderId: "1089641393551",
  appId: "1:1089641393551:web:36855866c04dfd96d46ffa",
  measurementId: "G-NJSP84PV0X",
};
//Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
