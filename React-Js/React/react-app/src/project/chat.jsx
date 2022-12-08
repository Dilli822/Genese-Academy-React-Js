
import React, { useEffect , useState } from "react";
import getCurrentUser from "./appFunctions";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Chat(){

    const [user, setUser] = useState();
    const [gettingUser,setGettingUser] = useState(true);
    const [msg, setMsg] = useState();
    const [receivedMsg, setReceivedMsg] = useState([]);

    // we need logged in users info or details from datanase
    // saving user_obj with email,photourl
     useEffect (()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            let user_obj = {};
            user_obj.id = user.uid;
            user_obj.email = user.email;
            user_obj.photoURL = user.photoURL;
            user_obj.name = user.displayName;
            setUser(user_obj);
            setGettingUser(false);
            console.log(user_obj);
        });
        getMsg();
     }, [true])


    // //  all typed msg comes here
     const handleChange = (event) => {
         setMsg(event.target.value);
     };

    //  
     const onWriteMsgToDb = async () => {
         console.log(user);
        try {
            await firebase.database().ref("chat").push({
                // content: this.state.content,
                // we have content , timeStamp and userid on writring message that means who is writing what when and with unique id will be getting here
                content: msg,
                timestamp: Date.now(),
                // uid: this.state.user.uid
                uid: user.id
            });
            // this.setState({ content: ' ' });
        } catch(error){
            // this.setState({writeError: error.message });
            console.log(error);
        }
     }


    //  How to get written msg 
    // get written msg with this function make pure js function on arrow function 
    function getMsg () {
        try{
            firebase.database().ref("chat").on("value", snapshot => {
                let chats = [];
                snapshot.forEach((snap) => {
                    chats.push(snap.val());
                });
                // this.setState({ chats });
                // console.log(chats);
                setReceivedMsg(chats);
            })
        }
        catch(error){
            console.log(msg);
        }
    }

    //  this function will sendMsg which we have written 
     const onSendMsg = () =>{
        onWriteMsgToDb().finally(function (res) {
            console.log(res);
        })
     }


    return(
        <div>
            {gettingUser ? <p> loading.... </p>:
            <div>
            <h3> Welcome to Live Chat App! </h3>
            <h2> Hello, {user.name} </h2>
            <h5> Email: {user.email} </h5>
            </div>
            }

            <div>
                {/* setting.length because msg must havesome length and mappingit intoitem and getting the content  */}
                { receivedMsg.length ? receivedMsg.map((item) => 
                <p> {item.content}</p>):  ''
                }

            </div>
            
            <Grid>
                 <Grid  xs="12">
                 <TextField
                   label="Enter your Message"
                   type="text"
                   value={msg}
                   fullWidth={true}
                   onChange={handleChange}
                />  
            
            <br/>  <br/>

            <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={onSendMsg}
                >
                Send Message
   
            </Button>

            </Grid>

            </Grid>

        </div>
    )
}