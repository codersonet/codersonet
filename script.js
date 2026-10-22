// --- 1. Typing Animation Effect ---
const phrases = [
  "Building scalable & modern web apps...",
  "Passionate about UI/UX & Fluid Animations...",
  "Exploring Cloud Native & AI Agents...",
  "Always learning, always building..."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typingText");

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentPhrase.length) {
    speed = 1500; // Pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 500;
  }

  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", type);


// --- 2. Wave Canvas Animation ---
function initWaveCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  let step = 0;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    step += 0.03;

    // Layer 1
    ctx.fillStyle = "rgba(46, 160, 67, 0.3)";
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    for (let x = 0; x <= canvas.width; x += 10) {
      const y = Math.sin(x * 0.01 + step) * 15 + canvas.height / 2;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(canvas.width, canvas.height);
    ctx.closePath();
    ctx.fill();

    // Layer 2
    ctx.fillStyle = "rgba(56, 189, 248, 0.4)";
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    for (let x = 0; x <= canvas.width; x += 10) {
      const y = Math.cos(x * 0.012 + step * 1.2) * 18 + canvas.height / 2 + 5;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(canvas.width, canvas.height);
    ctx.closePath();
    ctx.fill();

    requestAnimationFrame(animate);
  }

  animate();
}

initWaveCanvas("waveCanvas");
initWaveCanvas("footerWaveCanvas");


// --- 3. Snake Contribution Animation ---
function initSnakeCanvas() {
  const canvas = document.getElementById("snakeCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const cols = 45;
  const rows = 7;
  const cellSize = 12;
  const gap = 3;

  // Snake State
  let snake = [
    { x: 5, y: 3 },
    { x: 4, y: 3 },
    { x: 3, y: 3 }
  ];
  let dir = { x: 1, y: 0 };

  function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const x = c * (cellSize + gap) + 10;
        const y = r * (cellSize + gap) + 10;
        ctx.fillStyle = "#161b22";
        ctx.fillRect(x, y, cellSize, cellSize);
      }
    }
  }

  function updateSnake() {
    const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

    // Change direction randomly
    if (Math.random() < 0.2 || head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows) {
      const dirs = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 }
      ];
      dir = dirs[Math.floor(Math.random() * dirs.length)];
    }

    const newHead = {
      x: Math.max(0, Math.min(cols - 1, snake[0].x + dir.x)),
      y: Math.max(0, Math.min(rows - 1, snake[0].y + dir.y))
    };

    snake.unshift(newHead);
    snake.pop();
  }

  function drawSnake() {
    snake.forEach((part, index) => {
      const x = part.x * (cellSize + gap) + 10;
      const y = part.y * (cellSize + gap) + 10;
      ctx.fillStyle = index === 0 ? "#3fb950" : "#2ea043";
      ctx.fillRect(x, y, cellSize, cellSize);
    });
  }

  function loop() {
    drawGrid();
    updateSnake();
    drawSnake();
    setTimeout(loop, 120);
  }

  loop();
}

initSnakeCanvas();
