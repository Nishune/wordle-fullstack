import express from "express";
import path from "path";
import handleNewGame from "./utils/newGame.js";
import handleGameGuess from "./utils/gameGuess.js";

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
// API Routes
/////

app.get("/api/game/new", handleNewGame);
app.post("/api/game/:gameId/guess", handleGameGuess);

/////
//Server-Side Rendered Routes
/////

app.get("/highscore", (req, res) => {
  try {
    const highscores = [];

    res.render("highscore", {
      title: "Wordle highscore",
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
