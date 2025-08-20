import { GoArrowRight, GoDotFill } from "react-icons/go";
import "../Shared/Styles/style.css";
import ArrowButton from "../Shared/ArrowButton";
import BubblePhotos from "./BubblePhotos";
import Grid from "../Shared/Grid";
import Badge from "../Shared/Badge";
const Banner = () => {
  return (
    // Grid Lines Banner Component

    <div className="relative min-h-screen overflow-hidden">
      {/*top corner Blurry lights */}

      <div className="relative inset-0 pointer-events-none z-20">
        <div className="absolute z-10 right-0 blur-3xl opacity-15 -top-[250px] -right-[220px] w-[550px] h-[500px] rounded-full bg-primary animate-pulse-slow" />
      </div>
      {/*bottom corner Blurry lights */}
      <div>
        <div className="absolute z-20 left-0 blur-3xl opacity-15 -bottom-10 -left-[180px] w-[500px] h-[450px] rounded-full bg-primary animate-pulse-slow" />
      </div>

      {/* Square grid lines */}
      <Grid vertical={8} horizontal={4} />
      {/*  content */}
      <div className="relative z-20 top-44 pb-60 transform  text-center flex flex-col gap-10 items-center justify-center">
        {/* ...hero content... */}
        <Badge
          first={"Your vision. Our code."}
          second={"Infinite possibilities."}
        />
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
          <ArrowButton
            bgColor={"white"}
            arrowColor={"primary"}
            btnName={"Get Started Now"}
          />
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
