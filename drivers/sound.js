/**
 * PixelNode_Driver_WebSimulator
 *
 * LED Driver for WebInterface
 *
 * --------------------------------------------------------------------------------------------------------------------
 *
 * @author Amely Kling <mail@dwi.sk>
 *
 */


/* Node Includes
 * ==================================================================================================================== */

var util = require("util");
var colors = require('colors');


/* Class Constructor
 * ==================================================================================================================== */

// extending PixelNode_Driver
PixelNode_Driver = require('pixelnode-driver');

// define the Student class
function PixelNode_Driver_WebSimulator(options,pixelData) {
  var self = this;
  PixelNode_Driver_WebSimulator.super_.call(self, options, pixelData);
  this.className = "PixelNode_Driver_WebSimulator";
}

// class inheritance
util.inherits(PixelNode_Driver_WebSimulator, PixelNode_Driver);

// module export
module.exports = PixelNode_Driver_WebSimulator;


/* Variables
 * ==================================================================================================================== */

PixelNode_Driver_WebSimulator.prototype.default_options = {
};
PixelNode_Driver_WebSimulator.prototype.client = {};
PixelNode_Driver_WebSimulator.prototype.pixels = [];
PixelNode_Driver_WebSimulator.prototype.sockets = [];


/* Methods
 * ==================================================================================================================== */

PixelNode_Driver_WebSimulator.prototype.init = function() {

	console.log("Init PixelDriver Sound".grey);
	var self = this;


};

// set's a pixel into pixels array
PixelNode_Driver_WebSimulator.prototype.setPixel = function(strip, id, r,g,b) {
	// if (!this.pixels[strip]) {
	// 	this.pixels[strip] = [];
	// }
	// this.pixels[strip][id] = [Math.floor(r),Math.floor(g),Math.floor(b)];
}

// sends pixels array via websocket
PixelNode_Driver_WebSimulator.prototype.sendPixels = function() {
	// var self = this;
	// self.sockets.forEach(function(socket) {
	// 	// just send pixels if socket is still connected
	// 	if(socket.connected) {
	// 		socket.emit('simulator_pixels', self.pixels);
  //
	// 	// otherwise remove socket from array
	// 	} else {
	// 		console.log(("WebSimulator disconnected ("+socket.conn.id+")").red);
	// 		self.sockets.splice(self.sockets.indexOf(socket),1);
	// 	}
	// });
}
