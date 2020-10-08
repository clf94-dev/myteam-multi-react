import {Grid} from '@material-ui/core'
import React from 'react'
import FeatCard from './FeatCard'
import {FeaturesInfo} from './FeaturesInfo'

function HomeFeat() {
    return (
        <Grid container direction='row' className='features-cont'>
            <Grid item sm={6} xs={12} className='title-col'>
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
                        imgALT={data.imgAlt}/>)
                })}
            </Grid>
        </Grid>
    )
}

export default HomeFeat
