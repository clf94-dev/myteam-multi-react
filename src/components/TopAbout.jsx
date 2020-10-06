import {Grid} from '@material-ui/core'
import React from 'react'

function TopAbout() {
    return (
        <Grid container direction='row'>
            <Grid item md={6} xs={12}>
                <h2>About</h2>
            </Grid>
            <Grid item md={6} xs={12}>
                <hr/>
                <p>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
            </Grid>
        </Grid>
    )
}

export default TopAbout
