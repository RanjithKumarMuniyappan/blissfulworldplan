
import Button from '../../CommonComponents/Button'

const AboutHeroSection = () => {
    return (
        <section className="relative h-[80vh] min-h-[400px] flex items-center justify-center text-center text-white bg-gray-500">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <img src="assets/aboutus/About Us Headers.webp" alt="Inclusive group in a calm, natural setting with warm light" className="absolute inset-0 w-full h-full object-cover object-right" loading="eager" />
            <div className="relative z-10 p-6">
                <h1 className="text-4xl md:text-6xl font-bold !leading-tight tracking-tight">About the Blissful World Plan</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">A people-first plan to nurture inner balance, clear minds, healthy bodies, caring relationships, meaningful purpose, and a sustainable planet.</p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button to="/join" variant="primary" className="w-full sm:w-auto">Join Us</Button>
                    <Button to="/plan" variant="ghost" className="w-full sm:w-auto">See the Plan</Button>
                </div>
            </div>
        </section>
    )
}

export default AboutHeroSection