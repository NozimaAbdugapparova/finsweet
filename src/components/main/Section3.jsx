export default function Section3(){
    return(
        <section className="bg-[#ffe6d2] py-12">
            <div className="flex flex-col w-[80%] m-auto gap-10">
                <div className="flex flex-col">
                    <p className="leading-[143%] text-[12px] tracking-[0.21em] font-medium">OUR SERVICES</p>
                    <h2 className="text-[#232536] text-[38px] font-semibold leading-[121%] w-[60%] mb-7">We build software solutions that solve client's business challenges</h2>
                    <button className="bg-[#444cfc] w-[219px] h-[48px] text-white relative"><span className="size-4 bg-[#FFD3AF] absolute top-0 left-0"></span> <span className="size-3 bg-white opacity-[0.6] absolute top-0 left-2"></span> <span className="size-2 bg-white opacity-[0.6] absolute top-3.5 left-0"></span>
                        Start a project <i className="fa-solid fa-arrow-right text-white"></i></button>
                </div>
                <div className="flex gap-5">
                    <div className="bg-white flex flex-col w-[355px] h-[285px] py-8 px-5">
                        <img className="size-[47px]" src="./images/Icon Div.png" alt="techsupport" />
                        <h6 className="leading-[175%] text-[16px] font-semibold mt-2">Technical support</h6>
                        <p className="text-[#5d5f6d] text-[13.5px] leading-[150%] font-normal mt-1">We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-className service</p>
                        <a className="text-[#444cfc] text-[16px] leading-[150%] font-medium mt-5" href="#">Read more <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="bg-white flex flex-col w-[355px] h-[285px] py-8 px-5">
                        <img className="size-[47px]" src="./images/Group 1755.png" alt="techsupport" />
                        <h6 className="leading-[175%] text-[16px] font-semibold mt-2">Testing Management</h6>
                        <p className="text-[#5d5f6d] text-[13.5px] leading-[150%] font-normal mt-1">We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-className service</p>
                        <a className="text-[#444cfc] text-[16px] leading-[150%] font-medium mt-5" href="#">Read more <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="bg-white flex flex-col w-[355px] h-[285px] py-8 px-5">
                        <img className="size-[47px]" src="./images/Icon Div (1).png" alt="techsupport" />
                        <h6 className="leading-[175%] text-[16px] font-semibold mt-2">Development</h6>
                        <p className="text-[#5d5f6d] text-[13.5px] leading-[150%] font-normal mt-1">We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-className service</p>
                        <a className="text-[#444cfc] text-[16px] leading-[150%] font-medium mt-5" href="#">Read more <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}