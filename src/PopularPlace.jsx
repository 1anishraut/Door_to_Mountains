// import Swiper core and required modules
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "/src/swiperButton.css";

//Images
import heart from "/heart.png"
import kedrnath from "/kedarnath.jpg"
import ninital from "/nainital.jpg";
import ladak from "/leh.jpg";
import dawki from "/dawki.jpg";
import haridwar from "/haridwar.jpg";
import kashmir from "/Jammu-Kashmir.jpg";



const places = [
  {
    id: 1,
    name: "Kedarnath",
    location: "Uttrakhand, IND",
    image: kedrnath,
  },
  {
    id: 2,
    name: "Nainital",
    location: "Uttrakhand. IND",
    image: ninital,
  },
  {
    id: 3,
    name: "Ladak",
    location: "Jammu and Kashmir, IND",
    image: ladak,
  },
  {
    id: 4,
    name: "Dawki",
    location: "Meghalaya, IND",
    image: dawki,
  },
  {
    id: 5,
    name: "Haridwar",
    location: "Uttrakhand, IND",
    image: haridwar,
  },
  {
    id: 6,
    name: "Kasmir",
    location: "Jammu and Kashmir, IND",
    image: kashmir,
  },
];
console.log(places);



const PopularPlaces = () => {
  return (
    <div className="bg-[#263D47] flex items-center justify-center pb-4 ">
      <div className="max-w-7xl relative flex flex-col self-center gap-3 w-full px-8 py-4 pb-8 text-[#221414]  ">
        <div className="flex justify-between  relative">
          <h2 className="text-2xl text-white md:text-3xl font-semibold ">
            Popular Places
          </h2>

          <div className="pb-2 flex justify-between items-center gap-8 w-[100px]">
            <button className="swiper-button-prev   bg-gray-400 rounded-full md:scale-115"></button>
            <button className="swiper-button-next   bg-[#221414] rounded-full md:scale-115"></button>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={20}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              340: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full self-center rounded-2xl shadow-black shadow-2xl"
          >
            {places.map((place) => (
              <SwiperSlide key={place.id}>
                <div className="relative rounded-2xl overflow-hidden shadow-black shadow-2xl">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-90 object-cover rounded-2xl "
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
                    <img src={heart} alt="" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg text-[#221414]">
                    <h3 className="font-bold">{place.name}</h3>
                    <p className="text-sm">{place.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularPlaces;
