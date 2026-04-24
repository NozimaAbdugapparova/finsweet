export default function Footer(){
    return(
        <footer className="flex flex-col relative">
            <div className="flex flex-col w-[80%] m-auto gap-5 py-20 relative">
                <div className="flex justify-between">
                    <div className="flex flex-col w-[353px]">
                        <h2 className="text-[#232536] text-[36px] font-semibold leading-[121%]">Let's make something special</h2>
                        <h6 className="text-[#232536] text-[20px] font-semibold leading-[150%] my-5">Let's talk! 🤙 </h6>
                        <p className="text-[#232536] text-[16px] font-normal leading-[156%]">020 7993 2905</p>
                        <p className="text-[#232536] text-[16px] font-normal leading-[156%]">hi@finsweet.com</p>
                    </div>
                    <ul>
                        <li className="text-[#232536] text-[16px] font-semibold leading-[175%]"><a href="/">Home</a></li>
                        <li className="text-[#232536] text-[16px] font-semibold leading-[175%]"><a href="/service">Service</a></li>
                        <li className="text-[#232536] text-[16px] font-semibold leading-[175%]"><a href="/company">Company</a></li>
                        <li className="text-[#232536] text-[16px] font-semibold leading-[175%]"><a href="/career">Career</a></li>
                        <li className="text-[#232536] text-[16px] font-semibold leading-[175%]"><a href="/blog">News</a></li>
                    </ul>
                    <ul className="flex flex-col gap-2">
                        <li className="text-[#232536] text-[16px] font-semibold leading-[175%]"><a href="/service">Service</a></li>
                        <li className="text-[#232536] text-[14px] font-medium leading-[143%]"><a href="/technical-support">Technical support</a></li>
                        <li className="text-[#232536] text-[14px] font-medium leading-[143%]"><a href="/testing">Testing</a></li>
                        <li className="text-[#232536] text-[14px] font-medium leading-[143%]"><a href="/development">Development</a></li>
                        <li className="text-[#232536] text-[14px] font-medium leading-[143%]"><a href="/aws-azure">AWS/Azure</a></li>
                        <li className="text-[#232536] text-[14px] font-medium leading-[143%]"><a href="/consulting">Consulting</a></li>
                        <li className="text-[#232536] text-[14px] font-medium leading-[143%]"><a href="/information-technology">Information Technology</a></li>
                    </ul>
                    <ul className="flex flex-col gap-2">
                        <li className="text-[#232536] text-[16px] font-semibold leading-[175%]"><a href="/resources">Resourses</a></li>
                        <li className="text-[#232536] text-[14px] font-medium leading-[143%]"><a href="/about">About</a></li>
                        <li className="text-[#232536] text-[14px] font-medium leading-[143%]"><a href="/testimonial">Testimonials</a></li>
                        <li className="text-[#232536] text-[14px] font-medium leading-[143%]"><a href="/privacy-policy">Privacy Policy</a></li>
                        <li className="text-[#232536] text-[14px] font-medium leading-[143%]"><a href="/terms-of-use">Terms of use</a></li>
                        <li className="text-[#232536] text-[14px] font-medium leading-[143%]"><a href="/blog">Blog</a></li>
                    </ul>
                </div>
                <div className="flex justify-between">
                    <p className="text-[#232536] text-[12px] w-[170px] font-normal leading-[156%]">DLF Cybercity, Bhubaneswar, India, &52050</p>
                    <div className="flex items-center">
                        <span className="w-4 h-3 bg-[#ffe6d2]"></span>
                        <span className="w-10 h-3 bg-[#666dff] mr-4"></span>
                        <a href="">Contact Us <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="bg-[#ffe6d2] h-14">
                <div className="flex justify-between w-[80%] m-auto items-center h-full">
                    <div className="flex items-center gap-6">
                    <img src="./images/Logo (8).png" alt="" />
                    <p className="font-medium text-[16px]">©2021 Finsweet</p>
                </div>
                <div className="flex gap-5">
                    <a href=""><img src="./images/Negative.png" alt="" /></a>
                    <a href=""><img src="./images/twitter.png" alt="" /></a>
                    <a href=""><img src="./images/insta.png" alt="" /></a>
                    <a href=""><img src="./images/linkedin.png" alt="" /></a>
                </div>
                </div>

                <span className="size-[20px] absolute left-[10%] top-5 bg-[#FFA155]"></span>
                <span className="size-[10px] absolute left-[11%] top-5 bg-[#FFD3AF]"></span>
                <span className="size-[10px] absolute left-[11.9%] top-5 bg-[#444CFC]"></span>
                <span className="size-[7px] absolute left-[10%] top-10 bg-[#444CFC]"></span>
            </div>

            

        </footer>
    )
}