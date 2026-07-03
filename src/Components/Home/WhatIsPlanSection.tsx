import { Link } from "react-router-dom"


const WhatIsPlanSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f]">What is the Blissful World Plan?</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-[#bc961f]">The Blissful World Plan is a people-first blueprint for living well. It nurtures inner awareness, clear minds, healthy bodies, caring relationships, meaningful purpose, and a sustainable planet—so every life can truly thrive.</p>
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
             <div className="mt-8">
                <Link to="/plan" className="font-semibold text-[#bc961f] hover:text-[#a6801b] transition-colors">
                    Learn about the Plan &rarr;
                </Link>
            </div>
        </div>
    </section>
  )
}

export default WhatIsPlanSection