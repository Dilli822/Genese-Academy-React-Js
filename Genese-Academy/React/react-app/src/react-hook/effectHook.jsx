
// effect hooks acts as alternatives of
// ComponentDidMount lifecylce methods 

import React, {useState, useEffect} from 'react';

export default function EffectHookExample() {


    // stateReact

    const [count, setCount] = useState(0);
    // calling the react effect hook mannually
    // add IsCalled as dependices in useEffect Hook Function
    const [IsCalled, setIsCalled] = useState(false);
    const [IsCalledAgain, setIsCalledAgain] = useState(false);

    // Here we pass different parameters to control the useEffect function like IsCalled, IsCalledAgain
    useEffect(()=> {
        console.log("This is react useEffect function! It will be called everytime page is reloaded or refreshed!")
    }, [IsCalled, IsCalledAgain])

    return(
        <div>
            <h2> This is React Effect Hook Example! </h2>

            <p> CLic here to see the task of useEFFECT HOOK</p>
            {/* USEEFFECT HOOKS IS CALLED WHEN OUR DOM , PAGE, STATE GETS CHANGED OR RELAODED
            IF STATE OR RETURN () IS CHANGE OR VALUE CHANGED THEN USEEFFECT HOOK WILL BE CALLED
            */}
            
            <p> Check your console. </p>
            <p>No.of times useEffect Hook Being Called: {count}</p>
            <button onClick={()=>setCount(count+1)}>
                click to call the useEffect Hook
            </button>
            {/* This must be shown 5effectHook.jsx:15 This is react useEffect function! It will be called everytime page is reloaded or refreshed!
             */}
             <br />
            <span style = {{ color: "red"}}> This is Button CALLING TE REACT EFFECT HOOK .THIS SHOWS THAT WE CAN CONTROL THE EFFECT HOOK IN REACT AS PER OUR REQUIREMENTS.</span>
            <br />
            <button onClick={()=>setIsCalled(true)}> Click to Call the Effect Hook Once!</button>

            <br /> <br />
            {/* another button to call the react hook again again */}
            <span> Click to call the effect hook again and again! </span>
            <button onClick={()=>setIsCalledAgain(true)}>Calling React Effect Hook Again </button>
        </div> 
    )
}

// useEffect hook is used for
// DOM manipulation and api Calling
// didComponent receiving props...
