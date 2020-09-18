const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require('dotenv').config()	

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

require('./routes')(app);

app.listen(process.env.PORT||3000, process.env.IP || "0.0.0.0", function (req, res) {
	console.info("Server Started")
})

mongoose.connect(process.env.mongoURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true})
    .then(() => console.info("MongoDB Connected"))
  .catch(err => console.error(err));
