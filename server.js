const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/familyEvent", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// Routes
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

// PORT Listener
app.listen(PORT, () => {
    console.log(`Server is live @ http://localhost:${PORT}`);
  });