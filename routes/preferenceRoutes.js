const express = require("express")
const router = express.Router()

const controller = require("../controllers/preferenceController")

router.post("/set", controller.set)
router.get("/get", controller.get)

module.exports = router