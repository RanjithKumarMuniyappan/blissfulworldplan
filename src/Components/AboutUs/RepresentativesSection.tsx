import { REPRESENTATIVES_DATA } from "../../data"

const RepresentativesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f]">Meet Our Global Representatives</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-[#bc961f]">A dedicated team across the world, guiding communities toward a blissful life.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {REPRESENTATIVES_DATA.map(rep => (
                    <div key={rep.id} className="flip-card">
                        <div className="flip-card-inner shadow-lg rounded-lg">
                            <div className="flip-card-front">
                                <img src={rep.imageUrl} alt={`Representative ${rep.name}`} className="w-full h-full object-cover" loading="lazy" />
                            </div>
                            <div className="flip-card-back">
                                <h3 className="font-bold text-lg">{rep.name}</h3>
                                <p className="text-sm">{rep.location}, {rep.country}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default RepresentativesSection