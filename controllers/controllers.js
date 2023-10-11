const conn = require('../config/connect')
const User = conn.models.User

const home = async (req, res) => {
    console.log('Hit the home route')
    if (req.isAuthenticated()) {
        console.log('authenticated')
        return res.redirect('profile');
    }
    else {
        console.log('Not authenticated')
        return res.json({
            title: 'Connected to Database',
            message: 'Please login'
        });
    }

}

const profile = async (req, res)=> {
    const {username} = req.user
    console.log('Hit the profile route')
    return res.json({ username});
}


const login = async (req, res) => {
    return res.redirect('profile');
}

const logout = async (req, res) => {
    console.log('logged out')
    req.logout();
    return res.redirect('home');
}

// Query database with findOne
// If there is an error, call next with the error
// If a user is returned, redirect back to home
// If a user is not found and no errors occur, then insertOne into the database with the username and password. As long as no errors occur there, call next to go to step 2, authenticating the new user, which you already wrote the logic for in your POST / login route.

const register = async (req, res, next) => {
    const { username } = req.body

    try {
        let user = await User.findOne({ username })
        if (user) res.redirect('profile');
        else {
            user = await User.create(req.body)
            res.status(201).json(user)
        }
    } catch (error) {
        next(error)
    }

}

module.exports = {home, profile, login, logout, register}