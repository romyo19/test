const express = require('express');

const app=express()
const port=process.env.PORT || 3001



app.get('/',(req,res)=>{
    res.json({"message":"hello world"})
})





app.listen(port,()=>{
    console.log(`server running on port http://127.0.0.1:${port} `)
})