import ArrowButton from "../Shared/ArrowButton";
import Badge from "../Shared/Badge";
import tablet from "../../assets/tablet.png";
import Horizontal from "../Shared/Horizontal";
import Grid from "../Shared/Grid";

const SuccessStory = () => {
  const cards = [
    { id: 1, title: "120K +", subtitle: "Audience reached" },
    { id: 2, title: "20 +", subtitle: "Wordlwide awards" },
  ];
  return (
    <div className="relative">
      <Grid vertical={30} horizontal={15} />
      <div className="bg-background/70 absolute inset-0 z-20"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justifuy-between px-6 lg:px-20 my-10 pt-10">
        {/* Content */}
        <div className="flex flex-col gap-8 z-30">
          <Badge first={"Our"} second={"Success Story"} />
          <h2 className="text-white text-3xl lg:text-6xl">
            Choose{" "}
            <span className="italic font-semibold text-primary leading-tight">
              The Best IT
            </span>{" "}
            Service Agency
          </h2>
          <p className="text-[#616161] pr-8 text-sm lg:text-md">
            We create smart solutions that help brands move fast, work smarter,
            and grow to their full potential.
          </p>
          {/* Button */}
          <div>
            <ArrowButton
              bgColor={"white"}
              arrowColor={"primary "}
              btnName={"Enter Your Email Address"}
            />
          </div>
          {/* Card */}
          <div className="grid grid-cols-2 gap-5 lg:w-11/12">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col justify-between bg-black border border-primary/50 gap-10 lg:gap-[55px] text-white mb-4 rounded-3xl p-4 shadow-lg shadow-primary/15"
              >
                <h2 className="text-3xl lg:text-5xl font-semibold">
                  {card.title}
                </h2>
                <p className="text-xs lg:text-md">{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
        <figure className="card-gradient-border relative z-30">
          <div className="absolute bg-black inset-0 opacity-30 z-10" />
          <div className="absolute bottom-0 left-0 p-5 lg:p-8 text-white flex flex-col gap-2 lg:gap-5 z-20">
            <h2 className="text-4xl lg:text-8xl font-semibold">20K +</h2>
            <p className="text-lg lg:text-3xl">Projects Completed</p>
          </div>
          <img
            src={tablet}
            alt=""
            className="w-full h-full object-cover rounded-[20px]"
          />
        </figure>
        <div className="mt-5">
          <Horizontal width={"7/12"} />
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
