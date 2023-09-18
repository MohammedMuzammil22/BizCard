import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

const Icons = () => {
  const ic = [{icon:<FaFacebook/>},
  {icon:<FaYoutube/>},
  {icon:<FaInstagram/>},
  {icon:<FaGithub/>}]
  return (
    <div>
        <FaFacebook/>
        <FaYoutube/>
        <FaInstagram/>
        <FaGithub/>
        <FaSnapchat/>
        <FaTwitter/>
        <FaLinkedin/>
        <FaSpotify/>
        
    </div>
  )
}

export default Icons


    // { icon: <FaFacebook />, display:false, name:"Facebook" },
    // { icon: <FaYoutube />, display:false, name:"Youtube" },
    // { icon: <FaInstagram />, display:false, name:"Instagram" },
    // { icon: <FaGithub />, display:false, name:"Github" },
    // { icon: <FaSnapchat />, display:false, name:"Snapchat" },
    // { icon: <FaTwitter />, display:false, name:"Twitter" },
    // { icon: <FaLinkedin />, display:false, name:"Linkedin" },
    // { icon: <FaSpotify />, display:false, name:"Spotify" }
    
    // <div className='bg-yellow-300  p-2 space-y-2'>
    //         <div className='flex justify-evenly '>
    //           <button className=' border w-[48%] h-8 '  onChange={()=>handleDisplayIcon()}><div className=' justify-start pl-5'><FaFacebook/>Facebook</div></button>
    //           <button className=' border w-[48%] h-8  ' onChange={()=>handleDisplayIcon()}>Youtube</button>
    //         </div>
    //         <div className='flex justify-evenly'>
    //           <button className=' border w-[48%] h-8  ' onChange={()=>handleDisplayIcon()}>Instagram</button>
    //           <button className=' border w-[48%] h-8  ' onChange={()=>handleDisplayIcon()}>Github</button>
    //         </div>
    //         <div className='flex justify-evenly'>
    //           <button className=' border w-[48%] h-8  ' onChange={()=>handleDisplayIcon()}>Snapchat</button>
    //           <button className=' border w-[48%] h-8  ' onChange={()=>handleDisplayIcon()}>Twitter</button>
    //         </div>
    //         <div className='flex justify-evenly'>
    //           <button className=' border w-[48%] h-8  ' onChange={()=>handleDisplayIcon()}>Linkedin</button>
    //           <button className=' border w-[48%] h-8  ' onChange={()=>handleDisplayIcon()}>Spotify</button>
    //         </div>
    //       </div>
