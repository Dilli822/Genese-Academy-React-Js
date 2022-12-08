
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// making function async and await to catch the promises on other side of login component 

export default async function loginWithSocialAccount(accountType){

    if(accountType == 'google'){
        // For Google Auth Provider --> google for facebook auth provider ---> facebook

        let provider = new firebase.auth.GoogleAuthProvider();
        return await firebase.auth().signInWithPopup(provider);
    }
}

