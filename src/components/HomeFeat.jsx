import {Grid} from '@material-ui/core'
import React from 'react'
import FeatCard from './FeatCard'
import {FeaturesInfo} from './FeaturesInfo'

import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init();

function HomeFeat() {
    return (
        <Grid container direction='row' className='features-cont'>
            <Grid item sm={6} xs={12} className='title-col' data-aos='fade-right' data-aos-delay='700'>
                <hr/>
                <h2>Build & manage distributed teams like no one else.</h2>
            </Grid>
            <Grid item sm={6} xs={12} className='feat-col'>
                {FeaturesInfo.map(data => {
                    return (<FeatCard
                        key={data.index}
                        index={data.index}
                        title={data.title}
                        text={data.text}
                        imgALT={data.imgAlt}
                        delay={data.delay}/>)
                })}
            </Grid>
        </Grid>
    )
}

export default HomeFeat
