import '../css/experience.css';

interface ExperienceData {
    tech: any;
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
                        <p className="text-gray-400 text-left">{exp.details[0]}</p>
                    )}
                    <p className='pb-16 flex flex-wrap'> {exp.tech.map((tec: any, index: any)=> (
                        <p className='text-teal-500 bg-teal-950 rounded text-sm p-1 mr-1.5 mt-2' key={index}>{tec}</p>
                    ))} </p>
                </li>
            ))}
        </ul>
    );
};

export default Experience;
