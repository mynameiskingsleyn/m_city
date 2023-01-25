import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { CityLogo, showErrorToast, showSuccessToast } from '../Utils/tools';
import { firebase } from '../../database/firebase';
import { Redirect } from 'react-router-dom';


const Header = ({user}) => {
    
    const logoutHandler = () => {
        firebase.auth().signOut()
        .then(() => {
            showSuccessToast('Good bye');
            return <Redirect to="/sign_in"/>
        }).catch(error => {
            showErrorToast(error.message);
        })
    }
    return(
        <>
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: '#98c5e9',
                    boxShadow: 'none',
                    padding: '10px 0',
                    borderBottom: '2px solid #00285e'
                }}
            >
                <Toolbar style={{display: 'flex'}}>
                    <div style={{flexGrow: 1}}>
                            <div className="header_logo">
                                <CityLogo 
                                    link={true}
                                    linkTo={'/'}
                                    width="70px"
                                    height="70px"
                                />
                            </div>  
                    </div>
                    <Link to="/the_team">
                        <Button> The team </Button>
                    </Link>
                    <Link to="/the_matches">
                        <Button> The Matches </Button>
                    </Link>
                    { user ? 
                    <>
                        <Link to="/dashboard">
                            <Button> Dashboard </Button>
                        </Link>
                        
                            <Button color="inherit"
                                onClick={ () => logoutHandler()}
                            > Logout </Button>
                        
                    </>
                      :
                        null
                  
                    }
                    
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Header;