

const StoryInspirationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-last">
                <img src="assets/aboutus/Where the Plan Comes From.webp" alt="Symbolic image of timeless wisdom, like an old tree or a peaceful teacher" className="rounded-lg shadow-xl w-full h-full max-h-[600px] object-cover" loading="lazy" />
            </div>
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f]">Where the Plan Comes From</h2>
                <p className="mt-6 text-lg text-[#bc961f]">
                    Inspired by timeless wisdom as brought to light by His Holiness Maharishi Mahesh Yogi Ji and guided by Ved Vidya Martand Brahmachari Girish Ji, the plan translates essential principles into modern, usable practices—clear instructions, short routines, and supportive group experiences.
                </p>
            </div>
        </div>
    </section>
  )
}

export default StoryInspirationSection