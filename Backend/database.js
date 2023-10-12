const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../database.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS info (id INTEGER PRIMARY KEY AUTOINCREMENT, texto TEXT)");
});

module.exports = db;
