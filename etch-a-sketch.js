document.addEventListener('DOMContentLoaded', () => {
  main()
})

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

function generateGrid(gridNode) {
  const grid = {
    node: gridNode,
    generate: (rows, cols) => {
      return generate(rows, cols)
    },
    get width() {
      return getGridWidth(this.node)
    },
    get height() {
      return getGridHeight(this.node)
    },
  }

  function getGridWidth(grid) {
    const clientWidth = grid.node.clientWidth
    const style = getComputedStyle(grid.node)
    const paddingLeft = parseFloat(style.paddingLeft)
    const paddingRight = parseFloat(style.paddingRight)
    const contentWidth = clientWidth - paddingLeft - paddingRight
    return contentWidth
  }

  function getGridHeight(grid) {
    const clientHeight = grid.node.clientHeight
    const style = getComputedStyle(grid.node)
    const paddingTop = parseFloat(style.paddingTop)
    const paddingBottom = parseFloat(style.paddingBottom)
    const contentHeight = clientHeight - paddingTop - paddingBottom
    return contentHeight
  }

  function generate(rows, cols = null) {
    if (!cols) {
      cols = rows
    }

    const row = document.createElement('div')
    for (let i = 0; i < rows; i++) {
      
    }
  }

  return grid
}

function main () {
  const gridSizeForm = document.getElementById('grid-size')
  const gridSizeInput = document.getElementById('grid-size-input')
  const gridNode = document.querySelector('.grid')
  const grid = generateGrid(gridNode)

  gridSizeForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const size = Number(gridSizeInput.value)
    if (Number.isInteger(size) && size > 0) {
      grid.generate(size)
    } else {
      alert(`Invalid input. Please enter a valid integer.`)
    }
  })
}
