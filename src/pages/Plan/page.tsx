
import { useEffect } from "react"
import CallToActionSection from "../../CommonComponents/CallToActionSection"
import GettingStartedSection from "../../Components/Plan/GettingStartedSection"
import HowPlanWorksSection from "../../Components/Plan/HowPlanWorksSection"
import MeasuringProgressSection from "../../Components/Plan/MeasuringProgressSection"
import PlanCoreAreasSection from "../../Components/Plan/PlanCoreAreasSection"
import PlanFaqsSection from "../../Components/Plan/PlanFaqsSection"
import PlanHeroSection from "../../Components/Plan/PlanHeroSection"
import PlanOverviewSection from "../../Components/Plan/PlanOverviewSection"
import WhoItsForSection from "../../Components/Plan/WhoItsForSection"
import WhyJoinSection from "../../Components/Plan/WhyJoinSection"
import WhyNowSection from "../../Components/Plan/WhyNowSection"
import WhyWorldNeedsThisSection from "../../Components/Plan/WhyWorldNeedsThisSection"
import WhyYouMustJoinSection from "../../Components/Plan/WhyYouMustJoinSection"
import { useLocation } from "react-router-dom"


const Plan = () => {

  const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);


  return (
    <>
      <PlanHeroSection />
      <PlanOverviewSection />
      <WhyNowSection />
      <WhyWorldNeedsThisSection />
      <WhyJoinSection />
      <WhoItsForSection />
      <WhyYouMustJoinSection />
      <PlanCoreAreasSection />
      <HowPlanWorksSection />
      <GettingStartedSection />
      <MeasuringProgressSection />
      <PlanFaqsSection />
      <CallToActionSection
        title="Be part of the Blissful World Plan"
        description="Start small, stay steady, grow together."
      />
    </>
  )
}

export default Plan