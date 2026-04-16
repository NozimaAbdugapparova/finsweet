export default function Navbar(){
    return(
        <nav className="flex justify-between items-center h-20 w-[80%] m-auto">
            <img src="./images/Logo (1).png" alt="logo"/>
            <ul className="flex gap-5 text-white items-center relative h-20">
                <li className="font-medium">Home</li>
                <li className="opacity-[0.6] text-[16px] font-medium">Service</li>
                <li className="opacity-[0.6] text-[16px] font-medium">Company</li>
                <li className="opacity-[0.6] text-[16px] font-medium">Career</li>
                <li className="opacity-[0.6] text-[16px] font-medium">Blog</li>
                <li className="opacity-[0.6] text-[16px] font-medium">Contact us</li>
                <li className="flex items-center gap-2 text-[16px] font-medium text-[#FFD3AF]">Clone project <i className="fa-solid fa-arrow-right text-white"></i></li>
                
            </ul>
        </nav>
    )
}