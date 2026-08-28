const pool = require("../db/pool");

async function getProfile(req, res) {
    res.render("profile", {
        user: req.user
    });
}

function editProfileGet(req, res) {
    res.render("edit-profile", {
        user: req.user
    });
}

async function editProfilePost(req, res) {
    const { display_name, bio } = req.body;

    await pool.query(
        `
        UPDATE users
        SET display_name = $1,
            bio = $2
        WHERE id = $3
        `,
        [display_name, bio, req.user.id]
    );

    res.redirect("/profile");
}

module.exports = {
    getProfile,
    editProfileGet,
    editProfilePost
};