"use client";
import { useState } from "react";
import Button from "../components/button"
import resumeData from "../data/resumeData"
import Experience from "../components/experience";
import Education from "../components/about";
import About from "../components/about";

const Service: React.FC = () => {

    const [activeTab, setActiveTab] = useState("about");

    const renderContent = () => {
        switch (activeTab) {
            case "about":
                return <About aboutMe={resumeData.about} />;
            case "experience":
                return <Experience experience={resumeData.experience} />;
               
        }
    };

    return (
        <div className="py-8 xl:py-32">
            <div className="container mx-auto xl:block text-center xl:text-left">
                <div className="flex flex-col xl:flex-row gap-32">
                    <div>
                        <h1 className="h2">My Resume</h1>
                        <div className="flex justify-end">
                            <ul>
                                <li className="my-8 cursor-pointer h4" onClick={() => setActiveTab("about")}>About</li>
                                <li className="my-8 cursor-pointer h4" onClick={() => setActiveTab("experience")}>Experience</li>
                                <li className="my-8 cursor-pointer h4" onClick={() => setActiveTab("skills")}>Skills</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 xl:mt-0">
                        <h1 className="h3 pt-4">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
                        <div className="mt-4 max-w-xl">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
