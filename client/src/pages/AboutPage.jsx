import React from "react";

function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="about-title">About Wordle Game</h1>
      <div className="about-content">
        <p>
          Welcome to the Wordle Game! This is a word-guessing game inspired by
          the popular online game Wordle.
        </p>
        <h2>How to Play</h2>
        <p>
          In Wordle, you have six attempts to guess a hidden word. Each time you
          make a guess, you get feedback:
        </p>
        <ul>
          <li>
            <span className="letter-example correct">Green</span> means the
            letter is correct and in the right position
          </li>
          <li>
            <span className="letter-example misplaced">Yellow</span> means the
            letter is in the word but in the wrong position
          </li>
          <li>
            <span className="letter-example incorrect">Gray</span> means the
            letter is not in the word
          </li>
        </ul>
        <h2>Game Settings</h2>
        <p>
          You can customize your game by choosing the word length (4-7 letters)
          and whether the word must have unique letters (no repeated letters).
        </p>
        <h2>Have Fun!</h2>
        <p>
          The goal is to guess the word in as few attempts as possible. Good
          luck!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
