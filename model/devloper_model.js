const mongoose = require('mongoose')

const devloperSchema = new mongoose.Schema({

    devloper_name: {
        type: String,
        trim :true,
        require :true

    },
    email:{
        type:String,
        trim:true,
        require: true
    },
    password:{
        type:String,
        require:true
    }
     
})
module.exports = mongoose.model("Devloper",devloperSchema)