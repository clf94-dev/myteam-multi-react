import {Grid} from '@material-ui/core'
import React from 'react'
import Gadgets from '../images/logo-gadgets-now.png'
import Jakarta from '../images/logo-jakarta-post.png'
import Tech from '../images/logo-tech-radar.png'
import TheGuardian from '../images/logo-the-guardian.png'
import Verge from '../images/logo-the-verge.png'
function ClientsAbout() {
    return (
        <Grid container direction='column'>
            <h3>Some of our clients</h3>
            <Grid container direction='row'>
                <Grid item sm={3} xs={12}>
                    <img src={Gadgets} style={{width: '100%'}} alt="Gadgets Now"/>
                </Grid>
                <Grid item sm={3} xs={12}>
                    <img src={Jakarta} style={{width: '100%'}} alt="Jakarta Post"/>
                </Grid>
                <Grid item sm={2} xs={12}>
                    <img src={Tech} style={{width: '100%'}} alt="Tech Radar"/>
                </Grid>
                <Grid item sm={2} xs={12}>
                    <img src={TheGuardian} style={{width: '100%'}} alt="The Guardian"/>
                </Grid>
                <Grid item sm={2} xs={12}>
                    <img src={Verge} style={{width: '100%'}} alt="The Verge"/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ClientsAbout
