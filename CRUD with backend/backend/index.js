import express from "express"
import mysql from "mysql"
import cors from 'cors'


const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"test"
});

app.get("/", (req,res)=>{
    res.json("Hello this is the backend")
})

app.post("/books", (req,res)=>{
    const q = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)"
    // const values = ["title from backend", "desc from backend", "cover pic from backend"]
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover
    ]
    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("books has been created successfully")
    })
})

app.get("/books", (req,res)=>{
    const q = "SELECT * FROM books"
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete("/books/:id", (req,res)=>{
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?"
    db.query(q,[bookId], (err,data)=>{
        if(err) return res.json(err)
        return res.json("books has been deleted successfully")
    })
})

app.put('/books/:id', (req,res)=>{
    const bookId = req.params.id
    const q = "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? where id = ?"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ]
    db.query(q,[...values,bookId], (err,data)=>{
        if(err) return res.json(err)
        return res.json("books has been updated successfully")
    })
})

app.listen(8800, ()=>{
    console.log("connected to the backend server.");
})