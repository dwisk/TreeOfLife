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
				"module": "./drivers/sound.js",
				"delay": 25,
				"dimmer": 1
			}
		],


		// EFFECTS ----------------------------------------------------------------------------------------------------

		"effects": PixelNode.requireFile("effects_sound.js"),
		"after_effects": [
		],


		// INPUTS ----------------------------------------------------------------------------------------------------

		inputs: [
			{
				"name": "socketclient",
				"module": "node_modules/pixelnode/inputs/PixelNode_Input_WebSocket_Client.js",
				"server": "http://192.168.42.1:3001"
			}
		],


		// FONTS -----------------------------------------------------------------------------------------------------

		fonts: [],


		// GAMES  ----------------------------------------------------------------------------------------------------
		"games": PixelNode.requireFile("games.json"),


	},

	mapping: "mapping/null_mapping.js"
});


var soundTimeout = false;
global.pixelNode.data.on("changed_TouchSelect_effect", function(paths, effect) {
	if (effect.sound && soundTimeout == false) {
		soundTimeout = setTimeout(function() {
			console.log("Play Sound:".bold,effect.sound.file,"at volume:",effect.sound.volume);
			require('child_process').spawn('sh', ['sound.sh',effect.sound.file,effect.sound.volume], {stdio: 'inherit'});
			soundTimeout = false;
		},50);
	}
});
