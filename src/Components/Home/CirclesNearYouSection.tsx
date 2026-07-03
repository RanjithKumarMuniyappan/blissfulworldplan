
import Button from '../../CommonComponents/Button';

const CirclesNearYouSection = () => {
  const selectClasses = "w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#bc961f] transition-shadow appearance-none";
    const inputClasses = "w-full px-4 py-3 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#bc961f] transition-shadow";

    return (
    <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div className="md:order-last">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#bc961f]">Join a Local Circle</h2>
                    <p className="mt-4 text-lg text-[#bc961f]">Grow steadily with 6–10 people who meet weekly or fortnightly.</p>
                    <form className="mt-8 space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-[#bc961f] mb-1 sr-only">City/Pin</label>
                                <input type="text" id="location" name="location" placeholder="City or Pin Code" className={inputClasses} />
                            </div>
                             <div>
                                <label htmlFor="format" className="block text-sm font-medium text-[#bc961f] mb-1 sr-only">Format</label>
                                <div className="relative">
                                    <select id="format" name="format" className={selectClasses}>
                                        <option>In-person/Online</option>
                                        <option>In-person</option>
                                        <option>Online</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#bc961f]">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                             <label htmlFor="day" className="block text-sm font-medium text-[#bc961f] mb-1 sr-only">Day of week</label>
                             <div className="relative">
                                <select id="day" name="day" className={selectClasses}>
                                    <option>Any Day of the Week</option>
                                    <option>Monday</option>
                                    <option>Tuesday</option>
                                    <option>Wednesday</option>
                                    <option>Thursday</option>
                                    <option>Friday</option>
                                    <option>Saturday</option>
                                    <option>Sunday</option>
                                </select>
                                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#bc961f]">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div>
                           <Button to="/join" variant="primary" className="w-full">Find a Circle</Button>
                        </div>
                    </form>
                </div>
                <div>
                     <img src="assets/home/Join a Local Circle.webp" alt="A small group of diverse people in a supportive circle meeting" className="rounded-lg shadow-xl w-full h-auto object-cover" loading="lazy" />
                </div>
            </div>
        </div>
    </section>
)
}

export default CirclesNearYouSection