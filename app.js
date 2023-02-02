const board = document.querySelector('.container')
const modal = document.querySelector('.modal')
const btn = document.querySelector('button')

let isX = true
let isGame = true
const cellsArray = []

for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cellsArray.push(cell)
    cell.addEventListener('click', handleClick)
    board.append(cell)
}

btn.addEventListener('click', () => {
    location.reload()
})

function handleClick(event) {
    if (isGame) {
        if (isX) {
            event.target.innerHTML = 'X'
        } else {
            event.target.innerHTML = '0'
        }
        isX = !isX
        event.target.removeEventListener('click', handleClick)
        checkWin()
    }
}

function checkWin() {
    if (
        cellsArray[0].innerHTML != '' &&
        cellsArray[0].innerHTML == cellsArray[1].innerHTML &&
        cellsArray[1].innerHTML == cellsArray[2].innerHTML
    ) {
        cellsArray[0].style.backgroundColor = 'red'
        cellsArray[1].style.backgroundColor = 'red'
        cellsArray[2].style.backgroundColor = 'red'
        isGame = false
        modal.style.display = 'flex'
    } else if (
        cellsArray[3].innerHTML != '' &&
        cellsArray[3].innerHTML == cellsArray[4].innerHTML &&
        cellsArray[4].innerHTML == cellsArray[5].innerHTML
    ) {
        cellsArray[3].style.backgroundColor = 'red'
        cellsArray[4].style.backgroundColor = 'red'
        cellsArray[5].style.backgroundColor = 'red'
        isGame = false
        modal.style.display = 'flex'
    } else if (
        cellsArray[6].innerHTML != '' &&
        cellsArray[6].innerHTML == cellsArray[7].innerHTML &&
        cellsArray[7].innerHTML == cellsArray[8].innerHTML
    ) {
        cellsArray[6].style.backgroundColor = 'red'
        cellsArray[7].style.backgroundColor = 'red'
        cellsArray[8].style.backgroundColor = 'red'
        isGame = false
        modal.style.display = 'flex'
    } else if (
        cellsArray[0].innerHTML != '' &&
        cellsArray[0].innerHTML == cellsArray[3].innerHTML &&
        cellsArray[3].innerHTML == cellsArray[6].innerHTML
    ) {
        cellsArray[0].style.backgroundColor = 'red'
        cellsArray[3].style.backgroundColor = 'red'
        cellsArray[6].style.backgroundColor = 'red'
        isGame = false
        modal.style.display = 'flex'
    } else if (
        cellsArray[1].innerHTML != '' &&
        cellsArray[1].innerHTML == cellsArray[4].innerHTML &&
        cellsArray[4].innerHTML == cellsArray[7].innerHTML
    ) {
        cellsArray[1].style.backgroundColor = 'red'
        cellsArray[4].style.backgroundColor = 'red'
        cellsArray[7].style.backgroundColor = 'red'
        isGame = false
        modal.style.display = 'flex'
    } else if (
        cellsArray[2].innerHTML != '' &&
        cellsArray[2].innerHTML == cellsArray[5].innerHTML &&
        cellsArray[5].innerHTML == cellsArray[8].innerHTML
    ) {
        cellsArray[2].style.backgroundColor = 'red'
        cellsArray[5].style.backgroundColor = 'red'
        cellsArray[8].style.backgroundColor = 'red'
        isGame = false
        modal.style.display = 'flex'
    } else if (
        cellsArray[0].innerHTML != '' &&
        cellsArray[0].innerHTML == cellsArray[4].innerHTML &&
        cellsArray[4].innerHTML == cellsArray[8].innerHTML
    ) {
        cellsArray[0].style.backgroundColor = 'red'
        cellsArray[4].style.backgroundColor = 'red'
        cellsArray[8].style.backgroundColor = 'red'
        isGame = false
        modal.style.display = 'flex'
    } else if (
        cellsArray[2].innerHTML != '' &&
        cellsArray[2].innerHTML == cellsArray[4].innerHTML &&
        cellsArray[4].innerHTML == cellsArray[6].innerHTML
    ) {
        cellsArray[2].style.backgroundColor = 'red'
        cellsArray[4].style.backgroundColor = 'red'
        cellsArray[6].style.backgroundColor = 'red'
        isGame = false
        modal.style.display = 'flex'
    } else if (
        cellsArray[0].innerHTML != '' &&
        cellsArray[1].innerHTML != '' &&
        cellsArray[2].innerHTML != '' &&
        cellsArray[3].innerHTML != '' &&
        cellsArray[4].innerHTML != '' &&
        cellsArray[5].innerHTML != '' &&
        cellsArray[6].innerHTML != '' &&
        cellsArray[7].innerHTML != '' &&
        cellsArray[8].innerHTML != ''
    ) {
        for (const cell of cellsArray) {
            cell.style.backgroundColor = 'yellow'
        }
        modal.style.display = 'flex'
    }
}
