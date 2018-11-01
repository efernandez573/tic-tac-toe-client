const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
}
const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed In successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess ran. Data is :', data)
}
const signInFailure = error => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  $('#message').text('Signed Out successfully')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess ran. Data is :')
}
const signOutFailure = error => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess
}
