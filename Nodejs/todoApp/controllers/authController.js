import Users from "../models/Users.js"
import { errorHandler, successHandler } from "../utils/responseHandlers.js"

const registerController = async (req, res) => {
    console.log(req.body)
    const { userName, email, password, firstName, lastName, age, isAdmin } = req.body

    if (!userName || !email || !password || !firstName || !lastName) {
        return errorHandler(res, 400, "Missing Fields")
    }

    // email -->> apney database main check karunga -->> is already exists
    //user already exsists, try to login
    const isExists = await Users.findOne({ $or: [{ email: email }, { userName: userName }] })

    console.log(isExists, "==>> isExists")

    if (isExists) {
        return errorHandler(res, 400, "UserName or Email Address already exists, please change and retry")
    }

    //password 8 character >

    if (password.length < 8) {
        return errorHandler(res, 400, "Password length should be minimum 8 characters long")

    }

    //password less than 8 character

    //password hash

    //user ko database main store karwaounga

    try {
        await Users.create({
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            password: password,
            email: email
        })
        return successHandler(res, 200, "User Registered Successfully")
    } catch (error) {
        console.log(error, "==>> error")
        return errorHandler(res, 400, "Code Phat gaya", error.message)
    }


    //successfully response
}

const loginController = async (req, res) => {
    const { email, password } = req.body


    //password 8 character >

    //password less than 8 character

    if (password.length < 8) {
        return errorHandler(res, 400, "Password length should be minimum 8 characters long")
    }

    // email -->> apney database main check karunga -->> is already exists

    //user already exsists, try to login

    const isExists = await Users.findOne({ email: email })
    console.log(isExists, "==>> isExists")

    if (!isExists) {
        return errorHandler(res, 400, "No User with such email exists, please try to create account first")
    }

    //user ka password check hoga, frontend waley password k sath


    if (isExists.password == password) {
        //successfully response
        successHandler(res, 200, "User logged in successfully")
    } else {
        errorHandler(res, 400, "Invalid Credentials")
    }

}

const forgotPasswordController = (req, res) => {
    res.send("Password Reset Successfully")

    // email -->> apney database main check karunga -->> is already exists

    //user already exsists, try to login

    //password 8 character >

    //password less than 8 character

    //password hash

    //user ko database main store karwaounga

    //successfully response
}

export {
    registerController,
    loginController,
    forgotPasswordController
}