require("dotenv").config()
const express = require("express")
const app = express()

const cookieParser = require("cookie-parser")

const userRoutes = require("./routes/userRoutes")
const preferenceRoutes = require("./routes/preferenceRoutes")
const dashboardSummaryRoutes = require("./routes/dashboardSummaryRoutes")
const db = require("./config/mongoDB-connection")

app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(cookieParser())

app.use("/user", userRoutes)
app.use("/preference", preferenceRoutes)
app.use("/dashboard-summary", dashboardSummaryRoutes)

app.listen(3000)