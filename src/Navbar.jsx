import { useState } from "react";
// import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";


//Image 
import logo from "/logo.png"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full p-4  z-10 bg-[#0000002d]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or brand */}
        <div className="text-[#c7e8f7] text-xl font-bold relative flex items-center text-[15px]">
          <div className="bg-[#c7e8f7]">
            <img src={logo} alt="" className="h-[37px]" />
          </div>

          <div className="border-b-3 border-t-3 border-r-3 border-[#c7e8f7] h-[37px] p-1">
            <p className="self-end">Door to Mountains</p>
          </div>
        </div>

        {/* Menu button for mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute md:relative top-full left-0 w-full md:w-auto bg-[#95b5c475] md:bg-transparent md:flex transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center md:flex-row gap-4 md:gap-6 text-[#c7e8f7] p-4 md:p-0">
            <li>
              <Link
                to="landing"
                smooth={true}
                duration={500}
                className="hover:text-gray-300 hover:underline hover:font-semibold cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="blog"
                smooth={true}
                duration={500}
                className="hover:text-gray-300 hover:underline hover:font-semibold cursor-pointer"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-gray-300 hover:underline hover:font-semibold cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-gray-300 hover:underline hover:font-semibold cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="travel-plan"
                smooth={true}
                duration={500}
                className="border border-[#c7e8f7]   px-4 py-2 rounded-md hover:bg-[#c7e8f7] hover:text-black transition"
              >
                Travel Plan →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
