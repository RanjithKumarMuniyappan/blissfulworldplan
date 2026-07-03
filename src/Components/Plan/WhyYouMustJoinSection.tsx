import Button from "../../CommonComponents/Button"


const WhyYouMustJoinSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f]">Why you must join</h2>
            <p className="mt-6 text-lg text-[#bc961f]">
                Your growth uplifts others. When individuals practice consistently, families, teams, and communities become calmer, kinder, and more capable—creating ripples that benefit the planet.
            </p>
            <div className="mt-10">
                <Button to="/join" variant="primary">Join Us</Button>
            </div>
        </div>
    </section>
  )
}

export default WhyYouMustJoinSection