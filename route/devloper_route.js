const express = require('express')
const {createDevloper,getDevloper,authDevloper} = require('../controller/devloper_controller')

const router = express.Router();

router.route("/create-devloper").post(createDevloper)
router.route("/get-devloper").get(getDevloper)
// router.route("/auth-devloper").post(authDevloper)



module.exports = router
