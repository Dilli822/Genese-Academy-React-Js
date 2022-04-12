// Source Code Design: https://mui.com/getting-started/templates/
// Material UI Design 

import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import loginWithSocialAccount from './firebaseManager';
import signup from './signup';
import signin from './signin';
import {useHistory} from 'react-router-dom';
import getCurrentUser from "./appFunctions";




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Hangko
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    customButton: {
        marginTop: theme.spacing(1),
        backgroundColor: "#910f25",
        color: "#fff"
    }

}))
const theme = createTheme();

export default function SignInSide() {

  let history = useHistory();

  // using our useStyles here
  const classes = useStyles();

  // making states for login to let users know it is being login or logged in already
  const [isLogin, setIsLogin] = useState(false);

  // setting email and password here
  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');

  // Handling the changes here with handleChange function for input handling
  const handleChange = (event) => {
    // setting the email and password here altogether
    if(event.target.id == 'email'){
      setEmail(event.target.value);
    }
      else{
        setPassword(event.target.value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const loginWithGoogle =() => {
    // alert('-----');
    setIsLogin(true)
    loginWithSocialAccount('google').then(function(response){
      console.log("This is user's credentials of user ----> ", response);
      console.log(response);
      alert("You have successfully signed in!")
      setIsLogin(false);
      history.push('/chat');
    }).catch(function(error){
      alert(error);
      console.log("This is error-->", error);
      setIsLogin(false);
    })
  }

  // registering the first time user here
  const onRegisterUser =()=> {
    // sending the params email and password
    if(email !== '' && password !== ''){
    signup(email, password).then(function(response){
      console.log("This is SIGN UP  reponse if you are seeing this check your firebase console users new users will be added auotmatically ---> ");
      console.log(response);
    })
    }
  }

  const onSignIn =()=>{
    // sending the params email and password
    if(email !== '' && password !== ''){
      signin(email, password).then(function(response){
          console.log("This is SIGN IN reponse ---> ");
          console.log(response);
          alert("You have successfully signed in!")
          setIsLogin(false);
          history.push('/chat');

      })
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <div noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onSignIn}
                disabled={isLogin}
              >
                Sign In
              </Button>

              <Grid container>

                <Grid item xs="12" md="6">
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>

                <Grid item>
                  <Link href="#" variant="body2" onClick={onRegisterUser}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>

                <br/>

                <div
                style = {{color:  "#181716", fontWeight: "bold", width: "100%", textAlign: 'center', borderRadius: "4px", padding: "1rem"}}
                sx={{ mt: 3, mb: 2 }}>
                SOCIAL ACCOUNT
                </div>

                <Button
                type="submit"
                fullWidth
                variant="contained"
                style = {{backgroundColor:  "#FF4C4C", color: "#fff"}}
                sx={{ mt: 3, mb: 2 }}
                onClick = {loginWithGoogle}
                // making it disabled not to allow clicking on button while logging
                disabled={isLogin}
                >
                { isLogin ? 'Please Wait...': 
                'Login in/Sign in with Google Account' }
                </Button>

                <br />

                
              </Grid>

              <Copyright sx={{ mt: 5 }} />
            </div>
  
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}