const http = require("http");
const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
const server = http.createServer(app);
const port = 3000;
const host = "127.0.0.1";
const logger = morgan("tiny");

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

server.listen(port, host, () => {
    console.log("Running on port 3000");
});

// npm install helmet
// npm i morgan
