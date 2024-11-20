"use client";
import { useEffect, useState } from "react";
import resumeData from "../data/resumeData"
import Experience from "../components/experience";
import About from "../components/about";
import Skills from "../components/skills";

const Service: React.FC = () => {

    const [activeTab, setActiveTab] = useState("about");
    const [aditionalText, setAditionalText] = useState("About Me");

    /*
    // Update aditionalText whenever activeTab changes
    useEffect(() => {
        switch (activeTab) {
            case "about":
                setAditionalText("About Me");
                break;
            case "experience":
                setAditionalText("My Experience");
                break;
            case "skills":
                setAditionalText("My Skills");
                break;
            default:
                setAditionalText("");
        }
    }, [activeTab]);
    
    const renderContent = () => {
        switch (activeTab) {
            case "about":
                return <About aboutMe={resumeData.about} />;
            case "experience":
                return <Experience experience={resumeData.experience} />;
            case "skills":
                return <Skills skills={resumeData.skills}></Skills>
        }
    };*/

    return (
        <div className="pt-10 xl:py-32 pl-3">
            <div className="container mx-auto xl:block text-left items-center">
                <div className="flex flex-col xl:flex-row xl:gap-32">
                    {/*<div className="text-left">
                        <h1 className="h2">My Resume</h1>
                        /*<div className="flex xl:justify-end justify-start">
                            <ul className="flex xl:flex-col flex-row xl:gap-0 gap-10">
                                <li className="my-4 cursor-pointer xl:h4 hover:text-teal-500 focus:underline active:underline transition-all" onClick={() => setActiveTab("about")}>About</li>
                                <li className="my-4 cursor-pointer xl:h4 hover:text-teal-500 focus:underline active:underline transition-all" onClick={() => setActiveTab("experience")}>Experience</li>
                                <li className="my-4 cursor-pointer xl:h4 hover:text-teal-500 focus:underline active:underline transition-all" onClick={() => setActiveTab("skills")}>Skills</li>
                            </ul>
                        </div>
                    </div>*/}
                    <div className="mt-4 xl:mt-0">
                        <h1 className="h3 font-bold xl:pt-4 pt-7">About Me</h1>
                        <div className="mt-4 flex justify-start">
                            <div className="xl:max-w-xl max-w-[450px] text-base pr-1">
                                <About aboutMe={resumeData.about} />
                            </div>
                        </div>
                        <h1 className="h3 xl:pt-4">My Experience</h1>
                        <div className="mt-4 flex justify-start">
                            <div className="xl:max-w-xl max-w-[450px]">
                                <Experience experience={resumeData.experience} />
                            </div>
                        </div>
                        {/*<h1 className="h3 xl:pt-4">My Skills</h1>
                        <div className="mt-4 flex justify-start">
                            <div className="xl:max-w-xl max-w-[450px]">
                                <Skills skills={resumeData.skills}></Skills>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
