const express=require('express');
const app=express();
require('dotenv').config();
const cors=require('cors')
const {authrouter}=require('./Routers/auth-router');
const { fileRouter } = require('./Routers/file-router');
const {AuthMiddleware} =require('./Middlewares/auth-middleware')
//connection of database
require('./DB/Conn')


//import the routers




app.use(express.json());
app.use(cors());
//regioster the routers
app.use('/api/auth',authrouter)
app.use('/api/files', AuthMiddleware,fileRouter);
// app.use('/api/files',fileRouter);




app.get('/',(req,res)=>{
    res.send('hello from backend')
})

app.get('/file',(req,res)=>{
    res.json({'data':'File has to uploaded.....'})
})

app.listen(process.env.PORT,()=>{
    console.log(`server running at ${process.env.PORT} port..`);
})
