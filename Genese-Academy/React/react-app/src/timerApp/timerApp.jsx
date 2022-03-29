
import React, {useState, useEffect} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import Grid from '@material-ui/core/Grid/Grid';
import Card from "@material-ui/core/Card/Card";
import CustomDialog from "./customDialog";

export default function TimerApp() {

    const [time,setTime]=useState();
    const [timer,setTimer]=useState();
    const  [isAlert,setIsAletr]=useState(false);
    const [secondCount, setSecondCount] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);


    // this will capture the input data time provided by user
    function handleChange(event) {
        setTime(event.target.value)
    }

    function runTimer() {
        let secondCount = 0;
        setTimer(setInterval(function () {
             if(secondCount==time*60){
                 setIsAletr(!isAlert);
                 setTime(0);
                //  alert('Your time is up! Timer stopped at  ' + timer/60 + ' sec');
                 setSecondCount(0)
                 setOpenDialog(true)
 
             }else{
                 setSecondCount(secondCount++);
             }
         },1000));
 
     }
     useEffect(()=>{
         clearInterval(timer);
     },[isAlert]);

     function onCloseDialog(){
         setOpenDialog(false)
     }
 
    return (
        <div style={{maxWidth: 600, margin: 'auto'}}>
            <h2> Timer App </h2>
            <Grid container spacing={2}>
                <Grid item xs="12" sm="18">
            <TextField 
               id="time"
               value={time}
               onChange={handleChange}
               label = "Please set your time only in minutes"
               helperText = "Set timer in the basis of your requirement only in minutes "
               fullWidth = {true}
               type="number"
               variant = "filled"
               />
            </Grid>

                <Grid item xs="6" sm="6">
                {/* Button clickt to run the Timer */}
               <button onClick={runTimer} style={{width: "100%"}}> Run/Start Timer</button>
               </Grid>
            </Grid>

            <div>
                <Card>
                    <h1 style={{textAlign: 'center'}}> {secondCount} </h1>
                </Card>
            </div>

            {/* sending openDialog to customDialog */}
            <CustomDialog openDialog = {openDialog} onCloseDialog={onCloseDialog}
            // let's send dialog content
            DialogContent={
                <div>
                    <span style={{color: "purple" }} > This is dialogContent frm timerAPP main component. </span>
                    </div> }
            />

        </div>
    )
}