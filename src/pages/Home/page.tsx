
import CallToActionSection from '../../CommonComponents/CallToActionSection'

import CoreAreasSection from '../../Components/Home/CoreAreasSection'
import HeroSection from '../../Components/Home/HeroSection'
import PracticeOfTheDaySection from '../../Components/Home/PracticeOfTheDaySection'
import PracticesSection from '../../Components/Home/PracticesSection'
import StoriesSection from '../../Components/Home/StoriesSection'
import SustainabilityPledgeSection from '../../Components/Home/SustainabilityPledgeSection'
import WhatIsPlanSection from '../../Components/Home/WhatIsPlanSection'
import WhyThisPlanSection from '../../Components/Home/WhyThisPlanSection'

const Home = () => {
    return (
        <>
            <HeroSection />
            <WhatIsPlanSection />
            <CoreAreasSection />
            <PracticeOfTheDaySection />
            <WhyThisPlanSection />
            <PracticesSection />
            {/* <CirclesNearYouSection /> */}
            <StoriesSection />
            <SustainabilityPledgeSection />
            <CallToActionSection
                title="Be part of the Blissful World Plan"
                description="Start with simple practices and connect with a like-minded community near you."
            />
        </>
    )
}

export default Home