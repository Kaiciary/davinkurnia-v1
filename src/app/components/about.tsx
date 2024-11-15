import React from "react";

const About: React.FC<{ aboutMe: string }> = ({ aboutMe }) => {
    return <p className="text-gray-400 xl:text-base xl:text-left text-left">{aboutMe.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
            <br />
        </React.Fragment>
    ))}</p>;
};

export default About;