const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  createSquare();
  console.log(`Square ${i} created!`);
}

function createSquare() {
  const square = document.createElement("div");
  container.appendChild(square);
  return;
}
