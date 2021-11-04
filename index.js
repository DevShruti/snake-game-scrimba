const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const score = document.getElementById('score')
let squares = []
let currentSnake = [2,1,0]
let direction = 1
let width = 10

function createGrid() {
    //create 100 of these elements with a for loop
    for (let i=0; i < 100; i++) {
     //create element
    const square = document.createElement('div')
    //add styling to the element
    square.classList.add('square')
    //put the element into our grid
    grid.appendChild(square)
    //push it into a new squares array    
    squares.push(square)
    }
}
createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))

function move() {
    if (
        (currentSnake[0] + width >= 100 && direction === 10) ||
        (currentSnake[0] - width < 0 &&  direction === -10) ||
        (currentSnake[0] % width === 9 &&  direction === 1)  ||
        (currentSnake[0] % width === 0 && direction === -1 ) ||
        squares[currentSnake[0] + direction].classList.contains('snake')

    ) return clearInterval(timerId)
    
    const tail = currentSnake.pop()
      
    squares[tail].classList.remove('snake')

    currentSnake.unshift(currentSnake[0] + direction)

   squares[ currentSnake[0]].classList.add('snake')



     
   

   
}

move()

let timerId = setInterval(move, 1000);

function control(e) { 
    if (e.key === 'ArrowRight') {
        direction = 1

} else if (e.key === 'ArrowUp') {
        direction = -width

} else if (e.key === 'ArrowLeft') {
       direction = -1

} else if (e.key === 'ArrowDown') {
      direction = +width

}
} 

document.addEventListener('keyup', control)