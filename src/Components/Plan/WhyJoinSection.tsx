import { CheckCircleIcon } from "../../icons";

const WhyJoinSection = () => {
  const points = [
        "Gain simple routines for peace, focus, vitality and overall progress in life.",
        "Improve relationships through empathy and communication practices.",
        "Align talents with purpose—and contribute meaningfully.",
        "Be part of local circles that sustain consistency."
    ];
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f]">Why join</h2>
                </div>
                <div className="space-y-6">
                    {points.map((point, index) => (
                        <div key={index} className="flex items-start space-x-4">
                             <CheckCircleIcon className="h-8 w-8 text-[#bc961f] flex-shrink-0 mt-1" />
                            <p className="text-lg text-[#bc961f]">{point}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyJoinSection