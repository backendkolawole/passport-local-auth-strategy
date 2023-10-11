# Passport-local-authentication-strategy
Passport strategy for authenticating with a username and password. Lets you authenticate using a username and password in your Node.js application

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
