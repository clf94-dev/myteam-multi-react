import {Grid} from '@material-ui/core'
import React from 'react'
import Experienced from '../images/icon-person.svg'
import Easy from '../images/icon-cog.svg'
import Prod from '../images/icon-chart.svg'

import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init();

function FeatCard(props) {
    const images = [Experienced, Easy, Prod];

    return (
        <Grid item xs={12}>
            <Grid container direction='row' className='feat-card'>
                <Grid item sm={2} xs={12} className='img-col'  data-aos='fade-up' data-aos-delay={props.delay}>
                    <img src={images[props.index]} alt={props.imgALT}/>
                </Grid>
                <Grid item sm={10} xs={12} className='feat-info-col' data-aos='fade-up' data-aos-delay={props.delay}>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FeatCard
