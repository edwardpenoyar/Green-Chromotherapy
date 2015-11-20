var colorArray = ['chartreuse', 'Lime', 'LimeGreen', 'MediumSeaGreen', 'MediumSpringGreen', 'PaleGreen', 'YellowGreen']
var randomColor = colorArray[Math.floor(Math.random( ) * colorArray.length)]

var rowAxis = '#Row' + 1
var columnAxis = ' .Column' + 1
var xCoordinate = 1
var yCoordinate = 1
var coordinates = rowAxis + columnAxis
var illuminatedCell = document.querySelector(coordinates)

illuminatedCell.style.backgroundColor = randomColor

document.body.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 37: // ArrowLeft
      if (yCoordinate > 1) {
        yCoordinate = yCoordinate - 1
        columnAxis = ".Column" +yCoordinate
      }
      else {
      return
      }
    break
    case 39: // ArrowRight
      if (yCoordinate < 12) {
        yCoordinate = yCoordinate + 1
        columnAxis = ".Column" +yCoordinate
      }
      else {
      return
    }

      break
    case 40: // Arrowdown

    xCoordinate = xCoordinate + 1
      rowAxis = "#Row" + xCoordinate

      break
      case 38: //Arrowup
      if (xCoordinate > 1) {
      xCoordinate = xCoordinate - 1
        rowAxis = "#Row" + xCoordinate}
        else {
          return
        }
        break

  }
  if (rowAxis === "#Row13") {
    xCoordinate = 1
    yCoordinate = 1
    randomColor = colorArray[Math.floor(Math.random()*colorArray.length)]
    rowAxis = "#Row1"
    columnAxis = ".Column1"
  }

  coordinates = rowAxis + " " + columnAxis

  var illuminatedCell = document.querySelector(coordinates)

  illuminatedCell.style.backgroundColor = randomColor
})
