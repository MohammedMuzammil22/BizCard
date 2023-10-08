import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
  const [book,setBook] = useState({
    title:"",
    desc:"",
    price:"",
    cover:"",
  })

  const navigate = useNavigate()
  const location = useLocation()

  const bookId = location.pathname.split("/")[2]

  const handleChange = (e)=>{
    setBook((prev)=>({...prev, [e.target.name]: e.target.value}))
  }
  const handleClick = async()=>{
    try {
      await axios.put("http://localhost:8800/books/"+bookId,book)
      navigate("/")
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="form">
      <h1>update new Book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='title'/>
      <input type="text" placeholder='desc' onChange={handleChange} name='desc'/>
      <input type="number" placeholder='price' onChange={handleChange} name='price'/>
      <input type="text" placeholder='cover' onChange={handleChange} name='cover'/>
      <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update