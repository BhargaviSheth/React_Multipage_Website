import React, { useContext, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import aboutimage from '../src/assets/images/about1.svg'
import { useGlobalContext } from './Context'
import AboutProject from './components/AboutProject'
const About = () => {

  // const data = {
  //   name : "Bhargavi Sheth",
  //   image : "../src/assets/images/about2.avif"
  // };

  const {updateAboutpage} = useGlobalContext();

  useEffect( () => updateAboutpage(),[])
  return (
    <>
    <HeroSection />
    <AboutProject/>
    </>
  )
}

export default About