const authenticateUser = require('../model/user_model')
const jwt = require("jsonwebtoken")
const bicrypt = require("bcryptjs")
const { signToken} = require('../middleware/Authenticate_user')

exports.registerUser = async (req,res,next) =>{

    const {email,password} = req.body
    try {
        let user = await authenticateUser.findOne({ email }).populate("addBy")
        if (user){
            return res.status(400).json({message: "user alredy exists "})
        }

        //create new user
        const hashedPassword = await bicrypt.hash(password,5)
        user = new authenticateUser({email, password, hashedPassword});
        await user.save();

        //create and send token 
        const token =  signToken(user._id)
        return res.status(200).send({status:true,token,message:"User added sucessfully "})
    } catch (error) {
        console.log(error,'error')
        return res.status(500).send({status:false, message:"internal server error"})
    }

}