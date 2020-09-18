module.exports = (app) => {

	app.post('/login', async function(req, res) {
        user.findOne({username:req.body.username}, (err, obj) => {
            if(err) {
                console.error(err)
            }
            else{
                if (obj!==undefined && obj !== null) {
                    
                }
            }
        })
    })
    
}
