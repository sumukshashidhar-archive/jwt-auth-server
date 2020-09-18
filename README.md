# jwt-auth-server
A simple authentication server for JSON web token delivery

# To run:
Make a new .env file, and add
```
mongoURI
```
as one of the env variables


# Endpoints

## GET /
Returns 200 if the server is running without any errors

## GET /key
Returns the public key for your verification purposes

## POST /register
```
@params
username - string
password - string
role - string
```
Registers a user or device with the Sigmoid Auth Service. Returns 200 if the registration succeeds. 

## POST /login
```
@params
username - string
password - string
```
Logs a user in. Returns a JWT token if successful, 403 if not. 
