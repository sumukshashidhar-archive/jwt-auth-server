# jwt-auth-server
A simple authentication server for JSON web token delivery

# To run:
1. Copy the env.template file to .env
2. Change the secrets to your liking
3. Change the mongoDB connection string to your database
4. Specify the port and the IP that you want to run on.



# How - To's

## How do you create a user?
As part of zeta, there are two user roles that are currently defined

1. admin
2. device

Both of these can be created using the /register route. However, the following parameters have to be supplied
```
@params
username - the username / id of the device / admin
password - the password of the device / admin
role - can be admin / device
creation_password - the password required to create the user
```

There are two different passwords specified, meant for different access levels in the .env file

1. ADMIN_CREATION_PASSWORD
2. DEVICE_CREATION_PASSWORD




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
