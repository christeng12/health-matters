import * as React from "react"
import Bubble from "./bubble"
import NavBar from "./navbar";
import logo from '../style/index.css';

const IndexPage = () => {
  return (
    <div>
      <NavBar />
      {/* <div className="line-horizontal"></div>
      <div className="line-vertical"></div> */}
      <img src={logo} className="centered-image"></img>
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

export const Head = () => <title>Home Page</title>
