/**
 * Example
 *
 * --------------------------------------------------------------------------------------------------------------------
 *
 * @author Amely Kling <mail@dwi.sk>
 *
 */

process.env.NODE_ENV = 'production';

/* Includes
 * -------------------------------------------------------------------------------------------------------------------- */

var PixelNode = require('pixelnode');
//var b = require('bonescript');


/* Config
 * -------------------------------------------------------------------------------------------------------------------- */

new PixelNode({
	config: {
		"title": "TreeOfLife",
		"inputMode": "server",

		"webServer": {
			"start": false,
			"port": 3001
		},

		"gameManager": {
			"idletime": 20 * 60
		},

		"sound": {
			enabled: false,
			dir: "sounds"
		},

		// DRIVERS ----------------------------------------------------------------------------------------------------

		"pixelDrivers": [
			{
				"module": "pixelnode-driver-pixelpusher",
				"delay": 25,
				"dimmer": 1
			}
		],


		// EFFECTS ----------------------------------------------------------------------------------------------------

		"effects": PixelNode.requireFile("effects.js"),
		"after_effects": [
		],


		// INPUTS ----------------------------------------------------------------------------------------------------

		inputs: [
			{
				"name": "socketclient",
				"module": "node_modules/pixelnode/inputs/PixelNode_Input_WebSocket_Client.js",
				"server": "http://192.168.3.25:3001"
			}
		],


		// FONTS -----------------------------------------------------------------------------------------------------

		fonts: [],


		// GAMES  ----------------------------------------------------------------------------------------------------
		"games": PixelNode.requireFile("games.json"),


	},

	mapping: "mapping/dome_mapping.json"
});
