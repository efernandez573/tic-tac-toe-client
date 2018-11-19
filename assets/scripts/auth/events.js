const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.signUp(data)
    .then(ui.signUpSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}
const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.signIn(data)
    .then(ui.signInSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}
const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}
const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.changePassword(data)
    .then(ui.changePasswordSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}
const onGetGame = event => {
  event.preventDefault()
  api.getGame()
    .then(ui.onGetGameSuccess)
    .catch(ui.failure)
}
const onCreateGame = event => {
  event.preventDefault()
  api.createGame()
    .then(ui.handleSuccessfulCreate)
    .catch(ui.failure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGetGame,
  onCreateGame
}
