import Marquee from "react-fast-marquee";

const MarqueeBadges = () => {
  const badges = [
    { id: 1, label: "Lorem Ipsum" },
    { id: 2, label: "Lorem Ipsum" },
    { id: 3, label: "Lorem Ipsum" },
    { id: 4, label: "Lorem Ipsum" },
    { id: 5, label: "Lorem Ipsum" },
    { id: 6, label: "Lorem Ipsum" },
    { id: 7, label: "Lorem Ipsum" },
    { id: 8, label: "Lorem Ipsum" },
  ];
  return (
    <div className="relative px-20 my-16 flex flex-col gap-6">
      {/* Transparent background shadow */}
      <div className="bg-background blur-[15px] absolute left-0 z-10 w-56 h-52 -top-8"></div>
      <div className="bg-background blur-[15px] absolute right-0 overflow-hidden z-10 w-52 h-52 -top-8"></div>

      <Marquee speed={50} className="flex">
        {badges.map((badge) => (
          <div key={badge.id}>
            <div className="badge-gradient-border mx-2">
              <p className="bg-background rounded-[10px] text-[#AFAFAF] px-8 py-4 text-center text-lg ">
                {badge.label}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
      <Marquee speed={50} direction="right" className="flex">
        {badges.map((badge) => (
          <div key={badge.id}>
            <div className="badge-gradient-border mx-2">
              <p className="bg-background rounded-[10px] text-[#AFAFAF] px-8 py-4 text-center text-lg ">
                {badge.label}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeBadges;
