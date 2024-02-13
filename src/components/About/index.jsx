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
            <p>Sandeep's Web Developer Portfolio Welcome to the portfolio of Sandeep! This single-page application showcases Sandeep's skills, projects, and contact information in an intuitive and interactive manner.

Table of Contents Header About Me Portfolio Contact Resume Footer Header Upon loading the portfolio, you'll find a header containing Sandeep's name and a navigation bar. The navigation bar consists of links to different sections of the portfolio, including "About Me," "Portfolio," "Contact," and "Resume." The current section is highlighted for easy navigation.

About Me In the "About Me" section, you'll discover a recent photo or avatar of Sandeep along with a brief biography. Learn more about the person behind the code!

Portfolio Explore Sandeep's projects in the "Portfolio" section. Six applications are showcased with titles and links to both the deployed application and its GitHub repository.

Contact Need to get in touch? The "Contact" section provides a convenient form where you can input your name, email address, and message. Receive notifications for required fields and invalid email addresses for a seamless experience.

Resume In the "Resume" section, you'll find a link to download Sandeep's resume. Additionally, there's a list of proficiencies highlighting the skills and technologies Sandeep is proficient in.

Footer The footer contains text or icon links to Sandeep's GitHub and LinkedIn profiles, as well as his profile on a third platform such as Stack Overflow or Twitter. Connect and stay updated with Sandeep's latest projects and activities!

Thank you for visiting Sandeep's portfolio. Feel free to explore and reach out for collaborations, inquiries, or just to say hello!</p>
        </div>
    </div>
  )
}

export default About