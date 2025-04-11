var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import app from "./app.js";
import { loadWordList } from "./utils/loadWordList.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = 5080;
// Starta servern
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield connectDB();
        yield loadWordList();
        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`);
        });
    });
}
startServer();
//# sourceMappingURL=server.js.map