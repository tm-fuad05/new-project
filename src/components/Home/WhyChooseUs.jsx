import Badge from "../Shared/Badge";
import tablet from "../../assets/tablet.png";
import num1 from "../../assets/numbers/num1.png";
import num2 from "../../assets/numbers/num2.png";
import num3 from "../../assets/numbers/num3.png";
import num4 from "../../assets/numbers/num4.png";
import Grid from "../Shared/Grid";
import Horizontal from "../Shared/Horizontal";
import toplong from "../../assets/Lines/top-long.png";
import topshort from "../../assets/Lines/top-short.png";
import bottomlong from "../../assets/Lines/bottom-long.png";
import bottomshort from "../../assets/Lines/bottom-short.png";

const WhyChooseUs = () => {
  const cards = [
    {
      id: "01",
      number: num1,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra odio turpis. Suspendisse tincidunt mi arcu, vulputate auctor neque convallis ut. Nulla tristique libero vel efficitur mattis.",
    },
    {
      id: "02",
      number: num2,
      title: "Dolor Sit",
      description:
        "Praesent et ligula non libero pulvinar tempor. Nullam vitae risus ac sem viverra dictum. Fusce id velit vitae lacus gravida porta non vel ipsum.",
    },
    {
      id: "03",
      number: num3,
      title: "Consectetur",
      description:
        "Integer faucibus magna a nibh facilisis, vel pretium sem tristique. Vivamus suscipit urna id elit posuere, vel pulvinar erat luctus.",
    },
    {
      id: "04",
      number: num4,
      title: "Adipiscing Elit",
      description:
        "Curabitur nec lacus sit amet lacus porttitor viverra. Ut sed nibh at libero vulputate pretium. Donec quis arcu dapibus, suscipit neque nec, vehicula nunc.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 my-20 pt-10 pb-36 min-h-screen relative overflow-hidden">
      <Horizontal width={"7/12"} top={"0"} />
      {/*top corner Blurry lights */}

      <div className="absolute z-20 blur-2xl opacity-15 top-[250px] -left-[200px] w-[300px] h-[300px] rounded-full bg-primary animate-pulse-slow" />

      {/*bottom corner Blurry lights */}

      <div className="absolute z-20 blur-xl opacity-15 bottom-[40px] right-[30px] w-[300px] h-[300px] rounded-full bg-primary animate-pulse-slow" />

      <Grid vertical={30} horizontal={22} />
      <div className="bg-background/70 absolute inset-0 z-20"></div>
      <div className="flex flex-col gap-4 px-20 z-30">
        <Badge first={"Why"} second={"Choose Us"} />
        <h2 className="text-6xl text-white leading-tight">
          IT Solutions a Every Step of the Way
        </h2>
        <p className="text-[#888888] text-md">
          Monotonectally synergize granular markets and front markets.
          Collaboratively visualize strategic infomediaries after multimedia
          based models. Synergistically task state of the art infrastructures
          for
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-5 gap-16 px-20 z-30 mt-20 relative">
        {/* Lines */}
        <img
          src={toplong}
          alt=""
          className="absolute left-1/2 -translate-x-1/2  -top-[85px]"
        />
        <img
          src={topshort}
          alt=""
          className="absolute left-[calc(50%-15px)] -translate-x-1/2  -top-[30px] "
        />
        <img
          src={bottomlong}
          alt=""
          className="absolute left-1/2 -translate-x-1/2 -bottom-[85px] "
        />
        <img
          src={bottomshort}
          alt=""
          className="absolute left-[calc(50%-15px)]  -translate-x-1/2 -bottom-[30px] "
        />

        <figure className="col-span-2 card-gradient-border relative z-30 scale-[118%]">
          <div className="absolute bottom-0 left-0 p-8 bg-black/30 rounded-2xl inset-0 flex flex-col gap-5 z-10"></div>
          <img
            src={tablet}
            alt=""
            className="w-full h-full object-cover rounded-[20px]"
          />
        </figure>
        <div className="col-span-3 grid grid-cols-2 gap-5">
          {cards.map((c) => (
            <div className="bg-white rounded-2xl p-5 flex flex-col gap-5 group hover:bg-primary duration-300">
              <img src={c.number} alt="" className="w-12 h-12 object-contain" />
              <h3 className="text-3xl text-black font-[500]">{c.title}</h3>
              <p className="text-[#626262] text-xs group-hover:text-black duration-300 flex-grow">
                {c.description}
              </p>
              <div className="w-1/3 h-[2px] bg-primary group-hover:bg-black duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      <Horizontal width={"7/12"} bottom={"0"} />
    </div>
  );
};

export default WhyChooseUs;
