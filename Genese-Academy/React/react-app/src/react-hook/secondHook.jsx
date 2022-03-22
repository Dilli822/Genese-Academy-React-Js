
import React from "react";


// getting the props as parameter from another components 
export default function MySecondHook(props) {
    // checking the received props from reacthook functions
    console.log(props);

    return (
        <div>
            <h5> This is Second Component! which will receieve props! </h5>
            <img src={props.imageUrl} style={{width: "50px" }} />
            <figCaption> This is props Image! </figCaption>
            <p> This is props name --- <span style={{color: "purple" }}> {props.name} </span> </p>
            </div>
    )
}