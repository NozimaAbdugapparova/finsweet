import { useParams } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Article1 from "../components/article/Article1";
import Article2 from "../components/article/Article2";
import Section7 from "../components/main/Section7";
import Footer from "../components/footer/Footer";

export default function Article(){
    const { slug } = useParams();  
    console.log(slug)
    return(
        <>
            <div className="bg-[#232536]">
                <Navbar />
            </div>
            <Article1 />
            <Article2 />
            <Section7 />
            <Footer />
        </>
    )
}