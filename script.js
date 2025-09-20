const simgeler = ["🍒", "💎", "🔔", "⭐", "7️⃣", "🧿", "🕋", "🧠", "🪬", "⚡"];
let matrix = [];

function generateGrid() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  matrix = [];

  for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
      const simge = simgeler[Math.floor(Math.random() * simgeler.length)];
      row.push(simge);

      const cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = simge;
      grid.appendChild(cell);
    }
    matrix.push(row);
  }
}

function checkLines() {
  const result = document.getElementById("result");
  result.textContent = "Kazandın! 🎉";
}

generateGrid();