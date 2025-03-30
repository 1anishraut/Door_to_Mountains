import React from 'react'

//Images
import image_1 from "/about1.jpg"
import image_2 from "/about2.jpg";


const About = ({ para1, para2, para3, para4 }) => {
  return (
    <div id='about' className="text-[#221414] max-w-7xl flex flex-col gap-2 lg:gap-10 w-full self-center relative md:mt-5 px-8 md:flex-row md:justify-between ">

      <div className="mt-10 md:mt-0 md:w-[650px]">
        <h2 className=" font-semibold text-2xl pb-2">
          Tracking, Nature, Adventure
        </h2>
        <p className="text-[18px]">{para3}</p>
        <p className="text-[#221414b0] text-[15px]">{para2}</p>
      </div>
      <div className=" h-[300px] md:h-[330px] lg:h-[400px] relative m-4 md:m-0 w-[80%] max-w-[500px] self-center ">
        <img
          src={image_1}
          alt=""
          className="absolute top-0 left-0 h-auto z-20 w-[180px] lg:w-[240px] rounded-2xl shadow-black shadow-2xl"
        />
        <img
          src={image_2}
          alt=""
          className="absolute bottom-0 right-0 h-auto z-10 w-[180px] lg:w-[240px] rounded-2xl shadow-black shadow-2xl"
        />
      </div>
    </div>
  );
};

export default About