export default function Section5(){
    return(
        <section className="bg-[#f9f9ff] py-14">
            <div className="flex w-[80%] m-auto gap-10">
                <div className="flex flex-col w-[372px] relative">
                    <h2 className="text-[#232536] text-[38px] font-bold leading-[121%] mb-3">Our customers love what we do</h2>
                    <strong className="text-[#232536] text-[18px] leading-[156%] font-medium mb-3">Transform your idea into reality with finsweet</strong>
                    <p className="text-[#5d5f6d] text-[13.5px] leading-[150%] font-normal mb-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                    <div className="flex gap-3">
                        <img className="size-[40px]" src="./images/Image 3 (1).png" alt="" />
                        <img className="size-[40px]" src="./images/Image 2 (1).png" alt="" />
                        <img className="size-[40px]" src="./images/Image 1 (2).png" alt="" />
                    </div>
                    <p className="text-[12px] font-medium mt-3"><span className="text-[16px]">30+</span> Customer Reviews</p>
                    <span className="size-3 bg-[#444CFC] absolute -top-4"></span>
                </div>
                <div className="h-[320px] bg-white w-[477px] p-8 relative">
                    <p className="text-[#232536] text-[22px] opacity-[0.87] font-semibold leading-[150%]">Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!</p>
                    <div className="flex justify-between items-center mt-8">
                        <div className="flex gap-2">
                            <img src="./images/Image 3 (1).png" alt="" />
                            <div>
                                <h6 className="text-[#232536] text-[16px] opacity-[0.87] font-semibold leading-[170%]">Johnny Andro</h6>
                                <p className="text-[#232536] text-[14px] opacity-[0.6] font-medium leading-[143%]">Director, Company</p>
                            </div>
                        </div>
                        <img className="w-[120px] h-[25px] ml-25" src="./images/Logo (7).png" alt="" />

                        {/* Position */}
                        <img className="absolute right-7 -top-3" src="./images/Quote.png" alt="" />

                        <span className="absolute bg-[#FFA155] h-30 w-3 left-0 top-0"></span>
                        <span className="absolute bg-[#FFD3AF] h-40 w-3 left-0 top-20"></span>
                        <span className="absolute bg-[#444CFC] h-20 w-3 left-0 top-60"></span>

                        <div className="flex items-center absolute -bottom-5 left-58 gap-2">
                            <span className="bg-black size-2 rounded-full "></span>
                        <span className="bg-[#232536] size-[7px] rounded-full opacity-[0.2]"></span>
                        <span className="bg-[#232536] size-[6px] rounded-full opacity-[0.2]"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}