import {Grid} from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'

function Cta() {
    return (
        <Grid container direction='row'>

            <Grid item sm={8} xs={12}>
                <h2>Ready to get started?</h2>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Link to='/contact'>
                    <button>Contact Us</button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Cta
