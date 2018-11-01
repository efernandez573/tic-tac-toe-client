'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  const player1 = 'X'
  const player2 = 'O'

  let currentTurn = 1
  let movesMade = 0

  const winnerContainer = $('.winner')
  const reset = $('.reset')
  const box = $('.box')

  box.on('click', function (e) {
    movesMade++

    if (currentTurn % 2 === 1) {
      event.target.innerHTML = player1
      event.target.style.color = 'blue'
      currentTurn++
    } else {
      event.target.innerHTML = player2
      event.target.style.color = 'purple'
      currentTurn--
    }
    if (checkForWinner()) {
      const theWinner = currentTurn === 1 ? player2 : player1
      declareWinner(theWinner)
    }
  })

  function checkForWinner () {
    if (movesMade > 4) {
      const box = $('.box')
      const moves = Array.prototype.slice.call($('.box'))
      const results = moves.map(function (box) {
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
        if (results[combo[0]] !== '' && results[combo[1]] !== '' &&
            results[combo[2]] !== '' && results[combo[0]] === results[combo[1]] &&
             results[combo[1]] === results[combo[2]]) {
          return true
        } else {
          return false
        }
      })
    }
  }
  function declareWinner (winner) {
    winnerContainer.css('display', 'block')
    reset.css('display', 'block')
    winner = winner === player1 ? 'X' : 'O'
    winnerContainer.html(winner + ' wins!')
  }
})
