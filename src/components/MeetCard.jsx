import {Grid} from '@material-ui/core'
import React, {useState} from 'react'
import Plus from '../images/icon-cross.svg'
import Close from '../images/icon-close.svg'

import Nikita from '../images/avatar-nikita.jpg'
import Christian from '../images/avatar-christian.jpg'
import Cruz from '../images/avatar-cruz.jpg'
import Drake from '../images/avatar-drake.jpg'
import Griffin from '../images/avatar-griffin.jpg'
import Aden from '../images/avatar-aden.jpg'

function MeetCard(props) {
    const avatars = [
        Nikita,
        Christian,
        Cruz,
        Drake,
        Griffin,
        Aden
    ];

    const [click,
        setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <Grid item lg={4} sm={6} xs={12} className='meet-card'>
            <Grid
                container
                className='info-card1'
                style={{
                display: !click
                    ? 'block'
                    : 'none'
            }}>
                <img src={avatars[props.index]} alt={props.imgAlt}/>
                <p className="name">{props.name}</p>
                <p className='position'>
                    {props.position}
                </p>
            </Grid>
            <Grid
                container
                className='info-card2'
                style={{
                display: click
                    ? 'block'
                    : 'none'
            }}>

                <p className="name">{props.name}</p>
                <p className='description'>
                    {props.description}
                </p>
                <Grid container direction='row' className='social-row'>
                    <i className='fab fa-2x fa-twitter'></i>
                    <i className='fab fa-2x fa-linkedin'></i>
                </Grid>
            </Grid>
            <button style={{backgroundColor: !click? 'hsl(0, 87%, 73%)':  'hsl(179, 42%, 63%)' }} onClick={handleClick}><img
                src={!click
            ? Plus
            : Close}
                alt={!click
            ? "More"
            : 'Close'}/>
            </button>
        </Grid>
    )
}

export default MeetCard
