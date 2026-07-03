
import { CheckCircleIcon } from '../../icons';

const WhyWorldNeedsThisSection = () => {
  const points = [
        "Health challenges and polarization require a holistic, human-centered response.",
        "Communities need tools that strengthen empathy and cooperation.",
        "Environmental strain calls for everyday sustainable habits."
    ];
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div className="md:order-last">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f] mb-8">Why the world needs this</h2>
                        <div className="space-y-6">
                            {points.map((point, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <CheckCircleIcon className="h-8 w-8 text-[#bc961f] flex-shrink-0 mt-1" />
                                    <p className="text-lg text-[#bc961f]">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div>
                        <img src="assets/plan/Why the world needs this.webp" alt="A diverse group of people working together on a community project" className="rounded-lg shadow-xl w-full h-auto object-cover" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyWorldNeedsThisSection