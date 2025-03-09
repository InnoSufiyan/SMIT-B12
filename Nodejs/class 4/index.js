import express from "express"
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())


const usersDatabase = []


app.get('/', (req, res) => {
    res.send("Hello welcome to our website backend")
})



app.post('/signup', (req, res) => {
    console.log("==>>> signup ki api hit huwi hai frontend se")

    console.log(req.body, "==>> req.body")

    const {
        userName,
        firstName,
        lastName,
        email,
        password
    } = req.body

    if (!userName || !firstName || !lastName || !email || !password) {
        return res.status(400).json({
            status: false,
            message: "Missing Fields",
        })
    }

    const isExistingUser = usersDatabase.find((user) => {
        return user.email == email
    })

    console.log(isExistingUser, "==>> isExistingUser")

    if (isExistingUser) {
        return res.json({
            status: false,
            message: "Error --->> User already registered"
        })
    }

    // save the data which we received from frontend in to the Database
    usersDatabase.push({
        userName,
        firstName,
        lastName,
        email,
        password,
        date: new Date()
    })

    return res.json({
        status: true,
        message: "User Registered Successfully"
    })
})

app.post('/login', (req, res) => {
    console.log("==>>> login ki api hit huwi hai frontend se")

    console.log(req.body, "===>> req.body")

    const { email, password } = req.body

    if (!email || !password) {
        return res.json({
            status: false,
            message: "Missing Fields"
        })
    }

    const isExistingUser = usersDatabase.find((user) => {
        return user.email == email
    })

    console.log(isExistingUser, "==>> isExistingUser")

    if (!isExistingUser) {
        return res.status(404).json({
            status: false,
            message: "No such User found"
        })
    }

    if (isExistingUser.password == password) {
        return res.json({
            status: true,
            message: "Login succesfully, diverting to Home page"
        })
    } else {
        return res.json({
            status: false,
            message: "Invalid Credentials"
        })
    }
})

app.get('/users', (req, res) => {
    res.json({
        status: true,
        message: "All the users in our database",
        data: usersDatabase
    })
})

app.get('/users/:email', (req, res) => {
    console.log(req.params, "==>> req.params")

    const specificUser = usersDatabase.find((user) => {
        return user.email == req.params.email
    })

    return res.json({
        status: true,
        message: "Got user data successfully",
        data: specificUser
    })
})

app.listen(8000, () => {
    console.log("dukaan khul gai hai")
})