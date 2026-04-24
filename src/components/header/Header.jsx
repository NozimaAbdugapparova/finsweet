import Navbar from "./Navbar";

export default function Header (){
    return(
        <header className="bg-[#232536]">
        <Navbar />
        <hr className="bg-white text-white opacity-[0.6]" />
        <section className="w-[80%] m-auto mt-20 flex flex-col gap-10">
            <div className="flex justify-between">
                <div className="flex flex-col justify-center gap-5">
                    <h1 className="leading-[121%] text-[42px] font-semibold text-white">Transform Your Idea Into Reality with Finsweet</h1>
                    <p className="leading-[150%] opacity-[0.6] text-white  text-[14px] w-[398px]">The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
                    <button className="bg-[#444cfc] w-[219px] h-[48px] text-white relative"><span className="size-4 bg-[#FFD3AF] absolute top-0 left-0"></span> <span className="size-3 bg-white opacity-[0.6] absolute top-0 left-2"></span> <span className="size-2 bg-white opacity-[0.6] absolute top-3.5 left-0"></span>
                        Request Quote <i className="fa-solid fa-arrow-right text-white"></i></button>
                </div>
                <img className="w-[453px] h-[522px]" src="./images/Header Image.png" alt="" />
            </div>
            <div className="flex justify-between">
                <div className="w-[150px]">
                    <span className="leading-[143%] text-[12px] text-white opacity-[0.6]">Our Clients</span>
                    <p className="text-white leading-[156%] text-[15px] font-medium w-[150px]">We've Worked with</p>
                </div>
                <img className="w-[130px] h-[70px]" src="./images/Logo (2).png" alt="" />
                <img className="w-[130px] h-[70px]" src="./images/Logo (3).png" alt="" />
                <img className="w-[130px] h-[70px]" src="./images/Logo (4).png" alt="" />
                <img className="w-[130px] h-[70px]" src="./images/Logo (5).png" alt="" />
                <img className="w-[130px] h-[70px]" src="./images/Logo (6).png" alt="" />
            </div>
        </section>
    </header>
    )
}