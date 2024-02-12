import React from 'react'
import './ResumeComponent.css';
const Resume = () => {
  const resumePDFPath = '/path/to/your/resume.pdf';
  return (
    <div className="resume-container">
    <h2>My Resume</h2>
    {/* Render your resume content here */}
    <div className="resume-content">
      {/* Your resume content goes here */}
      {/* For example, if your resume is in HTML: */}
      {/* <div dangerouslySetInnerHTML={{ __html: yourResumeHTML }} /> */}
      {/* Or if your resume is in Markdown, you can convert it to HTML using a library like react-markdown */}
    </div>
    <a href={resumePDFPath} download className="download-link">Download My Resume</a>
  </div>
  )
}

export default Resume