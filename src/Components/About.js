import React from 'react'
import "./About.css"

function About() {
  return (
    <>
      <div className='about-head'>About</div>
      <div className='about'>
        This is react resume builder made by Utkarsh Raj. This project is made by using complete React.js with poppular
        react packages like react-redux, redux-persist, react-hook-form, react-router-dom, react-icons
        and GraphQl API and Storage has been used.

        <div className={"mt-3"}>
          This project was created as part of my personal portfolio to showcase my skills in React.js and modern web development. 
         I am grateful for the open-source community and the creators of the packages and tools that made this project possible.
        </div>
        <a className={"mt-2 anchor-link"} href={"https://github.com/Utkarsh769/Resume-Builder.git"} target="_blank" rel="noopener noreferrer">Star our Github Repo</a>
        </div>
    </>
  )
}

export default About
