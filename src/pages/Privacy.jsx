import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import Privacy1 from "../components/privacy/Privacy1";

export default function Privacy(){
    return(
        <>
            <div className="bg-[#232536]">
                <Navbar />
            </div>
            <Privacy1 />
            <Footer />
        </>
    )
}