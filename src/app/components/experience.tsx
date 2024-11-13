import '../css/experience.css';

interface ExperienceData {
    company: string;
    position: string;
    period: string;
    details: string[];
}

const Experience: React.FC<{ experience: ExperienceData[] }> = ({ experience }) => {
    return (
        <ul style={{ position: "relative" }}>
            {experience.map((exp, index) => (
                <li className="point" key={index}>
                    <p>
                        <strong>{exp.position}</strong> <strong className="text-teal-500">@ {exp.company}</strong>
                    </p>
                    <p>{exp.period}</p>
                    <div className="h-4"></div>
                    {exp.details.length > 0 && (
                        <p className="text-gray-400 pb-16">{exp.details[0]}</p> 
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Experience;
