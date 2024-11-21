import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Image from 'next/image';
interface myWorkData {
    name: string,
    desc: string,
    tech?: any,
    url: string,
    image: string
}

interface myWorkProps {
    works: myWorkData[]
}


const MyWork = ({ works }: myWorkProps) => {
    return <ul className="xl:mt-0 mt-3 xl:grid xl:grid-rows-3 xl:grid-flow-col xl:gap-10">
        {works.map((project, index) =>
            <li key={index}>
                <p className='text-left pb-2'>
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-block"
                    >
                        <span className="inline-block group-hover:underline text-teal-500">
                            {project.name}
                        </span>
                        <span className="inline-block text-teal-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-teal-500">
                            <MdArrowOutward />
                        </span>
                    </a>

                </p>
                <p className='text-left text-sm text-white/80 xl:pr-20'>
                    {project.desc}
                </p>
                <div className='pb-4 flex flex-wrap'> {project.tech.map((tec: any, index: any) => (
                    <p className='text-teal-500 bg-teal-950 rounded text-sm p-1 mr-1.5 mt-2' key={index}>{tec}</p>
                ))} </div>
                <Image
                    src={project.image}
                    alt="A descriptive alt text"
                    layout="intrinsic"
                    width={500}
                    height={300}
                    className="rounded-md xl:w-[200px] xl:h-[100px] w-[200] h-[100] pb-10"
                />
            </li>
        )}
        <li>
            <p className="text-left">more comming soon...</p>
        </li>
    </ul>
}

export default MyWork