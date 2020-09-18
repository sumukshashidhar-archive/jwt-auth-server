var password_module = require("../controllers/auth-microservice")
const registration = require("./../controllers/registration-service")
var user = require("./../models/user")
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
                    }
                    else{
                        res.json({
                            "status":403, 
                            "message":"Password Validation Failed"
                        })
                    }
                }
                else {
                    res.json({
                        "status":404,
                        "message":"This user was not found"
                    })
                }
            }
        })
    }), 


    app.post('/register', async function(req, res) {
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
        console.log(req.body)
    })
    
}
