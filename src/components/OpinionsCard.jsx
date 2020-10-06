import { Grid } from '@material-ui/core'
import React from 'react'

import Kady from '../images/avatar-kady.jpg'
import Aiysha from '../images/avatar-aiysha.jpg'
import Arthur from '../images/avatar-arthur.jpg'
import Quotes from '../images/icon-quotes.svg'
function OpinionsCard(props) {
    const opinionsImg=[Kady, Aiysha, Arthur];

    return (
        <Grid item md={4} xs={12}>
<img className='quotes'src={Quotes} alt="quotes"/>
            <p> {props.opinionText}</p>
            <h3>{props.name} </h3>
            <p>{props.position} </p>
            <img className='avatar'src={opinionsImg[props.index]} alt={props.imgALT}/>
        </Grid>
    )
}

export default OpinionsCard
