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
 	scale: 1,
  speed: 0.8
}
PixelNode_Effect_Direction.prototype.colorSelect = false;
PixelNode_Effect_Direction.prototype.hueSelect = 0;
PixelNode_Effect_Direction.prototype.activeOutput = "none";
PixelNode_Effect_Direction.prototype.activeId = -1;


/* Overridden Methods
 * ==================================================================================================================== */

// init effect – override
PixelNode_Effect_Direction.prototype.init = function() {
	console.log("Init Effect Direction".grey);
}


var lastTouches = [];

// draw effect on target
PixelNode_Effect_Direction.prototype.drawTarget = function(target, output) {
	var self = this;
  //
	// var c1, c2;
  //
	// // get color 1
  var millis = new Date().getTime();
  var t = millis * 0.002 * self.options.speed;
  var f = (50 + 50 * Math.sin(t+0.75))/100;
  // var c = self.getColor(["inputs","rgb","color_left"]);;
	// c1 = [c[0]*f,c[1]*f,c[2]*f];//self.getColor(["inputs","rgb","color_left"]);
  //
	// // get color 2
	// c2 = self.getColor(["inputs","rgb","color_right"], {
	// 	dimmer: 0.5,
	// 	offset: 15
	// });

	//console.log(c1, c2);

  var l = self.activeId - 1; if (l < 0) l = 3;
  var r = self.activeId + 1; if (r > 3) r = 0;


	for (var ring = 0; ring < target.length;ring++) {
		for (var pixel = 0; pixel < target[ring].length; pixel++) {
			if (output == self.activeOutput) {
          target[ring][pixel] = [255,255,255];
        } else if (output == "branch_" + l && self.activeId != -1) {
          var t2 = pixel / self.options.scale * 0.5 + t * -1;
          var pt = 0.25 + (pixel / target[ring].length) * 0.75;
          var v = 255*Math.sin(t2)*pt;
          target[ring][pixel] = [v,v,v];
        } else if (output == "branch_" + r && self.activeId != -1) {
          var t2 = pixel / self.options.scale * 0.5 + t;
          var pt = 0.25 + ((target[ring].length-pixel) / target[ring].length) * 0.75;
          var v = 255*Math.sin(t2)*pt;
          target[ring][pixel] = [v,v,v];
			} else  {
				  target[ring][pixel] = [0,0,0];
			}
		}
	}
}
