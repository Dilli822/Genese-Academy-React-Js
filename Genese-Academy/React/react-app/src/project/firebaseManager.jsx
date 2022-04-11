
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// making function async and await to catch the promises on other side of login component 

export  default async function loginWithSocialAccount(accountType){

    if(accountType == 'google'){
        // For Google Auth Provider --> google for facebook auth provider ---> facebook

        let provider = new firebase.auth.GoogleAuthProvider();
        return await firebase.auth().signInWithPopup(provider);
    }
}

// this function will allow users to make new account via email and password
export function signup(email, password){
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}

// this function will allow the users whose account are created to login with email and password credentials
export function signin(email, password){
    return firebase.auth().signInWithEmailAndPassword(email, password);
}