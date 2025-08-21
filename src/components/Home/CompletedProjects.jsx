import Badge from "../Shared/Badge";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const CompletedProjects = () => {
  const pictures = [
    { id: 1, src: pic1 },
    { id: 2, src: pic2 },
    { id: 3, src: pic3 },
    { id: 4, src: pic1 },
    { id: 5, src: pic2 },
    { id: 6, src: pic3 },
    { id: 7, src: pic1 },
    { id: 8, src: pic2 },
    { id: 9, src: pic3 },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-7 px-10 my-20">
      <div className="flex flex-col items-center justify-center gap-7 px-16 text-center">
        <Badge first={"Our"} second={"Completed Projects"} />
        <h2 className="text-6xl text-white">
          Improve & Enhance Our Tech Projects
        </h2>
        <p className="text-[#888888] text-center">
          There are many variations of passages of available but majority have
          suffered alteration in some form, by humou or randomised words which
          don't look even slightly believable.
        </p>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper w-full"
      >
        {pictures.map((p) => (
          <SwiperSlide className="relative" key={p.id}>
            <img
              src={p.src}
              alt=""
              className="w-full h-[450px] object-cover rounded-2xl z-10"
            />
            <div className="absolute z-20 bottom-8 py-4  bg-white rounded-2xl flex flex-col items-center left-1/2 -translate-x-1/2 w-9/12">
              <h3 className="text-2xl text-[#071027] font-[600]">
                Business Growth
              </h3>
              <p className="text-sm text-[#5E6770]">Business Strategy</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CompletedProjects;
