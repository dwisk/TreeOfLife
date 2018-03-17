/**
 * PixelNode_Effect_Fire
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
PixelNode_Effect = require('../lib/PixelNode_Effect.js');

// define the Student class
function PixelNode_Effect_Fire(options,pixelData) {
  var self = this;
  PixelNode_Effect_Fire.super_.call(self, options, pixelData);
  this.className = "PixelNode_Effect_Fire";
  self.public_dir = __dirname;
}

// class inheritance
util.inherits(PixelNode_Effect_Fire, PixelNode_Effect);

// module export
module.exports = PixelNode_Effect_Fire;


/* Variables
 * ==================================================================================================================== */

 PixelNode_Effect_Fire.prototype.default_options = {
 	scale: 1,
 	speed: 0.5
 }
 PixelNode_Effect_Fire.prototype.height = 1
 PixelNode_Effect_Fire.prototype.intensity = []

/* Overridden Methods
 * ==================================================================================================================== */

// init effect – override
PixelNode_Effect_Fire.prototype.init = function() {
	console.log("Init Effect Fire".grey);
}

// reset effect – override
PixelNode_Effect_Fire.prototype.reset = function() {
	// manually init targets (otherwise just happening after initial init)
	this.initTargets();
}

// init target – override
PixelNode_Effect_Fire.prototype.initTarget = function(target, output, target_name) {
	var self = this;
	target_name = target_name.replace(".", "_");

	for (var ring = 0; ring < target.length;ring++) {
		self.intensity[ring] = Math.random(1)*0.1+0.9;
	}

}

// draw effect on target
PixelNode_Effect_Fire.prototype.drawTarget = function(target) {
	var self = this;
	var millis = new Date().getTime();

	for (var ring = 0; ring < target.length;ring++) {
    flicker = Math.random(1)*0.5 + 0.5;
		tmp_height = self.intensity[ring] * flicker;

		if (self.intensity[ring] == undefined) { self.intensity[ring] = Math.random(1)*0.1+0.9}

		for (var pixel = 0; pixel < target[ring].length; pixel++) {
      var red = 0;
      var green = 0;
      var blue = 0;
      if (target[ring].length - target[ring].length * tmp_height*0.9< pixel) {
        red = 225;
				height = target[ring].length;
        green = 255 * (pixel -  (height -  height * tmp_height*0.9)) / (height * tmp_height*0.9);

        if (green < 0 || green > 255) { red = green = blue = 0};
			}
      else
      if (target[ring].length - target[ring].length * tmp_height*0.8< pixel) {
        red = 196;
				height = target[ring].length;
        green = 196 * (pixel -  (height -  height * tmp_height*0.8)) / (height * tmp_height*0.8);

        if (green < 0 || green > 196) { red = green = blue = 0};
			}
      else
      if (target[ring].length - target[ring].length * tmp_height< pixel) {
        red = 128;
				height = target[ring].length;
        green = 128 * (pixel -  (height -  height * tmp_height)) / (height * tmp_height);

        if (green < 0 || green > 128) { red = green = blue = 0};
			}
      // if (target[ring].length - target[ring].length * tmp_height/4*2 < pixel) {
      //   red = 196;
      //   green = 255 * ((target[ring].length * tmp_height)/pixel);
			// }
      // else
      // if (target[ring].length - target[ring].length * tmp_height/4*3 < pixel) {
			// 	red = 196;
      //   green = 196 * ((target[ring].length * tmp_height)/pixel);
			// }
      // else
      // if (target[ring].length - target[ring].length * tmp_height < pixel) {
			// 	red = 128;
			// 	green = 128* (pixel  / target[ring].length * tmp_height);
			// }



      // else
      // if (target[ring].length * tmp_height < pixel-(2*self.options.scale)) {
			// 	red = 64 * tmp_height;
			// 	green = 64 * (pixel  / target[ring].length) * tmp_height;
			// }
      // else {
			// 	red = 32;
			// 	green = 0;
			// }

			//red = red * tmp_height*1.25;
			//green = green * tmp_height *0.75;
			//if (green > red) green = red;



			target[ring][pixel] = [red, green, blue];

		}

		if (tmp_height >= 0.1) {
			self.intensity[ring] -= 0.001 * self.options.speed * (Math.random(1)*0.2 + 0.8);
		}
	}



}
