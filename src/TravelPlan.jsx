import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//Image
import flight from "/flight-takeoff-line.png";
import activity from "/walk-line.png";
import map from "/map-2-fill.png";
import TravelPlanPopup from "./TravelPlanPopup";


const bgImage =
  "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const TravelPlan = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

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
          leftRef.current,
          { x: -400, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "bounce.out",
            delay: 0.2,

            scrollTrigger: {
              trigger: leftRef.current,
              start: isDesktop ? "top 80%" : "bottom 80%", // ✅ Mobile starts from bottom 80%
              end: isDesktop ? "bottom 80%" : "bottom 95%",
              toggleActions: "restart    none    none        none",
              // markers: true,
            },
          }
        );
        gsap.fromTo(
          rightRef.current,
          { x: 400, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "bounce.out",
            delay: 0.2,

            scrollTrigger: {
              trigger: leftRef.current,
              start: isDesktop ? "top 80%" : "bottom 80%", // ✅ Mobile starts from bottom 80%
              end: isDesktop ? "bottom 80%" : "bottom 95%",
              toggleActions: "restart    none    none        none",
              //  markers: true,
            },
          }
        );
      }
    );

    return () => mm.revert(); // Cleanup on unmount
  }, []);




  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div
      id="travel-plan"
      className="max-w-7xl w-full self-center p-8 text-white relative overflow-hidden"
    >
      <div className=" relative flex flex-col md:flex-row shadow-black shadow-2xl rounded-2xl">
        <div ref={leftRef} className="relative overflow-hidden md:w-1/2">
          <img
            src={bgImage}
            alt=""
            className="rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl w-full h-100 object-cover"
          />
        </div>
        <div ref={rightRef} className="flex flex-col justify-between h-100 p-8 bg-[#263D47] rounded-br-2xl rounded-bl-2xl md:w-1/2 md:rounded-tr-2xl md:rounded-bl-none md:rounded-br-2xl">
          <p className="text-2xl font-semibold md:text-3xl">
            Book a <br></br> ticket & just leave
          </p>
          <p className="text-sm text-[#919191]">
            Escape the routine and explore breathtaking destinations
            effortlessly. Let us handle the details while you enjoy
            unforgettable experiences.
          </p>

          <div className="flex flex-col gap-2 font-semibold text-[#868686] py-5">
            <div className="flex items-center gap-2 ">
              <div className="bg-white p-1 rounded">
                <img src={flight} alt="" className="" />
              </div>
              <p>Travel Arrangements</p>
            </div>
            <div className="flex items-center gap-2 ">
              <div className="bg-white p-1 rounded">
                <img src={activity} alt="" className="" />
              </div>
              <p>Special Activities</p>
            </div>
            <div className="flex items-center gap-2 ">
              <div className="bg-white p-1 rounded">
                <img src={map} alt="" className="" />
              </div>
              <p>Beautiful Places</p>
            </div>
          </div>

          <button
            onClick={() => setIsPopupOpen(true)}
            className=" w-1/2 border border-white py-2 rounded-full hover:bg-[#221414] hover:text-white transition cursor-pointer"
          >
            Travel Plan →
          </button>
        </div>
      </div>
      <div style={{ display: isPopupOpen ? "block" : "none" }}>
        <TravelPlanPopup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
      </div>
    </div>
  );
};

export default TravelPlan;
