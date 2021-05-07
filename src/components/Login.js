import React from 'react';
import "./styles/Login.css";
import { Button } from "@material-ui/core";
import {auth, provider} from "../firebase";
import {useStateValue} from "../StateProvider";
import { actionTypes } from "../reducer";

const Login = () => {
    // accesssing the data layer
    const [state, dispatch] = useStateValue();

    const signIn = (e) => {
        // we handle the login with google in here
        e.preventDefault();
        // use the auth module, and signIn with Google, byt passing google as the provider and logging out the result
        // we are going to add the user to the data layer
        auth.signInWithPopup(provider).then(result => {
            console.log(result);

            dispatch({
                // we make the action with this anme for reducer to listen
                // this basically just defines the action name, which the reducer is going to listen
                type: actionTypes.SET_USER,
                // and also we pass the useer object, what we have received from Google auth and assign it to the State in datalayer
                // to be able to access it anywhere in the app
                user: result.user
            });
            // it logged in the user, got the object, and then we shooted the action to the reducer, with the action type, which reducer
            // is listening to, and the payload, so in this case it is the user object, what the response from google auth is
            // and in the reducer we updated the state, the user is not null, but that object, which was returned from Google auth
        })
            .catch((error) => {
                alert(error.message);
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
