import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import Link from "react-router-dom"
import {Link} from "react-router-dom";

const Books = () => {
  const [books,setBooks] = useState([])
  useEffect(()=>{
    const fetchAllBooks = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/books")
        console.log(res)
        // setBooks(...books,res)
        setBooks(res.data)

      }catch(err){
        console.log(err);
      }
    } 
    fetchAllBooks()
  },[])

  // const navigate = useNavigate()


  const handleDelete =async (id)=>{
    try {
      await axios.delete("http://localhost:8800/books/"+id)
      window.location.reload()
      console.log("deleted successfully");
    } catch (err) {
      console.log(err);
    }

  }

  // const handleUpdate =async (id)=>{
  //   try {
  //     // await axios.delete("http://localhost:8800/books/"+id)
  //     // window.location.reload()
  //     await axios.put("http://localhost:8800/books/"+id)
  //     navigate("/update")
  //     console.log("updated successfully");
  //   } catch (err) {
  //     console.log(err);
  //   }

  // }

  return (
    <div>
      <h1 className=" text-4xl mb-4">Muzammil Book shop</h1>
      <div className="books">
        {books.map((book)=>(
          <div className="book mb-6" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2 className=' text-2xl mb-2'>{book.title}</h2>
            <p className=' mb-2'>{book.desc}</p>
            <span className=' mb-4'>{book.price}</span>
            <button className="delete mb-2" onClick={()=>handleDelete(book.id)}>Delete</button>
            <button className="update mb-2" ><Link to={`/update/${book.id}`}>Update</Link></button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add new book</Link>
      </button>
    </div>
  )
}

export default Books