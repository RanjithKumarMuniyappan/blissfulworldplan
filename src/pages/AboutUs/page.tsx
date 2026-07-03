import CallToActionSection from "../../CommonComponents/CallToActionSection"
import AboutHeroSection from "../../Components/AboutUs/AboutHeroSection"
import CoreAreasOverviewSection from "../../Components/AboutUs/CoreAreasOverviewSection"
import GuidingPhilosophySection from "../../Components/AboutUs/GuidingPhilosophySection"
import ImpactFrameworkSection from "../../Components/AboutUs/ImpactFrameworkSection"
import OurApproachSection from "../../Components/AboutUs/OurApproachSection"
import OurEssenceSection from "../../Components/AboutUs/OurEssenceSection"

import StoryInspirationSection from "../../Components/AboutUs/StoryInspirationSection"
import { WhatMakesThisDifferentSection } from "../../Components/AboutUs/WhatMakesThisDifferentSection"


const About = () => {
  return (
    <>
      <AboutHeroSection />
      {/* <OurEssenceSection /> */}
      <GuidingPhilosophySection />
      <StoryInspirationSection />
      {/* <CoreAreasOverviewSection /> */}
      <OurApproachSection />
      <WhatMakesThisDifferentSection />
      {/* <RepresentativesSection /> */}
      <ImpactFrameworkSection />
      <CallToActionSection
        title="Be part of the Blissful World Plan"
        description="Start small, stay steady, grow together."
      />
    </>
  )
}

export default About