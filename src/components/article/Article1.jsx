export default function Article1(){
    return(
        <section className="flex w-[80%] m-auto py-10 gap-5">
            <div className="flex flex-col relative">
                <h2 className="text-[#232536] text-[42px] font-semibold leading-[121%]  mb-7 w-[80%] mt-10">Breaking the code How did we build our Figma plugin</h2>
                <p className="w-[75%] text-[#232536] opacity-[0.87] text-[16px] leading-[150%] mb-7">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the greatest satisfaction for our clients</p>

                <div className="flex items-center gap-5 mt-4 mb-10">
                    <img src="\images\Image (16).png" alt="" />
                    <strong className="-ml- text-[#232536] opacity-[0.87] text-[16px] font-normal">Andrew Jonson</strong>
                    <span className="h-4 w-[1px] bg-[rgba(0,0,0,0.2)]"></span>
                    <p>Posted on 27th January 2021</p>
                </div>

                <img className="w-full" src="\images\Image (30).png" alt="" />

                <span className="absolute bg-[#444CFC] w-15 h-3 -bottom-3  right-0"></span>
                <span className="absolute bg-[#FFD3AF] w-30 h-3 -bottom-3 right-15"></span>
                <span className="absolute bg-[#FFA155] w-15 h-3 -bottom-3 right-45"></span>
                
                <span className="size-[14px] absolute left-0 top-5 bg-[#FFD3AF]"></span>
            </div>
        </section>
    )
}