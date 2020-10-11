import {Grid} from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'


import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init();

function Cta() {
    return (
        <Grid container direction='row' className='cta-cont' data-aos='flip-left'>

            <Grid item sm={8} xs={12} className='text-col'>
                <h2>Ready to get started?</h2>
            </Grid>
            <Grid item sm={4} xs={12} className='btn-col'>
                <Link to='/contact'>
                    <button className='transparent-btn'>Contact Us</button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Cta
