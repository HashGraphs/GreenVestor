import BusinessSection from "./BusinessSection";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import HeroText from "./HeroText";
import MapSection from "./MapSection";
import Navbar from "./Navbar";
import NavbarLanding from "./NavbarLanding";
import SubscribeSection from "./SubscribeSection";

const HeroSection = () => {
    return ( 
        <div className="bg-[url('./assets/svg/hero-section.svg')] w-full bg-no-repeat bg-cover">
            <NavbarLanding />
            <HeroText />
            <FeatureSection />
            <BusinessSection />
            <MapSection />
            <SubscribeSection />
            <Footer />
        </div>
     );
}
 
export default HeroSection;