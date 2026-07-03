
import { JOIN_BENEFITS_DATA } from '../../data'

const JoinBenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f]">Your Path to a Balanced Life Starts Here</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-[#bc961f]">When you join, you get access to the tools and community to support your journey.</p>
            </div>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {JOIN_BENEFITS_DATA.map(item => (
                    <div key={item.title} className="flex items-start space-x-6">
                        <div className="flex-shrink-0 bg-[#fdf6e3] p-4 rounded-full">
                           <item.icon className="h-8 w-8 text-[#bc961f]" />
                        </div>
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

export default JoinBenefitsSection