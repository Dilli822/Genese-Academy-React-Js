
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
import ListItemText from '@mui/material/ListItemText';
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
import { useHistory } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";


export default function UserProfileList(){

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [selectedDoc, setSelectedDoc] = useState();
    const [isDeleting, setIsDeleting] = useState(false);



    // declaring useHistory
    let history = useHistory();


    // object for firebase
    const getUserListFromFireBase = async () => {

        // this variable will extract the data from firebase collection
        const firestore = firebase.firestore();
        const snapshot = await firestore.collection("user-details").get();
        console.log(snapshot.docs.map(doc => doc)[0].data());

        // .data() method converts the binary form of snapshot data of firevase to readbale arrays format(json)
        // return snapshot.docs.map(doc => doc.data());
        return snapshot.docs.map(doc => doc);
    }

    useEffect(() => {
      userDetailsData();
        // keeping the dependices true so that it will be only called once
    }, [true]);


    const userDetailsData = () => {
        // constant variable getUserListFromFireBase comes here and then we can
        // log the data into console check the console !
        getUserListFromFireBase().then(function (data){
          // setting data into state of  setState 
          setData(data);
          setLoading(false);
          console.log(data);
      });
    };


    // Handle Delete
    const onDeleteItem = () => {

      // setting isDeleting true here
      setIsDeleting(true);

      const firestore = firebase.firestore();

      firestore.collection("user-details").doc("/"+selectedDoc).delete().then(function(){
        alert("You have performed Delete Action. ");
        console.log("Document Delete Successfully");
        // calling the userDetailsData here too so that useEffect will know there is change in state/item is deleted!
        userDetailsData();
        setIsDeleting(false);
        // window.location.reload();
      }).catch(function(error){
        console.error("Eror retierieving or deleting the document ", error);
        setIsDeleting(false);
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
        <div style={{ maxWidth: '1440px', display: 'block', margin: '0 auto'}}>

            <h2 style={{  }}> This is User Profile's List! </h2>

            <div style={{textAlign: 'right' }}>
            <Button variant="contained" color="secondary" onClick={()=>history.push('/fireBase/add')} aria-labelledby = "Click here to go firebase Form " > Add More Data/User Details </Button>
            </div>

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

                        <br />

                        {/* adding the item id with history push + edit button user-list
                         for eg:  http://localhost:3000/user-list0nHcFnt0uuFv074qXyI0 */}
                        <Button variant="contained" color="primary" onClick={()=> history.push('/fireBase/' + item.id)}> 
                        Edit
                        </Button>
                        
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

          {/* setting the disabled isDeleting false here it willbe true only once onDeleteItem function is called */}
          <Button onClick={handleClose} color="primary" disabled={isDeleting}>No</Button>
          <Button onClick={onDeleteItem} color="primary" autoFocus disabled={isDeleting}>
            Yes
          </Button>
          {isDeleting ? <CircularProgress />: " " }
        </DialogActions>
      </Dialog>
        </div>

        </div>
    )
}