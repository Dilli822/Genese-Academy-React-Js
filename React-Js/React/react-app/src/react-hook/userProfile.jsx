
import React,  {useState}  from "react";
import Grid from '@mui/material/Grid';
import TextField from "@material-ui/core/TextField/TextField";
import Card from "@material-ui/core/Card";


export default function UserProfile(){

    // here passsing name key to setState(setUserProfile)
    const [userProfile,setUserProfile] = useState({name: "", address:"", email:""})


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
    }


    

    return (
        <div>
            <h6> This is UserProfile! </h6>
            <br />
            <Grid container spacing={2}>
                <Grid item xs="6" sm="4">
                    <TextField 
                    id="name"
                    label="Enter Name"
                    variant = "outlined"
                    color = "secondary"
                    value={userProfile.name}
                    placeholder="Enter Valid  Name"
                    helperText="Please Enter Name"
                    error={false}
                    disabled={false}
                    onChange={handleChange}
                    fullWidth={true}
                />
            </Grid>
            
            <Grid item xs="6" sm="4">
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
        
        <Grid item xs="6" sm="4">
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
            </Grid>

            <Card>
                <Grid container spacing={2}>
                    <Grid item xs="12" sm="4">Entered  User's Username is: <span style={{color: "red"}}>{userProfile.name}</span></Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item  xs="12" sm="4">Entered  User's  Address is: <span style={{color: "red"}}>{userProfile.address}</span></Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs="12" sm="4">Entered User's Email is: <span style={{color: "red"}}>{userProfile.email}</span></Grid>
                </Grid>

            </Card>
            
        </div>
    )
}