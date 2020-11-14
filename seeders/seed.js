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

