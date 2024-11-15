import '../css/experience.css';

interface ExperienceData {
    links: string;
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
                    <p className='text-left'>
                        <strong>{exp.position}</strong> <strong className="text-teal-500">  <a href={exp.links} target="_blank" rel="noopener noreferrer" className='hover:underline block xl:inline'> @ {exp.company}</a></strong>
                    </p>
                    <p className='text-left'>{exp.period}</p>
                    <div className="h-4"></div>
                    {exp.details.length > 0 && (
                        <p className="text-gray-400 pb-16 xl:text-left text-left">{exp.details[0]}</p> 
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Experience;
