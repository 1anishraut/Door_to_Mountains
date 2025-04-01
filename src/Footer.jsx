import React, { useEffect, useRef, useState } from "react";
// import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll"; // Import Locomotive Scroll
import "locomotive-scroll/dist/locomotive-scroll.css";
//Images
import logo from "/logo.png"
import gitHub from "/github-gray.svg";
import linkedIn from "/linkedin-gray.svg";
import mail from "/mail-gray.svg";
import insta from "/instagram-gray.svg";


const Footer = () => {
  const logoRef = useRef(null);
    const logoText = useRef(null);
  useEffect(() => {
    let mm = gsap.matchMedia(); // Create a media query instance

    mm.add(
      {
        isMobile: "(max-width: 768px)", // Mobile devices
        isDesktop: "(min-width: 769px)", // Desktop devices
      },
      (context) => {
        let { isMobile, isDesktop } = context.conditions;

       gsap.fromTo(
         logoRef.current,
         { width: 0, opacity: 0 },
         {
           width: 170,
           opacity: 1,
           duration: 1,
           ease: "power4.inOut",
           delay: 0.7,
           scrollTrigger: {
             trigger: logoRef.current,
             start: isDesktop ? "top 80%" : "bottom 65%", // ✅ Mobile starts from bottom 80%
             end: isDesktop ? "bottom 80%" : "bottom 95%",
             toggleActions: "restart none none none",
            //  markers: true,
           },
         }
       );
       gsap.fromTo(
         logoText.current,
         { opacity: 0 },
         {
           opacity: 1,
           duration: 1,
           ease: "power3.inOut",
           delay: 1,
           scrollTrigger: {
             trigger: logoRef.current,
             start: isDesktop ? "top 80%" : "bottom 65%", // ✅ Mobile starts from bottom 80%
             end: isDesktop ? "bottom 80%" : "bottom 95%",
             toggleActions: "restart none none none",
            //  markers: true,
           },
         }
        );
        gsap.fromTo(
          ".elem",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 2,
            stagger: 0.3,
            delay: .4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: logoRef.current,
              start: isDesktop ? "top 80%" : "bottom 45%", // ✅ Mobile starts from bottom 80%
              end: isDesktop ? "bottom 80%" : "bottom 45%",
              toggleActions: "restart none none none",
              //  markers: true,
            },
          }
        );
      }
    );

    return () => mm.revert(); // Cleanup on unmount
  }, []);
  

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
          <div className="text-[#c7e8f7] text-xl font-bold relative flex items-center text-[15px] ">
            <div className="bg-[#c7e8f7]">
              <img src={logo} alt="" className="h-[37px] " />
            </div>

            <div
              ref={logoRef}
              className="border-b-3 border-t-3 border-r-3 border-[#c7e8f7] h-[37px]  p-1 flex justify-center"
            >
              <p ref={logoText} className="self-end md:text-sm">
                Door to Mountains
              </p>
            </div>
          </div>
          <p className="elem mt-4 text-gray-400">
            We are committed to offering travel services of the highest quality,
            combining our energy and enthusiasm, withh our years of experience.
          </p>
        </div>
        {/* Links */}
        <div className="elem flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">Useful Links</h3>
            <ul className="mt-2 text-gray-400 space-y-2">
              <li>Stays</li>
              <li>Flights</li>
              <li>Cars</li>
              <li>Things to do</li>
            </ul>
          </div>
          <div className="elem">
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
        <div className="elem">
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
      <div className="elem mt-8 border-t border-gray-400 pt-6 flex flex-col md:flex-row items-center justify-between">
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
