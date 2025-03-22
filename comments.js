// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
const comments = [];

// Create a route that returns all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route that creates a new comment
app.post('/comments', (req, res) => {
  const comment = { id: comments.length + 1, body: req.query.body };
  comments.push(comment);
  res.json(comment);
});

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});