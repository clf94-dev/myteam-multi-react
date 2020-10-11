import {Grid} from '@material-ui/core'
import React from 'react'
import OpinionsCard from './OpinionsCard'
import {OpinionsData} from './OpinionsData'

import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init();

function HomeOpinions() {
    return (
        <Grid container direction='column' className='opinions-cont'>
            <h2 data-aos='fade-right'>Delivering real results for top companies. Some of our <h2 className='color' data-aos='fade-left'>success stories.</h2></h2>
            <Grid container direction='row'>
                {OpinionsData.map(data => {
                    return (<OpinionsCard
                        key={data.index}
                        index={data.index}
                        opinionText={data.opinionText}
                        name={data.name}
                        position={data.position}
                        imgALT={data.imgAlt}
                        delay={data.delay}
                        />)
                })}
            </Grid>

        </Grid>
    )
}

export default HomeOpinions
