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
			"start": true,
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
			"module": "pixelnode-driver-fadecandy",
			"address": "127.0.0.1",
			"port": 7890,
			"delay": 50,
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
				"name": "socketserver",
				"module": "node_modules/pixelnode/inputs/PixelNode_Input_WebSocket.js"
			}
			,
			{
				"name": "touch",
				"module": "pixelnode-input-mpr121",
				"crash_waittime": 1,
				"crash_cautious_lifetime": 20,
				"crash_cautious_waittime": 2,
				"i2c_bus": 1,
				"offset": 0,
				"verbose": true,
				"treshold_touch": 12,
				"treshold_release": 4

			}
		],


		// FONTS -----------------------------------------------------------------------------------------------------

		fonts: [],


		// GAMES  ----------------------------------------------------------------------------------------------------
		"games": PixelNode.requireFile("games.json"),


	},

	mapping: PixelNode.requireFile("./mapping/shrinemapping.js")
});
