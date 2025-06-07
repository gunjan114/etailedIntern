
const dashboardModel = require("../models/dashboard-summary-model")

const setData = async (req, res) => {

    let {team, projects, notifications} = req.body

    let user = await dashboardModel.findOne({userId: req.decodedId})

    if(user === null) {
        let uploadedData = await dashboardModel.create({
            userId: req.decodedId,
            team,
            projects,
            notifications
        })

        return res.send(uploadedData)
    }

    user.projects.push(projects)
    user.notifications.push(notifications)
    user.save()

    res.send("uploded saved changes")
    
}

const getData = async (req, res) => {
    let data = await dashboardModel.findOne({userId: req.decodedId})

    if(data === null) {
        return res.send("No data persist")
    }

    res.send(data)
}

module.exports = {setData, getData}