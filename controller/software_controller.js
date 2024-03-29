const softwareModel =  require('../model/software_model')

// create 
exports.createSoftware = async(req,res) => {

   try {
    const software = await softwareModel.create(req.body)
    return res.status(201).send({
        sucess: true, 
        software
    })
    
   } catch (error) {
        return res
        .status(500).send({
            status:false, message: "Internal server error"
        })
    }
}


// Read
exports.getSoftware = async(req,res) =>{
    const page= parseInt(req.query.page) ||1
    const limit= parseInt(req.query.limit)||10
    const skip= (page -1)* limit;
    const type = req.query.type
    const sortBy = req.query.sortBy
    const sortOrder = req.query.sortOrder
    const search = req.query.searchTerm
    try {
    const filter = {};
    const sort = {[sortBy]: sortOrder}
    if (type) {
        filter.type = type;
      }
      if(search){
        filter.search = {$regex: new RegExp(search, "i")} 
    }
    const software = await softwareModel.find(filter).skip(skip).limit(limit).populate("addedBy").populate("addBy");
    console.log(software, 'software')
    const totalSoftware = await softwareModel.countDocuments();
    if (!software.length) {
        return res.status(200).json({ status: false, message: "no data found" });
      }

    return res.status(200).send({
        status : true,
        software,totalSoftware
    }) 
    } catch (error) {
        console.log(error, 'error')
    return res.status(500).send({status: false, message:"Internal Server Error"})
    }
}


//read By Id
exports.getSoftwares = async(req,res) =>{
    try {
    const softwares = await softwareModel.findById(req.params.id)
    console.log(softwares,"software")
    if(!softwares){
        return res.status(200).send({status:false, message:"please provide correct Id"})
    }
    return res.status(201).send({
        status : true,
        softwares
    }) 
    } catch (error) {
    return res.status(500).send({status: false, message:"data not found"})
    }
}

//update
exports.updateSoftware = async(req,res) =>{
    try{
    let softwares = await softwareModel.findById(req.params.id);
    console.log(softwares,"softwares")
    if(!softwares){
        return res.status(200).send({status:false, message:"please provide correct Id"})
    }
    softwares = await softwareModel.findByIdAndUpdate(req.params.id,req.body,{
        new :true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        status : true,
        softwares
    }) ;
}
      catch(error)  {
        console.log(error)
        return res.status(500).send({status: false, message: "internal server error"})
      }
 
}
exports.deleteSoftware = async (req, res) => {
    let software = await softwareModel.findById(req.params.id)
    if (!software) {
      return res
        .status(200)
        .json({ status: false, message: "please provide correct id" });
    }
  
    software = await softwareModel.findByIdAndDelete(req.params.body)
  
    res.status(200).json({
      success: true,
      message: "Delete sucessfully",
    });
  };