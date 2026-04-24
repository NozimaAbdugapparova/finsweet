export default function Navbar(){
    return(
        <nav className="flex justify-between items-center h-20 w-[80%] m-auto">
            <img src="/images/Logo (1).png" alt="logo"/>
            <ul className="flex gap-5 text-white items-center relative h-20">
                <li className="font-medium"><a href="/">Home</a></li>
                <li className="opacity-[0.6] text-[16px] font-medium"><a href="/service">Service</a></li>
                <li className="opacity-[0.6] text-[16px] font-medium"><a href="/company">Company</a></li>
                <li className="opacity-[0.6] text-[16px] font-medium"><a href="/career">Career</a></li>
                <li className="opacity-[0.6] text-[16px] font-medium"><a href="/blog">Blog</a></li>
                <li className="opacity-[0.6] text-[16px] font-medium"><a href="/contact-us">Contact us</a></li>
                <li className="flex items-center gap-2 text-[16px] font-medium text-[#FFD3AF]">Clone project <i className="fa-solid fa-arrow-right text-white"></i></li>
                
            </ul>
        </nav>
    )
}