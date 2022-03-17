

import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDETxVUteE8sODaWeprZFbI5-UFJZilGfA",
    authDomain: "imagereact-7aa91.firebaseapp.com",
    databaseURL: "https://imagereact-7aa91.firebaseio.com",
    projectId: "imagereact-7aa91",
    storageBucket: "imagereact-7aa91.appspot.com",
    messagingSenderId: "438168321273",
    appId: "1:438168321273:web:1519430b4225d8780f7628",
    measurementId: "G-Z9QTD6B1ZQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 


export default firebase;





