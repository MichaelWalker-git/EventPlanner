const Sequelize = require('sequelize');
const config    = require('./config');
const db        = new Sequelize(config.uri);

db
  .authenticate()
  .then(success => console.log('Sequelize connection has been established successfully.'))
  .catch(err => console.log('Unable to connect to Sequelize database:', err));

/* ------------------- USER ------------------- */
const User = db.define('User', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      len: [1, 255]
    }
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bio: {
    type: Sequelize.TEXT,
    allowNull: true
  },
});


/* ------------------- EVENT ------------------- */
const Todo = db.define('Todo',
  {
    event: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'Events',
    timestamps: true
  }
);

/* ------------------- ASSOCIATIONS ------------------- */
User.hasMany(Event);

// db.sync({ force: true }).then(() => console.log('Models synced'));

module.exports = {
  User,
  Todo
};
