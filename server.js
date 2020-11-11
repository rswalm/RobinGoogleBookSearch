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
<<<<<<< HEAD
const dbConfig = "mongodb+srv://robin:Madonna80$@cluster0.1wiv2.mongodb.net/test";
//const dbConfig = "mongodb+srv://robin:<p:Madonna80$assword>@cluster0.1wiv2.mongodb.net/GoogleBooks?retryWrites=true&w=majority";
mongoose.connect(dbConfig|| "mongodb://localhost/googlebooks", {useNewUrlParser: true});
=======
//const dbConfig = "mongodb+srv://robin:Madonna80$@cluster0.1wiv2.mongodb.net/test";
//mongoose.connect(dbConfig|| "mongodb://localhost/googlebooks", {useNewUrlParser: true});

 const MongoClient = require('mongodb').MongoClient;
 const uri = "mongodb+srv://robin:Madonna80$@cluster0.1wiv2.mongodb.net/GoogleBooks?retryWrites=true&w=majority";
 const client = new MongoClient(uri, { useNewUrlParser: true });
 client.connect(err => {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
 });
>>>>>>> 2427709b8a109833924daea305de1a7854bb678d

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://robin:Madonna80$@cluster0.1wiv2.mongodb.net/GoogleBooks?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
