
const WhoItsForSection = () => {
  const audience = [
        { name: "Students & Young Adults", benefit: "clarity, resilience, and direction." },
        { name: "Working Professionals", benefit: "balance, energy, and calm focus." },
        { name: "Parents & Families", benefit: "harmony, routines, and shared values." },
        { name: "Educators & Institutions", benefit: "scalable wellbeing practices." },
        { name: "Communities & Groups", benefit: "simple frameworks for joint action." }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div>
                         <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f] mb-12 text-center lg:text-left">Who it’s for</h2>
                        <div className="space-y-6">
                            {audience.map((item) => (
                                <div key={item.name} className="p-6 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="font-bold text-xl mb-2 text-[#bc961f]">{item.name}</h3>
                                    <p className="text-[#bc961f]">{item.benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <img src="assets/plan/Who it’s for.webp" alt="A diverse group of people of different ages and backgrounds looking content" className="rounded-lg shadow-xl w-full h-full max-h-[600px] object-cover" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhoItsForSection