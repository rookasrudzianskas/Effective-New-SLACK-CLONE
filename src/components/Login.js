import React from 'react';
import "./styles/Login.css";
import { Button } from "@material-ui/core";
import {auth, provider} from "../firebase";

const Login = () => {

    const signIn = (e) => {
        // we handle the login with google in here
        e.preventDefault();
        // use the auth module, and signIn with Google, byt passing google as the provider and logging out the result
        auth.signInWithPopup(provider).then(result => {
            console.log(result)
        })
            .catch((error) => {
                alert(error.message)
            });
    }


    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt=""/>

                <h1>Sign in to Brainlyemails & CONNEXIOUS HQ</h1>
                <p>connexious.rokashq.com</p>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>

        </div>
    );
};

export default Login;
