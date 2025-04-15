import Highscore from "../models/Highscore.js";
//The function takes a Partial<IHighscore> object, which means all fields in iHighscore are "free of choice"
export async function addHighscore(scoreData) {
    try {
        //Creates a new instance of hte incoming data
        // Saves the highscore in the database.
        const newHighscore = new Highscore(scoreData);
        await newHighscore.save();
        //Returns the saved highscore object
        return newHighscore;
    }
    catch (error) {
        console.error("Error saving highscore:", error);
        throw error;
    }
}
// export async function getHighscores(): Promise<IHighscore[]> {
//   try {
//     //Gets all highscores from the database and sort them by time.
//     const highscores = await Highscore.find().sort({ time: 1 });
//     return highscores;
//   } catch (error) {
//     console.error("Error getting highscores:", error);
//     throw error;
//   }
// }
export async function getFilteredHighscores(wordLength = null, //wordlength can be either a nymber or null, default is null.
uniqueLetters = undefined // uniqueLetters can be boolean or undefined, default is undefined.
) {
    try {
        //creates an empyt object for the mongoDB query
        const query = {};
        //If wordlength has a value, att it to the query
        if (wordLength !== null) {
            query.wordLength = wordLength;
        }
        //if unqieLetters has a value, add it to the query.
        if (uniqueLetters !== undefined) {
            query.uniqueLetters = uniqueLetters;
        }
        // Get the highscore from the database that matchen the query.
        //Sort first after lowest guesscount, then time.
        // Shows top 20 as limit.
        const highscores = await Highscore.find(query)
            .sort({ guessCount: 1, time: 1 })
            .limit(20);
        return highscores;
    }
    catch (error) {
        console.error("Error fetching filtered highscores:", error);
        throw error;
    }
}
//# sourceMappingURL=highscores.js.map