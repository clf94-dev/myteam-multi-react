import React from 'react'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import HomeFeat from '../components/HomeFeat'
import HomeOpinions from '../components/HomeOpinions'
import TopHome from '../components/TopHome'

function Home() {
    return (
        <div>
           <TopHome/> 
           <HomeFeat/>
           <HomeOpinions/>
           <Cta/>
          
        </div>
    )
}

export default Home
