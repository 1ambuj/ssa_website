import { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom'
import WhatsAppIcon from '../assets/whatsapp.png';
import LinkedInIcon from '../assets/linkedin.png';
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';
import Logo from '../assets/download.png';
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef();


  useEffect(() => {
    function handleClick(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top bar: logo, search, socials */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center space-x-4">
  <Link to="/" className="flex items-center gap-3 group">
    {/* Logo with rounded and shadow effect */}
    <img 
      src={Logo} 
      alt="Logo" 
      className="w-15
        rounded-md shadow-md transition-transform duration-300 group-hover:scale-110 p-2"
    />
       {/* Text section */}
       <div className="hidden sm:flex flex-col">
        <div className="text-lg font-bold text-[#145886] tracking-wide transition-colors duration-300 group-hover:text-[#0f3b57]">
         Sandeep Singla & Associates
        </div>
        <div className="text-sm text-gray-500">
           Chartered Accountants
        </div>
        </div>
        </Link>
         </div>


            <div className="flex-1 px-4">
              <div className="hidden md:flex items-center justify-center">
               <div className="w-full max-w-lg mx-auto">
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    className="block w-full rounded-full bg-gray-100 py-3 pl-4 pr-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#145886] focus:border-[#145886] transition"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    {/* Proper SVG search icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.414l-4.387-4.386zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </div>
                </label>
                </div>


              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center space-x-3">
                <a href="https://www.facebook.com/sandeepsinglaca" className="text-gray-500 hover:text-[#145886]"><img src={Facebook} alt="" className="w-[30px]"/></a>
                <a href="https://x.com/casandeepsingla" className="text-gray-500 hover:text-[#145886]"><img src={Twitter} alt="" className="w-[30px]"/></a>
                <a href="https://www.linkedin.com/in/casandeepsingla/" className="text-gray-500 hover:text-[#145886]"><img src={LinkedInIcon} alt="" className="w-[30px]"/></a>
                <a href="https://api.whatsapp.com/send?phone=919560181790&text=Hello%F0%9F%98%80" className="text-gray-500 hover:text-[#145886]"><img src={WhatsAppIcon} alt=""className="w-[30px]"/></a>
              </div>
              <div className="md:hidden">
                <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-md text-gray-600 hover:bg-gray-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary nav bar */}
      <div className="bg-[#145886]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 text-white">
            <nav className="flex items-center gap-7 text-base font-medium">
              <div ref={servicesRef} className="relative pl-2">
                <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-2 transition transform hover:scale-105">
                  <span>Services</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {servicesOpen && (
                <div className="absolute left-0 mt-3 w-50 bg-white text-gray-800 shadow-lg py-2 z-50">
                <Link 
                  to="/services/audit" 
                  className="block px-4 py-2 hover:bg-gray-300 hover:text-[#145886] border-l-4 border-transparent hover:border-[#F37920]"
                >
                  Audit & Assurance
                </Link>
                <Link 
                  to="/services/advisory" 
                  className="block px-4 py-2 hover:bg-gray-300 hover:text-[#145886] border-l-4 border-transparent hover:border-[#F37920]"
                >
                  Advisory
                </Link>
                <Link 
                  to="/services/taxation" 
                  className="block px-4 py-2 hover:bg-gray-300 hover:text-[#145886] border-l-4 border-transparent hover:border-[#F37920]"
                >
                  Taxation
                </Link>
                <Link 
                  to="/services/gst" 
                  className="block px-4 py-2 hover:bg-gray-300 hover:text-[#145886] border-l-4 border-transparent hover:border-[#F37920]"
                >
                  GST
                </Link>
                <Link 
                  to="/services/nri" 
                  className="block px-4 py-2 hover:bg-gray-300 hover:text-[#145886] border-l-4 border-transparent hover:border-[#F37920]"
                >
                  Services for non-resident
                </Link>
                <Link 
                  to="/services/bpo" 
                  className="block px-4 py-2 hover:bg-gray-300 hover:text-[#145886] border-l-4 border-transparent hover:border-[#F37920]"
                >
                  Business Process Outsourcing
                </Link>
              </div>
              
               
                )}

              </div>
              <Link to="/about" className="hover:border-b-2 hover:border-[#F37920] transition font-[Montserrat]transform hover:scale-105">About us</Link>
              <Link to="/blog" className="hover:border-b-2 hover:border-[#F37920] transition transform hover:scale-105">Blog</Link>
              <Link to="/contact" className="hover:border-b-2 hover:border-[#F37920] transition transform hover:scale-105">Contact us</Link>
            </nav>

            <div className="flex items-center gap-7 text-base font-medium">
              <Link to="/feedback" className="hover:border-b-2 hover:border-[#F37920] transition transform hover:scale-105">Feedback</Link>
              <Link to="/careers" className="hover:border-b-2 hover:border-[#F37920] transition transform hover:scale-105">Careers</Link>
              <Link to="/knowledge" className="hover:border-b-2 hover:border-[#F37920] transition transform hover:scale-105">Knowledge Hub</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile stacked menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-2">
            <Link to="/services" className="block text-gray-700">Services</Link>
            <Link to="/about" className="block text-gray-700">About us</Link>
            <Link to="/blog" className="block text-gray-700">Blog</Link>
            <Link to="/contact" className="block text-gray-700">Contact us</Link>
            <div className="border-t pt-2 mt-2">
              <Link to="/feedback" className="block text-gray-700">Feedback</Link>
              <Link to="/careers" className="block text-gray-700">Careers</Link>
              <Link to="/knowledge" className="block text-gray-700">Knowledge Hub</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
