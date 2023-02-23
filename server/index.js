const express= require("express")
require('dotenv').config()
const {connection}=require("./db")
const {bookRouter}=require("./routes/book.route")
const {userrouter}=require("./routes/user.route")
const cors=require("cors")


const app=express()
app.use(express.json())

app.use(cors({
    origin:"*"
}))

app.use("/users",userrouter)
app.use("/books",bookRouter)




app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to the db")
    }
    catch(err)
    {
        console.log("cannot connect to db")
        console.log(err)
    }
    console.log(`server is running at port ${process.env.port}`)
})