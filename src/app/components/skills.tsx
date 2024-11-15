import React from 'react'

interface skillData{
  name: string,
  icon: JSX.Element
}

interface skillProps{
  skills: skillData[]
}

const Skills = ({skills} : skillProps) => {
  return (
    <div className='grid grid-rows-2 grid-flow-col gap-10 xl:mt-0 mt-5'>{skills.map((skill, index) => 
      <div key={index} className='text-5xl hover:text-teal-500'>{skill.icon}<div className='text-base mt-2'>{skill.name}</div></div>
    )}</div>
  )
}

export default Skills