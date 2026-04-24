export default function Team2(){
    return(
        <section className="bg-[#ecf8f9] py-16">
            <div className="flex flex-col w-[80%] m-auto gap-10">
                <h1 className="text-[#232536] leading-[121%] text-[36px] font-semibold">Blog posts from Javena</h1>
            <div className="flex gap-5">
                <div className="flex bg-white w-[484px]">
                    <img className="w-[206px] h-[194px]" src="/images/Image (8).png" alt="" />
                    <div className="flex flex-col p-5 gap-3">
                        <p className="text-[#232536] opacity-[0.6] leading-[143%] text-[12px] font-medium">Jan 19, 2021</p>
                        <h4 className="text-[#232536] leading-[130%] text-[20px] font-semibold">Today’s best design trends for digital products</h4>
                        <p className="text-[#444cfc] opacity-[0.87] text-[14px] font-medium">Read More <i class="fa-solid fa-arrow-right"></i></p>
                    </div>
                </div>
                <div className="flex bg-white w-[484px]">
                    <img className="w-[206px] h-[194px]" src="/images/Image (9).png" alt="" />
                    <div className="flex flex-col p-5 gap-3">
                        <p className="text-[#232536] opacity-[0.6] leading-[143%] text-[12px] font-medium">Jan 19, 2021</p>
                        <h4 className="text-[#232536] leading-[130%] text-[20px] font-semibold">A practical guide to building a brand strategy</h4>
                        <p className="text-[#444cfc] opacity-[0.87] text-[14px] font-medium">Read More <i class="fa-solid fa-arrow-right"></i></p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}