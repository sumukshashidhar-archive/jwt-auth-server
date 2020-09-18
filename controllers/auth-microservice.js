const bcrypt = require("bcrypt")
module.exports = {


    pass_validate: (plaintext, hashed) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(plaintext, hashed, (err, response)=> {
                if(err) {
                    console.error(err);
                    reject(err);
                }
                else{
                    resolve(response)
                }
            })
        })
    }
}