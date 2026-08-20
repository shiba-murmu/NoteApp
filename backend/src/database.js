const Database = require('better-sqlite3');

const path = require('path');

const dbPath = path.join(
    __dirname,
    "../database/nexora.db"
);

const db = new Database(dbPath);

// console.log("Sql database connected successfully"); for development purpose.

module.exports = db;