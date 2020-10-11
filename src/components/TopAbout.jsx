import {Grid} from '@material-ui/core'
import React from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init();

function TopAbout() {
    return (
        <Grid container direction='row' className='topAbout-cont'>
            <Grid item md={6} xs={12}>
                <h2 data-aos='fade-right'>About</h2>
            </Grid>
            <Grid item md={6} xs={12} data-aos='fade-left' data-aos-delay='300'>
                <hr/>
                <p>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
            </Grid>
        </Grid>
    )
}

export default TopAbout
