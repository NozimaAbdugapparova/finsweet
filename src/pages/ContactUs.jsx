import Contact1 from "../components/contact/Contact1";
import Contact2 from "../components/contact/Contact2";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

export default function ContactUs(){
    return(
        <>
            <div className="bg-[#232536]">
                <Navbar />
            </div>
            <Contact1 />
            <Contact2 />
            <Footer />
        </>
    )
}