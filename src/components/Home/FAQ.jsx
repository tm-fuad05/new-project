import { useState } from "react";
import ArrowButton from "../Shared/ArrowButton";
import Badge from "../Shared/Badge";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const FAQ = () => {
  const accordingData = [
    {
      title: "What is the purpose of wireframing in design?",
      description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
    },
    {
      title: "Why is user-centered design important?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      title: "What role does contrast play in graphic design?",
      description:
        "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
    },

    {
      title: `Define the term "responsive design" in web development.`,
      description:
        "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
    },
  ];

  const [bgAccording, setBgAccording] = useState(null);

  const handleBgAccording = (index) =>
    setBgAccording((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="flex justify-center items-center px-20 w-full mt-10 mb-20">
      <div className="w-7/12 flex flex-col gap-6 text-white">
        <Badge first={"Your Questions"} second={"Answered"} />
        <h2 className="text-6xl">FAQs & Support</h2>
        <p className="text-lg ">not finding what you’re looking for?</p>
        <div>
          <ArrowButton
            bgColor={"white"}
            arrowColor={"primary"}
            btnName={"Get Started Now"}
          />
        </div>
      </div>
      {/* Accordion */}
      <div>
        <div className="flex gap-3 flex-col w-full">
          {accordingData?.map((according, index) => (
            <article key={index} className="bg-[#e5eaf2] rounded-md">
              <div
                className={`${
                  bgAccording === index ? "rounded-t-sm" : "rounded"
                } flex gap-2 cursor-pointer items-center justify-between  w-full bg-[#0F0F0F] p-4`}
                onClick={() => handleBgAccording(index)}
              >
                <h2 className=" text-white font-[300] text-[1.2rem]">
                  {according.title}
                </h2>
                <MdOutlineKeyboardArrowRight size={40} className="text-white" />
              </div>
              <div
                className={`grid transition-all duration-300 overflow-hidden ease-in-out bg-primary/10 ${
                  bgAccording === index
                    ? "grid-rows-[1fr] opacity-100 px-3 py-3"
                    : "grid-rows-[0fr] opacity-0 px-3"
                }`}
              >
                <div className="text-[] text-[0.9rem] overflow-hidden">
                  {according.description}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
