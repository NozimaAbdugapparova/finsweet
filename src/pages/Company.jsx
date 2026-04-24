import Company1 from "../components/company/Company1";
import Company2 from "../components/company/Company2";
import Company3 from "../components/company/Company3";
import Company4 from "../components/company/Company4";
import Company5 from "../components/company/Company5";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import Section2 from "../components/main/Section2";
import Section7 from "../components/main/Section7";

export default function Company(){
    return(
        <>
            <div className="bg-[#232536]">
                <Navbar />
            </div>
            <Company1 />
            <Company2 />
            <Company3 />
            <Section2 />
            <Company4 />
            <Company5 />
            <Section7 />
            <Footer />
        </>
    )
}