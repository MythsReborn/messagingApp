const bcrypt = require("bcrypt");
const passport = require("passport");
const pool = require("../db/pool");

async function signupGet(req, res) {
    res.render("signup");
}

async function signupPost(req, res, next) {
    try {
        const { username, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(
            `INSERT INTO users (username, password)
             VALUES ($1, $2)`,
            [username, hashedPassword]
        );

        res.redirect("/login");
    } catch (err) {
        next(err);
    }
}

function loginGet(req, res) {
    const error=req.query.error;
    res.render("login",{error});
}

const loginPost = passport.authenticate("local", {
    successRedirect: "/users",
    failureRedirect: "/login?error=1"
});

function logout(req, res, next) {
    req.logout((err) => {
        if (err) {
            return next(err);
        }

        res.redirect("/login");
    });
}

module.exports = {
    signupGet,
    signupPost,
    loginGet,
    loginPost,
    logout
};
