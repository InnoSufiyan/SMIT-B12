import { errorHandler } from "../utils/responseHandlers.js"
import pkg from "jsonwebtoken"

const { sign, verify } = pkg

export const checkToken = (req, res, next) => {
    try {
        console.log("==================>>>> main hun police , main ap ko check karunga")

        //token check
        // if no token --> dafa hojao yahaan se wapis

        if (req?.headers?.authorization && !req.headers.authorization.startsWith('Bearer')) {
            return errorHandler(res, 404, "No Valid Token Found")
        }

        const token = req.headers.authorization.split(' ')[1]

        //token validation
        // if token is not valide -->> dafa hojao yahaan se wapis
        const isValidToken = verify(token, process.env.JWT_SECRET_KEY)

        console.log(isValidToken, "==>> isValidToken")


        if (!isValidToken) {
            return errorHandler(res, 404, "Your token is expired", error.message)
        }

        console.log(isValidToken, "==>> isValidToken")
        console.log("========================================================")
        console.log("========================================================")
        console.log("========================================================")
        console.log("========================================================")

        req.user = isValidToken.data

        next()
    } catch (error) {
        return errorHandler(res, 404, "Phat gaya code", error.message)
    }

    //next()
}