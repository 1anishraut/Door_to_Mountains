// components/Preloader.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";


// Images
import loading from "/loading.webm"


const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef();
  const textRef = useRef();
  
  useEffect(() => {
    const handleLoad = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete(); // Notify App to remove Preloader
        },
      });

      tl.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.8, ease: "power3.out" }
      ).to(textRef.current, {
        y: -20,
        opacity: 0,
        delay: 1,
        duration: 1.8,
        ease: "power2.inOut",
      });
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#C7E8F7] w-screen h-screen"
    >
      <div className="flex flex-col items-center justify-center">
        <video
          src={loading}
          autoPlay
          muted
          playsInline
          className="h-[100px] w-[100px] object-cover"
        />
        <h1
          ref={textRef}
          className="text-3xl font-bold text-[#263D47] tracking-wide"
        >
          Door to Mountains
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
