import {Grid} from '@material-ui/core'
import React from 'react'
import Gadgets from '../images/logo-gadgets-now.png'
import Jakarta from '../images/logo-jakarta-post.png'
import Tech from '../images/logo-tech-radar.png'
import TheGuardian from '../images/logo-the-guardian.png'
import Verge from '../images/logo-the-verge.png'
function ClientsAbout() {
    return (
        <Grid container direction='column' className='clients-cont'>
            <h3>Some of our clients</h3>
            <Grid container direction='row' className='companies-row'>
                <Grid item sm={3} xs={12} className='company-img'>
                    <img src={Gadgets} alt="Gadgets Now"/>
                </Grid>
                <Grid item sm={3} xs={12} className='company-img'>
                    <img src={Jakarta}  alt="Jakarta Post"/>
                </Grid>
                <Grid item sm={2} xs={12} className='company-img'>
                    <img src={Tech}  alt="Tech Radar"/>
                </Grid>
                <Grid item sm={2} xs={12} className='company-img'>
                    <img src={TheGuardian}  alt="The Guardian"/>
                </Grid>
                <Grid item sm={2} xs={12} className='company-img'>
                    <img src={Verge}  alt="The Verge"/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ClientsAbout
