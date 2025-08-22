import Banner from "../components/Home/Banner";
import Contact from "../components/Shared/Contact";
import Logos from "../components/Home/Logos";
import OurPartners from "../components/Home/OurPartners";
import Services from "../components/Home/Services";
import SuccessStory from "../components/Home/SuccessStory";
import MarqueeBadges from "../components/Home/MarqueeBadges";
import CompletedProjects from "../components/Home/CompletedProjects";
import Pricing from "../components/Home/Pricing";
import Testimonials from "../components/Home/Testimonials";
import FAQ from "../components/Home/FAQ";
import Blogs from "../components/Home/Blogs";
import WhyChooseUs from "../components/Home/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <OurPartners />
      <Logos />
      <SuccessStory />
      <Services />
      <MarqueeBadges />
      <WhyChooseUs />
      <CompletedProjects />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Home;
