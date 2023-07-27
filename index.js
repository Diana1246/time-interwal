//завдання 1

let counter = 0;  
const maxMessages = 5;  

 
function showMessage() {
  counter++;  
  console.log(`Повідомлення ${counter}`);  

  if (counter === maxMessages) {
    clearInterval(intervalID);  
  }
}

 
const intervalID = setInterval(showMessage, 1000);


//завдання 2

const element = document.querySelector('.animated-elements');
let size = 100;
let growing = true;

function animateElement() {
   
  if (growing) {
    size += 10;
  } else {
    size -= 10;
  }

 
  const randomColor = getRandomColor();
  element.style.backgroundColor = randomColor;

 
  element.style.width = size + 'px';
  element.style.height = size + 'px';

 
  if (size >= 150 || size <= 50) {
    growing = !growing;
  }
}

 
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
 
setInterval(animateElement, 100);


//завдання 3

const targetElement = document.querySelector('.element');
let score = 0;  
let clicks = 0;  
const gameDuration = 10000;  
const targetInterval = 1000;  

 
function getRandomPosition() {
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;
  const elementWidth = targetElement.offsetWidth;
  const elementHeight = targetElement.offsetHeight;
  
  const maxX = containerWidth - elementWidth;
  const maxY = containerHeight - elementHeight;
  
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  return { x: randomX, y: randomY };
}

 
function startGame() {
  score = 0;
  clicks = 0;
  updateScoreDisplay();

   
  const intervalID = setInterval(() => {
    const randomPosition = getRandomPosition();
    targetElement.style.left = `${randomPosition.x}px`;
    targetElement.style.top = `${randomPosition.y}px`;
  }, targetInterval);

  
  setTimeout(() => {
    clearInterval(intervalID);
    alert(`Час вийшов! Ваш рахунок: ${score}`);
  }, gameDuration);
}

 
function handleClick() {
  score++;
  clicks++;
  updateScoreDisplay();
}

 
function updateScoreDisplay() {
  document.getElementById('score-display').innerText = `Очки: ${score}`;
  document.getElementById('clicks-display').innerText = `Натисків: ${clicks}`;
}

 
targetElement.addEventListener('click', handleClick);

 
startGame();


//завдання 4


function startTimer() {
    const inputSeconds = parseInt(document.getElementById('seconds').value, 10);
  
    
    if (isNaN(inputSeconds) || inputSeconds <= 0) {
      alert('Введіть коректне число секунд більше нуля.');
      return;
    }
  
    setTimeout(() => {
      alert(`Час вийшов! Пройшло ${inputSeconds} секунд.`);
    }, inputSeconds * 1000);  
  }
  

