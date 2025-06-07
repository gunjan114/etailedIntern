const mongoose = require("mongoose")

const dashboardSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    team: {
        type: String
    },
    projects: {
        type: [],
    },
    notifications: {
        type: [],
    }
})

module.exports = mongoose.model("dashboard-summary", dashboardSchema)