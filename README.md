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

Both of these can be created using the /register route. However, the following parameters have to be supplied.

```
@params
username - the username / id of the device / admin - string
password - the password of the device / admin - string
role - can be admin / device - string
creation_password - the password required to create the user - string
```

There are two different passwords specified, meant for different access levels in the .env file

1. ADMIN_CREATION_PASSWORD
2. DEVICE_CREATION_PASSWORD

The admin creation password can be used to create a device, but not vice versa.

All the data supplied must be form data.


# Endpoints

## GET /
Returns `status:200` and a `message` if the server is running without any errors

## GET /key
Returns the public key used to encrypt the current JWT. 

## POST /register

```
@params
username - the username / id of the device / admin - string
password - the password of the device / admin - string
role - can be admin / device - string
creation_password - the password required to create the user - string

@return
status:200 if successful
```

Registers an admin or device with the Sigmoid Auth Service. 
Returns 200 if the registration succeeds. 

## POST /login
```
@params
username - string
password - string
```
Logs a user in. Returns a JWT token if successful, 403 if not.


## POST /api/authenticate

```
@params
token - JWT token signed by the Sigmoid Authentication Service - string

@returns
Status 200. and JWT claims if all is successful
```
