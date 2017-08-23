/**
 * PixelNode_Effect_Heartbeat
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
function PixelNode_Effect_Heartbeat(options,pixelData) {
  var self = this;
  PixelNode_Effect_Heartbeat.super_.call(self, options, pixelData);
  self.className = "PixelNode_Effect_Heartbeat";
  self.public_dir = __dirname;
}

// class inheritance
util.inherits(PixelNode_Effect_Heartbeat, PixelNode_Effect);

// module export
module.exports = PixelNode_Effect_Heartbeat;


/* Variables
 * ==================================================================================================================== */

PixelNode_Effect_Heartbeat.prototype.default_options = {
  dimmer: 1
}
PixelNode_Effect_Heartbeat.prototype.colorSelect = false;
PixelNode_Effect_Heartbeat.prototype.hueSelect = 0;


/* Overridden Methods
 * ==================================================================================================================== */

// init effect – override
PixelNode_Effect_Heartbeat.prototype.init = function() {
	console.log("Init Effect Heartbeat".grey);
}


var lastTouches = [];

// draw effect on target
PixelNode_Effect_Heartbeat.prototype.drawTarget = function(target, output) {
	var self = this;

  var red = self.getRed();

	for (var ring = 0; ring < target.length;ring++) {
    for (var pixel = 0; pixel < target[ring].length; pixel++) {
      target[ring][pixel] = [red,0,0];
    }
	}
}

PixelNode_Effect_Heartbeat.prototype.getRed = function() {
  var counter = global.pixelNode.clock.get();
  var f = 1.5;
  var t = (counter % (1000 * f)) / 1000 / f; // Zehntelsekunden
  var red = 100;
  if (t >= 0 && t < 0.2 ) {
    red = 100 * EasingFunctions.easeInOutCubic(t*5);
  } else if (t >= 0.2  && t < 0.4 ) {
    red = 100 - 60 * EasingFunctions.easeInOutCubic(t*5-1);
  } else if (t >= 0.4  && t < 0.6 ) {
    red = 40 + 40 * EasingFunctions.easeInOutCubic(t*5-2);
  } else if (t >= 0.6  && t < 0.8 ) {
    red = 80 - 80 * EasingFunctions.easeInOutCubic(t*5-3);
  } else {
    red = 0
  }

  return (100 + Math.round(red*1.55))* this.options.dimmer;
}


/* Easing
 * ==================================================================================================================== */

EasingFunctions = {
  // no easing, no acceleration
  linear: function (t) { return t },
  // accelerating from zero velocity
  easeInQuad: function (t) { return t*t },
  // decelerating to zero velocity
  easeOutQuad: function (t) { return t*(2-t) },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
  // accelerating from zero velocity
  easeInCubic: function (t) { return t*t*t },
  // decelerating to zero velocity
  easeOutCubic: function (t) { return (--t)*t*t+1 },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
  // accelerating from zero velocity
  easeInQuart: function (t) { return t*t*t*t },
  // decelerating to zero velocity
  easeOutQuart: function (t) { return 1-(--t)*t*t*t },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
  // accelerating from zero velocity
  easeInQuint: function (t) { return t*t*t*t*t },
  // decelerating to zero velocity
  easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
  // acceleration until halfway, then deceleration
  easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
}
