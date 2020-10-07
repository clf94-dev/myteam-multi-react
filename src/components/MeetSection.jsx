import {Grid} from '@material-ui/core'
import React from 'react'
import MeetCard from './MeetCard'
import { MeetSectionInfo } from './MeetSectionInfo'

function MeetSection() {
    return (
        <Grid container direction='column'>
            <h3>Meet the directors</h3>
            <Grid container direction='row'>
                {MeetSectionInfo.map(data => {
                    return (<MeetCard
                        key={data.index}
                        index={data.index}
                        name={data.name}
                        position={data.position}
                        imgAlt={data.imgAlt}
                        description={data.description}/>)
                })}
            </Grid>
        </Grid>
    )
}

export default MeetSection
