document.addEventListener('DOMContentLoaded', () => {
  main()
})

function generateGrid() {

}

function main () {
  const gridSizeForm = document.getElementById('grid-size')
  const gridSizeInput = document.getElementById('grid-size-input')
  gridSizeForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const size = Number(gridSizeInput.value)
    if (Number.isInteger(size) && size > 0) {
      generateGrid()
    } else {
      alert(`Invalid input. Please enter a valid integer.`)
    }
  })

  const rowTemplate = document.getElementById('row-template')
  const cellTemplate = document.getElementById('cell-template')
}
