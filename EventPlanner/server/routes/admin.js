const router     = require('express').Router();
const path       = require('path');
const controller = require('../controllers/admin');

/* ------------------- TO DO LIST ------------------- */
router.get('/admin/user/events', controller.events.fetchAll);
router.post('/admin/user/events', controller.events.add);
router.delete('/admin/user/events/:eventId', controller.events.delete);

/* ------------------- USER SIGNUP + LOGIN ------------------- */
router.post('/admin/user/signup', controller.auth.signUp);
router.post('/admin/user/signin', controller.auth.signIn);

/* 404 Redirection */
router.get('*', (req, res) => res.sendStatus(404));

module.exports = router;
