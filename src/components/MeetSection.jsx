import {Grid} from '@material-ui/core'
import React from 'react'
import MeetCard from './MeetCard'
import { MeetSectionInfo } from './MeetSectionInfo'

import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init();

function MeetSection() {
    return (
        <Grid container direction='column' className='meet-section'>
            <h3>Meet the directors</h3>
            <Grid container direction='row'>
                {MeetSectionInfo.map(data => {
                    return (<MeetCard
                        key={data.index}
                        index={data.index}
                        name={data.name}
                        position={data.position}
                        imgAlt={data.imgAlt}
                        description={data.description}
                        delay={data.delay}
                        />)
                })}
            </Grid>
        </Grid>                 
    )
}

export default MeetSection
