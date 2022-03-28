
import React, {useState, useEffect} from 'react';
import TextField from "@material-ui/core/TextField/TextField";

export default function TimerApp() {

    const [time, setTime] = useState();
    const [timer, setTimer] = useState();
    const [IsAlert, setIsAlert] = useState(false);

    // this will capture the input data time provided by user
    function handleChange(event) {
        setTime(event.target.balue)
    }

    // This will run the function after 1sec
    function runTimer() {
        let secondCount = 0;
        setTimer(setInterval(function(){
                if(secondCount==time){
                    alert('Timer ');
                    setIsAlert(!IsAlert);
                    secondCount=0;
                } else {
                    secondCount++;
                }
            }, 1000 ));
    }

    useEffect(()=>{
        clearInterval(timer);
    }, [IsAlert]);

    return (
        <div style={{maxWidth: 600, margin: 'auto'}}>
            <h2> Timer App </h2>

            <div>
            <TextField 
               id="time"
               value={time}
               onChange={handleChange}
               label = "Please set your time"
               helperText = "Set timer in the basis of your requirement"
               fullWidth = {true}
               type="number"
               variant = "filled"
               />
               </div>

                {/* Button clickt to run the Timer */}
               <button onClick={runTimer}> Run Timer</button>

        </div>
    )
}