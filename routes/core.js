module.exports = (app) => {

	app.get('/', async function(req, res) {
		console.debug("Hit the homepage");
		res.json({
			"status":500,
			"message":"internal-error"
		})
	})

	app.get('/error', async function(req, res) {
		console.error("Hit the internal error page")
		res.json({
			"status":500,
			"message":"internal-error"
		})
	})
	
}
