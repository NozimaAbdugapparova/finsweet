import { useState } from "react";

const data = {
    details: [
        "Create and edit video content for multi-platform use and distribution for social media channels (Facebook, Youtube, Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).",
        "Design & Create highly engaging industry-related content in both photo, gif & video format",
        "Publish Posts on various social media channels",
        "Promote content on social networks and monitor engagement (e.g. comments and shares)",
        "Research industry-related topics",
        "Editing audio and sound design on projects",
        "Engage in opportunities to develop original content and concepts for web and mobile",
        "Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.",
        "Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels",
    ],
    requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "2+ years of experience in social media management",
        "Strong understanding of social media platforms",
        // add your real requirements here
    ],
    responsibilities: [
        "Oversee day-to-day social media content creation",
        "Collaborate with design and content teams",
        // add your real responsibilities here
    ],
};

export default function Fullstack2() {
    const [activeTab, setActiveTab] = useState("details");

    const tabClass = (tab) =>
        activeTab === tab
            ? "text-[#454dfd] text-[18px] font-semibold leading-[150%] border-b-2 border-[#454dfd] pb-2 cursor-pointer"
            : "text-[18px] font-semibold leading-[150%] cursor-pointer";

    return (
        <section className="w-[80%] m-auto bg-[#ecf8f9]">
            <ul className="flex justify-around h-20 items-center px-35">
                <li className={tabClass("details")} onClick={() => setActiveTab("details")}>Details</li>
                <li className={tabClass("requirements")} onClick={() => setActiveTab("requirements")}>Requirements</li>
                <li className={tabClass("responsibilities")} onClick={() => setActiveTab("responsibilities")}>Responsibilities</li>
            </ul>
            <hr className="w-full border border-t border-[#e0f1f2]" />
            <ul className="flex flex-col gap-5 px-20 py-16 list-disc text-[14px]">
                {data[activeTab].map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </section>
    );
}