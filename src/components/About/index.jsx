import React from 'react'
import"./about.css"
import aboutpic from"../../assets/images/pic1.jpg"
const About = () => {
  return (
    <div className='Aboutcontainer'>
        <div className='Imagecontainer'>
            <img src={aboutpic} alt="" />
        </div>
        <div className='Content'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus excepturi explicabo culpa suscipit consectetur officia velit aperiam? Eligendi, veniam rerum.</p>
        </div>
    </div>
  )
}

export default About