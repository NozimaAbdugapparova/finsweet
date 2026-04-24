export default function Contact1(){
    return(
        <section className="w-[80%] m-auto flex py-10 gap-10">
            <div className="flex flex-col relative">
                <p className="leading-[143%] text-[12px] tracking-[0.21em] font-medium uppercase my-2">CONTACT US</p>
                <h2 className="text-[#232536] text-[33px] font-semibold leading-[121%]  mb-7">Have a Question ?<br />Let’s Get in Touch with us 👋</h2>
                <p className="w-[90%] text-[#232536] opacity-[0.87] text-[13px] mb-7">Fill up the Form  and ou team will get back to within 24 hrs</p>

                <form action="" className="flex flex-col">
                    <strong className=" text-[#232536] opacity-[0.6] text-[16px] font-medium">Name</strong>
                    <input className="my-2 border-none outline-none focus:outline-none focus:ring-0 text-[#232536] text-[14px] font-medium" type="text" placeholder="Enter your name"/>
                    <hr className="w-[300px] border border-t border-[#848596] opacity-[0.87]"/>

                    <strong className=" text-[#232536] opacity-[0.6] text-[16px] font-medium mt-5">Email</strong>
                    <input className="my-2 border-none outline-none focus:outline-none focus:ring-0 text-[#232536] text-[14px] font-medium" type="text" placeholder="Enter your email"/>
                    <hr className="w-[300px] border border-t border-[#848596] opacity-[0.87]"/>

                    <strong className=" text-[#232536] opacity-[0.6] text-[16px] font-medium mt-5">Subject</strong>
                    <input className="my-2 border-none outline-none focus:outline-none focus:ring-0 text-[#232536] text-[14px] font-medium" type="text" placeholder="What are you going to write about"/>
                    <hr className="w-[300px] border border-t border-[#848596] opacity-[0.87]"/>

                    <strong className=" text-[#232536] opacity-[0.6] text-[16px] font-medium mt-5">Message</strong>
                    <textarea className="my-2 border-none outline-none focus:outline-none focus:ring-0 text-[#232536] text-[14px] font-medium mb-7 placeholder-opacity-[0.37] w-[300px] wrap flex flex-wrap" type="text" placeholder="Type your message"/>
                    <hr className="w-[300px] border border-t border-[#848596] opacity-[0.87]"/>


                    <button className="bg-[#444cfc] w-[219px] h-[48px] text-white relative mt-7"><span className="size-4 bg-[#FFD3AF] absolute top-0 left-0"></span> <span className="size-3 bg-white opacity-[0.6] absolute top-0 left-2"></span> <span className="size-2 bg-white opacity-[0.6] absolute top-3.5 left-0"></span>
                    Send Message <i className="fa-solid fa-arrow-right text-white"></i></button>

                </form>
                <span className="size-[14px] absolute left-0 -top-4 bg-[#FFD3AF]"></span>
            </div>

            <div className="bg-[#666dff] p-10 flex flex-col gap-3 w-[362px] h-[562px]">
                <span className="text-[14px] text-white opacity-[0.6] font-medium leading-[143%]">Location</span>
                <hr className="w-[250px] border border-t border-[rgb(0,0,0,0.08)]"/>
                <p className="text-[18px] text-white font-medium leading-[143%]">DLF Cybercity, Bhubaneswar, India, &52050</p>
                <span className="text-[14px] text-white opacity-[0.6] font-medium leading-[143%] mt-5">Working Hour</span>
                <hr className="w-[250px] border border-t border-[rgb(0,0,0,0.08)]"/>
                <p className="text-[18px] text-white font-medium leading-[143%]">Monday To Friday <br />9:00 AM to 8:00 PM </p>
                <span className="text-[14px] text-white opacity-[0.6] font-medium leading-[143%] -mt-3">Our Support Team is available 24Hrs</span>
                <span className="text-[14px] text-white opacity-[0.6] font-medium leading-[143%] mt-5">Contact Us</span>
                <hr className="w-[250px] border border-t border-[rgb(0,0,0,0.08)]"/>
                <p className="text-[18px] text-white font-medium leading-[143%]">020 7993 2905</p>
                <span className="text-[14px] text-white opacity-[0.6] font-medium leading-[143%] -mt-3">Hello@ether.com</span>
                <div className="flex gap-3 mt-10">
                    <img src="./images/oqface.png" alt="" />
                    <img src="./images/oqtwit.png" alt="" />
                    <img src="./images/oqinsta.png" alt="" />
                    <img src="./images/oqlink.png" alt="" />
                </div>
            </div>
        </section>
    )
}