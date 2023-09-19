import React from 'react'

const AddImages = ({img,setImg}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="image">upload</label>
        <input  accept="image/*" type="file" name="img" id="imgfile" onChange={(e)=>(setImg(URL.createObjectURL(e.target.files[0])))} />
        {img && <img src={img} alt="noimg" />}
    </form>
  )
}  

export default AddImages 