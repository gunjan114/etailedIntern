require("dotenv").config()
const preferenceModel = require("../models/preference-model")
const jwt = require("jsonwebtoken")

const set = async (req, res) => {
    let token = req.cookies.token
    let decoded = jwt.verify(token, process.env.SECRET_KEY)

    let {theme, layout} = req.body

    let existingPreference = await preferenceModel.findOne({userId: decoded.userId})

    if(existingPreference === null) {
        await preferenceModel.create({
            userId: decoded.userId,
            theme: theme,
            layout: layout
        })
        
        return res.send("Default Preference is set")
    }

    await preferenceModel.updateOne(
        {userId: decoded.userId},
        {theme: theme, layout: layout}
    )

    res.send("Preferences Updated")
}

const get = async (req, res) => {
    let token = req.cookies.token
    let decoded = jwt.verify(token, process.env.SECRET_KEY)

    let preference = await preferenceModel.findOne({userId: decoded.userId})

    res.send(preference)
}

module.exports =  { set, get }