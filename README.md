# Wordle Fullstack

A fullstack implementation of the popular word guessing game Wordle, with customizable difficulty, scoring system, and leaderboard.

## Overview

This project is a fullstack implementation of the Wordle game where players guess a secret word within 6 attempts. After each guess, players receive feedback on which letters are correct, exist in the word but in the wrong position, or don't exist in the word at all. The project includes a React frontend, an Express backend, and a MongoDB database to store high scores.

## Features

- **Customizable difficulty**: Choose word length (4-9 letters) and whether you want the word to contain only unique letters
- **Visual feedback**: Clear color-coded feedback for each guess (green, yellow, red)
- **Scoring system**: Based on the number of guesses and time taken to solve the word
- **Leaderboard**: Server-side rendered leaderboard with filtering options
- **Responsive design**: Works on both desktop and mobile devices
- **Dark theme**: Modern design with a dark theme

## Tech Stack

### Frontend

- **React 19**: For building the user interface
- **Material UI 7**: Component library for styling
- **React Router 7**: For client-side routing
- **Vite**: building tool

### Backend

- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **TypeScript**: For type-safe code
- **MongoDB**: NoSQL database for storing high scores
- **Mongoose**: ODM (Object Data Modeling) for MongoDB
- **EJS**: Template engine for server-side rendering

### Testing

- **Jest**: Testing framework
- **Supertest**: For API testing

## Installation

### Steps

1. Install dependencies:

```bash
npm install
```

This will install dependencies for both frontend and backend.

2. Configure environment variables:
   Create a `.env` file in the server folder:

```
MONGODB_URI=mongodb://localhost:27017/wordle
```

3. Build the project:

```bash
npm run build
```

## Usage

### Development

To run both frontend and backend in development mode:

```bash
npm run dev
```

Frontend will run on `http://localhost:5173` and backend on `http://localhost:5080`.

### Production

To build and start the project for production:

```bash
npm run build
npm start
```

The app will then run on `http://localhost:5080`.

## API Documentation

### Game API

- `GET /api/game/new?length=[number]&unique=[boolean]` - Start a new game

  - Query parameters:
    - `length`: Word length (4-9)
    - `unique`: Whether the word should have unique letters (true/false)
  - Response: `{ gameId: string, wordLength: number }`

- `POST /api/game/:gameId/guess` - Make a guess

  - Parameters:
    - `gameId`: Game ID
  - Body: `{ guess: string }`
  - Response: `{ feedback: Array, isCorrect: boolean, guessCount: number, word?: string, isGameOver?: boolean }`

- `POST /api/game/:gameId/save-score` - Save score
  - Parameters:
    - `gameId`: Game ID
  - Body: `{ name: string }`
  - Response: `{ success: boolean, score: Object }`

### Server-rendered Pages

- `GET /highscore` - Display the leaderboard
  - Query parameters (optional):
    - `wordLength`: Filter by word length
    - `uniqueLetters`: Filter by unique letters (true/false)

## Testing

The project contains unit and integration tests for the backend.

### Running Tests

```bash
npm test
```

Tests include:

- Testing of the Wordle feedback algorithm
- Testing of word selection logic
- Integration of the entire game flow
