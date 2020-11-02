import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDQM1UEOPeqi4yQjbf0eKQmZnst1_Yh1F0",
    authDomain: "e-commerce-f9b3d.firebaseapp.com",
    databaseURL: "https://e-commerce-f9b3d.firebaseio.com",
    projectId: "e-commerce-f9b3d",
    storageBucket: "e-commerce-f9b3d.appspot.com",
    messagingSenderId: "704900237744",
    appId: "1:704900237744:web:6357152237cb9e28122e75",
    measurementId: "G-TXVN33WC0L"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData)=>{
   if(!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
 
    if(!snapShot.exists){
        const {displayName , email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
  };
    


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

  export default firebase;