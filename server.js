const express = require("express");
const mongoose = require ("mongoose");
const routes= require ("./routes")

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes)

//Connet to mongoose
const dbConfig = "mongodb+srv://robin:Madonna80$@cluster0.1wiv2.mongodb.net/test";
mongoose.connect(dbConfig|| "mongodb://localhost/googlebooks", {useNewUrlParser: true});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
