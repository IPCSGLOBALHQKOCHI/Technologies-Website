import React from 'react'
import HeroSectionAbout from '../Components/AboutPages/HeroSectionAbout'
import AboutSection from '../Components/AboutPages/AboutSection'
import OurStory from '../Components/AboutPages/OurStory'
import MissionVission from '../Components/AboutPages/MissionVission'
import AboutBanner from '../Components/AboutPages/AboutBanner'
// import Team from '../Components/AboutPages/Team'

function AboutPage() {
  return (
    <div>
      <HeroSectionAbout/>
      <AboutSection/>
      <OurStory/>
      <MissionVission/>
      <AboutBanner/>
      {/* <Team/> */}
    </div>  
  )
}

export default AboutPage
