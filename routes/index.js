var 
	express = require('express')
	, router = express.Router()
	, config = require('../config.json')
;

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index.hbs',  getConfigOptions())
});

/* GET static pages */
router.get('/:page', function(req, res) {
	res.render(req.params.page + '.hbs', getConfigOptions())
}); 

/**
 * Read the config settings from config.json and prepare 
 * the template variables object expected by the handlebars templates
 * 
 * @return {Object} The template variables
 */
function getConfigOptions() {
	return {
		appName: config.app_name,
		title: config.app_title, 
		contactEmail: config.contact_email,
		aboutText: config.about_text,
		googleMapsApiKey: config.google.mapsApiKey, 
		bodyClass: config.body_class,
		startLat: config.map.start_lat, 
		startLong: config.map.start_long, 
		startZoom: config.map.start_zoom, 
		backgroundColor: config.app_background_color
	}; 
}

module.exports = router;
