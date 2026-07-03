// import { Link, NavLink } from "react-router-dom";
// import { NAV_LINKS } from "../constants";
// import Button from "./Button";

// const Header: React.FC = () => {
//   return (
//     <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
//       <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold text-[#bc961f]">
//           <span className="text-[#bc961f]">Blissful</span>World
//         </Link>
//         <div className="hidden md:flex items-center space-x-8">
//           {NAV_LINKS.map(link => (
//             <NavLink
//               key={link.path} 
//               to={link.path}
//               className={({ isActive }) => `text-[#bc961f] hover:text-[#bc961f] hover:font-bold transition-colors ${isActive ? 'text-[#bc961f] font-semibold' : ''}`}
//             >
//               {link.label}
//             </NavLink>
//           ))}
//         </div>
//         <div>
//           <Button to="/join" variant="primary">Join Us</Button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import Button from "./Button";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="logo_main_container text-2xl font-bold text-[#bc961f] flex justify-center items-center">
          {/* <span className="text-[#bc961f]">Blissful</span>World */}
          <div className="bwp_logo_container">
            <img src="assets/logos/BWP_Logo_final.webp" alt="" />
          </div>
          <h1 className="pl-2">Blissful World Plan</h1>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-[#bc961f] hover:text-[#bc961f] hover:font-bold transition-colors ${
                  isActive ? "text-[#bc961f] font-semibold" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Button to="/join" variant="primary" className="joinus_btn">
            Join Us
          </Button>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-[#bc961f] focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-[#bc961f] hover:text-[#bc961f] hover:font-bold transition-colors ${
                    isActive ? "text-[#bc961f] font-semibold" : ""
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;