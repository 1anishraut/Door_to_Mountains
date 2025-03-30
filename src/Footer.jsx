import React, { useState } from "react";
// import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

//Images
import logo from "/logo.png"
import gitHub from "/github-gray.svg";
import linkedIn from "/linkedin-gray.svg";
import mail from "/mail-gray.svg";
import insta from "/instagram-gray.svg";


const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert("Subscribed successfully!");
      setEmail("");
    } else {
      alert("Please enter a valid email ID");
    }
  };

  return (
    <footer
      id="contact"
      className="bg-[#263D47] text-white py-10 px-6 md:px-20"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <div className="text-[#c7e8f7] text-xl font-bold relative flex items-center text-[15px]">
            <div className="bg-[#c7e8f7]">
              <img src={logo} alt="" className="h-[37px]" />
            </div>

            <div className="border-b-3 border-t-3 border-r-3 border-[#c7e8f7] h-[37px] p-1">
              <p className="self-end">Door to Mountains</p>
            </div>
          </div>
          <p className="mt-4 text-gray-400">
            We are committed to offering travel services of the highest quality,
            combining our energy and enthusiasm, withh our years of experience.
          </p>
        </div>
        {/* Links */}
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">Useful Links</h3>
            <ul className="mt-2 text-gray-400 space-y-2">
              <li>Stays</li>
              <li>Flights</li>
              <li>Cars</li>
              <li>Things to do</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-2 text-gray-400 space-y-2">
              <li>License</li>
              <li>Refund Policy</li>
              <li>About Us</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold">Subscribe to our Newsletter</h3>
          <div className="flex items-center bg-[#3a5f6e] p-2 mt-4 rounded-full w-full">
            <input
              type="email"
              placeholder="Enter your email ID"
              className="bg-transparent flex-1 p-2 outline-none text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubscribe}
              className="bg-[#c7e8f7] p-3 w-[45px] h-[45px] rounded-full text-black"
            >
              ➜
            </button>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-400 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-400">Design & Developed by || Anish Raut</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/1anishraut" target="_blank">
            <img
              className="h-[35px] border-2 border-[#ABABAB] rounded-full p-1 hover:scale-110"
              src={gitHub}
              alt=""
            />
          </a>
          <a href="https://linkedin.com/in/anish-raut" target="_blank">
            <img
              className="h-[35px] border-2 border-[#ABABAB] rounded-full p-1 hover:scale-110"
              src={linkedIn}
              alt=""
            />
          </a>
          <a href="mailto:anishraut.555@gmail.com" target="_blank">
            <img
              className="h-[35px] border-2 border-[#ABABAB] rounded-full p-1 hover:scale-110"
              src={mail}
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/anish_raut/" target="_blank">
            <img
              className="h-[35px] border-2 border-[#ABABAB] rounded-full p-1 hover:scale-110"
              src={insta}
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
