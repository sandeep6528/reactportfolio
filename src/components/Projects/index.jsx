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
      name:"javascript-quizz",
     imageUrl: ProjectPick,
     deployedLink:"https://github.com/sandeep6528/javascript-quizz",
     repoLink:"https://sandeep6528.github.io/javascript-quizz/"
    },

    {
      name:"PasswordGenerator",
     imageUrl: ProjectPick,
     deployedLink:"https://sandeep6528.github.io/passwordgenerator/",
     repoLink:"https://github.com/sandeep6528/passwordgenerator"
    },

    {
      name:"note-tracker",
     imageUrl: ProjectPick,
     deployedLink:"https://note-taker-sandeep-f43d811847d8.herokuapp.com/",
     repoLink:"https://github.com/sandeep6528/note-tracker"
    },

    {
      name:"weatherdashboard",
     imageUrl: ProjectPick,
     deployedLink:"https://sandeep6528.github.io/weatherdashboard/",
     repoLink:"https://github.com/sandeep6528/weatherdashboard"
    },

    {
      name:"Javascript-Calendar",
     imageUrl: ProjectPick,
     deployedLink:"https://sandeep6528.github.io/Javascript-Calendar/",
     repoLink:"https://github.com/sandeep6528/Javascript-Calendar"
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