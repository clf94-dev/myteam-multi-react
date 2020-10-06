import {Grid} from '@material-ui/core'
import React from 'react'
import {Link} from  'react-router-dom'
import Logo from '../images/logo.svg'


export default function Footer() {
    return (
        <Grid container direction='row'>
            <Grid item sm={4} xs={12}>
                <img src={Logo} alt="myteam"/>
                <Grid container direction='row'>
                    <Grid item xs={6}>
                        <Link to='/'>
                            Home</Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to='/about'>About</Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={4} xs={12}>
                <p>987 Hillcrest Lane</p>
                <p>Irvine, CA</p>
                <p>California 92714</p>
                <p>Call Us : 949-833-7432</p>
            </Grid>
            <Grid item sm={4} xs={12}></Grid>
            <Grid item sm={4} xs={12}>
                <Grid container direction='row'>
                    <i className='fab fa-facebook'></i>
                    <i className='fab fa-pinterest'></i>
                    <i className='fab fa-twitter'></i>
                </Grid>
                <p>Copyright 2020. All Rights Reserved</p>
            </Grid>
        </Grid>
    );
}

