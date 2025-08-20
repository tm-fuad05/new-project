import { p } from "motion/react-client";
import Grid from "../Shared/Grid";
import { BiRightArrow } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import Horizontal from "../Shared/Horizontal";

const Contact = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Grid />
      <Horizontal width={"9/12"} />
      <div className="grid grid-cols-2 px-20 py-12 absolute z-30">
        {/* Content */}
        <div className="flex flex-col gap-5 justify-center text-white">
          <h1 className="text-6xl flex gap-2 uppercase font-unbounded font-semibold">
            <GoArrowRight className="rotate-45 text-7xl" /> contact <br /> us
            today
          </h1>
          <p className="text-lg ">
            Contact us today to schedule a consultation and discover how we can
            help your business thrive.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
