import React, { useEffect, useState } from 'react'
// Image 
import bike from "/motorbike-fill.png"
import hotel from "/hotel-fill.png"
import location from "/map-2-fill.png"
import flight from "/flight-takeoff-line.png"

const Count = () => {
    const [flightCount, setflightCount] = useState(1);
    const [bikeCount, setbikeCount] = useState(1);
    const [locationCount, setlocationCount] = useState(1);
    const [hotelCount, sethotelCount] = useState(1)

    useEffect(() => {
      const interval = setInterval(() => {
          setflightCount((prevCount) => (prevCount < 10 ? prevCount + 1 : 10));
          setbikeCount((prevCount) => (prevCount < 23 ? prevCount + 1 : 23));
          setlocationCount((prevCount) => (prevCount < 16 ? prevCount + 1 : 16));
          sethotelCount((prevCount) => (prevCount < 24 ? prevCount + 1 : 24));
          
      }, 180);

      return () => clearInterval(interval);
    }, []);
  return (
    <div className="w-full flex justify-between px-8 text-[#221414]">
      <div className="flex gap-1 items-end text-3xl font-semibold">
        <img src={flight} alt="" className="h-[24px] pb-1" />
        <p>{flightCount}</p>
        <p className="countName font-semibold text-[15px] hidden">Flights</p>
      </div>
      <div className="flex gap-1 items-end text-3xl font-semibold">
        <img src={location} alt="" className="h-[24px] pb-1" />
        <p>{locationCount}</p>
        <p className=" countName text-[15px] font-semibold hidden">
          Destinations
        </p>
      </div>
      <div className="flex gap-1 items-end text-3xl font-semibold">
        <img src={bike} alt="" className="h-[24px] pb-1" />
        <p >{bikeCount}</p>
        <p className="countName text-[15px] font-semibold hidden">Rides</p>
      </div>
      <div className="flex gap-1 items-end text-3xl font-semibold">
        <img src={hotel} alt="" className="h-[24px] pb-1" />
        <p>{hotelCount}</p>
        <p className="countName text-[15px] font-semibold hidden">Check-in</p>
      </div>
    </div>
  );
}

export default Count