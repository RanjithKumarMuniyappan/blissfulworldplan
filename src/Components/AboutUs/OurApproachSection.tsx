import { OUR_APPROACH_DATA } from "../../data"

const OurApproachSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f] mb-8">How the Plan Works</h2>
                <div className="grid grid-cols-1 gap-x-12 gap-y-8">
                    {OUR_APPROACH_DATA.map(item => (
                        <div key={item.title}>
                            <h3 className="text-xl font-bold text-[#bc961f] mb-2">{item.title}</h3>
                            <p className="text-[#bc961f]">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <img src="assets/aboutus/How the Plan Works.webp" alt="People participating in a community workshop, illustrating the plan's approach" className="rounded-lg shadow-xl w-full h-full max-h-[600px] object-cover" loading="lazy" />
            </div>
        </div>
    </section>
  )
}

export default OurApproachSection