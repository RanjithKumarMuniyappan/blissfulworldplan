
import { CheckCircleIcon } from '../../icons';

const WhyNowSection = () => {
  const points = [
        "Stress, isolation, and burnout are rising; people need a clear, proven path back to balance.",
        "Attention overload weakens focus and emotional steadiness.",
        "Many want wellbeing that goes beyond quick fixes."
    ];
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div>
                         <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f] mb-8">Why this now</h2>
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
                        <img src="assets/plan/Why this now.webp" alt="A person finding a moment of calm and balance amidst a busy life" className="rounded-lg shadow-xl w-full h-auto object-cover" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyNowSection