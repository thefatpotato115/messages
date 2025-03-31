const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

let messages = [
    // Sample messages for demonstration, each with an ID and timestamp
    { id: 1, text: "Hello, world!", timestamp: Date.now() },
    { id: 2, text: "This is a test message.", timestamp: Date.now() }
];

app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Get all messages
app.get('/messages', (req, res) => {
    res.json(messages);
});

// Delete a message by ID
app.delete('/messages/:id', (req, res) => {
    const messageId = parseInt(req.params.id, 10);
    messages = messages.filter(msg => msg.id !== messageId); // Remove message by ID
    res.status(200).send({ message: 'Message deleted successfully' });
});

// Add a new message
app.post('/messages', (req, res) => {
    const { text } = req.body;
    const newMessage = {
        id: messages.length + 1, // Simple ID logic
        text: text,
        timestamp: Date.now()
    };
    messages.push(newMessage);
    res.status(201).json(newMessage);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});