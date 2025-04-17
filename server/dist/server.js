import app from "./app.js";
import { loadWordList } from "./utils/loadWordList.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = 5080;
async function startServer() {
    await connectDB();
    await loadWordList();
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    });
}
startServer();
//# sourceMappingURL=server.js.map