import Banner from "../components/Home/Banner";
import Contact from "../components/Home/Contact";
import Logos from "../components/Home/Logos";
import OurPartners from "../components/Home/OurPartners";
import Services from "../components/Home/Services";
import SuccessStory from "../components/Home/SuccessStory";
import MarqueeBadges from "../components/Home/MarqueeBadges";

const Home = () => {
  return (
    <div>
      <Banner />
      <OurPartners />
      <Logos />
      <SuccessStory />
      <Services />
      <MarqueeBadges />
      <Contact />
    </div>
  );
};

export default Home;
