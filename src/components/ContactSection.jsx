import { Grid } from '@material-ui/core'
import React from 'react'
import FeatCard from './FeatCard'
import { AskAboutThings } from './FeaturesInfo'
import Form from './Form'

function ContactSection() {
    return (
        <Grid container direction='row'>
            <Grid item lg={6} xs={12}>
<h2>Contact</h2>
<h3>Ask us about</h3>
{AskAboutThings.map(data => {return(
    <FeatCard key={data.index} text={data.text}  index={data.index}/>
)})}
            </Grid>
            <Grid item lg={6} xs={12}>
                <Form/>
            </Grid>
        </Grid>
    )
}

export default ContactSection
