import { LeafIcon } from '../../icons';
import Button from '../../CommonComponents/Button';

const SustainabilityPledgeSection = () => {
  const pledges = [
        "Carry a bottle",
        "Fix, don’t toss",
        "10-minute clean-up"
    ];

    return (
        <section className="py-16 md:py-24 bg-[#fdf6e3]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <LeafIcon className="h-12 w-12 text-[#bc961f] mx-auto" />
                    <h2 className="text-3xl font-bold text-[#bc961f] mt-4">The Sustainability Pledge</h2>
                    <p className="mt-4 text-lg text-[#bc961f]">Choose one simple habit this week—reuse, repair, or refuse single-use.</p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
                        {pledges.map((pledge, index) => (
                             <div key={index} className="flex items-center">
                                <input id={`pledge-${index}`} name={`pledge-${index}`} type="checkbox" className="h-5 w-5 text-[#bc961f] focus:ring-[#a6801b] border-gray-400 rounded" />
                                <label htmlFor={`pledge-${index}`} className="ml-3 text-lg font-medium text-[#bc961f]">{pledge}</label>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Button to="/join" variant="primary">Take the Pledge</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SustainabilityPledgeSection