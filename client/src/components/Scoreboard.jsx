import React from "react";
export default function Scoreboard({ players, current }) {
  return (
    <div>
      <h4>Scores</h4>
      {players.map((p, i) => (
        <div key={i}>
          {p.name}: {p.score} {current === i && "←"}
        </div>
      ))}
    </div>
  );
}
