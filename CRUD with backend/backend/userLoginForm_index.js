const express = require("express")
const mysql = require("mysql")

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    // database:"bizcard"
    database:"BizCard"
});

connection.connect((err)=>{
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log("Connected to the database successfully!");
})

const app = express();
app.post('/bizcard', async(req,res)=>{
    const {name,email,phone} = req.body;

    const sql = `INSERT INTO BizCard (name,email,phone) VALUES ('${name}','${email}','${phone}')`
    await connection.query(sql)
    res.status(201).json({
        message:"Bizcard created successfully"
    })
})