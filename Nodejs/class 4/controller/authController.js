import users from "../models/users.js";

export const signupController = async (req, res) => {
    console.log(req.body, "===>> req.body")

    const { name, email, password } =
        req.body;

    try {
        if (!name || !email || !password) {
            return res
                .status(404) //BADREQUEST
                .json({
                    status: false,
                    message: "Missing Fields"
                });
            // .send("Missing Fields");
        }

        // send it to database

        // schema validation

        let doc = new users({
            name: name,
            email: email,
            password: password,
        });

        // save in database

        let savedUser = await doc.save();

        return res.status(200).json({
            status: true,
            message: "User signed up successfully"
        })
    } catch (error) {
        console.log(error, "==>> error")
    }
}