const db = require("../database");

// ++++++++++++++++++++++++++++
// Find user by email
// ++++++++++++++++++++++++++++

const findUserByEmail = (email) => {
  return db
    .prepare(
      `
            SELECT *
            FROM users
            WHERE email = ?
        `,
    )
    .get(email);
};

// ++++++++++++++++++++++++++++
// Find user by ID
// ++++++++++++++++++++++++++++

const findUserById = (id) => {
  return db
    .prepare(
      `
            SELECT
                id,
                name,
                email,
                gender,
                created_at,
                updated_at
            FROM users
            WHERE id = ?
        `,
    )
    .get(id);
};

// ++++++++++++++++++++++++++++
// Create new user
// ++++++++++++++++++++++++++++

const createUser = (name, email, password, gender) => {
  const stmt = db
    .prepare(
      `
            INSERT INTO users (
                name,
                email,
                password,
                gender
            )
            VALUES (?, ?, ?, ?)
        `,
    )
    .run(name, email, password, gender);

  return stmt.lastInsertRowid;
};

// ++++++++++++++++++++++++++++
// Exports
// ++++++++++++++++++++++++++++

module.exports = {
  findUserByEmail,
  findUserById,
  createUser,
};
