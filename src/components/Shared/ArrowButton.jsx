import { GoArrowRight } from "react-icons/go";

const ArrowButton = ({ btnName }) => {
  return (
    <button className="bg-white rounded-full py-1.5 pl-4 pr-1 flex items-center gap-2 font-medium group">
      {btnName}{" "}
      <GoArrowRight className="bg-primary rounded-full p-1.5 my-  text-black text-[40px] group-hover:translate-x-2 duration-300" />
    </button>
  );
};

export default ArrowButton;
