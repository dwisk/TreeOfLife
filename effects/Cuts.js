/**
 * PixelNode_Effect_Cuts
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
function PixelNode_Effect_Cuts(options,pixelData) {
  var self = this;
  PixelNode_Effect_Cuts.super_.call(self, options, pixelData);
  self.className = "PixelNode_Effect_Cuts";
  self.public_dir = __dirname;
}

// class inheritance
util.inherits(PixelNode_Effect_Cuts, PixelNode_Effect);

// module export
module.exports = PixelNode_Effect_Cuts;


/* Variables
 * ==================================================================================================================== */

PixelNode_Effect_Cuts.prototype.default_options = {
 	hue: 0,
 	saturation: 100,
 	value: 100
}
PixelNode_Effect_Cuts.prototype.colorSelect = false;
PixelNode_Effect_Cuts.prototype.hueSelect = 0;


/* Overridden Methods
 * ==================================================================================================================== */

// init effect – override
PixelNode_Effect_Cuts.prototype.init = function() {
	console.log("Init Effect Cuts".grey);
}


var lastTouches = [];

// draw effect on target
PixelNode_Effect_Cuts.prototype.drawTarget = function(target, output) {
	var self = this;

	for (var ring = 0; ring < target.length;ring++) {
    for (var pixel = 0; pixel < target[ring].length; pixel++) {
      target[ring][pixel] = [255,255,0];
    }
    switch(ring) {
      case 1:
      case 3:
      case 5:
      case 7:
        for (var pixel = 0; pixel < 25; pixel++) {
          target[ring][pixel] = [0,255,0];
        }
        for (var pixel = 25; pixel < 25+8; pixel++) {
          target[ring][pixel] = [255,0,0];
        }
        for (var pixel = 25+8; pixel < 25+8+9; pixel++) {
          target[ring][pixel] = [0,0,255];
        }
        for (var pixel = 25+8+9; pixel < 25+8+9+9; pixel++) {
          target[ring][pixel] = [255,0,0];
        }

        for (var pixel = 25+8+9+9; pixel < 64; pixel++) {
          target[ring][pixel] = [0,255,0];
        }
        break;
        case 0:
        case 2:
        case 4:
        case 6:
        // for (var pixel = 0; pixel <= 12; pixel++) {
        //   target[ring][pixel] = [0,255,0];
        // }
        for (var pixel = 0; pixel <= 13; pixel++) {
          target[ring][pixel] = [255,0,0];
        }
        for (var pixel = 14; pixel <= 28; pixel++) {
          target[ring][pixel] = [0,0,255];
        }
        for (var pixel = 29; pixel <= 50; pixel++) {
          target[ring][pixel] = [255,0,255];
        }
        for (var pixel = 51; pixel <= 63; pixel++) {
          target[ring][pixel] = [255,128,0];
        }
        break;
    }

	}
}
