import Badge from "../Shared/Badge";
import { Swiper, SwiperSlide } from "swiper/react";

import pic1 from "../../assets/Blogs/pic1.png";
import pic2 from "../../assets/Blogs/pic2.png";
import pic3 from "../../assets/Blogs/pic3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

const Blogs = () => {
  const blogPictures = [
    {
      id: 1,
      category: "Business",
      date: "March 29, 2024",
      image: pic1,
      image_description:
        "Person with glasses working on a laptop in a study environment",
    },
    {
      id: 2,
      category: "Business",
      date: "March 29, 2024",
      image: pic2,
      image_description:
        "Close-up of hands typing on a keyboard with multiple monitors in background",
    },
    {
      id: 3,
      category: "Business",
      date: "March 29, 2024",
      image: pic3,
      image_description:
        "Two people smiling, sitting together in a classroom or study space",
    },
    {
      id: 4,
      category: "Business",
      date: "March 29, 2024",
      image: pic1,
      image_description:
        "Group of colleagues discussing ideas around a conference table",
    },
    {
      id: 5,
      category: "Business",
      date: "March 29, 2024",
      image: pic2,
      image_description:
        "Business professional giving a presentation with charts on a screen",
    },
  ];

  return (
    <div className="flex flex-col gap-8 my-20">
      <div className="flex flex-col gap-4 px-20">
        <Badge first={"Our"} second={"Blogs"} />
        <h2 className="text-6xl text-white w-9/12 leading-tight">
          Transforming Ideas into Reality Tomorrow
        </h2>
        <p className="text-[#888888] text-md">
          IT Technology is a dynamic field encompassing the stu implementation
          an support, and management
        </p>
      </div>
      <Swiper
        slidesPerView={3.5}
        centeredSlides={true}
        spaceBetween={20}
        freeMode={false}
        autoplay={{ delay: 2000 }}
        slidesOffsetBefore={0} // ফাকা বাদ
        slidesOffsetAfter={0}
        modules={[Autoplay]}
        className="mySwiper w-full"
      >
        <div className="bg-background blur-[80px] absolute -left-12 overflow-hidden z-10 w-44 h-[1000px] -top-8"></div>
        <div className="bg-background blur-[80px] absolute -right-12 overflow-hidden z-10 w-44 h-[1000px] -top-8"></div>
        {blogPictures.map((p) => (
          <SwiperSlide className="relative" key={p.id}>
            <img
              src={p.image}
              alt=""
              className="w-[370px] h-[370px] object-cover rounded-2xl z-10"
            />
            <div className="absolute z-20 bottom-5 px-3 py-2 bg-white rounded-md flex gap-3 justify-between items-center left-1/2 -translate-x-1/2 w-11/12 mx-auto">
              <h3 className="text-md text-[#071027] font-[500] rounded-full border border-[#121212]/20 px-4 py-1">
                {p.category}
              </h3>
              <p className="text-md text-[#5E6770]">{p.date}</p>
              <span className="bg-[#f3f7fb] rounded-md border border-gray-200 p-2">
                <FaArrowRight size={18} />
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blogs;
