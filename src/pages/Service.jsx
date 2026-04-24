import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import Section4 from "../components/main/Section4";
import Section7 from "../components/main/Section7";
import Service6 from "../components/Service/Service6";
import Service1 from "../components/Service/Service1";
import Service2 from "../components/Service/Service2";
import Service3 from "../components/Service/Service3";
import Service4 from "../components/Service/Service4";
import Service5 from "../components/Service/Service5";

export default function Service(){
    return(
        <>
        <div className="bg-[#232536]">
            <Navbar />
        </div>
        <Service1 />
        <div className="bg-[#f9f9ff]">
            <Section4 />
        </div>
        <Service2 />
        <Service3 />
        <Service4 />
        <Service5 />
        <Service6 />
        <Section7 />
        <Footer />
        </>
    )
}