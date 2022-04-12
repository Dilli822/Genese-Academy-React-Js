
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// this function will allow users to make new account via email and password
export default async function signin(email, password){
    return await firebase.auth().signInWithEmailAndPassword(email, password);
}
