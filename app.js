const express = require('express');
const app = express();

app.use(express.json());

let tasks = [
  { id: 1, title: "Setup CI/CD Pipeline", status: "pending" }
];

// Home route
app.get('/', (req, res) => {
  res.send('Task Manager API Running 🚀');
});

// Health check (used by Kubernetes later)
app.get('/health', (req, res) => {
  res.status(200).json({ status: "UP" });
});

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Add new task
app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    status: "pending"
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
