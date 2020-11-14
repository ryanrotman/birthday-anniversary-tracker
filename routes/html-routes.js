module.exports = (app) => {
    app.get("/", (req, res) => {
        res.render("index")
    });

    // FIXME: page shows Cannot GET /logout
    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });
};