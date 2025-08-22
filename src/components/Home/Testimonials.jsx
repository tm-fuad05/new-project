import Badge from "../Shared/Badge";
import quote from "../../assets/quote.png";
import reviewman from "../../assets/reviewman.png";
import Horizontal from "../Shared/Horizontal";
import Grid from "../Shared/Grid";
import CardGrid from "../Shared/CardGrid";

const Testimonials = () => {
  const reviewCards = [
    {
      id: 1,
      quote:
        "Lorem ipsum dolor sit amLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra odio turpis. Suspendisse tincidunt mi arcu, vulputate auctor neque convallis ut. Nulla tristique libero.et, consectetur adipiscing elit. Mauris viverra odio turpis.",
      author: {
        name: "Alice Johnson",
        designation: "Product Designer",
        avatar: reviewman,
      },
    },
    {
      id: 2,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra odio turpis. Suspendisse tincidunt mi arcu, vulputate auctor neque convallis ut. Nulla tristique libero.uspendisse tincidunt mi arcu, vulputate auctor neque convallis ut. Nulla tristique libero.",
      author: {
        name: "David Smith",
        designation: "Software Engineer",
        avatar: reviewman,
      },
    },
    {
      id: 3,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra odio turpis. Suspendisse tincidunt mi arcu, vulputate auctor neque convallis ut. Nulla tristique libero.Vivamus porttitor nisl vel dui consequat, at luctus odio dignissim.",
      author: {
        name: "Sophia Martinez",
        designation: "Marketing Lead",
        avatar: reviewman,
      },
    },
    {
      id: 4,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra odio turpis. Suspendisse tincidunt mi arcu, vulputate auctor neque convallis ut. Nulla tristique libero.Vivamus porttitor nisl vel dui consequat, at luctus odio dignissim.",
      author: {
        name: "James Lee",
        designation: "UX Researcher",
        avatar: reviewman,
      },
    },
    {
      id: 5,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra odio turpis. Suspendisse tincidunt mi arcu, vulputate auctor neque convallis ut. Nulla tristique libero.Pellentesque habitant morbi tristique senectus et netus et malesuada.",
      author: {
        name: "Emily Davis",
        designation: "Content Strategist",
        avatar: reviewman,
      },
    },
    {
      id: 6,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra odio turpis. Suspendisse tincidunt mi arcu, vulputate auctor neque convallis ut. Nulla tristique libero.Etiam in elit eu justo imperdiet dapibus non eget massa.",
      author: {
        name: "Michael Brown",
        designation: "Frontend Developer",
        avatar: reviewman,
      },
    },
  ];

  return (
    <div className="flex flex-col items-center gap-6 px-6 lg:px-20">
      <Badge second={"Testimonials"} />
      <h2 className="text-3xl lg:text-6xl text-white">What Our Client Says</h2>
      <p className="text-sm lg:text-lg text-[#888888] text-center">
        Cras tincidunt, sapien eget scelerisque tincidunt, est urna aliquet,
        pretium lacus.
      </p>
      {/* Review Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {reviewCards.map((c) => (
          <div className="rounded-2xl border border-[#343434]  p-5 relative">
            <CardGrid vertical={18} horizontal={15} />
            <div className="flex flex-col gap-6 text-white">
              <img src={quote} alt="" className="w-6" />
              <p className="text-sm flex-grow">{c.quote}</p>
              <div className="flex gap-2 items-center">
                <img
                  src={reviewman}
                  alt=""
                  className="rounded-lg w-12 h-12 object-cover"
                />
                <div className="flex flex-col gap-">
                  <h4 className="text-lg tewxt-">Enter Name</h4>
                  <p className="text-xs">Enter your designation</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-10">
        <Horizontal width={"9/12"} />
      </div>
    </div>
  );
};

export default Testimonials;
