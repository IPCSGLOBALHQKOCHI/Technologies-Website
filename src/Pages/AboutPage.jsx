import React from 'react'
import HeroSectionAbout from '../Components/AboutPages/HeroSectionAbout'
import AboutSection from '../Components/AboutPages/AboutSection'
import OurStory from '../Components/AboutPages/OurStory'
import MissionVission from '../Components/AboutPages/MissionVission'

function AboutPage() {
  return (
    <div>
      <HeroSectionAbout/>
      <AboutSection/>
      <OurStory/>
      <MissionVission/>
    </div>
  )
}

export default AboutPage
