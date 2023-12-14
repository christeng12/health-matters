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
              <Bubble title="Hospitals & Urgent Care" type="HospitalsAndUrgentCare"/>
              <Bubble title="Community Engagement" type="CommunityEngagement"/>
              <Bubble title="Pharmacies & Testing" type="PharmaciesAndTesting"/>
              <Bubble title="Mental Health" type="MentalHealth"/>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Health Matters</title>
