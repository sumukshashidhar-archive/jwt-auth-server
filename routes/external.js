const { response } = require('express')
const jw = require('./../controllers/jwt-microservice')
module.exports = (app) => {
    app.post('/api/authenticate/', async (req, res)=> {
        // first check if the token exists
        if (req.body.token !== null && req.body.token !== undefined && req.body.token !== '') {
            // there is a token supplies, pass it to jwtms
            var response = await jw.verification(req.body.token)
            if (response !== false) {
                // now we have a valid, decoded response, we can return it to the user
                res.json( {
                    "decodedToken":response
                })
            }
			else{
				res.status(403).json({"message":"Invalid Token and Signature"})
			}
        }
        else {
            res.status(401).json({
                "message":"Please supply authentication token"
            })
        }
    })
}
