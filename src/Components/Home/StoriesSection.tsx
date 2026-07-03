import  { useEffect, useState } from 'react'
import { STORIES_DATA } from '../../data';

const StoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % STORIES_DATA.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                 <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f]">Community Voices</h2>
                 <div className="relative mt-12 max-w-3xl mx-auto h-40 flex items-center">
                     {STORIES_DATA.map((story, index) => (
                         <div key={index} className="absolute w-full transition-opacity duration-500 ease-in-out" style={{ opacity: index === currentIndex ? 1 : 0 }}>
                            <blockquote className="text-2xl italic text-[#bc961f]">"{story.quote}"</blockquote>
                            <cite className="block mt-4 text-[#bc961f] not-italic">&mdash; {story.author}</cite>
                         </div>
                     ))}
                 </div>
                 <div className="mt-4 flex justify-center space-x-2">
                    {STORIES_DATA.map((_, index) => (
                        <button key={index} onClick={() => setCurrentIndex(index)} aria-label={`Go to story ${index + 1}`} className={`h-3 w-3 rounded-full transition-colors ${currentIndex === index ? 'bg-[#bc961f]' : 'bg-gray-300 hover:bg-gray-400'}`}></button>
                    ))}
                 </div>
                 {/* <div className="mt-12">
                    <a href="#" className="font-semibold text-[#bc961f] hover:text-[#a6801b] transition-colors">
                        Read more stories &rarr;
                    </a>
                 </div> */}
            </div>
        </section>
    );
}

export default StoriesSection