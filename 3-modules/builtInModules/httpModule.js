const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Welcome to our Home Page!")
    }
    if(req.url === '/about'){
        res.end("Welcome to our History Page!")
    }
    res.end(`
        <h1>Oops!!</h1>
        <p>We can't seem to find the page that you're looking for! </p>
        <a href="/">Bach to Home</a>`)

})

//to watch server on localhost:5000
server.listen(5000)
