import { PLAN_FAQ_DATA } from "../../data"


const PlanFaqsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f]">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-8">
                {PLAN_FAQ_DATA.map(faq => (
                    <div key={faq.q}>
                        <h3 className="text-xl font-bold text-[#bc961f]">{faq.q}</h3>
                        <p className="mt-2 text-lg text-[#bc961f]">{faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default PlanFaqsSection