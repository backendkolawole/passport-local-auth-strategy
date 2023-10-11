const passport = require('passport')
const LocalStrategy = require('passport-local');
const conn = require('../config/connect')
const User = conn.models.User


const verifyCallback = async (username, password, done) => {
    try {
        const user =  await User.findOne({ username: username })
        console.log(`User ${username} attempted to log in.`);
        if (!user) return done(null, false);
        const isCorrect = await user.comparePasswords(password)
        if (isCorrect) return done(null, user);
        else return done(null, false);
    } catch (err) {
        return done(err)
    }
}


const strategy = new LocalStrategy(verifyCallback)
passport.use(strategy)


// Serialization and deserialization here...
passport.serializeUser((user, done) => {
    done(null, user._id);
})


passport.deserializeUser((userId, done) => {
    User.findById(userId).then((user) => {
        done(null, user)
    }).catch(err=> done(err)) 
});

