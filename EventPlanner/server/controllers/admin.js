const model = require('../models/admin');

/* ------------------- EVENT ------------------- */
const fetchAllEvents = (req, res) => {
  const userId = req.params.userId;
  model.events.fetchAll(req, res, userId);
}

const addEvent = (req, res) => {
  const event = req.body;
  model.events.add(req, res, event);
};

const deleteEvent = (req, res) => {
  const eventId = req.params.eventId;
  model.todos.delete(req, res, todoId);
}

exports.todos = {
  fetchAll: fetchAllEvents,
  add: addEvent,
  delete: deleteEvent,
}

/* ------------------- SIGN IN / SIGN UP ------------------- */
const signIn = (req, res) => {
  const loginAttempt = req.body;

  loginUsername = loginAttempt.username;
  loginEmail = loginAttempt.email;
  loginPassword = loginAttempt.password;

  model.auth.signIn(req, res, loginUsername, loginEmail, loginPassword);
};

const signUp = (req, res) => {
    const newUser = {
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      bio: req.body.bio,
    };
  model.auth.signUp(req, res, newUser);
};



exports.auth = {
  signIn: signIn,
  signUp: signUp,
}
