import wordleFeedback from "../utils/wordleFeedback.js";
import { activeGames } from "./newGame.js";
export default function handleGameGuess(req, res) {
    const { gameId } = req.params; //Takes the gameId from the URL-params sent by the user.
    const { guess } = req.body; //Takes the guess from the request body
    const game = activeGames.get(gameId); //Gets the active game from the Map() in newGame.js
    //If the game does not exist, return 404
    if (!game) {
        console.error(`ERROR: Game ${gameId} not found in active games!`);
        res.status(404).json({ error: "Game not found" });
        return;
    }
    //Checks so the guess has the same length as the word, this is also checked in frontend. But i followed "dont trust the client / user"
    if (guess.length !== game.word.length) {
        res.status(400).json({
            error: `Your guess must contain ${game.word.length} number of characters.`,
        });
        return;
    }
    const isCorrect = guess.toUpperCase() === game.word; //Check is the guess is correct, and turns to uppercase.
    const feedback = wordleFeedback(guess, game.word); //Use the wordleFeedback algoritm to generate feedback for the guess.
    // Savess the guess and its feedback in the games history
    game.guesses.push({
        guess: guess.toUpperCase(),
        feedback: feedback,
    });
    // If the guess is correct
    if (isCorrect) {
        res.json({
            feedback,
            isCorrect: true,
            guessCount: game.guesses.length,
            word: game.word, // Show the correct word for the player
            isGameOver: true, // Switch isGameOver to true.
        });
        return;
    }
    // Reponse object for not correct guesses
    const response = {
        feedback: feedback,
        isCorrect,
        guessCount: game.guesses.length,
    };
    // If the player has used all the 6 guesses and lost the game
    if (game.guesses.length >= 6) {
        response.word = game.word; // Shows the correct word
        response.isGameOver = true; // sets isGameOver to true
    }
    res.json(response);
}
//# sourceMappingURL=gameGuess.js.map