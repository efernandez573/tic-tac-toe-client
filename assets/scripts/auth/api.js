'use strict'
const config = require('../config.js')
const store = require('../store.js')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrls + '/sign-up',
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrls + '/sign-in',
    method: 'POST',
    data
  })
}
const signOut = function (data) {
  return $.ajax({
    url: config.apiUrls + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrls + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const createGame = function (data) {
  return $.ajax({
    url: config.apiUrls + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const Stats = function () {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createGame,
  Stats
}
