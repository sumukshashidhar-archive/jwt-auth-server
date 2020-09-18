module.exports  = {
    issuer: "Sigmoid Authentication Service",
    signOptions: {
        issuer:  "Sigmoid Authentication Service",
        expiresIn:  "24h",
        algorithm:  "RS512"
    },
    verifyOptions: {
        issuer:  "Sigmoid Authentication Service",
        expiresIn:  "24h",
        algorithm:  ["RS512"]
       }
}