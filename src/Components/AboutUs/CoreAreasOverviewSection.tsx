import { Link } from "react-router-dom"
import { CORE_AREAS_DATA } from "../../data"

const CoreAreasOverviewSection = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f]">Core Areas</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CORE_AREAS_DATA.map(area => (
                        <div key={area.title} className="text-center p-6">
                            {/* <area.icon className="h-10 w-10 text-[#bc961f] mx-auto" /> */}
                            <div className="h-10 w-10 text-[#bc961f] mx-auto">
                                <img src={area.icon} alt="" />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-[#bc961f]">{area.title}</h3>
                            <p className="mt-2 text-[#bc961f]">{area.description.replace('decisions', 'decision-making')}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link to="/plan/core-areas" className="font-semibold text-[#bc961f] hover:text-[#a6801b] transition-colors">
                        Explore the Core Areas &rarr;
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CoreAreasOverviewSection