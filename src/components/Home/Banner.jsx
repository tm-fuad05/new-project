import { GoArrowRight } from "react-icons/go";
import "../Shared/Styles/style.css";
import ArrowButton from "../Shared/ArrowButton";
import BubblePhotos from "./BubblePhotos";
import Grid from "../Shared/Grid";
import Badge from "../Shared/Badge";
import scroll from "../../assets/scroll.png";
import { motion } from "motion/react";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    // Grid Lines Banner Component

    <div className="relative min-h-screen overflow-hidden bg-[#030705]">
      {/*top corner Blurry lights */}

      <div className="absolute z-20 blur-3xl opacity-15 -top-[250px] -right-[150px] lg:-right-[220px] w-[400px] h-[400px] lg:w-[550px] lg:h-[500px] rounded-full bg-primary animate-pulse-slow" />

      {/*bottom corner Blurry lights */}

      <div className="absolute z-20 blur-3xl opacity-15 -bottom-20 lg:-bottom-10 -left-[180px] w-[400px] h-[400px] lg:w-[500px] lg:h-[450px] rounded-full bg-primary animate-pulse-slow" />

      {/* Square grid lines */}
      <Grid vertical={7} horizontal={5} />
      {/*  content */}
      <div className="relative z-20 top-44 pb-60 transform  text-center flex flex-col gap-10 items-center justify-center">
        {/* ...hero content... */}
        <Badge
          first={"Your vision. Our code."}
          second={"Infinite possibilities."}
        />
        <div>
          <h1 className="text-white text-4xl lg:text-7xl leading-normal w-9/12 mx-auto">
            We design and <span className="text-primary italic">deliver</span>{" "}
            secure, scalable IT solutions that just{" "}
            <span className="relative">
              <span className="absolute w-full h-full bg-primary rotate-2  z-0"></span>
              <span className="relative z-10 text-black font-semibold px-1 italic">
                work.
              </span>
            </span>
          </h1>
          <div className=" lg:absolute top-[320px] left-[240px] w-fit mx-auto mt-7 lg:mt-0">
            <BubblePhotos />
          </div>
        </div>

        <div className="flex  gap-3 lg:gap-7">
          <ArrowButton
            bgColor={"white"}
            arrowColor={"primary"}
            btnName={"Get Started Now"}
          />
          <button className="bg-black text-white text-sm lg:text-md border border-white rounded-full py-3 px-4 flex group items-center gap-2 font-medium  shadow-sm shadow-primary transition-all duration-300 ">
            Explore Solutions{" "}
            <GoArrowRight className="-rotate-45 text-xl lg:text-2xl group-hover:rotate-0 duration-300" />
          </button>
        </div>
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link
            to="our-partner"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <img src={scroll} alt="" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
