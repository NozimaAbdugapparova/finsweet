export default function Section1(){
    return (
        <section className="flex flex-col w-[80%] m-auto py-10 gap-5">
            <p className="leading-[143%] text-[12px] tracking-[0.21em] font-medium">ABOUT US</p>
            <div className="flex justify-between gap-8">
                <h1 className="text-[#232536] text-[36px] font-semibold leading-[121%]">The company leads entire webdesign process from concept to delivery.</h1>
                <div className="flex flex-col">
                    <h2 className="text-[#232536] text-[28px] font-semibold leading-[150%]">The Era Of Technology.</h2>
                    <p className="text-[#5d5f6d] text-[14px]">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.</p>
                </div>
            </div>
            <div className="flex gap-3">
                <img className="w-[288px] h-[326px]" src="./images/Image 1 (1).png" alt="" />
                <img className="w-[288px] h-[326px]" src="./images/Image 2.png" alt="" />
                <img className="w-[288px] h-[326px]" src="./images/Image 3.png" alt="" />
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-7">
                    <div>
                        <h4 className="text-[#232536] text-[32px] leading-[150%] font-semibold mb-2">1560+</h4>
                        <img src="./images/Shapes.png" alt="" />
                        <p>Project Delivered</p>
                    </div>
                    <div>
                        <h4 className="text-[#232536] text-[32px] leading-[150%] font-semibold mb-2">100+</h4>
                        <img src="./images/Shapes.png" alt="" />
                        <p>Professional</p>
                    </div>
                    <div>
                        <h4 className="text-[#232536] text-[32px] leading-[150%] font-semibold mb-2">950+</h4>
                        <img src="./images/Shapes.png" alt="" />
                        <p>Happy Client</p>
                    </div>
                    <div>
                        <h4 className="text-[#232536] text-[32px] leading-[150%] font-semibold mb-2">10 yrs</h4>
                        <img src="./images/Shapes.png" alt="" />
                        <p>Experience</p>
                    </div>
                </div>
                <a className="text-[#444cfc] font-medium" href="#">Read about us <i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </section>
    )
}