import Badge from "../Shared/Badge";
import Horizontal from "../Shared/Horizontal";

const Pricing = () => {
  const pricingCards = [
    {
      id: 1,
      title: "Starter",
      price: 0,

      billingCycle: "month",
      buttonText: "Get Started Now",
      includes: [
        "Lorem ipsum dolor sit amet Lorem",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit amet Lorem ipsum",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet Lorem",
      ],
    },
    {
      id: 2,
      title: "Pro",
      badge: "Popular",
      price: 29,

      billingCycle: "month",
      buttonText: "Upgrade Now",
      includes: [
        "Lorem ipsum dolor sit amet Lorem",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit amet Lorem ipsum",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet Lorem",
      ],
    },
    {
      id: 3,
      title: "Enterprise",
      price: 99,

      billingCycle: "month",
      buttonText: "Contact Sales",
      includes: [
        "Lorem ipsum dolor sit amet Lorem",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit amet Lorem ipsum",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet Lorem",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center gap-6 my-20 px-6 lg:px-20">
      <Badge first={"Pricing"} second={"& Plans"} />
      <h2 className="text-3xl lg:text-6xl text-white text-center">
        Choose a Plan That Suits Your Team
      </h2>
      <p className="text-primary text-sm lg:text-xl">
        Simple and Transparent Pricing to Fit Your Needs
      </p>
      {/* Badge */}
      <div className="gradient-border">
        <div className="gradient-border-inner px-3 py-3 flex items-center justify-between gap-4 text-md lg:text-xl">
          <h3 className="text-white pl-2">Monthly</h3>
          <div className="w-[1px] h-[40px]  bg-white"></div>
          <h3 className="text-[#3F3F3F] font-light">Yearly</h3>
          {/* badge */}
          <div className="bg-primary font-[600] px-7 py-1.5 rounded-full">
            <h3 className=" text-black">30% off</h3>
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mt-10">
        {pricingCards.map((card) => (
          <div
            key={card.id}
            className="rounded-2xl p-5 pb-1 border border-[#343434] flex flex-col gap-6 bg-background"
          >
            <div className="flex flex-col gap-2 text-sm flex-grow">
              <div className="flex items-center gap-2">
                <p className="text-white">{card.title}</p>
                {card.badge ? (
                  <span className="bg-primary rounded-full px-3 py-1 text-black font-[500]">
                    {card.badge}
                  </span>
                ) : (
                  ""
                )}{" "}
              </div>
              <h3 className="text-4xl text-white flex items-center gap-2 font-[500]">
                ${card.price}{" "}
                <span className="text-sm text-[#5A5A5A]">
                  /{card.billingCycle}
                </span>
              </h3>
            </div>

            <div>
              <button
                className="bg-[#1C1C1C] text-white hover:bg-primary hover:text-black
                 rounded-md text-lg py-2 w-full duration-300 font-[500]"
              >
                Get Started Now
              </button>
            </div>
            <div className="text-white text-sm">
              <p>Includes:</p>
              <ul className="list-disc pl-5 mt-4">
                {card.includes.map((i) => (
                  <li className="mb-4">{i}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Horizontal width={"9/12"} />
      </div>
    </div>
  );
};

export default Pricing;
