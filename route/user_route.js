const express = require("express")
const {registerUser} = require('../controller/user_controller')

const router = express.Router();

router.route("/user-registration").post(registerUser)
//router.route("/user-login").get(login)




module.exports = router;
