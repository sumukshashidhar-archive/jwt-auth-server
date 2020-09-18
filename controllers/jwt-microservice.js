const jwt = require("jsonwebtoken")
const fs = require("fs")
const path = require("path")

const publicKeyPath = path.join(__dirname, './../keys/private.key');
const privateKeyPath = path.join(__dirname, './../keys/public.key');

// key imports
const publicKEY = fs.readFileSync(publicKeyPath, "utf-8")
const privateKEY = fs.readFileSync(privateKeyPath, "utf-8")

// options
const jENV = require("./../config/tokenOptions")

module.exports = {
    verification: function(token) {
        jwt.verify(token, publicKEY, jENV.verifyOptions, function(err, decodedToken) {
            if(err){
                console.error(err)
            }
            else {
                console.debug(decodedToken)
            }
        })
    },

    signing: function(email) {
        return jwt.sign({email:email}, privateKEY, jENV.signOptions);
    }
}