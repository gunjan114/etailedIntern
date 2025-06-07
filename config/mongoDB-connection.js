require("dotenv").config()
const mongoose = require("mongoose")

mongoose
.connect(process.env.MONGO_DB_URI)
.then(function() {
    console.log("DB is connected");
})
.catch(function(err) {
    console.log("Failed to connect DB: ", err.message);
})

module.exports = mongoose.connection