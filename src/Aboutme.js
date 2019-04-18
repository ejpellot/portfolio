import React from 'react'
import bio from './Assets/biopic.jpg'
import linkedinlogo from './Assets/linkedin.png'
import instagram from './Assets/instagram.png'
import github from './Assets/github.png'

const Aboutme =()=>{

    return(
        
    <div className = "aboutme">
        <img src = {bio} className = "BioPic"
                width  = {375}
                height = {500}
            />
        <div className = "textbox" >
            <h1 className = "aboutheader">There are many ways to live your life so why not choose?</h1>
            <p1>I think learning what you love is something truly special. While I continue my studies at Rowan University, I 
                try to stay as wildy creative as possible. This includes designing, taking photos and programming scripts. I love to keep myself busy 
                while connecting with others and sharing ideas! 
            </p1>
            <div className = "sociallayout">
            <a href= "https://www.linkedin.com/in/edwinpellot3/" target="_blank">
            <img src = {linkedinlogo}
                width  = {40}
                height = {40}
            /></a>

            
            <a href= "https://www.instagram.com/ejpellot/?hl=en" target="_blank">
            <img src = {instagram}
                width  = {40}
                height = {40}
            /></a>
            <a href= "https://github.com/ejpellot" target="_blank">
            <img src = {github}
                width  = {40}
                height = {40}
            />
            </a>
            </div>
            </div>
    </div>
   
    )

}
export default Aboutme;