'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameLogic = require('./gamelogic.js')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('submit', authEvents.onSignOut)
  $('#reset-button, #new-game-button').on('click', gameLogic.newOrReset)
  $('.box').on('click', authEvents.onUpdateMovesMade)
  $('#create-game').on('click', authEvents.onCreateGame)
  $('#get-game').on('click', authEvents.onGetGame)
})
