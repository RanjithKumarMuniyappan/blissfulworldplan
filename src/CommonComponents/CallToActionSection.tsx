import Button from "./Button";




interface CallToActionProps {
    title: string;
    description: string;
}

const CallToActionSection: React.FC<CallToActionProps> = ({ title, description }) => {
  return (
    <section className="bg-[#fdf6e3]">
        <div className="container mx-auto px-6 py-16 text-center">
             <h2 className="text-3xl font-bold text-[#bc961f]">{title}</h2>
             <p className="mt-4 max-w-2xl mx-auto text-[#bc961f]">{description}</p>
             <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button to="/join" variant="primary" className="w-full sm:w-auto">Join Us</Button>
                {/* <Button to="/contact" variant="ghost" className="w-full sm:w-auto">Contact</Button> */}
            </div>
        </div>
    </section>
  )
}

export default CallToActionSection