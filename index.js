const grid = document.querySelector('.grid');
const startButton = document.getElementById('start')
const scoreDisplay = document.querySelector('#score');
let snakes = []
let snake = [2,1,0]

function createGrid() {

for (let i = 0 ; i < 100 ; i++){
let square = document.createElement('div');



  square.classList.add('square');

grid.appendChild(square);

snakes.push('snake')
} }

createGrid()