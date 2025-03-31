import React from "react";

//Images
import trust from "/trust.png"
import travelPartnet from "/travelPartner.png"
import support from "/support.png"

const ChoosingUs = () => {
  return (
    <div className="w-full max-w-7xl self-center flex flex-col p-8 md:gap-2">
      <h2 className=" text-2xl md:text-3xl font-semibold text-[#221414]">
        Reasons For Choosing Us
      </h2>
      <p className="text-gray-600 text-[15px]">
        Choosing the right travel partner is key to a smooth and memorable
        journey. Our dedicated support team ensures a stress-free experience,
        from planning your itinerary to assisting you on the go.
      </p>
      <div className="flex justify-between mt-8 gap-3 md:gap-10 lg:gap-20">
        <div className="flex flex-col items-center gap-1 rounded-md py-2 md:py-14 ">
          <div className="bg-[#263D47] rounded-full">
            <img
              src={trust}
              alt=""
              className="invert p-2 h-[30px] md:h-[50px] "
            />
          </div>
          <p className="text-[11px] md:text-xl font-semibold md:mt-3">
            Tried & Trusted
          </p>
          <p className="text-[10px] md:text-sm text-center">
            We are trusted nationwide by 100 travelers just like you.
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-md p-2 md:p-4 md:py-14  shadow-black shadow-2xl">
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
        <div className="flex flex-col items-center gap-1  rounded-md py-2 md:py-14 ">
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
