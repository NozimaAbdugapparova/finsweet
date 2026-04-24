import { NavLink } from "react-router-dom";

export default function Navbar(){

    const navClass = ({ isActive }) =>
        isActive
            ? "opacity-100 border-t-5 border-[#ffa155] pt-6"
            : "opacity-60";

    return(
        <nav className="flex justify-between items-center h-20 w-[80%] m-auto">
            <img src="/images/Logo (1).png" alt="logo"/>
            <ul className="flex gap-5 text-white items-center relative h-20">
                <li className="font-medium">
                    <NavLink to="/" className={navClass} end>Home</NavLink>
                </li>
                <li className="text-[16px] font-medium">
                    <NavLink to="/service" className={navClass}>Service</NavLink>
                </li>
                <li className="text-[16px] font-medium">
                    <NavLink to="/company" className={navClass}>Company</NavLink>
                </li>
                <li className="text-[16px] font-medium">
                    <NavLink to="/career" className={navClass}>Career</NavLink>
                </li>
                <li className="text-[16px] font-medium">
                    <NavLink to="/blog" className={navClass}>Blog</NavLink>
                </li>
                <li className="text-[16px] font-medium">
                    <NavLink to="/contact-us" className={navClass}>Contact us</NavLink>
                </li>
                <li className="flex items-center gap-2 text-[16px] font-medium text-[#FFD3AF]">
                    Clone project <i className="fa-solid fa-arrow-right text-white"></i>
                </li>
            </ul>
        </nav>
    )
}