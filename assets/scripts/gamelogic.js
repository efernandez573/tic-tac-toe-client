$(() => {
  // inital state of the game
  let currentPlayer = 'X'
  let gameOver = false
  let tieGame = false
  let realGameBoard = ['', '', '', '', '', '', '', '', '']

// use jQuery to target elements in the DOM.
  const winnerContainer = $('#winner')
  const reset = $('#reset')
  const boxes = $('.box')

  // creates click event when a box is clicked if the game is not over
  boxes.on('click', function (event) {
    if (!gameOver) {
      addMarkers(event)
      checkForWinner() // over
      checkForTie()
      declareWinner(currentPlayer)
      changeTurn()
    }
  })
// flips between x and o player
  const changeTurn = () => {
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else if (currentPlayer === 'O') {
      currentPlayer = 'X'
    }
  }
// adds markers to game board
  const addMarkers = (event) => {
    if (event.target.innerHTML === '') {
      event.target.innerHTML = currentPlayer
      event.target.style.color = currentPlayer === 'X' ? 'blue' : 'purple'
    }
    // update realGameBoard
    realGameBoard = boxes.map((i, box) => {
      return box.innerHTML
    }).get()
  }


  reset.on('click', function(event) {

  // checks to see if there is a winner - return true or false
  function checkForWinner () {
    // gives possible winning combinations for game logic
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    // creates a new array that looks for equalities within 3 boxes
    return winningCombos.find(function (combo) {
      if (realGameBoard[combo[0]] !== '' && realGameBoard[combo[0]] === realGameBoard[combo[1]] && realGameBoard[combo[1]] ===
         realGameBoard[combo[2]]) {
        gameOver = true
      }
    })
  }

  function declareWinner (winner) {
    if (tieGame) {
      winnerContainer.html('Its a Tie Game!')
    } else if (gameOver) {
      winnerContainer.html(winner + ' wins!')
    }
  }

  function checkForTie () {
    if (!gameOver) {
      const tieChecker = realGameBoard.filter((place) => {
        return place === ''
      })
      if (tieChecker.length === 0) {
        gameOver = true
        tieGame = true
      }
    }
  }
})
// x "" o "" X
// x x x "" o
// """'""""""""'
// x x 0 x0 x0x 0
