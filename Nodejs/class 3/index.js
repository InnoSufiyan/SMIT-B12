import express from "express"

const app = express()

app.use(express.json())                //middleware

let abc = "sufiyan"

app.get('/', (req, res) => {
    abc = "Hanzala"
    res.send("Hi , Sir kesay hain aap")
})

app.get('/name', (req, res) => {
    
    res.send(abc)
})

app.get('/shalwarKameez', (req, res) => {

    //database ko pin karunga aur us se data mangwaounga

    res.status(400).json({
        status: true,
        message: "All the Suits Available",
        data: [
            {
                color: 'black',
                price: 2000,
                size: 'medium'
            },
            {
                color: 'white',
                price: 2000,
                size: 'medium'
            },
            {
                color: 'blue',
                price: 2000,
                size: 'medium'
            }
        ]
    })
})

app.put("/shalwarKameez", (req, res)=> {
    res.send("Aap ka shalwar kameez ka color update kardiya")
})

app.delete("/shalwarKameez", (req, res)=> {
    res.send("Koi baat nai, hamarey pass return policy mojood hai, next time aaiyega zaroor")
})

app.post("/shalwarKameez", (req, res)=> {
    res.send("Thanks jani, is k paisay main aap ko kal deta hun")
})

app.post('/paisayDenayHain', (req, res) => {
    // customer se paisay -->> request.body

    console.log(req.body)

    if (req.body.suit1 >= 2000 && req.body.suit2 >= 2000 && req.body.suit3 >= 2000) {
        // response -->> bht bht shukriya
        res.send("bht bht shukriya")
    } else {
        res.send("bhai yaqeen karo boni bhi nahin huwi hai, itney ki to khareed bhi nahin hai")
    }

})

app.listen(8000, () => {
    console.log("Haan bhai saab dukaan khul gai hai")
})