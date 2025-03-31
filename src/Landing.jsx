import React, { useEffect, useRef } from "react";
import gsap from "gsap";

//Images
import LandingVideo from "/Landing.mp4";

const Landing = () => {

  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { rotateX: 90, opacity: 0, transformOrigin: "bottom", y: 50 }, // Start lying down
      { rotateX: 0, opacity: 1, y: 0, duration: 2 , delay: 1 } // Stand up smoothly
    );
  }, []);

  return (
    <div>
      <div id="landing" className="landing h-[60vh] text-[white] relative ">
        <div className="w-full h-full flex flex-col justify-end">
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            src={LandingVideo}
            className="absolute w-full h-full object-cover z-[-2] left-0 top-0"
          ></video>

          <div className=" w-full flex items-center justify-center">
            <h1
              ref={textRef}
              className="landingText  text-[#c7e8f7] font-Gilroy-Black "
            >
              Travel{" "}
              <span className="text-3xl md:text-4xl lg:text-6xl xl:text-9xl ">
                with
              </span>{" "}
              Me
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
