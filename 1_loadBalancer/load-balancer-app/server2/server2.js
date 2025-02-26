const express = require("express");
const app = express();
const PORT = 3002;

app.get("/", (req, res) => {
    res.send("Response from Server 2");
});

app.listen(PORT, () => {
    console.log(`Server 2 is running on port ${PORT}`);
});
