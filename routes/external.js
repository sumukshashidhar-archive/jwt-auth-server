const jw = require('./../controllers/jwt-microservice')
module.exports = (app) => {
    app.post('/api/authenticate/', (req, res)=> {
        // first check if the token exists  
        if (req.body.token !== null && req.body.token !== undefined) {
            
        }
        else {
            res.status(401).json({
                "message":"Please supply authentication token"
            })
        }
    })
}