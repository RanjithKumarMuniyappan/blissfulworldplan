
import { PLAN_CORE_AREAS_DATA } from "../../data"

const PlanCoreAreasSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="plan_core_area">
        <div className="container mx-auto px-6" >
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f]">Core Areas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PLAN_CORE_AREAS_DATA.map(area => (
                    <div key={area.title} className="bg-[#fdf6e3] p-8 rounded-xl shadow-subtle flex flex-col">
                        <div className="flex items-center mb-4">
                             <area.icon className="h-8 w-8 text-[#bc961f]"/>
                            <h3 className="text-xl font-bold ml-4 text-[#bc961f]">{area.title}</h3>
                        </div>
                        <p className="text-[#bc961f] font-semibold italic mb-4">Aim: {area.aim}</p>
                        <h4 className="font-bold text-[#bc961f] mb-2">Starter practices:</h4>
                        <ul className="space-y-2 text-[#bc961f]">
                            {area.practices.map((practice, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-[#bc961f] mr-3 mt-1 flex-shrink-0">&#8227;</span>
                                    <span>{practice}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
             <div className="text-center mt-12">
                {/* <Link to="/plan/core-areas" className="font-semibold text-[#bc961f] hover:text-[#a6801b] transition-colors">
                    Explore Core Areas &rarr;
                </Link> */}
            </div>
        </div>
    </section>
  )
}

export default PlanCoreAreasSection