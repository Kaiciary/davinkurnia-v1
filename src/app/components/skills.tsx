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
    <div className='grid grid-rows-2 grid-flow-col xl:gap-10 gap-5 xl:mt-0 mt-5'>{skills.map((skill, index) => 
      <div key={index} className='xl:text-5xl text-3xl hover:text-teal-500'>{skill.icon}<div className='text-xs mt-2'>{skill.name}</div></div>
    )}</div>
  )
}

export default Skills