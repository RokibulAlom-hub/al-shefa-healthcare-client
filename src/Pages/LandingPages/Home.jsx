import Banner from "./Banner";
import Blog from "./Blog";
import CallToAction from "./CallTOaction";
import Contact from "./Contact";
import DoctorsInHompage from "./DoctorsInHompage";
import Faq from "./Faq";
import HealthTips from "./HealthTips";
import Service from "./Service";
import Statistics from "./Statistics";
import Testomonials from "./Testomonials";

const Home = () => {
    return (
        <>
        <Banner/>
        <Service/>
        <DoctorsInHompage/>
        <Statistics/>
        <Testomonials/>
        <CallToAction/>
        <HealthTips/>
        <Blog/>
        <Faq/>
        <Contact/>
        </>
    );
};

export default Home;