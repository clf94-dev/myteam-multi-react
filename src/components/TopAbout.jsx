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
                <p>Finding the right people and building high performing teams can be hard. Most
                    companies aren’t tapping into the abundance of global talent. We’re about to
                    change that.</p>
            </Grid>
        </Grid>
    )
}

export default TopAbout
