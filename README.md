# passport-local-auth-strategy

`passport-local-auth-strategy` lets you authenticate using a username and password in your Node.js application

## Why?
Passport is Express-compatible authentication middleware for Node.js. Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as strategies. Passport does not mount routes or assume any particular database schema, which maximizes flexibility and allows application-level decisions to be made by the developer. 

By plugging into Passport, local authentication can be easily and unobtrusively integrated into any application or framework that supports Connect-style middleware, including Express.


## ⚙️ Installation

- Open CMD
  
- Change directory to desktop

  `cd desktop`
   
- Clone repository

  `git clone git@github.com:backendkolawole/passport-local-auth-strategy.git`

- Change the current directory

  `cd passport-local-auth-strategy.git`
  
- Install packages

  `npm install`

- Create a .env file in the root directory

  - Set up the `MONGO_URI` variable equal to the DB connection string
  - Set up the `PORT` variable
  - Set up `SESSION_SECRET` in .env file

> [!IMPORTANT]
>  `SESSION_SECRET` is the secret used to sign the session ID cookie (like a string or a Buffer).

- Run the server

  `npm start`
  
## features
`express-session` is a Node.js module available through the npm registry. 

## Usage 
The API is simple: you provide Passport with a request to authenticate, and Passport provides hooks for controlling what occurs when authentication succeeds or fails.


## Authenticate Requests
Use passport.authenticate(), specifying the 'local' strategy, to authenticate requests.

For example, as route middleware in an Express application:

```
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  })

```
