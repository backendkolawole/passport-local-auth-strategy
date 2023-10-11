require('dotenv').config();
require('./config/passport')
const express = require('express');
const session = require('express-session')
const conn = require('./config/connect');
const notFoundMiddleware = require('./middleware/not-found')
const app = express();
const router = require('./routes/routes')
const MongoStore = require('connect-mongo')(session);
const passport = require('passport')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionStore = new MongoStore({ mongooseConnection: conn, collection: 'sessions' });
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
  }
}))

app.use(passport.initialize())
app.use(passport.session())


app.use('/api/v1', router)
app.use(notFoundMiddleware)

const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await conn
    app.listen(PORT, () => console.log('Listening on port ' + PORT));
    
  } catch (error) {
    console.log(error)
  }
}

start()

