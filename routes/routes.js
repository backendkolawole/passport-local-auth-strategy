const express = require('express')
const router = express.Router()
const { home, profile, logout, register } = require('../controllers/controllers')
const ensureAuthenticated = require('../middleware/authEnsure')
const passport = require('passport');

router.route('/home').get(home);
router.route('/profile').get(ensureAuthenticated, profile)
router.route('/login').post(passport.authenticate('local', { failureRedirect: 'home', successRedirect: 'profile' }))
router.route('/logout').get(logout);
router.route('/register').post(register, passport.authenticate('local', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/profile');
});



module.exports = router

