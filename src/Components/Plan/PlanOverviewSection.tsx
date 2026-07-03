

const PlanOverviewSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f]">Overview</h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-[#bc961f]">The Blissful World Plan turns timeless wisdom into simple daily practices and community support. It helps people reduce stress, build clarity, strengthen relationships, live with purpose, and care for the planet—step by step.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="p-4">
                    <h3 className="font-semibold text-xl">Consciousness-based and accessible</h3>
                </div>
                <div className="p-4">
                    <h3 className="font-semibold text-xl">Community-oriented and practical</h3>
                </div>
                <div className="p-4">
                     <h3 className="font-semibold text-xl">Daily practices, real outcomes</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PlanOverviewSection