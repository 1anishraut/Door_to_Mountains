import React, { useEffect, useRef } from 'react'
//Images
import image_1 from "/about1.jpg"
import image_2 from "/about2.jpg";
import gsap from 'gsap';


const About = ({ para1, para2, para3, para4 }) => {
  const photoRef1 = useRef(null)
  const photoRef2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      photoRef1.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        delay: 1,
        
      }
    );
    gsap.fromTo(
      photoRef2.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power4.inOut", delay: 1 }
    );

    gsap.fromTo(
      ".para",
      { opacity: 0, },
      { opacity: 1, duration: 2, stagger: 0.3, delay: 1.7, ease: "power2.out" }
    );
  }, []);

  return (
    <div id='about' className="text-[#221414] max-w-7xl flex flex-col gap-2 lg:gap-10 w-full self-center relative md:mt-5 px-8 md:flex-row md:justify-between ">

      <div className="mt-10 md:mt-0 md:w-[650px]">
        <h2 className=" para font-semibold text-2xl pb-2">
          Tracking, Nature, Adventure
        </h2>
        <p className="para text-[18px]">{para3}</p>
        <p className="para text-[#221414b0] text-[15px]">{para2}</p>
      </div>
      <div className=" h-[300px] md:h-[330px] lg:h-[400px] relative m-4 md:m-0 w-[80%] max-w-[500px] self-center ">
        <img
          ref={photoRef1}
          src={image_1}
          alt=""
          className="absolute top-0 left-0 h-auto z-20 w-[180px] lg:w-[240px] rounded-2xl shadow-black shadow-2xl"
        />
        <img
          ref={photoRef2}
          src={image_2}
          alt=""
          className="absolute bottom-0 right-0 h-auto z-10 w-[180px] lg:w-[240px] rounded-2xl shadow-black shadow-2xl"
        />
      </div>
    </div>
  );
};

export default About