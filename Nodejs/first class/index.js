import http from 'http'
import url from 'url'

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url == '/') {
        res.end("Haan beta , kya chahiye ??")
    }
    if(req.url == '/choleyKiPlate') {
        res.end("Yeh lo beta, choley ki plate")
    }
    if(req.url == '/aaloPaapri') {
        res.end("Yeh lo beta, aaloPaapri ki plate")
    }
    if(req.url == '/dahiBaray') {
        res.end('Sorry beta, dahi baray, kal se laga lengey')
    }
    if(req.url == '/api/categories/all') {
        res.end("Yeh lo tamaam ki tamaam jobs")
    }

})

server.listen(8000, '127.0.0.1', () => {
    console.log('Choley aur refreshment ki dukan is open')
})