
const GettingStartedSection = () => {
  const steps = [
        { title: "Start small", description: "pick one practice from Consciousness + one from Body." },
        { title: "Add support", description: "join a Circle for accountability." },
        { title: "Expand", description: "include Mind and Relationships in week 2–3." },
        { title: "Align", description: "add Purpose and Planet habits in week 4." },
        { title: "Sustain", description: "review monthly; keep what works; grow gradually." }
    ];

    return (
        <section className="relative py-16 md:py-24">
            <div className="absolute inset-0">
                <img src="https://picsum.photos/seed/getting-started-path/1920/1080" alt="A winding path through a peaceful forest, representing a journey" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
            </div>
            <div className="container mx-auto px-6 max-w-4xl relative">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f]">Getting started</h2>
                </div>
                <div className="relative pl-16">
                    <div className="absolute top-0 left-0 h-full w-0.5 bg-gray-200 ml-[23px]"></div>
                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex items-start">
                                <div className="absolute -left-16 bg-[#bc961f] text-white h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl z-10 ring-8 ring-white/90">{index + 1}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#bc961f]">{step.title}</h3>
                                    <p className="mt-1 text-lg text-[#bc961f]">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GettingStartedSection