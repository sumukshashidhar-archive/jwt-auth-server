const user  = require("./../models/user")
const hashing = require("./bcryptService")
const conflict = require("./conflictCheckService")
module.exports = {
    makeUser: async function(email, password, role) {
        return new Promise((resolve, reject) => {
            // then check if the user already exists using a function
            const isExisting = await conflict.checkUser(email);
            if(isExisting) {
                // if the function returns true, hash the password, and create the user
                const hashedPassword = await hashing.hashPassword(password);
                const newUser = new user({
                    email:email,
                    password:hashedPassword,
                    role:role
                })
                // save the user in mongoDB
                newUser.save(function(err, obj) {
                    if(err) {
                        console.error(err)
                        reject(err);
                    }
                    else {
                        console.debug(obj)
                        resolve(obj);
                    }
                })
            }

            else {
                // if the function returns false, it means that the user already exists.
                // resolve false here
                resolve(false)
            }
        })
    }
}