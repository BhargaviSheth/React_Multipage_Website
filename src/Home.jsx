import React, { useContext, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import heroimg from "../src/assets/images/hero.svg"
import { useGlobalContext } from './Context'
import Services from "../src/Services"
import Contact from "../src/Contact"


const Home = () => {

 
  // const data = {
  //   name: "Web Developer",
  //   image: "../src/assets/images/banner-hero.png"
  // }

  const {updateHomepage} = useGlobalContext();

  useEffect( () =>  updateHomepage(),[])
  return (
    <>
    <HeroSection />
    <Services/>
    <Contact/>
    </>
  )
}

export default Home