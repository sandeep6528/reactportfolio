import React from 'react'
import ProjectGrid from "./ProjectGrid"
import ProjectPick from "../../assets/images/codingpic.jpg"
const Projects = () => {
  const projects = [
    {
      name:"PasswordGenerator",
     imageUrl: ProjectPick,
     deployedLink:"https://sandeep6528.github.io/passwordgenerator/",
     repoLink:"https://github.com/sandeep6528/passwordgenerator"
    },

    {
      name:"PasswordGenerator",
     imageUrl: ProjectPick,
     deployedLink:"https://sandeep6528.github.io/passwordgenerator/",
     repoLink:"https://github.com/sandeep6528/passwordgenerator"
    },

    {
      name:"PasswordGenerator",
     imageUrl: ProjectPick,
     deployedLink:"https://sandeep6528.github.io/passwordgenerator/",
     repoLink:"https://github.com/sandeep6528/passwordgenerator"
    },

    {
      name:"PasswordGenerator",
     imageUrl: ProjectPick,
     deployedLink:"https://sandeep6528.github.io/passwordgenerator/",
     repoLink:"https://github.com/sandeep6528/passwordgenerator"
    },

    {
      name:"PasswordGenerator",
     imageUrl: ProjectPick,
     deployedLink:"https://sandeep6528.github.io/passwordgenerator/",
     repoLink:"https://github.com/sandeep6528/passwordgenerator"
    },

    {
      name:"PasswordGenerator",
     imageUrl: ProjectPick,
     deployedLink:"https://sandeep6528.github.io/passwordgenerator/",
     repoLink:"https://github.com/sandeep6528/passwordgenerator"
    },
  ]


  return (
    <div>
      <h1>Projects</h1>
      <ProjectGrid projects ={projects}/>
      </div>
  )
}

export default Projects