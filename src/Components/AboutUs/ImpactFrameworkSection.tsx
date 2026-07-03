import { IMPACT_FRAMEWORK_DATA } from "../../data"

const ImpactFrameworkSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f]">Impact Framework</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-[#bc961f]">How we track progress toward a blissful world.</p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {IMPACT_FRAMEWORK_DATA.map(quad => (
                    <div key={quad.title} className="bg-[#fdf6e3] p-8 rounded-lg">
                        <h3 className="text-2xl font-bold text-[#bc961f] mb-4">{quad.title}</h3>
                        <ul className="space-y-2">
                            {quad.items.map(item => (
                                <li key={item} className="flex items-start">
                                    <span className="text-[#bc961f] mr-2 mt-1">&#10003;</span>
                                    <span className="text-[#bc961f] capitalize">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ImpactFrameworkSection