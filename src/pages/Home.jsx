import Header from "../sections/Header";
import Services from "../sections/Services";
import Tournaments from "../sections/Tournaments";
import Pricing from "../sections/Pricing";
import Contact from "../sections/Contact";
import News from "../sections/News";
import Footer from "../sections/Footer";

export const HomePage = () => {
    return (
        <>
            <Header />
            <Services />
            <Tournaments />
            <News />
            <Pricing />
            <Contact />
        </>
    )
}
