# Wordle Game with Highscore List

A fullstack Wordle-inspired game with highscore functionality and an information page, built with modern web technologies.

## 📋 Features

- **Wordle Game** with customizable settings
  - Choose word length
  - Choose whether words can contain repeated letters
- **Highscore List** stored in a database
- **Information Page** about the project
- **Secure Implementation** to prevent cheating

## 🛠️ Technologies

### Frontend

- **React** - For the user interface
- **Material-UI (MUI)** - For styling with a sleek black and orange theme
- **React Router** - For route handling

### Backend

- **Node.js** - Runtime environment
- **Express** - Web server framework
- **MongoDB** - Database for storing highscores
- **EJS** - Templating for server-side rendering of the highscore page

### Communication

- **RESTful API** - For communication between frontend and backend
- **JSON** - For data transfer

## 🏗️ Project Structure

The project is divided into two main parts:

- **client/** - React frontend
- **server/** - Node.js backend

### API Endpoints

- `GET /api/game/new` - Starts a new game and returns a unique game ID
- `POST /api/game/:gameId/guess` - Sends a guess and receives feedback
- `POST /api/game/:gameId/save-score` - Saves a highscore after completing a game

### Views (Routes)

- `/` - Home page with the game component
- `/about` - Information page about the project
- `/highscore` - Server-rendered highscore list

## 🔒 Security

The game is implemented with security in mind:

- The secret word is only stored on the server
- Feedback is generated on the server
- The word is only revealed when the game is over (win or loss)
- Timing is handled on the server to prevent cheating

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Installation

1. Clone the repository:

   ```
   git clone <repo-url>
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the server folder with the following content:

   ```
   MONGODB_URI=<your-mongodb-connection-url>
   ```

4. Start the server:

   ```
   npm start
   ```

5. Visit `http://localhost:5080` in your browser

## 🧪 Tests

Run the tests with:

```
npm test
```

## 📝 Game Rules

1. A random word is selected based on your settings (word length, unique letters)
2. You have 6 attempts to guess the word
3. After each guess, you receive feedback:
   - **Green** - Correct letter in the correct position
   - **Yellow** - Correct letter in the wrong position
   - **Red** - Incorrect letter
4. If you win, you can save your result to the highscore list

## 👨‍💻 Developed by

Rikard Engström
