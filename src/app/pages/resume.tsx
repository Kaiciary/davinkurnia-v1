"use client";
import { useEffect, useState } from "react";
import resumeData from "../data/resumeData"
import Experience from "../components/experience";
import About from "../components/about";
import Skills from "../components/skills";

const Service: React.FC = () => {

    const [activeTab, setActiveTab] = useState("about");
    const [aditionalText, setAditionalText] = useState("About Me");


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
    };

    return (
        <div className="py-24 xl:py-32">
            <div className="container mx-auto xl:block text-center xl:text-left">
                <div className="flex flex-col xl:flex-row xl:gap-32">
                    <div>
                        <h1 className="h2">My Resume</h1>
                        <div className="flex xl:justify-end justify-center">
                            <ul className="flex xl:flex-col flex-row xl:gap-0 gap-10">
                                <li className="my-4 cursor-pointer xl:h4 hover:text-teal-500 focus:underline active:underline transition-all" onClick={() => setActiveTab("about")}>About</li>
                                <li className="my-4 cursor-pointer xl:h4 hover:text-teal-500 focus:underline active:underline transition-all" onClick={() => setActiveTab("experience")}>Experience</li>
                                <li className="my-4 cursor-pointer xl:h4 hover:text-teal-500 focus:underline active:underline transition-all" onClick={() => setActiveTab("skills")}>Skills</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 xl:mt-0">
                        <h1 className="h3 xl:pt-4">{aditionalText}</h1>
                        <div className="mt-4 flex xl:justify-start justify-center">
                            <div className="xl:max-w-xl max-w-[450px]">
                                {renderContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
