import {Grid} from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.svg'

export default function Footer() {
    return (
        <Grid container direction='row' className='footer-cont'>
            <Grid item lg={3} sm={6} xs={12}>
                <img src={Logo} alt="myteam"/>
                <Grid container direction='row'>
                    <Grid item xs={6} className='footer-link'>
                        <Link to='/'>
                            Home</Link>
                    </Grid>
                    <Grid item xs={6} className='footer-link'>
                        <Link to='/about'>About</Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={3} sm={6} xs={12} className='direction'>
                <p>987 Hillcrest Lane</p>
                <p>Irvine, CA</p>
                <p>California 92714</p>
                <p>Call Us : 949-833-7432</p>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
            <Grid container direction='row' className='hidden-social'>
                   
                        <i className='fab fa-facebook'></i>
                        <i className='fab fa-pinterest'></i>
                        <i className='fab fa-twitter'></i>
              </Grid>
            </Grid>
            <Grid item lg={3} sm={6} xs={12} className='social-cont'>
                <Grid container direction='row' className='social-row'>
                    <Grid item lg={12} sm={6} xs={12}>
                        <i className='fab fa-facebook'></i>
                        <i className='fab fa-pinterest'></i>
                        <i className='fab fa-twitter'></i>
                    </Grid>
                    <Grid item lg={12} sm={6} xs={12}>
                        <p>Copyright 2020. All Rights Reserved</p>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
}
