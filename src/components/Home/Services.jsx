import { div, title } from "motion/react-client";
import Badge from "../Shared/Badge";
import ServiceCards from "../Shared/ServiceCards";
import Horizontal from "../Shared/Horizontal";

const Services = () => {
  const cards = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];

  return (
    <div className="px-6 lg:px-20">
      <div className="flex flex-col gap-6 lg:flex-row justify-between lg:items-end pt-10">
        {/* content  */}
        <div className="flex flex-col gap-8 lg:w-8/12">
          <Badge first={"Our"} second={"Services"} />
          <h2 className="text-3xl lg:text-6xl text-white">
            Design{" "}
            <span className="italic text-primary leading-tight">
              The Concept
            </span>{" "}
            of Your Business Idea Now
          </h2>
        </div>
        {/* Button */}
        <div>
          <div className="gradient-border w-fit">
            <button className="bg-[#161616] rounded-full text-white px-10 py-3 text-md lg:text-xl hover:bg-opacity-80 transition-all duration-300">
              Show All
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
        {cards.map((card) => (
          <ServiceCards key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
