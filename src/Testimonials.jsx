import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonialsData = [
  {
    name: "Emily Johnson",
    position: "Frequent Traveler",
    image:
      "https://images.unsplash.com/photo-1632932197818-6b131c21a961?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D",
    feedback:
      "This travel agency made my dream vacation come true! The planning was seamless, and the experience was unforgettable.",
  },
  {
    name: "Robert Williams",
    position: "Adventure Enthusiast",
    image:
      "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D",
    feedback:
      "Had the most thrilling adventure trip with them! Everything was well-organized, and the guides were amazing.",
  },
  {
    name: "Sophia Martinez",
    position: "Luxury Traveler",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D",
    feedback:
      "From booking to the final day, everything was top-notch. Highly recommend for a stress-free luxury travel experience!",
  },
  {
    name: "Daniel Lee",
    position: "Solo Explorer",
    image:
      "https://images.unsplash.com/photo-1592621385612-4d7129426394?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D",
    feedback:
      "As a solo traveler, I felt safe and had an incredible time. The team ensured I had the best local experiences!",
  },
  {
    name: "Olivia Brown",
    position: "Family Vacationer",
    image:
      "https://images.unsplash.com/photo-1496275068113-fff8c90750d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbmElMjBmYW1pbHl8ZW58MHx8MHx8fDA%3D",
    feedback:
      "Our family trip was perfectly planned. From kid-friendly activities to amazing accommodations, everything was perfect!",
  },
];


const Testimonial = () => {
  return (
    <div className="w-full flex flex-col items-center p-8">
      <h2 className="text-2xl font-semibold text-center mb-6">
        What Our Clients Say
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: true}}
        className="w-full"
        spaceBetween={30}
        slidesPerView={1}
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col justify-center text-center"
          >
            <div className="flex  justify-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-16 w-16 rounded-full object-cover"
              />
            </div>
            <div className=" flex flex-col items-center justify-center mt-2">
              <p className="italic text-gray-600 md:w-[500px] lg:w-[600px]">
                {testimonial.feedback}
              </p>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm">{testimonial.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
