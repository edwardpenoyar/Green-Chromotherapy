// var x = ['Column1', 'Column2', 'Column3', 'Column4', 'Column5', 'Column6', 'Column7', 'Column8', 'Column9', 'Column10', 'Column11', 'Column12']
//
// var y = ['Row1', 'Row2', 'Row3', 'Row4', 'Row5', 'Row6', 'Row7', 'Row8', 'Row9', 'Row10', 'Row11', 'Row12']
//
// .Cell= (x, y)

// var column = 1


// for (var i = 1; i <= 12; i++) {
//   setTimeout(function (counter) { // how does counter here pick up a numerical value?
//     var rowSelector = '#Row' + counter + ' .Column' + column
//     var cell = document.querySelector(rowSelector)
//
//     cell.style.backgroundColor = 'blue' // need to change this to var random when entire js is put under loop for new squares
//   }, i * 500, i)  // this last i is a parameter, why is it necessary?
// }
// // code stops working here
var colorArray = ["chartreuse", "Lime", "LimeGreen", "MediumSeaGreen", "MediumSpringGreen", "PaleGreen", "YellowGreen"]
var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)]

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
    case 40: //arowdown

    xCoordinate = xCoordinate + 1
      rowAxis = "#Row" + xCoordinate

      break
      case 38: //arrowup
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





// function FindWinner (){
//
//     if ('#Row12' Column1-12 != backgroundColor Olive)
//     return  alert: 'You Won'
//
//
// }

// var iShape= document.querySelector('.Row:nth-child(1) .Cell:nth-child(11)')
