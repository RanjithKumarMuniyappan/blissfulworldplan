
import { PRACTICES_DATA } from "../../data"
import { CheckCircleIcon } from "../../icons"


const PracticesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
             <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div className="md:order-last">
                     <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f] mb-8">Practices & Programs</h2>
                     <div className="space-y-6">
                         {PRACTICES_DATA.map(practice => (
                            <div key={practice.title} className="flex items-start space-x-4">
                                <CheckCircleIcon className="h-8 w-8 text-[#bc961f] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-[#bc961f]">{practice.title}</h3>
                                    <p className="text-[#bc961f] mt-1">{practice.description}</p>
                                </div>
                            </div>
                         ))}
                     </div>
                     {/* <div className="mt-10">
                        <Link to="/practices" className="font-semibold text-[#bc961f] hover:text-[#a6801b] transition-colors">
                            Explore Practices &rarr;
                        </Link>
                     </div> */}
                </div>
                 <div>
                    <img src="assets/home/Practices & Programs.webp" alt="A person meditating peacefully outdoors, embodying the plan's practices" className="rounded-lg shadow-xl w-full h-full max-h-[600px] object-cover" loading="lazy" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default PracticesSection