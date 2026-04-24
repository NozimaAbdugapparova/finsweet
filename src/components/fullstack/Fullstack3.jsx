export default function Fullstack3(){
    return(
        <section className="w-[80%] m-auto py-16 flex flex-col gap-10">
            <h1 className="text-[#232536] text-[36px] font-semibold leading-[121%] w-[90%]">Apply now</h1>
                <form className="grid grid-cols-2 gap-5 w-full" action="">
                    <input required className="bg-[#f9f9ff] w-[424px] h-[70px] pl-7 border-none outline-none focus:outline-none focus:ring-0" type="text" placeholder="First Name" />
                    <input required className="bg-[#f9f9ff] w-[424px] h-[70px] pl-7 border-none outline-none focus:outline-none focus:ring-0" type="text" placeholder="Last Name" />
                    <input required className="bg-[#f9f9ff] w-[424px] h-[70px] pl-7 border-none outline-none focus:outline-none focus:ring-0" type="email" placeholder="Email Id" />
                    <input required className="bg-[#f9f9ff] w-[424px] h-[70px] pl-7 border-none outline-none focus:outline-none focus:ring-0" type="text" placeholder="Mobile no" />
                    <textarea required className="my-2 border-none outline-none focus:outline-none focus:ring-0 text-[#232536] text-[14px] bg-[#f9f9ff] font-medium mb-7 placeholder-opacity-[0.37] w-full h-40 p-7 wrap flex flex-wrap col-span-2" type="text" placeholder="Why do you thing you are good fit for Ether?"></textarea>

                    <div className="flex gap-4 col-span-2 ">
                        <img className="size-5 mt-1" src="/images/Checkmark.png" alt="" />
                        <p className="text-black opacity-[0.8] font-normal text-[13px] leading-[150%] w-[77%]">I agree to accept the privacy policy,  We will add your contact details provided in this form to our system for contacting you regarding your request.</p>
                    </div>

                    <button type="submit" className="bg-[#444cfc] w-[219px] h-[48px] text-white relative mt-4"><span className="size-4 bg-[#FFD3AF] absolute top-0 left-0"></span> <span className="size-3 bg-white opacity-[0.6] absolute top-0 left-2"></span> <span className="size-2 bg-white opacity-[0.6] absolute top-3.5 left-0"></span>
                    Submit Application <i className="fa-solid fa-arrow-right text-white"></i></button>
                </form>
        </section>
    )
}