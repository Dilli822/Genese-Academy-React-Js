
import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export default async function getCurrentUser (){
    return await firebase.auth().onAuthStateChanged((user)=>{
        console.log("This is the details of current user who has loggged into chat app -->", user);
        console.log("I have extracted the data from user object--->", user.uid);
        console.log("I have extracted the user email from user object--->", user.email);

    })

}
