import Horizontal from "../Shared/Horizontal";
import Marquee from "react-fast-marquee";
import logo1 from "../../assets/Logos/logo1.png";
import logo2 from "../../assets/Logos/logo2.png";
import logo3 from "../../assets/Logos/logo3.png";
import logo4 from "../../assets/Logos/logo4.png";
import logo5 from "../../assets/Logos/logo5.png";
import logo6 from "../../assets/Logos/logo6.png";
import logo7 from "../../assets/Logos/logo7.png";

const Logos = () => {
  const logos = [
    {
      id: 1,
      src: logo1,
    },
    {
      id: 2,
      src: logo1,
    },
    {
      id: 3,
      src: logo1,
    },
    {
      id: 4,
      src: logo1,
    },
    {
      id: 5,
      src: logo1,
    },
    {
      id: 6,
      src: logo1,
    },
    {
      id: 7,
      src: logo1,
    },
  ];

  return (
    <div className="px-20 w-fit mx-auto mb-10">
      <Horizontal width={"9/12"} />
      <Marquee
        className="text-white text-2xl font-semibold"
        speed={70}
        gradient={false}
      >
        {logos.map((logo) => (
          <div className="flex items-center justify-center mx-8" key={logo.id}>
            <img
              key={logo.id}
              src={logo.src}
              alt={`Logo ${logo.id}`}
              className="w-[180px] h-24 object-contain"
            />
          </div>
        ))}
      </Marquee>
      <Horizontal width={"9/12"} />
    </div>
  );
};

export default Logos;
