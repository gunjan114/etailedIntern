const express = require("express")
const router = express.Router()

const controller = require("../controllers/preferenceController")
const isLoggedIn = require("../middleware/isLoggedIn")

router.post("/set",isLoggedIn, controller.set)
router.get("/get",isLoggedIn, controller.get)

module.exports = router