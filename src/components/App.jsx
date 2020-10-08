import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import '../styles/App.css'
import Navbar from './Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Footer from './Footer'

import '../styles/App.css'

function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about' exact component={About}/>
                    <Route path='/contact' exact component={Contact}/>

                </Switch>
                <Footer/>
            </Router>
        </div>
    )
}

export default App
