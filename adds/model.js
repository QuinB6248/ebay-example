const Sequelize = require('sequelize')
const sequelize = require('../db')


const Add = sequelize.define('adds', {
  title: {
    type: Sequelize.STRING,
    field: 'titel',
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
  },
  picture: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.DECIMAL,
  },
  emailaddres: {
    type: Sequelize.STRING,
  },
  phonenumber: {
    type: Sequelize.INTEGER,
  }
})


module.exports = Add

