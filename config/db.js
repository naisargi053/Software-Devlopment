const mongoose = require('mongoose')

exports.db = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connection sucessfully")
    } catch (error) {
    
       console.log("Database connection Error")
    }
}