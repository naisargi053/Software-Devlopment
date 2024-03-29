const express = require('express')
const {createSoftware,getSoftware,getSoftwares,updateSoftware,deleteSoftware} = require('../controller/software_controller')
const { isAuthenticUser } = require("../middleware/Authenticate_user")


const router = express.Router();

router.route("/create-software").post(createSoftware)
router.route("/get-software").get(getSoftware)
router.route("/get-software/:id").get(isAuthenticUser,getSoftwares)
router.route("/update-software/:id").put(updateSoftware)
router.route("/delete-software/:id").delete(deleteSoftware)


module.exports = router
