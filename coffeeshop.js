var express = require("express");
var app = express();
var port = 3000;

// register view engine
// views folder is default location where ejs will look
app.set("view engine", "ejs");

// middleware and static files
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", { title: "Home"});
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About"});
});

app.get("/menu", (req, res) => {
    res.render("menu", { title: "Menu"});
});

// redirects
app.get("/about-us", (req, res) => {
    res.redirect("/about");
})

// 404
app.use((req, res) => {
    res.status(404);
    res.render("404", { title: "Not Found"});
})

// no need to add a url to 404
// 404 has to below the routes in order not to fire before the routes are found, acts as a catch all

app.listen(port);