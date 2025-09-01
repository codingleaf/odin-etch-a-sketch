document.addEventListener('DOMContentLoaded', () => {
  main()
})

function generateGrid(size) {
  const rowTemplate = document.getElementById('row-template')
  const cellTemplate = document.getElementById('cell-template')
  // TODO: get current grid width to calculate for cell size

  for (let i = 0; i < size; i++) {
    const cell = cellTemplate.content.firstElementChild.cloneNode(true)
    
  }
}

function randColor() {
  const colors = [
    '#FF0000',  // red
    '#FF7F00',  // orange
    '#FFFF00',  // yellow
    '#00FF00',  // green
    '#0000FF',  // blue
    '#4B0082',  // indigo
    '#8B00FF',  // violet
  ]
  const randIdx = Math.trunc(Math.random() * 7)
  return colors[randIdx]
}

function main () {
  const gridSizeForm = document.getElementById('grid-size')
  const gridSizeInput = document.getElementById('grid-size-input')

  gridSizeForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const size = Number(gridSizeInput.value)
    if (Number.isInteger(size) && size > 0) {
      generateGrid(size)
    } else {
      alert(`Invalid input. Please enter a valid integer.`)
    }
  })
}
