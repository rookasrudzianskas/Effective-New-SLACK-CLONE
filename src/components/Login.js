import React from 'react';
import "./styles/Login.css";
import { Button } from "@material-ui/core";

const Login = () => {
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt=""/>

                <h1>Sign in to Brainlyemails & CONNEXIOUS HQ</h1>
                <p>connexious.rokashq.com</p>
                <Button>Sign In With Google</Button>
            </div>

        </div>
    );
};

export default Login;
