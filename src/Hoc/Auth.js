import React from 'react';
import { Redirect } from 'react-router-dom';
import { firebase } from '../database/firebase';


const AuthGuard = (Component) => {
    class AuthHoc extends React.Component {
        
        authCheck = () => {
            const user = firebase.auth().currentUser;
            if(user){
                return <Component {...this.props}/>
            } else {
                return <Redirect to="/sign_in"/>
            }
        }
        render(){
            return this.authCheck()
        }  
    }
    return AuthHoc;
}

export default AuthGuard