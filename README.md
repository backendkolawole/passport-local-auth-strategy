# passport-local-auth-strategy

`passport-local-auth-strategy` lets you authenticate using a username and password in your Node.js application

## Why?
Passport is Express-compatible authentication middleware for Node.js. Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as strategies. Passport does not mount routes or assume any particular database schema, which maximizes flexibility and allows application-level decisions to be made by the developer. 

By plugging into Passport, local authentication can be easily and unobtrusively integrated into any application or framework that supports Connect-style middleware, including Express.


## ⚙️ Installation

- Clone the repo

  `git clone git@github.com:backendkolawole/Passport-local-authentication-strategy.git`

- Create a .env file and set up the PORT variable
- Set up MONGO_URI connection string in .env file
- Set up a session secret in .env file
- run

  `npm install`
  
- run
  
  `npm start`
  
## Usage examples

The API is simple: you provide Passport with a request to authenticate, and Passport provides hooks for controlling what occurs when authentication succeeds or fails.

**GET /api/v1/home**. 
If the user is authenticated, the user will be redirected to api/v1/profile.

**GET api/v1/profile** 

Should return a JSON object with the username property.


**POST api/v1/login**

Should authenticate the user and be redirect to api/v1/profile.

**GET api/v1/logout**

Should log the user out.

**POST api/v1/register**
Should register the user.


## Contact



