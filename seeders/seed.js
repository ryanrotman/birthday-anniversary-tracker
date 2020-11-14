const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/familyEvent", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const userSeed = [
    {
        firstName: "Ryan",
        lastName: "Rotman",
        username: "ryanrotman",
        password: "123"
    }
];

db.User.deleteMany({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.results.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });