

const JoinHeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[400px] flex items-center justify-center text-center text-white bg-gray-500">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img src="assets/joinus/Join the Movement.webp" alt="A diverse and happy community working together" className="absolute inset-0 w-full h-full object-cover object-right" loading="eager"/>
        <div className="relative z-10 p-6">
            <h1 className="text-4xl md:text-6xl font-bold !leading-tight tracking-tight">Join the Movement</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Become part of a global community dedicated to creating a more balanced, peaceful, and sustainable world—starting with you.</p>
        </div>
    </section>
  )
}

export default JoinHeroSection