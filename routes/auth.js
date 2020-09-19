var password_module = require("../controllers/auth-microservice")
const registration = require("./../controllers/registration-service")
const user = require("./../models/user")
const tokenms = require("./../controllers/jwt-microservice")
module.exports = (app) => {

	app.post('/login', async function(req, res) {
        user.findOne({username:req.body.username}, (err, obj) => {
            if(err) {
                console.error(err)
            }
            else{
                if (obj!==undefined && obj !== null) {
                    const resp = password_module.pass_validate(req.body.password, obj["password"]);
                    if(resp) {
                        // at this stage, we have successfully authenticated the user
                        res.json({
                            "status":200,
                            "token":tokenms.signing(obj["username"], obj["role"])
                        })
                    }
                    else{
                        res.json({
                            "status":403, 
                            "message":"Password Validation Failed"
                        })
                    }
                }
                else {
                    console.log(obj)
                    res.json({
                        "status":404,
                        "message":"This user was not found"
                    })
                }
            }
        })
    }), 


    app.post('/register', async function(req, res) {
        if(req.body.creation_password === 'secret' && req.body.role==='admin') {
            const response = await registration.makeUser(req.body.username, req.body.password, req.body.role);
            if(response){
                res.json({
                    "message":"Successfully Created the User"
                })
                console.info("Created the user")
            }
            else{ 
                res.status(409).json({
                    "message":"Did not create the user"
                })
            }
        }
        else if((req.body.creation_password === 'someothersecret'||req.body.creation_password === 'secret') && req.body.role==='device') {
            // this is for registration of devices
            const response = await registration.makeUser(req.body.username, req.body.password, req.body.role);
            if(response){
                res.json({
                    "status":200,   
                    "message":"Successfully Created the User"
                })
                console.info("Created the user")
            }
            else{ 
                res.json({
                    "status":500,
                    "message":"Did not create the user"
                })
            }
        }
        else {
            res.status(403).json({
                "message":"There was no creation password specified for the current user or the creation password for a different role or the creation password was wrong"
            })
        }

        console.log(req.body)
    })
    
}
