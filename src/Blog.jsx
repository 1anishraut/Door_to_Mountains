import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Blog = ({ arrow }) => {
  const [blogs, setBlogs] = useState([]);
  const buttonsRef = useRef([]);

  useEffect(() => {
    
    fetch("/Door_to_Mountains/Blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  useEffect(() => {
    buttonsRef.current.forEach((btn) => {
      gsap.set(btn, { opacity: 0, y: 20, display: "none" });
    });
  }, [blogs]);

  const handleMouseEnter = (index) => {
    gsap.to(buttonsRef.current[index], {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
      display: "block",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(buttonsRef.current[index], {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power2.in",
      display: "none",
    });
  };

  return (
    <div
      id="blog"
      className="max-w-7xl w-full relative flex flex-col self-center gap-3 py-4 px-8 mt-8"
    >
      <div className="relative flex justify-between items-center">
        <h2 className=" text-2xl font-semibold text-[#221414]">
          Our Latest Blogs
        </h2>

        <div className="flex justify-end gap-3 w-[100px] h-full">
          <button className="prev-button bg-gray-400 rounded-full flex items-center justify-center cursor-pointer">
            <img src={arrow} alt="" className="rotate-180" />
          </button>
          <button className="next-button bg-[#221414] rounded-full flex items-center justify-center cursor-pointer">
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>

      <div className="relative shadow-black shadow-2xl rounded-2xl">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            340: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          className="relative rounded-2xl"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={blog.id}>
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="relative overflow-hidden rounded-2xl cursor-pointer shadow-black shadow-2xl"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-90 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent flex flex-col justify-end p-3">
                  <p className="text-sm text-white">{blog.title}</p>
                  <p className="text-lg font-semibold text-white">
                    {blog.content.substring(0, 50)}...
                  </p>
                  <Link
                    ref={(el) => (buttonsRef.current[index] = el)}
                    to={`/blog/${blog.id}`}
                    className="mt-3 bg-[#263D47] border-1 text-white px-4 py-2 rounded-full opacity-0 w-1/2"
                  >
                    <p className="lg:text-sm xl:text-xl">
                      Read More <span className="ml-3 lg:ml-0"> ➜</span>
                    </p>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Blog;
