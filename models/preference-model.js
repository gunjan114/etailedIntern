const mongoose = require("mongoose")

const preferenceSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    theme: {
        type: String,
        default: "Light"
    },
    layout: {
        type: String,
        default: "Grid"
    }
})

module.exports = mongoose.model("preference", preferenceSchema)