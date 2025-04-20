let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;
let guessHistory = [];

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const feedback = document.getElementById("feedback");
  const attemptsDisplay = document.getElementById("attempts");

  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "⚠️ Please enter a number between 1 and 100.";
    feedback.style.color = "orange";
    return;
  }

  guessHistory.push(guess);

  if (guess === secretNumber) {
    feedback.textContent = `🎉 Correct! The number was ${secretNumber}. You win!`;
    feedback.style.color = "green";
    disableGame();
  } else {
    attemptsLeft--;
    attemptsDisplay.textContent = attemptsLeft;
    if (attemptsLeft === 0) {
      feedback.textContent = `💥 Game Over! The number was ${secretNumber}.`;
      feedback.style.color = "red";
      disableGame();
    } else {
      feedback.textContent = guess > secretNumber ? "📉 Too high!" : "📈 Too low!";
      feedback.style.color = "blue";
    }
  }
}

function disableGame() {
  document.getElementById("guessInput").disabled = true;
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  guessHistory = [];
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").disabled = false;
  document.getElementById("feedback").textContent = "";
  document.getElementById("attempts").textContent = attemptsLeft;
  document.getElementById("hintDisplay").textContent = "";
}

function openSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.width = "300px";
  sidebar.classList.add("slide-in");
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.width = "0";
  sidebar.classList.remove("slide-in");
}

function showHint() {
  const hintDisplay = document.getElementById("hintDisplay");
  if (guessHistory.length === 0) {
    hintDisplay.textContent = "No guesses made yet!";
  } else {
    hintDisplay.textContent = "Your guesses: " + guessHistory.join(", ");
  }
}
