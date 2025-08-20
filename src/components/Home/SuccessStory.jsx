import ArrowButton from "../Shared/ArrowButton";
import Badge from "../Shared/Badge";
import tablet from "../../assets/tablet.png";

const SuccessStory = () => {
  const cards = [
    { id: 1, title: "120K +", subtitle: "Audience reached" },
    { id: 2, title: "20 +", subtitle: "Wordlwide awards" },
  ];
  return (
    <div className="grid grid-cols-2 gap-12 justifuy-between px-20 my-10">
      {/* Content */}
      <div className="flex flex-col gap-8">
        <Badge first={"Our"} second={"Success Story"} />
        <h2 className="text-white text-5xl">
          Choose{" "}
          <span className="italic font-semibold text-primary leading-tight">
            The Best IT
          </span>{" "}
          Service Agency
        </h2>
        <p className="text-[#616161]">
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
        <div className="flex gap-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col justify-between border border-primary gap-7 text-white mb-4 rounded-xl p-4 shadow-md animate-pulse-slow shadow-primary "
            >
              <h2 className="text-5xl">{card.title}</h2>
              <p>{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
      <figure className="card-gradient-border">
        <img
          src={tablet}
          alt=""
          className="w-full h-full object-cover rounded-[20px]"
        />
      </figure>
    </div>
  );
};

export default SuccessStory;
