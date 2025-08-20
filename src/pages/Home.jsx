import Banner from "../components/Home/Banner";
import Contact from "../components/Home/Contact";
import Logos from "../components/Home/Logos";
import OurPartners from "../components/Home/OurPartners";
import SuccessStory from "../components/Home/SuccessStory";

const Home = () => {
  return (
    <div>
      <Banner />
      <OurPartners />
      <Logos />
      <SuccessStory />
      <Contact />
    </div>
  );
};

export default Home;
