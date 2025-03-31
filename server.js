const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let messages = [];

app.post("/messages", (req, res) => {
    messages.push(req.body);
    res.sendStatus(200);
});

app.get("/messages", (req, res) => {
    res.json(messages);
});

// Use dynamic port for hosting services
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));