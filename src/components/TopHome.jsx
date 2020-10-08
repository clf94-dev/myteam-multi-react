import {Grid} from '@material-ui/core'
import React from 'react'

function TopHome() {
    return (
        <Grid container direction='row' className='top-home-cont'>
            <Grid item sm={6} xs={12}className='left'>
                <h1>Find the best <h1 className='color'>talent</h1></h1>
            </Grid>
            <Grid item sm={6} xs={12}className='right'>
                <hr/>
                <p>Finding the right people and building high performing teams can be hard. Most
                    companies aren’t tapping into the abundance of global talent. We’re about to
                    change that.</p>
            </Grid>
        </Grid>
    )
}

export default TopHome
