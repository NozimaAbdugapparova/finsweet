
export default function Blog1(){
      
    return(
        <section className="flex w-[80%] m-auto py-10 gap-5">
            <div className="flex flex-col relative">
                <p className="leading-[143%] text-[12px] tracking-[0.21em] font-medium uppercase my-2">TREnding</p>
                <h2 className="text-[#232536] text-[42px] font-semibold leading-[121%]  mb-7">Breaking the code How did we build our Figma plugin</h2>
                <p className="w-[90%] text-[#232536] opacity-[0.87] text-[13px] mb-7">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.</p>

                <span className="text-[#444cfc] font-medium leading-[150%] text-[16px]"><a href="/blog/article1">Read More</a> <i className="fa-solid fa-arrow-right text-[#232536] ml-5"></i></span>

                <div className="flex items-center gap-5 mt-4 mb-10">
                    <img src=".\images\Image (16).png" alt="" />
                    <strong className="-ml- text-[#232536] opacity-[0.87] text-[16px] font-normal">Andrew Jonson</strong>
                    <span className="h-4 w-[1px] bg-[rgba(0,0,0,0.2)]"></span>
                    <p>Posted on 27th January 2021</p>
                </div>

                <img className="w-[458px] h-[280px]" src=".\images\Image (17).png" alt="" />
                

                <span className="absolute bg-[#FFA155] h-20 w-3 right-10 bottom-0"></span>
                <span className="absolute bg-[#FFD3AF] h-40 w-3 right-10 bottom-20"></span>
                <span className="absolute bg-[#444CFC] h-20 w-3 right-10 bottom-50"></span>

                <span className="size-[14px] absolute left-0 -top-4 bg-[#FFD3AF]"></span>
            </div>

            <div className="flex flex-col bg-[#ffdfc6] p-7 h-[608px] relative">
                <h2 className="text-[#232536] text-[20px] font-semibold leading-[150%] mb-5">Great design expectations prejudice in digital products in Next Year</h2>
                <div className="flex gap-2 mb-10">
                    <img src=".\images\Image (16).png" alt="" />
                    <span>
                        <p className="text-[#232536] opacity-[0.87] text-[16px] font-normal leading-[150%]">Andrew Jonson</p>
                        <p className="text-[#232536] opacity-[0.6] text-[14px] font-medium">Jan 19, 2021</p>
                    </span>
                </div>

                <h2 className="text-[#232536] text-[20px] font-semibold leading-[150%] mb-5">Great design expectations prejudice in digital products in Next Year</h2>
                <div className="flex gap-2 mb-10">
                    <img src=".\images\Image (18).png" alt="" />
                    <span>
                        <p className="text-[#232536] opacity-[0.87] text-[16px] font-normal leading-[150%]">Andrew Jonson</p>
                        <p className="text-[#232536] opacity-[0.6] text-[14px] font-medium">Jan 19, 2021</p>
                    </span>
                </div>

                <h2 className="text-[#232536] text-[20px] font-semibold leading-[150%] mb-5">Great design expectations prejudice in digital products in Next Year</h2>
                <div className="flex gap-2 mb-10">
                    <img src=".\images\Image (19).png" alt="" />
                    <span>
                        <p className="text-[#232536] opacity-[0.87] text-[16px] font-normal leading-[150%]">Andrew Jonson</p>
                        <p className="text-[#232536] opacity-[0.6] text-[14px] font-medium">Jan 19, 2021</p>
                    </span>

                    <span className="size-[20px] absolute right-0 top-0 bg-[#FFA155]"></span>
                    <span className="size-[10px] absolute right-0 top-2 bg-[#FFD3AF]"></span>
                    <span className="size-[7px] absolute right-5 top-0 bg-[#444CFC]"></span>
                    <span className="size-[10px] absolute right-0 top-4.5 bg-[#444CFC]"></span>
                </div>


            </div>
        </section>
    )
}