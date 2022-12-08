import React, {useState} from 'react';
import MySecondHook from './secondHook';
//let's use local image 
import localBlackAndWhiteImage from '../images/on&offLightBulb.png';

// use history for dynamic routing 
import {useHistory} from "react-router-dom";

function MyFirstHook(){

    // Below are state hooks examples
    // here we made counter as state and setState is setCounter 
    // useState method will check the changes of state and render it on our component
    const [counter, setCounter] = useState(0);


    // setting the default image url with imageUrl 
    const [imageUrl, setImageUrl ] = useState('https://github.com/romeojeremiah/javascript-light-switch-project/blob/master/lightoff.png?raw=true')

    // turn off the light bulb by clicking on it
    const [isLightOn, setIsLightOn] = useState(false);


    // making function for lightOn useState
    function handleLight () {
        if(isLightOn){
            // light is on so make it off
            setImageUrl('https://github.com/romeojeremiah/javascript-light-switch-project/blob/master/lightoff.png?raw=true')
        }
        else{
            // light is off so make it on
            setImageUrl('https://github.com/romeojeremiah/javascript-light-switch-project/blob/master/lighton.png?raw=true')
           
        }
        setIsLightOn(!isLightOn)
    }

    // declaring the useHistory
    let history = useHistory();

    return (
        <div> 

            {/* <!---- Button increment example -------> */}
            <h2> This is my First React Hook </h2> <br />

            <h3>Button Increment Example with React Hook useState</h3>
            <p> Counter value is: <span style = {{color: "red", fontSize: 28}}> {counter} </span> </p> <br />
            <button onClick={()=>setCounter(counter+1)}> Increase</button>


            {/* Bulb on and off example  */}

            <div>
                
                <img src={imageUrl}
                //  onClick={()=> setImageUrl('https://github.com/romeojeremiah/javascript-light-switch-project/blob/master/lighton.png?raw=true')} alt="light-bulb-off"
                onClick={()=> handleLight()}
                 
                 /> <br />
                 <span> Click over the image to on and off the bulb light! </span>
                 <br />
                <button onClick = {()=> setImageUrl('https://github.com/romeojeremiah/javascript-light-switch-project/blob/master/lighton.png?raw=true')} alt="">
                    Turn On the bulb 
                </button> &nbsp;&nbsp;

                <button onClick = {()=> setImageUrl('https://github.com/romeojeremiah/javascript-light-switch-project/blob/master/lightoff.png?raw=true')} alt="">
                    Turn Off the bulb 
                </button>

                {/* Sending the props to another component withReactHook */}
                <MySecondHook 
                imageUrl={imageUrl}
                // passing another props called name
                name = "This is props name!Hello World from firstHook! "
                // passsing localImage as props to secondHook Component
                localImage = {localBlackAndWhiteImage }
                />

            </div>


            {/* Changing the route in react hook with useHistory which is dynamic routin */}
            {/* if you click on this button it will take you to the localhost/inc path  */}
            <button onClick={()=>history.push('inc')}>
                Change Route with history push
            </button>
            
            <br />

            <button onClick={()=> history.push('/thirdHook/t/edit')}>
                Change THird Hook Route
            </button>
        </div>
    )
}

export default MyFirstHook;