const pool = require("../db/pool");

async function getMessages(req, res) {
    const otherUserId = req.params.userId;

    const { rows: messages } = await pool.query(
        `
        SELECT
            messages.*,
            users.username AS sender_username
        FROM messages
        JOIN users
            ON users.id = messages.sender_id
        WHERE
            (sender_id = $1 AND receiver_id = $2)
            OR
            (sender_id = $2 AND receiver_id = $1)
        ORDER BY created_at
        `,
        [req.user.id, otherUserId]
    );

    const { rows } = await pool.query(
        "SELECT id, username FROM users WHERE id = $1",
        [otherUserId]
    );

    res.render("chat", {
        messages,
        otherUser: rows[0],
        user: req.user
    });
}

async function sendMessage(req, res) {
    const receiverId = req.params.userId;
    const { content } = req.body;

    await pool.query(
        `
        INSERT INTO messages
        (sender_id, receiver_id, content)
        VALUES ($1, $2, $3)
        `,
        [req.user.id, receiverId, content]
    );

    res.redirect(`/messages/${receiverId}`);
}

module.exports = {
    getMessages,
    sendMessage
};