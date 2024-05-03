import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

export default function Home() {

    return (
        <div className='home-container'>
            <div className='home-header'>
                <h1 className='home-heading'>AI-FIT</h1>
                
                <Link to='/login'>
                    <button 
                        className="btn btn-secondary" 
                        id="about-btn"
                    >
                        Login
                    </button>
                </Link>
            </div>

            <h1 className="description">"Fitter India, Better India"</h1>
            <div className="home-main">
                <div className="btn-section">
                    <Link to='/start'>
                        <button
                            className="btn start-btn"
                        >Let's Start</button>
                    </Link>
                    <Link to='/tutorials'>
                        <button
                            className="btn start-btn"
                        >Tutorials</button>
                    </Link>
                    <br></br>
                <h1 className='names'>Guide :</h1>
                <h1 className='names'>Prof. Gayathri T</h1>
                    <br></br>
                <h1 className='names'>Team Members:</h1>
                <h1 className='names'>1MJ20CD012 - Gururaj Shridhar Naik</h1>
                <h1 className='names'>1MJ20CD021 - ParthaSarathi M</h1>
                <h1 className='names'>1MJ20CD027 - S Mayura</h1>
                <h1 className='names'>1MJ20CD043 - Vishal Chouhan</h1>
                </div>
            </div>
        </div>
    )
}
