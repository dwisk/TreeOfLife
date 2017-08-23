/**
 * PixelNode_Effect_Direction
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
PixelNode_Effect = require('../node_modules/pixelnode/lib/PixelNode_Effect.js');

// define the Student class
function PixelNode_Effect_Direction(options,pixelData) {
  var self = this;
  PixelNode_Effect_Direction.super_.call(self, options, pixelData);
  self.className = "PixelNode_Effect_Direction";
  self.public_dir = __dirname;
}

// class inheritance
util.inherits(PixelNode_Effect_Direction, PixelNode_Effect);

// module export
module.exports = PixelNode_Effect_Direction;


/* Variables
 * ==================================================================================================================== */

PixelNode_Effect_Direction.prototype.default_options = {
 	hue: 0,
 	saturation: 100,
 	value: 100
}
PixelNode_Effect_Direction.prototype.colorSelect = false;
PixelNode_Effect_Direction.prototype.hueSelect = 0;
PixelNode_Effect_Direction.prototype.activeOutput = "none";


/* Overridden Methods
 * ==================================================================================================================== */

// init effect – override
PixelNode_Effect_Direction.prototype.init = function() {
	console.log("Init Effect TwoColor".grey);
}


var lastTouches = [];

// draw effect on target
PixelNode_Effect_Direction.prototype.drawTarget = function(target, output) {
	var self = this;

	var c1, c2;

	// get color 1
  var millis = new Date().getTime();
  var t = millis * 0.005;
  var f = (75 + 25 * Math.sin(t))/100*0.8;
  var c = self.getColor(["inputs","rgb","color_left"]);;
	c1 = [c[0]*f,c[1]*f,c[2]*f];//self.getColor(["inputs","rgb","color_left"]);

	// get color 2
	c2 = self.getColor(["inputs","rgb","color_right"], {
		dimmer: 0.5,
		offset: 15
	});

	//console.log(c1, c2);


	for (var ring = 0; ring < target.length;ring++) {
		for (var pixel = 0; pixel < target[ring].length; pixel++) {
			if (output == self.activeOutput) {
				target[ring][pixel] = c1;
			} else {
				target[ring][pixel] = c2;
			}
		}
	}
}
