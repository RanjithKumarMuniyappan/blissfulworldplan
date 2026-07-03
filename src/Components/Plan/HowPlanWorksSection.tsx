

import { HOW_PLAN_WORKS_DATA } from '../../data'

const HowPlanWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f]">How the plan works</h2>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {HOW_PLAN_WORKS_DATA.map(item => (
                    <div key={item.title}>
                        <h3 className="text-xl font-bold text-[#bc961f] mb-2">{item.title}</h3>
                        <p className="text-[#bc961f]">{item.description}</p>
                    </div>
                ))}
            </div>
            {/* <div className="text-center mt-12">
                <Link to="/practices" className="font-semibold text-[#bc961f] hover:text-[#a6801b] transition-colors">
                    Explore Practices &rarr;
                </Link>
             </div> */}
        </div>
    </section>
  )
}

export default HowPlanWorksSection