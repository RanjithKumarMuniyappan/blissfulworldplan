import Button from "../../CommonComponents/Button"
import { ACTION_POINTS_DATA } from "../../data"


const WhyThisPlanSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f] mb-8">Why this Plan</h2>
                    <div className="space-y-6">
                        {ACTION_POINTS_DATA.map((point) => (
                            <div key={point.title}>
                                <h3 className="font-bold text-xl mb-2">{point.title}</h3>
                                <p className="text-[#bc961f]">{point.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Button to="/join" variant="primary">Join Us</Button>
                    </div>
                </div>
                 <div>
                    <img src="assets/home/Why this Plan.webp" alt="A diverse group of people connecting and supporting each other in a peaceful setting" className="rounded-lg shadow-xl w-full h-full max-h-[600px] object-cover" loading="lazy" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyThisPlanSection