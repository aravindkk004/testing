const express = require("express");

const home = require("./routes/home");

const app = express();
app.use(express.json());

app.use("/home", home);

const port = 9001;
app.listen(port, ()=> console.log("server is running"));