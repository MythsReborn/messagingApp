const pool = require("../db/pool");

async function getUsers(req, res) {
    const { rows } = await pool.query(
        "SELECT id, username, display_name, bio FROM users WHERE id != $1",
        [req.user.id]
    );

    res.render("users", {
        users: rows,
        user: req.user
    });
}

module.exports = {
    getUsers
};