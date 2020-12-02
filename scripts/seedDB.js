const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks');

const bookSeed = [
    {
        title: "Where the Wild Things Are",
        author: "Maurice Sendak",
        synopsis: "Max is sent to bed without supper and imagines sailing away to the land of Wild Things,where he is made king.",
        date: new Date(Date.now())
    }
];

db.Book
.remove({})
.then(() => db.Book.collection,insertMany(bookSeed))
.then(data => {
    console.log(data.result.n + "books inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});