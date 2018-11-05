const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.signUp(data)
    .then(ui.signUpSuccess) // if your request was succesful
    .catch(ui.signUpFailure) // if your request failed
}
const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess) // if your request was succesful
    .catch(ui.signInFailure) // if your request failed
}
const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess) // if your request was succesful
    .catch(ui.signOutFailure) // if your request failed
}
const onCreateGameClick = event => {
  event.preventDefault()
  api.createGame()
    .then(ui.handleSuccessfulCreate) // if your request was succesful
    .catch(console.error) // if your request failed
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onCreateGameClick
}
