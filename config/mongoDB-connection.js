require("dotenv").config()
const mongoose = require("mongoose")

mongoose
.connect("mongodb+srv://honey:honey@cluster0.mfzs0w6.mongodb.net/etailedintern?retryWrites=true&w=majority&appName=Cluster0")
.then(function() {
    console.log("DB is connected");
})
.catch(function(err) {
    console.log("Failed to connect DB: ", err.message);
})

module.exports = mongoose.connection