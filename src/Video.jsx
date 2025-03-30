import React, { useRef, useState } from "react";

//Images
import videoFile from "/video2.mp4";
import play from "/play.png";
import pause from "/pause.png";
import Count from "./Count";

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
    <div className="self-center max-w-7xl w-full ">
      <div className=" relative p-2 ">
        {/* Video Element */}
        <video
          muted={false}
          loop={true}
          ref={videoRef}
          src={videoFile}
          className="h-[160px] md:h-[300px] lg:h-[500px] w-full object-cover rounded-xl shadow-black shadow-2xl "
        />
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
        >
          <div className="absolute">
            {isPlaying ? (
              <div className="text-white bg-[#221414] rounded-full p-2">
                <img src={pause} alt="" />
              </div>
            ) : (
              <div className="text-white bg-[#221414] rounded-full p-2">
                <img src={play} alt="" />
              </div>
            )}
          </div>
        </button>
      </div>
      <Count />
    </div>
  );
};

export default Video;
