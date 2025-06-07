const express = require("express")
const router = express.Router()

const controller = require("../controllers/dashboardController")
const isLoggedIn = require("../middleware/isLoggedIn")

router.post("/setData",isLoggedIn, controller.setData)
router.get("/getData",isLoggedIn, controller.getData)

module.exports = router