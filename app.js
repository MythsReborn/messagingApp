require("dotenv").config();
const path = require("node:path");
const express = require("express");
const session = require("express-session");
const passport = require("passport");

const authRouter = require("./routes/authRouter");
const usersRouter = require("./routes/usersRouter");
const messagesRouter = require("./routes/messagesRouter");
const profileRouter = require("./routes/profileRouter");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
);

app.use(passport.initialize());
app.use(passport.session());

require("./config/passport");
app.get("/", (req, res) => {
    res.redirect("/signup");
});

app.use("/", authRouter);
app.use("/users", usersRouter);
app.use("/messages", messagesRouter);
app.use("/profile", profileRouter);

app.listen(3000, () => {
    console.log("App listening on port 3000");
});