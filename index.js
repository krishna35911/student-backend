require('dotenv').config()

const express=require('express')

const cors=require('cors')

const router=require('./Router')

require('./dbconn')

const studentserver=express()

studentserver.use(cors())

studentserver.use(express.json())

studentserver.use(router)

const PORT=4000 || process.env.PORT

studentserver.listen(PORT,()=>
{
    console.log(`server is running succesfully at port number ${PORT}`);
})
