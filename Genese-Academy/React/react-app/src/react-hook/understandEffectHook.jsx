
import React, {useState, useEffect} from "react";


export default function UnderstandEffectHook(){

    // here at frist our count is zero and effect hook is only called once when page is reloaded/loaded
    // but with stateHook we set the button and onClicking the button we can call the effect hook as many times as we click the button

    const [count, setCount] = useState(0);


    const [isCalled, setIsCalled] = useState(false);
    const [isCalledAgain, setIsCalledAgain] = useState(false);

    useEffect(()=>{
        console.log("React Use Effect Hook is Called!")
    }, [isCalled, isCalledAgain]);


    return(
        <div>
            <h3> Understand Effect Hook in React. </h3>
            <p> Effect gets called when DOM Changes or manipulated . It also gets called when react 
                state changes or get changed.
            </p>

            <p> Button Counter :  // here at frist our count is zero and effect hook is only called once when page is reloaded/loaded
    // but with stateHook we set the button and onClicking the button we can call the effect hook as many times as we click the button</p>
            <button onClick={()=> setCount(count+1)}> Counter </button> <br />
            Times Clicked: {count}

            <br /> <h4> Now Another State with isCalled State Name: </h4>
            <p>After clicking the below button the effect hook will no more be called agein 
                because the effect hook state is set to be false and useEffect dependices as isCalled 
                is kept inside the useEffect() FUNCTION.
            </p>
            <br />
            <button onClick={()=>setIsCalled(true)}> Call Effect Hook </button>  <br />

            <h6> Another Button with new effect hook setting. </h6>
            <button onClick={()=>setIsCalledAgain(true)}> Call Effect Hook Again</button>  <br />

            <br />
            <h5> Clicking on those button ans setting the state hook shows an example how to call the effect hook state once only.
                 Greatly  used for api call and DOM Manipulation. </h5>
        </div>
    )
}