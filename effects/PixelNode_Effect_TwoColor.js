/**
 * PixelNode_Effect_TwoColor
 *
 * --------------------------------------------------------------------------------------------------------------------
 *
 * @author Amely Kling <mail@dwi.sk>
 *
 */

/* Includes
 * ==================================================================================================================== */

var util = require("util");

/* Class Constructor
 * ==================================================================================================================== */

// extending Effect
PixelNode_Effect = require('../lib/PixelNode_Effect.js');

// define the Student class
function PixelNode_Effect_TwoColor(options,pixelData) {
  var self = this;
  PixelNode_Effect_TwoColor.super_.call(self, options, pixelData);
  self.className = "PixelNode_Effect_TwoColor";
  self.public_dir = __dirname;
}

// class inheritance
util.inherits(PixelNode_Effect_TwoColor, PixelNode_Effect);

// module export
module.exports = PixelNode_Effect_TwoColor;


/* Variables
 * ==================================================================================================================== */

PixelNode_Effect_TwoColor.prototype.default_options = {
 	hue: 0,
 	saturation: 100,
 	value: 100
}
PixelNode_Effect_TwoColor.prototype.colorSelect = false;
PixelNode_Effect_TwoColor.prototype.hueSelect = 0;


/* Overridden Methods
 * ==================================================================================================================== */

// init effect – override
PixelNode_Effect_TwoColor.prototype.init = function() {
	console.log("Init Effect TwoColor".grey);
}


var lastTouches = [];

// draw effect on target
PixelNode_Effect_TwoColor.prototype.drawTarget = function(target, output) {
	var self = this;

	var c, c1, c2;

	// get color 1
	c1 = self.getColor(["inputs","rgb","color_left"]);

	// get color 2
	c2 = self.getColor(["inputs","rgb","color_right"], {
		dimmer: 0.5,
		offset: 90
	});

	//console.log(c1, c2);


	for (var ring = 0; ring < target.length;ring++) {
		for (var pixel = 0; pixel < target[ring].length; pixel++) {
			if (output == "color1") {
				target[ring][pixel] = c1;
			} else if (output == "color2") {
				target[ring][pixel] = c2;
			} else if (output == "both") {
				if (global.pixelNode.data.fastGet(["inputs","buttons","btn_"+ring])) {
					target[ring][pixel] = c1;
				} else {
					target[ring][pixel] = c2;
				}
			} else {
				target[ring][pixel] = [0,0,0];
			}
		}
	}
}
