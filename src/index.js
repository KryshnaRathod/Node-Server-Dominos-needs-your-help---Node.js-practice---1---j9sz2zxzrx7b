var http = require("http");

const httpServer = http.createServer(handleServer);

const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser())

app.get("/welcome", (req, resp) => {
    resp.status(200);
    resp.setHeader('Content-Type', 'text/plain');
    resp.send("Welcome to Dominos!")
})

app.get("/contact", function(req, resp){
    resp.status(200);
    resp.setHeader('Content-Type', 'application/json');
    resp.send({
        phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'
      });
})

app.use(function(req, res, next) {
    res.status(404);
    res.send('404');
});

const server = app.listen(8081, function(){
    console.log("App running on %s", server.address().port)
})

function handleServer(req, res) {
  
}

module.exports = httpServer;
