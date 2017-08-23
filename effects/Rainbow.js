/**
 * PixelNode_Effect_Rainbow
 *
 * Ported fadecandy example
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
function PixelNode_Effect_Rainbow(options,pixelData) {
  var self = this;
  PixelNode_Effect_Rainbow.super_.call(self, options, pixelData);
  self.className = "PixelNode_Effect_Rainbow";
  self.public_dir = __dirname;
}

// class inheritance
util.inherits(PixelNode_Effect_Rainbow, PixelNode_Effect);

// module export
module.exports = PixelNode_Effect_Rainbow;


/* Variables
 * ==================================================================================================================== */

PixelNode_Effect_Rainbow.prototype.n = 1;
PixelNode_Effect.prototype.default_options = {
	scale: 1,
	speed: 100
}


/* Overridden Methods
 * ==================================================================================================================== */

// init effect – override
PixelNode_Effect_Rainbow.prototype.init = function() {
	console.log("Init Effect Rainbow".grey);
}

// draw effect on target
PixelNode_Effect_Rainbow.prototype.drawTarget = function(target, output) {
	var self = this;
	var colors = [];

	if (target[0]) {
	colors = self.getRainbow(target[0].length, self.counter*self.options.speed/1000, self.options.scale);

	for (var ring = 0; ring < target.length;ring++) {
			self.fillArray(target[ring], colors);
	}
	}

}
