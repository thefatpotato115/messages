const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let messages = [];

app.post("/messages", (req, res) => {
    const message = { text: req.body.text, timestamp: Date.now() };
    messages.push(message);
    res.sendStatus(200);

    // Automatically remove the message after 5 minutes (300,000 ms)
    setTimeout(() => {
        messages = messages.filter(m => m !== message);
    }, 300000);
});

app.get("/messages", (req, res) => {
    // Filter out expired messages just in case
    const now = Date.now();
    messages = messages.filter(m => now - m.timestamp < 300000);
    res.json(messages);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));