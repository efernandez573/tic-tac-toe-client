'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const player1 = 'X'
  const player2 = 'O'

  let currentTurn = 1
  let currentPlayer = "X"
  let movesMade = 0
  // boolean that keeps track of whether the game is over or not
  let gameOver = false


  const winnerContainer = $('#winner')
  const reset = $('.reset')
  const boxes = $('.box')
  const blockZero = $('#block-0')
  const blockOne = $('#block-1')
  const blockTwo = $('#block-2')
  const blockThree = $('#block-3')
  const blockFour = $('#block-4')
  const blockFive = $('#block-5')
  const blockSix = $('#block-6')
  const blockSeven = $('#block-7')
  const blockEight = $('#block-8')

  boxes.on('click', function (event) {
    if (!gameOver) {
      updateMovesMade()
      addMarkers()
      checkForWinner()
      declareWinner(currentPlayer)
      changeTurn()
    }
  })

  const updateMovesMade = () => {
    movesMade++
  }

  const changeTurn = () => {
    currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X'
  }
  const addMarkers = () => {
    event.target.innerHTML = currentPlayer
    event.target.style.color = currentPlayer === 'X' ? 'blue' : 'purple'
  }

  // reset.on('click', function(event) {
  //   const moves = Array.prototype.slice.call($('.box'))
  //   moves.map(m) => {
  //   m.innerHTML = ''
  //   })
  //   winnerContainer.html('')
  //   winnerContainer.css('display', 'none')
  //   currentTurn = 1
  //   movesMade = 0
  // })

// checks to see if there is a winnner - return true or false
  function checkForWinner () {
    if (movesMade > 4) {
      const realGameBoard = boxes.map((box) => {
        return box.innerHTML
      })

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
      return winningCombos.find(function (combo) {
        if (realGameBoard[combo[0]] === realGameBoard[combo[1]] &&
             realGameBoard[combo[1]] === realGameBoard[combo[2]]) {
          gameOver = true
          console.log("you win!")
          return true
        } else {
          return false
        }
      })
    }
  }

  function declareWinner (winner) {
    if(gameOver) {
      winnerContainer.html( winner + ' wins!')
    }
  }
})
