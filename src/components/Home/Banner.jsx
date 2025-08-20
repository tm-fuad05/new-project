import { GoArrowRight, GoDotFill } from "react-icons/go";
import "../Shared/Styles/style.css";
import ArrowButton from "../Shared/ArrowButton";
import BubblePhotos from "./BubblePhotos";
const Banner = () => {
  return (
    // Grid Lines Banner Component

    <div className="relative min-h-screen overflow-hidden">
      {/*top corner Blurry lights */}

      <div className="relative inset-0 pointer-events-none z-20">
        <div className="absolute z-10 right-0 blur-3xl opacity-15 -top-[250px] -right-[220px] w-[550px] h-[500px] rounded-full bg-primary" />
      </div>
      {/*bottom corner Blurry lights */}
      <div>
        <div className="absolute z-20 left-0 blur-3xl opacity-15 -bottom-10 -left-[180px] w-[500px] h-[450px] rounded-full bg-primary" />
      </div>

      {/* Square grid lines */}
      <div className="absolute inset-0 pointer-events-none z-10 grid grid-cols-4 grid-rows-4 w-full h-full">
        {/* Vertical lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 border-l border-[#1a1a1a]"
            style={{ left: `${(100 / 8) * i}%` }}
          />
        ))}
        {/* Horizontal lines */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 border-t border-[#1a1a1a]"
            style={{ top: `${(100 / 4) * i}%` }}
          />
        ))}
      </div>
      {/*  content */}
      <div className="relative z-20 top-44 pb-60 transform  text-center flex flex-col gap-10 items-center justify-center">
        {/* ...hero content... */}
        <div className="gradient-border ">
          <div className="gradient-border-inner px-3 py-1 flex items-center gap-2 w-fit mx-auto">
            <GoDotFill className="text-white" />
            <p className="text-white">
              Your vision. Our code.{" "}
              <span className="italic text-primary font-medium">
                Infinite possibilities.
              </span>
            </p>
          </div>
          {/* Header */}
        </div>
        <div>
          <h1 className="text-white text-7xl leading-normal w-9/12 mx-auto">
            We design and <span className="text-primary italic">deliver</span>{" "}
            secure, scalable IT solutions that just{" "}
            <span className="relative">
              <span className="absolute w-full h-full bg-primary rotate-2  z-0"></span>
              <span className="relative z-10 text-black font-semibold px-1 italic">
                work.
              </span>
            </span>
          </h1>
          <div className="absolute top-[320px] left-[240px]">
            <BubblePhotos />
          </div>
        </div>

        <div className="flex gap-4">
          <ArrowButton btnName={"Get Started Now"} />
          <button className="bg-black text-white border border-white rounded-full py-3 px-4 flex group items-center gap-2 font-medium  shadow-sm shadow-primary transition-all duration-300 ">
            Explore Solutions{" "}
            <GoArrowRight className="-rotate-45 text-2xl group-hover:rotate-0 duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
