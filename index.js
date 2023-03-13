const express = require("express");
const {users}=require("./data/users.json")
const userRouter = require("./routes/users.js")
const bookRouter = require("./routes/books.js")
const app=express();

const port=8081

app.use(express.json())


app.use("/users",userRouter);
app.use("/books",bookRouter);
app.get("/",(req,res)=>{
    res.status(200).json({
        message: "Server is running perfectly"
    })
})


app.get("*",(req,res)=>{
    res.status(404).json({
        message: "This route does not exist"
    })
})

app.listen(port,()=>{
    console.log(`server started running on port : ${port}`)
})

