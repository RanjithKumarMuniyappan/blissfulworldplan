
import { MEASURING_PROGRESS_DATA } from '../../data';

const MeasuringProgressSection = () => {
  const ArrowUpIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 text-green-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5l7.5-7.5 7.5 7.5" />
        </svg>
    );
    
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f]">Measuring progress</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-lg text-[#bc961f]">Track four dimensions weekly with a simple 1-5 self-score.</p>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {MEASURING_PROGRESS_DATA.map(dim => (
                        <div key={dim.title} className="bg-[#fdf6e3] p-8 rounded-lg">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold text-[#bc961f]">{dim.title}</h3>
                                <div className="flex items-center space-x-1 text-green-600 font-semibold">
                                    <span>Improving</span>
                                    <ArrowUpIcon />
                                </div>
                            </div>
                            <ul className="space-y-2">
                                {dim.items.map(item => (
                                    <li key={item} className="flex items-start">
                                        <span className="text-[#bc961f] mr-2 mt-1">&#10003;</span>
                                        <span className="text-[#bc961f] capitalize">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MeasuringProgressSection