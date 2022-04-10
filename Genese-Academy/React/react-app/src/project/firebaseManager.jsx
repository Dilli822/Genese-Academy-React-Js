
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default function loginWithSocialAccount(accountType){

    if(accountType == 'google'){
        // For Google Auth Provider
        let provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider);
    }
}
