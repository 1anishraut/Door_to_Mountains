
import React, { useState } from "react";
import About from "./About";
import Landing from "./Landing";
import Navbar from "./Navbar";

import Video from "./Video";
import PopularPlace from "./PopularPlace";
import Blog from "./Blog";
import TravelPlan from "./TravelPlan";
import Testimonial from "./Testimonials";
import Footer from "./Footer";

//Images
import arrow from "/arrow-right-s-line.png";
import BlogPage from "./BlogPage";
import TravelPlanPopup from "./TravelPlanPopup";
import ChoosingUs from "./ChoosingUs";

const Paragraph = () => {
  const [para1] = useState(
    "We are committed to offering travel services of the highest quality, combining our energy and enthusiasm, withh our years of experience."
  );
  const [para2] = useState(
    " Our greatest satisfaction comes in serving large number of satisfied clients who have experienced the joy and insperiation of travel."
  );
  const [para3] = useState(
    "Explore the world with us and create unforgettable travel experiences. Whether you're looking for a relaxing beach vacation, an adventurous mountain trek, or a cultural city tour, we provide tailored travel solutions to make your journey seamless and memorable. Your adventure starts here !"
  );
  const [para4] = useState(
    "Fusce at sapien ut lectus congue cursus a nec libero."
  );

  return (
    <>
      <Landing />
      <About para1={para1} para2={para2} para3={para3} para4={para4} />
      <PopularPlace />
      <Video />
      <ChoosingUs/>
      <Blog arrow={arrow} />
      <TravelPlan />
      <Testimonial />
      <Footer />
      
    </>
  );
};

export default Paragraph;
