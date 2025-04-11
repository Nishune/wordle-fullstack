import express from "express";
import path from "path";
import gameRoutes from "./routes/gameRoutes.js";
import viewRoutes from "./routes/viewRoutes.js";
const app = express();
/////
//EJS Configuration
/////
app.set("view engine", "ejs");
app.set("views", "./views");
/////
// Middleware
/////
app.use(express.json());
// Serving static files from the dist folder React frontend.
app.use(express.static("../client/dist"));
//Serving static files for public folder backend.
app.use("/static", express.static("./public"));
/////
// API: Game Routes.
/////
app.use("/api/game", gameRoutes);
/////
//Server-Side Rendered Routes
/////
app.use("/", viewRoutes);
/////
// Client Routes
/////
app.get("*", (req, res) => {
    res.sendFile(path.resolve("../client/dist/index.html"));
});
export default app;
//# sourceMappingURL=app.js.map