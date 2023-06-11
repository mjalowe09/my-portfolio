//Libraries
import { React, useState } from 'react'
import './App.css'

//Components
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Overview from './components/Overview'
import Path from './components/Path'
import Skills from './components/Skills'
import Project from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Path />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
