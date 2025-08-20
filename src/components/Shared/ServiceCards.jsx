import { BiChevronRight } from "react-icons/bi";
import icon from "../../assets/icon.png";

const ServiceCards = () => {
  return (
    <div className="card-gradient-border ">
      <div className="bg-black rounded-[20px] flex flex-col gap-6 p-4 relative">
        <div
          className="absolute inset-0 bg-gradient-to-br from-black via-[#161616] to-black
 rounded-[20px] z-10"
        ></div>
        <div className="z-20 flex flex-col gap-5">
          <div>
            <img src={icon} alt="" className="w-12 h-12" />
          </div>
          <div>
            <h3 className="text-2xl text-white mb-2">Customer Consultation</h3>
            <p className="text-[#888888] text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              viverra odio turpis. Suspendisse tincidunt mi arcu, vulputate
              auctor neque convallis ut. Nulla tristique libero vel efficitur
              mattis.
            </p>
          </div>
          <div>
            <button className="bg-white text-black rounded-full px-4 py-2 flex items-center gap-2 hover:bg-primary hover:text-white transition-all duration-300">
              Read More <BiChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
