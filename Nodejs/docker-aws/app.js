import express from 'express'

const app = express()

app.get('/', (req, res)=> {
  res.send("Hello , Welcome to AWS")
})
app.get('/about', (req, res)=> {
  res.send("About , AWS")
})

app.listen(5000, ()=> {
  console.log("server is chal raha")
})