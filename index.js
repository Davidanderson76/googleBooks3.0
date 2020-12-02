
const express = require("express");
// const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');



app.use([
    express.urlencoded({ extended: true }),
    express.json()
]);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Link API Routes here
app.use( routes );


// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// M O N G O O S E  D B //
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks',{ useUnifiedTopology: true }, { useNewUrlParser: true });


app.listen(PORT, () => {
  console.log("🚀  Server server now on port", PORT, "👻 React App on Port 3000");
});