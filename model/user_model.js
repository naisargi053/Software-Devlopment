const mongoose = require('mongoose')

const devloperSchema = new mongoose.Schema({

    email:{
        type:String,
        trim:true,
        require: true
    },
    password:{
        type:String,
        require:true
    },
    addBy:{
        ref:"Software",
        type:mongoose.Schema.Types.ObjectId,
        require: true
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    }
     
})
module.exports = mongoose.model("User",devloperSchema)