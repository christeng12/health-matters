import * as React from 'react'
import NavBar from "./navbar";
import '../style/about.css';
import video from '../static/about.mp4';


// Step 2: Define your component
const About = () => {
  return (
    <div>
        <NavBar />
        <div className='about-container'>
            <h1>Welcome to Health Matters!</h1>
            <p>Here is a short video introducing the team and our mission!</p>
            <video width="750" height="500" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}

// Step 3: Export your component
export default About