import React from 'react';

import { Link, Redirect } from 'react-router-dom';

import mcitylogo from '../../Resources/images/logos/manchester_city_logo.png';
import { toast } from 'react-toastify';
import { firebase } from '../../database/firebase';

export const CityLogo = (props) => {
    const template = <div
        className="img_cover"
        style={{
            width: props.width ? props.width : '70px',
            height: props.height ? props.height: '70px',
            background:`url(${mcitylogo}) no-repeat`
        }}
    ></div>
    if(props.link){
        return (
            <Link className="link_logo" to={props.linkTo}>
                {template}
            </Link>
        )
    } else {
        return template
    }

}

export const logoutHandler = () => {
    firebase.auth().signOut()
    .then(() => {
        showSuccessToast('Good bye');
        return <Redirect to="/sign_in"/>
    }).catch(error => {
        showErrorToast(error.message);
    })
}

export const showErrorToast = (msg) => {
    toast.error(msg, {
        position: toast.POSITION.TOP_LEFT
    })
}

export const showSuccessToast = (msg) => {
    toast.success(msg,{
        position: toast.POSITION.TOP_LEFT
    })
}