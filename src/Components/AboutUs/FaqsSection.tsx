import { FAQ_DATA } from "../../data"


const FaqsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-start">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f] mb-8">Frequently Asked Questions</h2>
                <div className="space-y-8">
                    {FAQ_DATA.map(faq => (
                        <div key={faq.q}>
                            <h3 className="text-xl font-bold text-[#bc961f]">{faq.q}</h3>
                            <p className="mt-2 text-lg text-[#bc961f]">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
             <div className="mt-8 md:mt-0">
                <img src="assets/aboutus/Frequently Asked Questions.webp" alt="An approachable person smiling, ready to answer questions" className="rounded-lg shadow-xl w-full h-full max-h-[600px] object-cover" loading="lazy" />
            </div>
        </div>
    </section>
  )
}

export default FaqsSection