import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';
import { firebase } from './database/firebase';
import App from './App';


firebase.auth().onAuthStateChanged((user) => {
    ReactDOM.render(<App user={user} />, document.getElementById('root'));
})