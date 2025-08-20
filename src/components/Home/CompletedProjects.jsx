import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Badge from "../Shared/Badge";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";

const CompletedProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const pictures = [
    { id: 1, src: pic1 },
    { id: 2, src: pic2 },
    { id: 3, src: pic3 },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-7 w-10/12 mx-auto my-20">
      <Badge first={"Our"} second={"Completed Projects"} />
      <h2 className="text-6xl text-white">
        Improve & Enhance Our Tech Projects
      </h2>
      <p className="text-[#888888] text-center">
        There are many variations of passages of available but majority have
        suffered alteration in some form, by humou or randomised words which
        don't look even slightly believable.
      </p>
      <div className="slider-container">
        <Slider {...settings}>
          {pictures.map((picture) => (
            <div key={picture.id} className="p-4">
              <img
                src={picture.src}
                alt={`Completed Project ${picture.id}`}
                className="object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CompletedProjects;
