const store = require('../store.js')
// messages for user during the game
const signUpSuccess = data => {
  $('#message').html('Signed up successfully')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('sign-up-form').addClass('hidden')
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').html('Signed In successfully')
  $('#message').addClass('success')
  $('#message').removeClass('failure')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
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
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
}

const handleSuccessfulCreate = data => {
  $('#message').html('Lets play again')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('handleSuccessfulCreate ran. Data is :')
}

const failure = data => {
  $('#message').html('Oops, something went wrong, please try again')
  $('#message').css('color', 'red')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('#message').removeClass('success')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').removeClass('hidden')
  console.log('failure ran. Data is :')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  failure,
  handleSuccessfulCreate
}
