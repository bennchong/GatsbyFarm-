import React, { useEffect} from "react"
import { navigate } from '@reach/router';
import View from "./View"
import { useState} from "react"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setUser, isLoggedIn } from "../utils/auth"
import useFirebase from "../utils/useFirebase";

import '../assets/firebaseui-styling.global.css'; // Import globally.

const Login = () => {
  const firebase = useFirebase();
  console.log(firebase);

  if (isLoggedIn()) {
    navigate(`/app/profile`)
  }

  function getUiConfig(auth) {
    return {
      signInFlow: 'popup',
      signInOptions: [
        auth.EmailAuthProvider.PROVIDER_ID
      ],
      // signInSuccessUrl: '/app/profile',
      callbacks: {
        signInSuccessWithAuthResult: (result) => {
          console.log(result)
          setUser(result.user);
          navigate('/app/profile');
        }
      }
    };
  }

  return (
    <div>
      {firebase && <StyledFirebaseAuth uiConfig={getUiConfig(firebase.auth)} firebaseAuth={firebase.auth()}/>}
    </div>
  );

}

export default Login
