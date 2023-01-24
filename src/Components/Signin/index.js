import React, { useState } from 'react';
import { firebase } from '../../database/firebase';

import { CircularProgress } from '@material-ui/core';
//import { Redirect } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';


const SignIn = (props) => {

    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('The email is required'),
            password: Yup.string()
                .required('The password is required')
                .min(5, 'Password must be atleast 5 letters')
        }),
        onSubmit: (values) => {
            setLoading(true);
            submitForm(values);
        }
    });

    const submitForm = (values) => {
        firebase.auth()
        .signInWithEmailAndPassword(
            values.email,
            values.password
        ).then(() => {
            // show success toast .

            // redirect user
            props.history.push('/dashboard')
        }).catch(error => {
            setLoading(false);
            //console.log(error);
            alert(error);
            // show toasts
        })
    }

    return(
        <div className="container">
            <div className="signin_wrapper" style={{margin:'100px'}}>

                <form onSubmit={formik.handleSubmit}>
                    <h2>Please login</h2>
                    <input
                        name="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    { formik.touched.email && formik.errors.email ?
                        <div className="error_label">
                            {formik.errors.email}
                        </div>
                    :null}
                    <input
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    { formik.touched.password && formik.errors.password ?
                        <div className="error_label">
                            {formik.errors.password}
                        </div>
                    :null}
                    { loading ? 
                        <CircularProgress color="secondary" className="progress"/>
                       :
                       <button type="submit">Log in</button>
                       
                    }
                    
                </form>

            </div>
        </div>
    );
}


export default SignIn;