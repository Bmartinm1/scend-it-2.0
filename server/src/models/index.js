// include all of your models here using CommonJS requires
const User = require("./User.js")
const Crag = require('./Crag')
const Climb = require('./Climb')
const Attempt = require('./Attempt')

module.exports = {
  User,
  Crag,
  Climb,
  Attempt
};
