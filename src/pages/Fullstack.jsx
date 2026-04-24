import { useParams } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Fullstack1 from "../components/fullstack/Fullstack1";
import Fullstack2 from "../components/fullstack/Fullstack2";
import Fullstack3 from "../components/fullstack/Fullstack3";
import Section7 from "../components/main/Section7";
import Footer from "../components/footer/Footer";

export default function Fullstack(){
    const { slug } = useParams();
    console.log(slug)
    return(
        <>
            <div className="bg-[#232536]">
                <Navbar />
            </div>
            <Fullstack1 />
            <Fullstack2 />
            <Fullstack3 />
            <Section7 />
            <Footer />
        </>
    )
}