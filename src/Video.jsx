import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Images
import videoFile from "/video2.mp4";
import play from "/play.png";
import pause from "/pause.png";
import Count from "./Count";

const Video = () => {
  const videoSection = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
 

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
          videoSection.current,
          { opacity: 0 },
          {
            
            opacity: 1,
            duration: 0.7,
            ease: "power3.in",
            scrollTrigger: {
              trigger: videoSection.current,
              start: isDesktop ? "top 80%" : "top 85%", // ✅ Mobile starts from bottom 80%
              end: isDesktop ? "bottom 80%" : "top 95%",
              toggleActions: "restart none none none",
              // markers: true,
            },
          }
        );
      }
    );

    return () => mm.revert(); // Cleanup on unmount
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div ref={videoSection} className=" flex items-center justify-center pb-4">
      <div className="max-w-7xl relative flex flex-col self-center gap-3 w-full px-8 py-4 pb-8 text-[#221414]">
        <div className="relative">
          {/* Video Element */}
          <video
            muted={false}
            loop={true}
            ref={videoRef}
            src={videoFile}
            className="h-[160px] md:h-[300px] lg:h-[500px] w-full object-cover rounded-xl shadow-black shadow-2xl"
          />
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
          >
            <div className="absolute">
              {isPlaying ? (
                <div className="text-white bg-[#221414] rounded-full p-2">
                  <img src={pause} alt="Pause" />
                </div>
              ) : (
                <div className="text-white bg-[#221414] rounded-full p-2">
                  <img src={play} alt="Play" />
                </div>
              )}
            </div>
          </button>
        </div>
        <Count />
      </div>
    </div>
  );
};

export default Video;
