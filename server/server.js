const express = require("express");
const app = express();
const PORT = 5080;

app.use(express.json());

// Test-route
app.get("/api/test", (req, res) => {
  res.json({ message: "API fungerar!" });
});

// Starta servern
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
