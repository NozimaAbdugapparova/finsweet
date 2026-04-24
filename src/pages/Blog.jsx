import Blog1 from "../components/Blog/Blog1";
import Blog2 from "../components/Blog/Blog2";
import Blog3 from "../components/Blog/Blog3";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import Section7 from "../components/main/Section7";

export default function Blog(){
    return(
        <>
            <div className="bg-[#232536]">
                <Navbar />
            </div>
            <Blog1 />
            <Blog2 />
            <Blog3 />
            <Section7 />
            <Footer />
        </>
    )
}