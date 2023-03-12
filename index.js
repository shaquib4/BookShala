const express = require("express");
const {users}=require("./data/users.json")
const app=express();

const port=8081

app.use(express.json())



app.get("/",(req,res)=>{
    res.status(200).json({
        message: "Server is running perfectly"
    })
})

/**
 * Route: /users
 * Method: GET
 * Access: public
 * work: get all user information
 * Parameter:None
 */
app.get("/users",(req,res)=>{
    res.status(200).json({
        success : true,
        data : users
    })
})

/**
 * Route: /users/:id
 * Method: GET
 * Description: Get single user by their id
 * Access: Public
 * Parameters: Id
 */
app.get("/users/:id",(req,res)=>{
   const {id} = req.params
   const user = users.find((each)=>each.id===id)
   if(!user){
       return res.status(404).json({
        sucess:false,
        message:"User does not Exist!"
       })

   }else{
      res.status(200).json({
         success : true,
         message:"User Found!",
         data : users
       })

   }
})

/** 
 * Route : /users
 * Method: POST
 * Description: Create New user
 * Access: Public
 * Parameters: none
*/
app.post("/users",(req,res)=>{
    const {id, name, surname, email, subscriptionType, subscriptionDate}=req.body
    
    const user = users.find((each)=>each.id===id)
    if(user){
        return res.status(404).json({
            success: false,
            message: "User already exists"
        })
    }
    users.push({
        id,
        name,
        surname,
        email,
        subscriptionType,
        subscriptionDate,
    })

    return res.status(201).json({
        success:true,
        message:"User Added sucessfully",
        data:users
    })
})
/** 
 * Route : /users/:id
 * Method: PUT
 * Description: Updating user by id
 * Access: Public
 * Parameters: id
*/
app.put("/users/:id",(req,res)=>{
    const {id}= req.params;
    const {data}=req.body;

    const user = users.find((each)=> each.id===id)
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User does not Exist"
        })

    }
    const updateUserData = users.map((each)=>{
        if(each.id===id){
            return {
                ...each,
                ...data,
             }
        }
        return each
        
    })

    return res.status(200).json({
        success:true,
        message: "User Data Updated !!",
        data: updateUserData,
    })

})

/** 
 * Route : /users/:id
 * Method: DELETE
 * Description: Delete user by id
 * Access: Public
 * Parameters: id
*/
app.delete("/users/:id",(req,res)=>{
    const {id}= req.params
    const user = users.find((each)=> each.id===id)
    if(!user){
        return res.status(404).json({
            success:false,
            message: "User Does not Exist"
        })
    }
    const index = users.indexOf(user);
    users.splice(index,1)

    return res.status(200).json({
        success:true,
        message: "User Deleted Sucessfully",
        data: users 
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