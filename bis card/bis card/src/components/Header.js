import React from 'react'
// import { useState } from 'react'
const Header = ({img,setImg}) => {
    // const [img,setImg]=useState()
    // const handleUpload = (e)=>{
    //     console.log('img..');
    //     setImg(e.target.files[0])
    //     console.log(e);
    //     console.log(img);
    // }
  return (
    <div>
        <label htmlFor="image">upload</label>
        <input type="file" name="img" id="img" onChange={(e)=>(setImg(URL.createObjectURL(e.target.files[0])))} />
        <img src={img} alt="noimg" />
    </div>
  )
}

export default Header