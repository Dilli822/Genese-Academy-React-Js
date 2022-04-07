
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
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function UserProfileList(){


    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [selectedDoc, setSelectedDoc] = useState();
 



    // object for firebase
    const getUserListFromFireBase = async () => {

        // this variable will extract the data from firebase collection
        const firestore = firebase.firestore();
        const snapshot = await firestore.collection('user-details').get();
        console.log(snapshot.docs.map(doc => doc)[0].data());

        // .data() method converts the binary form of snapshot data of firevase to readbale arrays format(json)
        // return snapshot.docs.map(doc => doc.data());
        return snapshot.docs.map(doc => doc);
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


    // Handle Delete
    const onDeleteItem = () => {
      const firestore = firebase.firestore();
      firestore.collection("user-details").doc("/"+selectedDoc).delete().then(function(){
        alert("You have performed Delete Action. ");
        console.log("Document Delete Successfully");
        // window.location.reload();
      }).catch(function(error){
        console.error("Eror retierieving or deleting the document ", error);
      })
      setOpen(false);
      
    }

    const handleClose =()=> {
        setOpen(false)
    }

    const onSelectedDocForDelete =(id)=> {
        console.log(id)
        setSelectedDoc(id);
        setOpen(true);
    }


    return (
        <div>
            <h4> This is User Profile's List! </h4>

        <div>
            { loading ? <div> <CircularProgress /> Loading.... </div> : 
            <List>
                {data.map((item)=>
                <ListItem>
                    <ListItemText primary={item.data().name} secondary={
                                   <React.Fragment>
                                   <Typography
                                     sx={{ display: 'inline' }}
                                     component="span"
                                     variant="body2"
                                     color="text.primary"
                                   >
                                       {item.data().email}
                                   </Typography>

                                   <br />
                                   Address: &nbsp;
                                   {item.address}

                                   <br />
                                   Phone Number: &nbsp;
                                   {item.data().phone}

                                   <br /> Text: &nbsp;
                                   {item.data().text}

                                 </React.Fragment>
                    }
                    />

                    {/* Icon for deleting */}
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <DeleteOutlinedIcon onClick={()=> onSelectedDocForDelete(item.id)} />
                        </IconButton>
                    </ListItemSecondaryAction>

                </ListItem>
                
                )} 
            </List>
               }

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you really want to Delete?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Alert! You cannot undo this action!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={onDeleteItem} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
        </div>

        </div>
    )
}