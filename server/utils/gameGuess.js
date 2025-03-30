import wordleFeedback from "./wordleFeedback";
import { activeGames } from "./newGame";

export default function handleGameGuess(req, res) {
  const { gameId } = req.params;
  const { guess } = req.body;
}
