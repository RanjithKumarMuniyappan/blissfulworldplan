import { DIFFERENTIATORS_DATA } from "../../data"
import { CheckCircleIcon } from "../../icons"

export const WhatMakesThisDifferentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f]">What Makes This Plan Different</h2>
            </div>
            <div className="max-w-5xl mx-auto space-y-8">
                {DIFFERENTIATORS_DATA.map(item => (
                    <div key={item.title} className="flex items-start space-x-4">
                        <CheckCircleIcon className="h-8 w-8 text-[#bc961f] flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold text-[#bc961f]">{item.title}</h3>
                            <p className="text-[#bc961f] mt-1">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
