import express from "express";
import path from "path";
import { getHighscores } from "./utils/highscores.js";
import gameRoutes from "./routes/gameRoutes.js";

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

app.get("/highscore", (req, res) => {
  try {
    const highscores = getHighscores();

    res.render("highscore", {
      title: "Wordle Highscore",
      highscores: highscores,
    });
  } catch (error) {
    console.log("Error loading highscores", error);
    res.status(500).send("An error occurred while trying to get the highscore");
  }
});
/////
// Client Routes
/////

app.get("*", (req, res) => {
  res.sendFile(path.resolve("../client/dist/index.html"));
});

export default app;
