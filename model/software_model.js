const mongoose = require('mongoose')

const softwareSchema = new mongoose.Schema({

    software_name: {
        type: String,
        trim :true,
        require :true

    },
    description:{
        type:String,
        trim:true,
        require: true
    },
    type:{
        type:String,
        enum:["mobile","web"],
        require:true

    },
    addedBy:{
        ref:"Devloper",
        type:mongoose.Schema.Types.ObjectId,
        require: true
    },
   
    createdAt: {
        type: Date,
        default: Date.now
    }
    
})
module.exports = mongoose.model("Software",softwareSchema)