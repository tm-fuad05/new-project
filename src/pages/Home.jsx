import Banner from "../components/Home/Banner";
import Contact from "../components/Home/Contact";
import Logos from "../components/Home/Logos";
import OurPartners from "../components/Home/OurPartners";
import Services from "../components/Home/Services";
import SuccessStory from "../components/Home/SuccessStory";
import MarqueeBadges from "../components/Home/MarqueeBadges";
import CompletedProjects from "../components/Home/CompletedProjects";
import Pricing from "../components/Home/Pricing";
import Testimonials from "../components/Home/Testimonials";
import FAQ from "../components/Home/FAQ";

const Home = () => {
  return (
    <div>
      <Banner />
      <OurPartners />
      <Logos />
      <SuccessStory />
      <Services />
      <MarqueeBadges />
      <CompletedProjects />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
