import app from "./app.js";

const PORT = 5080;

// Starta servern
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
