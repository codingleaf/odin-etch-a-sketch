document.addEventListener('DOMContentLoaded', () => {
  main()
})

function main () {
  const gridSizeForm = document.getElementById('grid-size')
  const gridSizeInput = document.getElementById('grid-size-input')
  const gridNode = document.querySelector('.grid')
  const grid = generateGrid(gridNode)

  gridSizeForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const size = Number(gridSizeInput.value)
    if (Number.isInteger(size) && size > 0 && size <= 100) {
      grid.generate(size)
    } else {
      alert('Invalid input. Please enter a valid integer. Min: 1 Max: 100')
    }
  })

  const updateCell = (cell) => {
    if (cell.style.backgroundColor) {
      const cellOpacity = parseFloat(cell.style.opacity)
      cell.style.opacity =  Math.min(cellOpacity + 0.1, 1)
    } else {
      cell.style.backgroundColor = randColor(COLORS)
      cell.style.opacity = '0.1'
    }
  }

  grid.node.addEventListener('mouseover', (e) => {
    if (e.target.matches('.cell')) updateCell(e.target)
  })

  grid.node.addEventListener('touchstart', (e) => {
    if (e.target.matches('.cell')) updateCell(e.target)
  })

  grid.node.addEventListener('touchmove', ({ touches }) => {
    const { clientX, clientY } = touches[0]
    const element = document.elementFromPoint(clientX, clientY)
    if (element?.matches('.cell')) updateCell(element)
  })
}

const COLORS = [
  '#FF0000', // red 
  '#FF7F00', // orange 
  '#FFFF00', // yellow 
  '#00FF00', // green 
  '#0000FF', // blue 
  '#4B0082', // indigo 
  '#8B00FF', // violet
]

function randColor(colors = null) {
  if (colors) {
    const randIdx = Math.trunc(Math.random() * colors.length)
    return colors[randIdx]
  }
  return '#000000'
}

function generateGrid(gridNode) {
  const grid = {
    node: gridNode,
    generate: (rows, cols) => {
      return generate(rows, cols)
    },
  }

  function getGridWidth() {
    const clientWidth = grid.node.clientWidth
    const style = getComputedStyle(grid.node)
    const paddingLeft = parseFloat(style.paddingLeft)
    const paddingRight = parseFloat(style.paddingRight)
    const contentWidth = clientWidth - paddingLeft - paddingRight
    return contentWidth
  }
  
  function getGridHeight() {
    const clientHeight = grid.node.clientHeight
    const style = getComputedStyle(grid.node)
    const paddingTop = parseFloat(style.paddingTop)
    const paddingBottom = parseFloat(style.paddingBottom)
    const contentHeight = clientHeight - paddingTop - paddingBottom
    return contentHeight
  }

  function generate(rows, cols = null) {
    grid.node.innerHTML = ''

    if (!cols) {
      cols = rows
    }

    const gridFragment = document.createDocumentFragment()

    // Create cell and row template
    const cell = document.createElement('div')
    const row = document.createElement('div')
    cell.classList.add('cell')
    row.classList.add('row')
    cell.style.width = `${getGridWidth(grid.node) / cols}px`
    cell.style.height = `${getGridHeight(grid.node) / rows}px`

    // Create a single row with the appropriate number of cells
    for (let i = 0; i < cols; i++) {
      const cellCopy = cell.cloneNode()
      row.appendChild(cellCopy)
    }

    // Create all rows
    for (let i = 0; i < rows; i++) {
      const gridRow = row.cloneNode(true)
      gridFragment.appendChild(gridRow)
    }

    // Add rows to the grid
    grid.node.appendChild(gridFragment)
  }

  return grid
}
