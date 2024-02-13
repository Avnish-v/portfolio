import React from 'react'
import Navbar from '../../Components/Navbar'
import Hero from '../Hero'
import Skill from '../Skill'
import Project from '../Project'
import Experience from '../Experience'
import Contact from '../Contact'
import { useContextData } from '../../Provider/Mode'

const App = () => {
  const {mode} =useContextData();
  return (
  <div style={{ backgroundColor: mode ? "#121212" : "white" , color : mode ? "white" : "black" }}>
    <Navbar/>
    <Hero/>
    <Skill/>
    <Project/>
    <Experience/>
    <Contact/>
  </div>
  
  )
}

export default App