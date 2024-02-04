# drf-ecommerce-api
## Motivation

### Goal
# Passport-local-authentication-strategy
Passport strategy for authenticating with a username and password. Lets you authenticate using a username and password in your Node.js application

Passport is Express-compatible authentication middleware for Node.js.

Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as strategies. Passport does not mount routes or assume any particular database schema, which maximizes flexibility and allows application-level decisions to be made by the developer. The API is simple: you provide Passport with a request to authenticate, and Passport provides hooks for controlling what occurs when authentication succeeds or fails.
By plugging into Passport, local authentication can be easily and unobtrusively integrated into any application or framework that supports Connect-style middleware, including Express.


⚙️ Installation

## Other usage examples
# Documentation

You can make a GET request to /api/v1/home. If the user is authenticated, the user will be redirected to api/v1/profile.

The GET request to api/v1/profile returns a JSON object with the username property.

Each element in the array returned from GET api/users is an object literal containing a user's username and _id.

You can POST to api/v1/loginto authenticate the user and be redirected to api/v1/profile.

You can make a GET request to api/v1/logout to log the user out.

You can make a POST request to api/v1/register to register the user.

# Setup
Clone the repo by running git clone git@github.com:backendkolawole/Passport-local-authentication-strategy.git

Create a .env file and set up the PORT variable 
Set up MONGO_URI connection string in .env file
Set up a session secret in .env file

run npm install

run npm start

## Closing and resources 
## Contact
## Contributing





