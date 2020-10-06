import {Grid} from '@material-ui/core'
import React from 'react'

function TopHome() {
    return (
        <Grid container direction='row'>
            <Grid item sm={6} xs={12}>
                <h1>Find the best talent</h1>
            </Grid>
            <Grid item sm={6} xs={12}>
                <hr/>
                <p>Finding the right people and building high performing teams can be hard. Most
                    companies aren’t tapping into the abundance of global talent. We’re about to
                    change that.</p>
            </Grid>
        </Grid>
    )
}

export default TopHome
