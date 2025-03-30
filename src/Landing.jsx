import React from "react";

//Images
import LandingVideo from "/Landing.mp4";

const Landing = () => {
  return (
    <div>
      <div id="landing" className="landing h-[60vh] text-[white] relative ">
        <div className="w-full h-full flex flex-col justify-end items-start">
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            src={LandingVideo}
            className="absolute w-full h-full object-cover z-[-2] left-0 top-0"
          ></video>

          <div className=" w-full pl-4 lg:pl-10">
            <h1 className="landingText  text-[#c7e8f7] font-Gilroy-Black ">
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
