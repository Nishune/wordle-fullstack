import app from "./app.js";
import { loadWordList } from "./utils/loadWordList.js";
const PORT = 5080;

// Starta servern
async function startServer() {
  await loadWordList();
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
}

startServer();
