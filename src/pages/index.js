import * as React from "react"
import Home from "./home";
import Services from "./services";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const IndexPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:title/:type" element={<Services />} />
      </Routes>
    </Router>
  )
}

export default IndexPage

export const Head = () => <title>Health Matters</title>
