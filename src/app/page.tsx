import AboutUs from "@/components/AboutUs";
import FeaturedProperties from "@/components/FeaturedProperties";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

const Home = () => {
  return (<>
      <Navbar />  
      <Hero />  
      <HowItWorks />
      <FeaturedProperties />
      <Services />
      <AboutUs />
  </>  
  );
};

export default Home