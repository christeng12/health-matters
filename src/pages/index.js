import * as React from "react"
import Bubble from "./bubble"
import NavBar from "./navbar";
import '../style/index.css';
import logo from '../static/logo.png';

const IndexPage = () => {
  return (
    <div>
      <NavBar />
      {/* <div className="line-horizontal"></div>
      <div className="line-vertical"></div> */}
      <a href="https://www.healthmattersinsurance.com/"><img src={logo} className="centered-image"></img></a>
      <div className="grid-container">
              <Bubble title="Hospitals & Urgent Care"/>
              <Bubble title="Community Engagement"/>
              <Bubble title="Pharmacies & Testing"/>
              <Bubble title="Mental Health"/>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Health Matters</title>
