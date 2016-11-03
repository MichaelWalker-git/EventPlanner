const db           = require('../config/db');
const password     = require('../config/passwordTools.js');
const jsonWebToken = require('jsonwebtoken');

/* ------------------- TO DO LIST ------------------- */
const fetchAllEvents = (req, res) => {
  db.Event.findAll()
    .then((events) => {
      res.status(200).send(events);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

const addEvent = (req, res, event) => {
  db.Todo.create(event)
    .then((event) => {
      res.status(200).send(event);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

const deleteEvent = (req, res, eventId) => {
  console.log('Inside deleteTodo in model');
  db.Event.findById(eventId)
    .then((event) => {
      res.status(200).send(event);
      todo.destroy();
    })
    .catch((err) => {
      res.status(500).send('Failed to delete event item:', event);
    });
};

exports.todos = {
  fetchAll: fetchAllEvents,
  add: addEvent,
  delete: deleteEvent,
}

/*------------------- SIGN IN/ SIGN UP ------------------- */
const signIn = (req, res, loginUsername, loginEmail, loginPassword) => {
  db.User.findOne({
    where:{
      email    : loginEmail
    },
    attributes: ['id', 'firstName', 'lastName', 'email', 'password', 'bio']
  })
    .then( foundUser => {
      if (!foundUser) res.status(401).send('User not found.');
      else {
        password.checkPassword(loginPassword, foundUser.password)
          .then(successfulMatch => {
            const token = jsonWebToken.sign(foundUser.dataValues, 'events');
            res.status(200).json({
              id: foundUser.id,
              firstName: foundUser.firstName,
              email: foundUser.email,
              username: foundUser.username,
              token: token,
            // });
          })
          .catch(error => {
            console.log("Password hashing error: ", error);
            res.status(500).send(error);
          })
      }
    })
    .catch( err => {
      console.log('Line 84 Error:', err);
      res.status(500).send("Password do not match", err);
    });
};

const signUp = (req, res, newUser) => {
  db.User.create(newUser)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};



exports.auth = {
  signUp: signUp,
  signIn: signIn,
}
