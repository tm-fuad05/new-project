import Cards from "../Shared/Cards";
import SectionTitile from "../Shared/SectionTitile";
import laptop from "../../assets/laptop.png";
import pc from "../../assets/pc.png";
import tablet from "../../assets/tablet.png";
import profession from "../../assets/profession.webp";

const OurPartners = () => {
  const cardsInfo = [
    {
      id: 1,
      src: laptop,
    },
    {
      id: 2,
      src: profession,
    },
    {
      id: 3,
      src: tablet,
    },
    {
      id: 4,
      src: pc,
    },
  ];

  return (
    <div id="our-partner" className="px-20 my-10">
      {/* Title  */}
      <SectionTitile
        title={"Trusted by leaders from various industries"}
        subtitle={"Our Partners"}
      />
      {/* Card */}
      <div className="grid grid-cols-4 gap-x-5 ">
        {cardsInfo.map((card) => (
          <Cards key={card.id} src={card.src} />
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
