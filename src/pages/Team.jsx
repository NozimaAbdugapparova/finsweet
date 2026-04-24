import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import Team1 from "../components/team/Team1";
import Team2 from "../components/team/Team2";

export default function Team(){
    return(
        <>
            <div className="bg-[#232536]">
                <Navbar />
            </div>
            <Team1 />
            <Team2 />
            <Footer />
        </>
    )
}