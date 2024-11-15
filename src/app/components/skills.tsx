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
    <div>{skills.map((skill, index) => 
      <div key={index}>{skill.icon}</div>
    )}</div>
  )
}

export default Skills