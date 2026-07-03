

import { BookmarkIcon } from '../../icons'

const PracticeOfTheDaySection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-lg">
            <div className="bg-gray-50 rounded-lg shadow-subtle p-8 border border-gray-200 relative">
                <BookmarkIcon className="h-8 w-8 text-[#bc961f] absolute top-6 right-6" />
                <h2 className="text-3xl font-bold text-[#bc961f]">Practice of the Day</h2>
                <p className="mt-4 text-lg text-[#bc961f]">A small step you can keep—today and every day.</p>
                <div className="mt-6 p-4 bg-[#fdf6e3] rounded-md">
                    <p className="text-[#bc961f] font-semibold">60-second pause before meals. Notice breath; give thanks.</p>
                </div>
                {/* <div className="mt-8">
                    <Link to="/practices" className="font-semibold text-[#bc961f] hover:text-[#a6801b] transition-colors">
                        Explore Practices &rarr;
                    </Link>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default PracticeOfTheDaySection