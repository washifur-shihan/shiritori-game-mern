import React, { useState, useEffect } from "react";
import axios from "axios";
import WordInput from "./WordInput";
import History from "./History";
import Timer from "./Timer";
import Scoreboard from "./Scoreboard";
const API = "http://localhost:5002/api/games";

export default function Game() {
  const [game, setGame] = useState(null);
  const [names, setNames] = useState(["Player 1", "Player 2"]);

  async function createGame() {
    const res = await axios.post(API, {
      players: [{ name: names[0] }, { name: names[1] }],
    });
    setGame(res.data);
  }
  async function submitWord(word, timeout = false) {
    const res = await axios.post(`${API}/${game._id}/play`, {
      word,
      timeout,
      playerIndex: game.currentPlayer,
    });
    setGame(res.data.game);
  }
  if (!game) {
    return (
      <div>
        <input
          value={names[0]}
          onChange={(e) => setNames([e.target.value, names[1]])}
        />
        <input
          value={names[1]}
          onChange={(e) => setNames([names[0], e.target.value])}
        />
        <button onClick={createGame}>Start Game</button>
      </div>
    );
  }
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 20 }}>
      <div>
        <Scoreboard players={game.players} current={game.currentPlayer} />
        <WordInput
          onSubmit={submitWord}
          lastLetter={game.lastLetter}
          currentPlayer={game.currentPlayer}
        />
        <History words={game.wordsHistory} />
      </div>
      <div>
        <Timer
          key={game.currentPlayer}
          seconds={15}
          onTimeout={() => submitWord("", true)}
        />
      </div>
    </div>
  );
}
