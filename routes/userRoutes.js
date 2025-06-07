const express = require("express")
const router = express.Router()

const controller = require("../controllers/userController")
const isLoggedIn = require("../middleware/isLoggedIn")

router.post("/register", controller.register)
router.post("/login", controller.login)
router.post("/logout", isLoggedIn, controller.logout)
router.get("/profile", isLoggedIn, controller.profile)
router.patch("/profile", isLoggedIn, controller.updateProfile)

module.exports = router