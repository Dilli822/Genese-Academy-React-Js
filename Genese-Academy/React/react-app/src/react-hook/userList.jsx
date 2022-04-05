

// folow firebase offical docs 
import React,  {useState, useEffect}  from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {Button} from "@material-ui/core";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {CircularProgress} from "@material-ui/core";
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Button from "@material-ui/core/Button/Button";


export default function UserProfileList(){


    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);



    // object for firebase
    const getUserListFromFireBase = async () => {

        // this variable will extract the data from firebase collection
        const firestore = firebase.firestore();
        const snapshot = await firestore.collection('user-details').get();
        console.log(snapshot);

        // .data() method converts the binary form of snapshot data of firevase to readbale arrays format(json)
        return snapshot.docs.map(doc => doc.data());
    }

    useEffect(() => {
        // constant variable getUserListFromFireBase comes here and then we can
        // log the data into console check the console !
        getUserListFromFireBase().then(function (data){
            // setting data into state of  setState 
            setData(data);
            setLoading(false);
            console.log(data);
        });
        // keeping the dependices true so that it will be only called once
    }, [true]);


    return (
        <div>
            <h4> This is User Profile's List! </h4>

        <div>
            { loading ? <div> <CircularProgress /> Loading.... </div> : 
            <List>
                {data.map((item)=>
                <ListItem>
                    <ListItemText primary={item.name} secondary={
                                   <React.Fragment>
                                   <Typography
                                     sx={{ display: 'inline' }}
                                     component="span"
                                     variant="body2"
                                     color="text.primary"
                                   >
                                       {item.email}
                                   </Typography>

                                   <br />
                                   Address: &nbsp;
                                   {item.address}

                                   <br />
                                   Phone Number: &nbsp;
                                   {item.phone}

                                   <br /> Text: &nbsp;
                                   {item.text}

                                 </React.Fragment>
                    }
                    />

                    {/* Icon for deleting */}
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>

                </ListItem>
                
                )} 
            </List>
               }
        </div>

        </div>
    )
}