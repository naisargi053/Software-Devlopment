const devloperModel = require('../model/devloper_model')
const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcryptjs');


exports.createDevloper = async (req,res) =>{

   try {
    
    const devloper = await devloperModel.create(req.body)
    return res.status(200).send({
        sucess:true,
        devloper
    })
   } catch (error) {
    console.log(error)
    return res.status(500).send({
        status: false,
        message:"Internal server error"
    })
   }
}

exports.getDevloper = async (req,res) =>{

    try {
     
     const devloper = await devloperModel.find()
     return res.status(200).send({
         sucess:true,
         devloper
     })
    } catch (error) {
     console.log(error)
     return res.status(500).send({
         status: false,
         message:"Internal server error"
     })
    }
 }
 
 