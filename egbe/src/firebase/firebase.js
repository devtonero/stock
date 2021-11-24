import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const config = {
  apiKey: "AIzaSyDciZ8f0y5addthWr6uMJv1xD6-MPpqnVQ",
  authDomain: "cloth-db-dfed1.firebaseapp.com",
  projectId: "cloth-db-dfed1",
  storageBucket: "cloth-db-dfed1.appspot.com",
  messagingSenderId: "100540848815",
  appId: "1:100540848815:web:8bc8e7317309827ce0d25a"
};
 
firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    
    try{
      await userRef.set({
       displayName, 
       email,
       createdAt,
       ...additionalData})
     }catch (error) {
       console.log('error creating user',error.message);
     }
    }
    return userRef;
  };

  export const addCollectionsAndDocument = async (collectionKey, ObjectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    ObjectToAdd.forEach(obj=> {
      const newRef = collectionRef.doc();
      batch.set(newRef, obj);
    })
    return await batch.commit()

  };

  export const convertCollectionsSnapshot = collections => {
    const transformedCollection = collections.docs.map(doc =>
      {const {title, items} = doc.data();
      
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    
    });
    return transformedCollection.reduce( (accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {}
    );
  };

export const getUsersession = () => {
  return new Promise(
    (resolve, reject) =>{
      const unsubscribe = auth.onAuthStateChanged(userAuth=>{
        unsubscribe();
        resolve(userAuth);
      }, reject)
    }
  )
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleprovider = new firebase.auth.GoogleAuthProvider();
googleprovider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleprovider);

export default firebase;