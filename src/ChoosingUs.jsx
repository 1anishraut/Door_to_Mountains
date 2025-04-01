import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//Images
import trust from "/trust.png"
import travelPartnet from "/travelPartner.png"
import support from "/support.png"

const ChoosingUs = () => {
  const supportRef = useRef(null);
  
        
        //GSAP
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
        supportRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          ease: "power3.in",
          delay: 0,

          scrollTrigger: {
            trigger: supportRef.current,
            start: isDesktop ? "top 80%" : "top 90%", // ✅ Mobile starts from bottom 80%
            end: isDesktop ? "bottom 80%" : "top 95%",
            toggleActions: "restart    none    none        none",
            // markers: true,
          },
        }
      );
       gsap.fromTo(
         ".paraBox",
         { scale: 0, opacity: 0 },
         {
           scale: 1,
           opacity: 1,
           duration: 1,
           stagger: 0.3,
           delay: 0.3,
           ease: "power2.out",
           scrollTrigger: {
             trigger: supportRef.current,
             start: isDesktop ? "top 80%" : "top 70%", // ✅ Mobile starts from bottom 80%
             end: isDesktop ? "bottom 80%" : "top 95%",
             toggleActions: "restart    none    none        none",
            //  markers: true,
           },
         }
       );
    }
  );

  return () => mm.revert(); // Cleanup on unmount
}, []);



  return (
    <div
      ref={supportRef}
      className="w-full max-w-7xl self-center flex flex-col p-8 md:gap-2 text-[#221414] relative"
    >
      <h2 className=" text-2xl md:text-3xl font-semibold ">
        Reasons For Choosing Us
      </h2>
      <p className="text-gray-600 text-[15px]">
        Choosing the right travel partner is key to a smooth and memorable
        journey. Our dedicated support team ensures a stress-free experience,
        from planning your itinerary to assisting you on the go.
      </p>
      <div className="flex justify-between mt-8 gap-3 md:gap-10 lg:gap-20 ">
        <div
          
          className="paraBox flex flex-col items-center gap-1 rounded-md py-2 md:py-14 "
        >
          <div className="bg-[#263D47] rounded-full">
            <img
              src={trust}
              alt=""
              className="invert p-2 h-[30px] md:h-[50px] "
            />
          </div>
          <p className="text-[11px] md:text-xl font-semibold md:mt-3 ">
            Tried & Trusted
          </p>
          <p className="text-[10px] md:text-sm text-center">
            We are trusted nationwide by 100 travelers just like you.
          </p>
        </div>
        <div
          
          className="paraBox flex flex-col items-center gap-1 rounded-md p-2 md:p-4 md:py-14  shadow-black shadow-2xl"
        >
          <div className="bg-[#263D47] rounded-full">
            <img
              src={support}
              alt=""
              className="invert p-2 h-[30px] md:h-[50px]"
            />
          </div>
          <p className="text-[11px]  md:text-xl font-semibold md:mt-3">
            Reliable Support
          </p>
          <p className="text-[10px] md:text-sm text-center">
            We are here for you. Reach out to us anytime by phone, email, or
            chat.
          </p>
        </div>
        <div className="paraBox flex flex-col items-center gap-1  rounded-md py-2 md:py-14 ">
          <div className="bg-[#263D47] rounded-full">
            <img
              src={travelPartnet}
              alt=""
              className="invert p-2 h-[30px] md:h-[50px]"
            />
          </div>
          <p className="text-[11px] md:text-xl font-semibold md:mt-3">
            Travel Partner{" "}
          </p>
          <p className="text-[10px] md:text-sm text-center">
            Your search ends here. We have got your entire trip convered
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChoosingUs;
