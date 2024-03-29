const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const {db} = require('./config/db')
const software_model = require('./model/software_model')
const devloper_model = require('./model/devloper_model')
const user_model = require('./model/user_model')
const software = require('./route/software_route')
const devloper = require('./route/devloper_route')
const user = require("./route/user_route")
const PORT = 5000
dotenv.config()
app.use(express.json())


//middleware
const corsOption ={
    origin:['*'],
    Credential: true,
};
app.use(cors(corsOption))
  
  
app.use("/api/v1",software)
app.use("/api/v1",devloper)
app.use("/api/v1",user)

 app.listen(PORT,() =>{
    db()
    console.log(`we are listerning on http://localhost:${PORT}`)
 } )