const data = {
  characters: [
    "Jesus", "Moses", "David", "Goliath", "Abraham", "Sarah",
    "Joseph", "Mary", "Peter", "Paul", "Samson", "Delilah",
    "Esther", "Ruth", "Solomon", "Elijah", "Daniel",
    "Jonah", "Noah", "John the Baptist"
  ],
  stories: [
    "David and Goliath",
    "Moses parts the Red Sea",
    "The Birth of Jesus",
    "Jesus feeds the 5000",
    "Noah builds the Ark",
    "Daniel in the Lion's Den",
    "Jonah and the Big Fish",
    "Jesus walks on water",
    "The Last Supper",
    "The Resurrection"
  ],
  virtues: [
    "Love",
    "Joy",
    "Peace",
    "Patience",
    "Kindness",
    "Goodness",
    "Faithfulness",
    "Gentleness",
    "Self Control",
    "Humility",
    "Forgiveness",
    "Obedience"
  ]
};

let currentList = [];
let timerInterval;
let timeLeft = 60;

function startGame(category) {
  currentList = [...data[category]];
  document.getElementById('welcome').classList.remove('active');
  document.getElementById('game').classList.add('active');
  resetTimer();
  nextWord();
}

function nextWord() {
  resetTimer();
  if (currentList.length === 0) return;
  const index = Math.floor(Math.random() * currentList.length);
  document.getElementById('word').textContent = currentList[index];
}

function passWord() {
  nextWord();
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 60;
  document.getElementById('timer').textContent = timeLeft;
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert('Time up! ⏰');
    }
  }, 1000);
}

function endGame() {
  clearInterval(timerInterval);
  document.getElementById('game').classList.remove('active');
  document.getElementById('welcome').classList.add('active');
}
