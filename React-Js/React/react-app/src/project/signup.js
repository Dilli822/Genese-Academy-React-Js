
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// this function will allow the users whose account are created to login with email and password credentials
export default async function signup(email, password){
    return await firebase.auth().createUserWithEmailAndPassword(email, password);
}
