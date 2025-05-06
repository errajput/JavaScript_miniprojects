let count = 0;
const countEl = document.getElementById("count");

// Utility function to update the count display
function updateDisplay() {
  countEl.textContent = count;
}

// Button actions mapped to IDs
const actions = {
  btn1: () => count++,
  btn2: () => count--,
  btn3: () => (count += 10),
  btn4: () => (count = 0),
};

// Add event listeners in a loop
Object.keys(actions).forEach((btnId) => {
  document.getElementById(btnId).addEventListener("click", () => {
    actions[btnId]();
    updateDisplay();
  });
});

// Optional: Handle keyboard input (+, -, 0, Shift + for +10)
document.addEventListener("keydown", (e) => {
  if (e.key === "+" || e.key === "=") {
    count++;
  } else if (e.key === "-") {
    count--;
  } else if (e.key === "0") {
    count = 0;
  } else if (e.shiftKey && e.key === "+") {
    count += 10;
  }
  updateDisplay();
});
