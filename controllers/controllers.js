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
    return res.json(`Welcome ${username}`);
}


const login = async (req, res) => {
    return res.redirect('profile');
}

// const logout = async (req, res) => {
//     console.log('logged out')
//     req.logout();
//     return res.redirect('home');
// }

const logout = async (req, res, next) => {
    console.log('logout controller')
    req.logout(function (err) {
        if (err) { 
            console.log(err)
            return next(err)
        }
        else {
            console.log('redirecting')
            return res.redirect('home')
        }
    })
}

// Query database with findOne
// If there is an error, call next with the error
// If a user is returned, redirect back to home
// If a user is not found and no errors occur, then insertOne into the database with the username and password. As long as no errors occur there, call next to go to step 2, authenticating the new user, which you already wrote the logic for in your POST / login route.

const register = async (req, res, next) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).json({msg: 'Please provide username and password'})
    }

    try {
        let user = await User.findOne({ username })
        if (user) res.json({msg: 'You already have an account please try logging in'});
        else {
            user = await User.create(req.body)
            const {username, _id} = user
            res.status(201).json({user: {username, _id}})
        }
    } catch (error) {
        next(error)
    }

}

module.exports = {home, profile, login, logout, register}