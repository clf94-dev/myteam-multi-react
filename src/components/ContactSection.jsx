import {Grid} from '@material-ui/core'
import React from 'react'
import FeatCard from './FeatCard'
import {AskAboutThings} from './FeaturesInfo'
import Form from './Form'
import '../styles/App.css'

import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init();

function ContactSection() {
    return (
        <Grid container direction='row' className='contact-cont'>
            <Grid item lg={6} xs={12} className='askabout-col'>
                <h2 data-aos='fade-right' data-aos-delay='100'>Contact</h2>
                <h3 data-aos='fade-right' data-aos-delay='200'>Ask us about</h3>
                {AskAboutThings.map(data => {
                    return (<FeatCard key={data.index} text={data.text} index={data.index} delay={data.delay}/>)
                })}
            </Grid>
            <Grid item lg={6} xs={12} className='form-col'>
                <Form/>
            </Grid>
        </Grid>
    )
}

export default ContactSection
