import Button from "../../CommonComponents/Button"
import { CORE_AREAS_DATA } from "../../data"



const CoreAreasSection = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f]">Core Areas of the Plan</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CORE_AREAS_DATA.map(area => (
                        <div key={area.title} className="bg-[#fdf6e3] p-8 rounded-lg shadow-subtle hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                {/* <area.icon className="h-8 w-8 text-[#bc961f]" /> */}
                                <div className="core_area_icon_container">
                                    <img src={area.icon} alt="" />
                                </div>
                                <h3 className="text-xl font-bold ml-4 text-[#bc961f]">{area.title}</h3>
                            </div>
                            <p className="text-[#bc961f]">{area.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button to="/plan#plan_core_area" variant="primary">Explore Core Areas</Button>
                </div>
            </div>
        </section>
    )
}

export default CoreAreasSection