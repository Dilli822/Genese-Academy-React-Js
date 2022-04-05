
import React,  {useState}  from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {Button} from "@material-ui/core";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Read the articles from medium.com  ----> Highly recommended !!!
// donot forget to installt he firebase package with npm

export default function FireBaseForm(){

    // here passsing name key to setState(setUserProfile)
    const [userProfile,setUserProfile] = useState({name: "", address:"", email:"", phone: "", text: ""})


    // let's make a function 
    // function handleChange(event){
    //     console.log(event.target.value)
    //     setUserProfile({
    //         [event.target.id]: event.target.value
    //     })
    // }

    // handle Function for multiple name address email and other forms fields
    function handleChange(event) {
        userProfile[event.target.id] = event.target.value;
        // here .. is spread operator and it copies the arrays
        setUserProfile({...userProfile, userProfile});
        console.log(userProfile);
        
    }


    // storing the user types dynamic value with firebase db name here
    const handleSaveData = () =>{
        const firestore = firebase.firestore();

        firestore.collection("user-details").add({
            name: userProfile.name,
            address: userProfile.address,
            email: userProfile.email,
            phone: userProfile.phone,
            text: userProfile.text
        }).then(function(response){
            alert("Form Submitted Successfully!");
            window.location.reload();
            
        }).catch(function(error){
            alert("Error!Something Went Wrong!");
        })
    }

    return (
        <div>
            <h4> This is Form to Collect User Information. This form is handled by firebase(as backend). </h4>
            <br />
            <Grid container spacing={2}>
                <Grid item xs="12" sm="4"  md="6">
                    <TextField 
                    id="name"
                    label="Enter Name"
                    variant = "outlined"
                    color = "secondary"
                    value={userProfile.name}
                    placeholder="Enter Valid  Name"
                    helperText="Please Enter Full Name"
                    error={false}
                    disabled={false}
                    onChange={handleChange}
                    fullWidth={true}
                />
            </Grid>

                <Grid item xs="12" sm="4" md="6">
                    <TextField 
                    id="phone"
                    label="Enter Number"
                    variant = "outlined"
                    color = "secondary"
                    value={userProfile.phone}
                    placeholder="Enter Valid Phone Number"
                    helperText="Please Enter Phone Number"
                    error={false}
                    disabled={false}
                    onChange={handleChange}
                    fullWidth={true}
                />
            </Grid>
            
            <Grid item xs="12" sm="4"  md="6">
                <TextField 
                    id="address"
                    label="Enter address"
                    variant = "outlined"
                    color = "secondary"
                    value={userProfile.address}
                    placeholder="Enter Valid Address"
                    helperText="Please Enter Address"
                    error={false}
                    disabled={false}
                    onChange={handleChange}
                    fullWidth={true}
                />
            </Grid>
        
        <Grid item xs="12" sm="4"  md="6">
                <TextField 
                    id="email"
                    label="Enter Email"
                    variant = "outlined"
                    color = "secondary"
                    value={userProfile.email}
                    placeholder="Enter Valid Email"
                    helperText="Please Enter  Email"
                    error={false}
                    disabled={false}
                    onChange={handleChange}
                    fullWidth={true}
                />

            </Grid>
                    
            <Grid item xs="12" sm="12">
                <TextField 
                    id="text"
                    label="Leave a Message"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    value={userProfile.text}
                    onChange={handleChange}
                    placeholder= "Type your message"
                    fullWidth={true}
                    color = "secondary"
                    variant = "outlined"
                />
                </Grid>


            </Grid>


            <Button onClick={handleSaveData}  variant="contained" color="secondary"> Submit </Button> &nbsp;&nbsp;
            <Button onClick={handleChange}  variant="contained" color="primary"> Check Data on Console! </Button>
            
        </div>
    )
}