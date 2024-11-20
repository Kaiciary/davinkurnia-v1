import React from "react";
import { MdArrowOutward } from "react-icons/md";

interface myWorkData {
    name: string,
    desc: string,
    tech?: any,
    url: string
}

interface myWorkProps {
    works: myWorkData[]
}


const MyWork = ({ works }: myWorkProps) => {
    return <ul className="xl:mt-0 mt-3">
        {works.map((project, index) =>
            <li key={index}>
                <p className='text-left pb-2'>
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-block"
                    >
                        <span className="inline-block group-hover:underline group-hover:text-teal-500">
                            {project.name}
                        </span>
                        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-teal-500">
                            <MdArrowOutward />
                        </span>
                    </a>

                </p>
                <p className='text-left text-gray-400'>
                    {project.desc}
                </p>
                <div className='pb-10 flex flex-wrap'> {project.tech.map((tec: any, index: any) => (
                    <p className='text-teal-500 bg-teal-950 rounded text-sm p-1 mr-1.5 mt-2' key={index}>{tec}</p>
                ))} </div>
            </li>
        )}
        <li>
            <p className="text-left">more comming soon...</p>
        </li>
    </ul>
}

export default MyWork