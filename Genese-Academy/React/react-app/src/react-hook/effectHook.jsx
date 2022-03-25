
// effect hooks acts as alternatives of
// ComponentDidMount lifecylce methods 

import React, {useState, useEffect} from 'react';

export default function EffectHookExample() {


    // stateReact

    const [count, setCount] = useState(0);

    useEffect(()=> {
        console.log("This is react useEffect function! It will be called everytime page is reloaded or refreshed!")
    })

    return(
        <div>
            <h2> This is React Effect Hook Example! </h2>

            <p> CLic here to see the task of useEFFECT HOOK</p>
            {/* USEEFFECT HOOKS IS CALLED WHEN OUR DOM , PAGE, STATE GETS CHANGED OR RELAODED
            IF STATE OR RETURN () IS CHANGE OR VALUE CHANGED THEN USEEFFECT HOOK WILL BE CALLED
            */}
            <button onClick={()=>setCount(count+1)}>
                click to call the useEffect Hook
            </button>
            {/* This must be shown 5effectHook.jsx:15 This is react useEffect function! It will be called everytime page is reloaded or refreshed!
             */}
        </div> 
    )
}