import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service"
import Company from "./pages/Company";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Article from "./pages/Article";
import Fullstack from "./pages/Fullstack";
import Privacy from "./pages/Privacy";
import Team from "./pages/Team";


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/service" element={<Service />}/>
                <Route path="/company" element={<Company />}/>
                <Route path="/career" element={<Career />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/contact-us" element={<ContactUs />}/>
                <Route path="/blog/:slug" element={<Article />}/>
                <Route path="/career/:slug" element={<Fullstack />}/>
                <Route path="/privacy-policy" element={<Privacy />}/>
                <Route path="/team/javena-melo" element={<Team />}/>
            </Routes>
        </BrowserRouter>
    )
}