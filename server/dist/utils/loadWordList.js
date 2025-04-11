var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from "fs/promises";
//Wordlist which will contain all words from data file.
let wordList = [];
//Function to read in the words from the file.
export function loadWordList() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Reads the file words_alpha.txt loacted in the data folder.
            const data = yield fs.readFile("./data/words_alpha.txt", "utf8");
            // Splits the content of the file at each linebreak.
            // And saves each row as an element in the wordlist Array.
            wordList = data.split(/\r?\n/);
            console.log(`Laddade ${wordList.length} ord från ordlistan`);
        }
        catch (error) {
            console.error("Error when reading wordlist:", error);
        }
    });
}
export function getWordList() {
    return wordList;
}
//# sourceMappingURL=loadWordList.js.map