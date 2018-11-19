const store = require('../store.js')
// messages for user during the game
const signUpSuccess = data => {
  $('#message').html('Signed up successfully')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#sign-up-form').addClass('hidden')
  $('#change-password-form').hide()
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').html('Welcome Back!')
  $('#message').addClass('success')
  $('#message').removeClass('failure')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#sign-out-button').show()
  $('#change-password-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
}

const signOutSuccess = data => {
  $('#message').html('Signed Out successfully')
  store.user = null
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
}
const changePasswordSuccess = data => {
  $('#message').html('You changed your password successfully.')
  $('#message').addClass('success')
  $('#message').removeClass()
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
}

const handleSuccessfulCreate = data => {
  // store.game = createGame.game.id
  // store.cells = createGame.game.cells
  // store.over = createGame.game.over
  $('#message').html('Lets play again')
  store.user = data.user
  $('#message').removeClass()
  $('#message').addClass('success')
}
const onGetGameSuccess = data => {
  $('#message').html('Get all previous games played')
  $('#message').addClass('success')
  $('#message').removeClass('failure')
}
const onUpdateMovesMade = data => {

}

const failure = data => {
  $('#message').html('Oops, something went wrong, please try again')
  $('#message').css('color', 'red')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').removeClass('hidden')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  onGetGameSuccess,
  failure,
  handleSuccessfulCreate
}
