require("dotenv").config()
const userModel = require("../models/user-model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    let {email, name, password} = req.body

    let user = await userModel.findOne({email})
    if(user != null) {
        return res.send("User Already Exist")
    }

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let createdUser = await userModel.create({
                email: email,
                name: name,
                password: hash
            })

            let token = jwt.sign({email: email, userId: createdUser._id}, process.env.SECRET_KEY)
            res.cookie("token", token)

            res.send(createdUser)
        })
    })
}

const login = async (req, res) => {
    let {email, password} = req.body

    let user = await userModel.findOne({email})
    if(user === null) {
        return res.send("Something Went Wrong")
    }

    bcrypt.compare(password, user.password, (err, result) => {
        if(result) {
            let token = jwt.sign({email: email, userId: user._id}, process.env.SECRET_KEY)
            res.cookie("token", token)

            res.send(user)
        } else {
            return res.send("Something Went Wrong")
        }
    })
}

const logout = (req, res) => {
    res.cookie("token", "")
    res.send("logged out")
}

const profile = async (req , res) => {
    let user = await userModel.findOne({_id: req.decodedId})
    res.send(user)
}

const updateProfile = async (req, res) => {

    let {updatedName, updatedEmail} = req.body

    let user = await userModel.findOne({_id: req.decodedId})

    let updatedUser = await userModel.updateOne(
        {_id: user._id},
        {name: updatedName, email: updatedEmail}
    )

    res.send("Name and Email has been changed")
}

module.exports =  { register, login, logout, profile, updateProfile }