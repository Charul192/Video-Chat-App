const express = require("express");
const bodyParser = require("body-parser");
const {Server} = require("socket.io");

const io = new Server();
const app = express();

app.use(bodyParser.json());

//jb bhi koi naya server connection aayega hum usse catch krr lenge
io.on('connection', socket => {

});

app.listen(8080, () => console.log(`Http server running at PORT 8080`));
io.listen(8001);