import { Link } from "react-router-dom";


const Footer: React.FC = () => {
    const footerLinks = ['About', 'The Plan', 'Join'];
    

    return (
        <footer className="bg-gray-100">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-bold text-[#bc961f]">
                            <span className="text-[#bc961f]">Blissful</span>World
                        </h2>
                        <p className="mt-2 text-[#bc961f]">A plan for health, peace, and harmony.</p>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-semibold text-[#bc961f]">Navigate</h3>
                            <ul className="mt-4 space-y-2">
                                {footerLinks.map(link => (
                                    <li key={link}>
                                        <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-[#bc961f] hover:text-[#bc961f] hover:font-bold">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* <div>
                            <h3 className="font-semibold text-[#bc961f]">Legal</h3>
                            <ul className="mt-4 space-y-2">
                                {legalLinks.map(link => (
                                    <li key={link}>
                                        <a href="#" className="text-[#bc961f] hover:text-[#bc961f] hover:font-bold">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                         {/* <div>
                            <h3 className="font-semibold text-[#bc961f]">Connect</h3>
                             <div className="flex mt-4 space-x-4">
                                {SOCIAL_LINKS.map(social => (
                                    <a key={social.name} href={social.href} aria-label={social.name} className="text-gray-500 hover:text-[#bc961f] hover:font-bold">
                                        <social.icon className="h-6 w-6" />
                                    </a>
                                ))}
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
                    <p className="text-[#bc961f] font-bold">&copy; {new Date().getFullYear()} Blissful World Plan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;