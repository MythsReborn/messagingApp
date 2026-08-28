# Messaging App

A simple full-stack messaging application built with Node.js, Express, EJS, and PostgreSQL.

## Features

- User registration and login
- User logout
- Password hashing with bcrypt
- Session-based authentication with Passport.js
- User authorization
- View other users
- Send messages to other users
- View conversations
- Customize user profiles
- Edit display name and bio
- PostgreSQL database

## Tech Stack

- Node.js
- Express.js
- EJS
- PostgreSQL
- Passport.js
- Express Session
- bcrypt

## Setup

1. Clone the repository.

2. Install the dependencies:

npm install

3. Create a PostgreSQL database named `messaging`.

4. Create a `.env` file and add:

DATABASE_URL=your_postgresql_connection_string
SESSION_SECRET=your_session_secret

5. Start the application:

node --watch app.js

6. Open `http://localhost:3000` in your browser.

## Authentication

The application uses Passport.js and session-based authentication.

Passwords are securely hashed using bcrypt before being stored in the database.

## Messaging

Users can view other registered users and send messages to them.

Messages are stored in PostgreSQL along with the sender, receiver, message content, and timestamp.

The current version uses normal HTTP request/response communication rather than real-time messaging.

## Future Improvements

Two-way real-time communication will be added in a future version using WebSockets or Socket.IO.

Other planned improvements include:

- Better messaging UI
- Message timestamps
- Read/unread message status
- Improved validation and error handling
- Better authentication security
- Deployment

## Author

Built as a full-stack learning project using Node.js, Express, EJS, and PostgreSQL.
