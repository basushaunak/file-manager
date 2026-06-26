const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize SQLite database file
const db = new sqlite3.Database('./data/fileManager.db', (err) => {
  if (err) {
    console.error('Database opening error:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Create table sequentially
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS files (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      file_name TEXT NOT NULL,
      status TEXT CHECK(status IN ('IN', 'OUT')) NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

// Endpoint 1: Get all tracked files
app.get('/api/files', (req, res) => {
  const sql = 'SELECT * FROM files ORDER BY timestamp DESC';
  
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Endpoint 2: Log a new file movement (IN or OUT)
app.post('/api/files', (req, res) => {
  const { file_name, status } = req.body;
  
  if (!file_name || !status) {
    return res.status(400).json({ error: 'Missing file_name or status' });
  }

  const sql = 'INSERT INTO files (file_name, status) VALUES (?, ?)';
  
  db.run(sql, [file_name, status], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID, file_name, status });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running locally at http://localhost:${PORT}`);
});
// Function to handle clean exit
const gracefulShutdown = () => {
  console.log('\nShutdown signal received. Closing resources...');
  
  // Close the SQLite database connection safely
  db.close((err) => {
    if (err) {
      console.error('Error closing the database:', err.message);
      process.exit(1);
    }
    console.log('SQLite database connection closed safely.');
    process.exit(0);
  });
};

// Listen for Ctrl+C (SIGINT)
process.on('SIGINT', gracefulShutdown);

// Listen for terminal closing or generic termination (SIGTERM)
process.on('SIGTERM', gracefulShutdown);
