import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const UserInput = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const submitForm = async () =>{
    const formData = new FormData()
    formData.append('name',name)
    formData.append('email',email)
    formData.append('phone',phone)

    const response = await axios.post('/bizcard', formData)

    if(response.status === 201){
      console.log("success success success");
    }
    else{
      console.log("failed failed failed");
    }
    
  }

  return (
    <div>
        <form onSubmit={submitForm}>
            <label htmlFor="name">name</label>
            <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="email">email</label>
            <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="phone">phone</label>
            <input type="text" name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <button type="submit" onClick={submitForm}>submit</button>
        </form>
    </div>
  )
}

export default UserInput