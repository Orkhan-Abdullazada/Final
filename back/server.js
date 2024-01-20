const express=require("express")
const app=express()
const PORT=process.env.PORT ||7373
const cors=require("cors")
app.use(express.json())
app.use(cors())
const mongoose=require("mongoose")
require('dotenv').config()
const PulseRouter=require("./Router/Pulse.routes")
mongoose.connect("").then(res=>{
    console.log("connected")
})


app.use("/pulse",PulseRouter)
app.listen(PORT,()=>{
    console.log("back running on 7373")
})

