const express =require('express')
const dotenv=require('dotenv').config()
const generateImageRoute=require('./routes/generateImage.route')

const app=express()
const PORT=process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/generate',generateImageRoute)

app.listen(PORT,()=>{
    console.log('listening on port',PORT)
})