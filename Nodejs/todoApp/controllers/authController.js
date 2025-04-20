import Users from "../models/Users.js"
import { errorHandler, successHandler } from "../utils/responseHandlers.js"
import pkg from "jsonwebtoken";
import { hash, genSalt, compare, compareSync, genSaltSync, hashSync } from "bcrypt";

const { sign, verify } = pkg

const registerController = async (req, res) => {
    console.log(req.body)

    try {
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

        // const hashedPassword = await hash(password, 12)
        // console.log(hashedPassword, "==>> hashedPassword")

        //password hash
        const salt = await genSaltSync(10);

        //user ko database main store karwaounga


        const newUser = await Users.create({
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            password: await hashSync(password, salt),
            email: email
        })

        console.log(newUser)

        const generateToken = sign({
            data: newUser,
            expiresIn: "3m",
        }, process.env.JWT_SECRET_KEY);
        console.log(generateToken)

        return successHandler(res, 200, "User Registered Successfully", {
            token: generateToken,
            user: newUser
        })
    } catch (error) {
        console.log(error, "==>> error")
        return errorHandler(res, 400, "Code Phat gaya", error.message)
    }


    //successfully response
}



const loginController = async (req, res) => {
    const { email, password } = req.body
    console.log(req.body)

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

    const isValid = await compareSync(password, isExists.password);
    // const isValid = await compare(password, isExists.password);

    console.log(isValid)

    if (!isValid) {
        //successfully response
        errorHandler(res, 400, "Invalid Credentials")
    } else {

        const generateToken = sign({
            data: isExists,
            expiresIn: "3m",
        }, process.env.JWT_SECRET_KEY);
        console.log(generateToken)


        isExists.password = undefined

        successHandler(res, 200, "User logged in successfully", {
            data: isExists,
            token: generateToken
        })
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


const isUserLoggedIn = async (req, res) => {
    try {
        console.log(req.body)
        const { token } = req.body

        const verification = verify(token, process.env.JWT_SECRET_KEY); //
        console.log(verification)

        if (!verification) {
            return errorHandler(res, 400, "token expired")
        }

        const findUser = await Users.findById(verification.data)

        console.log(findUser)

        if (!findUser) {
            res.status(404).json({
                message: "user not found!"
            })
        }

        res.status(200)
        res.json({
            status: true,
            data: findUser
        })

    } catch (error) {
        console.log(error)
    }
}

export {
    registerController,
    loginController,
    forgotPasswordController,
    isUserLoggedIn
}