
import React,  {useState, useEffect}  from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {Button} from "@material-ui/core";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



export default function UserProfileList(){

    // object for firebase
    const getUserListFromFireBase = async () => {

        // this variable will extract the data from firebase collection
        const snapshot = await firebase.firestore().collection().get();
        console.log(snapshot);

        // .data() method converts the binary form of snapshot data of firevase to readbale arrays format(json)
        return snapshot.docs.map(doc => doc.data());
    }

    useEffect =(() => {

        // constant variable getUserListFromFireBase comes here and then we can
        // log the data into console check the console !
        getUserListFromFireBase().then(function (data){
            console.log(data);
        });
        // keeping the dependices true so that it will be only called once
    }, [true])


    return (
        <div>
            <h4> This is User List! </h4>
        </div>
    )
}