const value = document.querySelector('.value')
increaseButton = document.getElementById('increase')
decreaseButton = document.getElementById('decrease')
resetButton = document.getElementById('reset')

const increase = () => value.textContent = Number(value.textContent) + 1
const decrease = () => value.textContent = Number(value.textContent) - 1
const reset = () => value.textContent = 0

increaseButton.addEventListener('click', increase)
decreaseButton.addEventListener('click', decrease)
resetButton.addEventListener('click', reset)

