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

app.listen(3000, () => console.log("Server running on port 3000"));