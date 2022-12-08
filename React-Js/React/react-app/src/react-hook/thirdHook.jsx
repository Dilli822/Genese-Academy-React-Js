import React from "react";

// importing the useHistory and useParams
import {useHistory, useParams} from 'react-router-dom';

export default function MyThirdHook(){

    // useHistory and useParams are methods given by react-router-dom not react itself
    let history = useHistory();
    let params = useParams();
    console.log(history);
    // this will print the history location with pathname da
    console.log(history.location.pathname+'/da');

    return (

        <div>
            <h3> THIS IS REACT THIRD HOOK COMPONENT! </h3>
            <h4> Third Hook params is: <span style={{ color: "red"}}> {params.id} </span> </h4>
        </div>

    )
}