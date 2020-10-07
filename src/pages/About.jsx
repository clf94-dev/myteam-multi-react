import React from 'react'
import ClientsAbout from '../components/ClientsAbout'
import Cta from '../components/Cta'
import MeetSection from '../components/MeetSection'
import TopAbout from '../components/TopAbout'

function About() {
    return (
        <div>
            <TopAbout/>
            <MeetSection />
            <ClientsAbout/>
            <Cta/>
        </div>
    )
}

export default About
