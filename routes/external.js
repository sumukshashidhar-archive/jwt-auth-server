const jw = require('./../controllers/jwt-microservice')
module.exports = (app) => {
    app.post('/api/authenticate/', (req, res)=> {
        // first check if the token exists  
        if (req.body.token !== null && req.body.token !== undefined) {
            // there is a token supplies, pass it to jwtms
            res = jw.verification(req.body.token)
            if (res !== False) {
                // now we have a valid, decoded response, we can return it to the user
                res.json( {
                    "decodedToken":res
                })
            }
        }
        else {
            res.status(401).json({
                "message":"Please supply authentication token"
            })
        }
    })
}