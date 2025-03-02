import express from 'express'

const app = express()

app.get('/', (req, res)=> {
    res.send("Assalam o alaikum, kya chahiye beta")
})

app.get('/choley', (req, res)=> {
    res.send("==>> yeh lo bachay choley")
})

app.get('/aalupaapri', (req, res)=> {
    res.send("==>> yeh lo bachay aalu paapri")
})

app.put('/aalupaapri', (req, res)=> {
    res.send("==>> yeh lo bachay aalu paapri extra masalay k sath")
})

app.listen(8000, () => {
    console.log("dukaan khul gai")
})