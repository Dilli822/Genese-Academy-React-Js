
import React, { useEffect , useState } from "react";
import getCurrentUser from "./appFunctions";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default function Chat(){

    const [user, setUser] = useState();
    const [gettingUser, setGettingUser ] =useState(true);

    // we need logged in users info or details from datanase
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

        })
     }, [true])


    //  all typed msg comes here
     const handleChange = (event) => {
         setMsg(event.target.value);
     };

     const onSendMsg = () =>{
         try {
             await db.red("chats").push({
                 content: this.state.content,
                 timestamp: Date.now(),
                 uid: this.state.user.uid
             });
             this.setState({ content: ' ' });
         } catch(error){
             this.setState({writeError: error.message });
         }

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
        </div>
    )
}