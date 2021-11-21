const express = require("express")
const app = express()
const mongoose = require("mongoose")
const url = "mongodb+srv://yunushahmed:35798642@cluster0.vhnyv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mySchema = require('./StudentDetail')
mongoose.connect(url, {useNewUrlParser:true}).then(()=>console.log("Connected to DB"))
app.use(express.json())
app.post("/add-new-post", async (req,res)=>{
    const myname = req.body.name;
    const myregn = req.body.regn;
    const mymarks = req.body.marks;
    
    try{
        const newStudentDetail = new mySchema(
            {
            studentName : myname,
            registrationNo : myregn,
            marks : mymarks
            }
        )
        const savedstudentdetail = await newStudentDetail.save()
        res.json({
            "message": "Student Detail is saved","data":savedstudentdetail
        })
    }catch(err){
        res.json(err);
    }
})

app.use("/",(req,res)=>{
    // res.send("Hello") 
    res.json(
        {"message" : "Express server is started"}
    )
})

app.listen(3002,()=>console.log("Express server started"))

