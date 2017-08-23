/**
 * PixelNode_Game_TouchSelect
 *
 * Animation Game
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

// extending Game
PixelNode_Game = require('../node_modules/pixelnode/lib/PixelNode_Game.js');

// define the Student class
function PixelNode_Game_TouchSelect(options, effects) {
  var self = this;
  PixelNode_Game_TouchSelect.super_.call(self, options, effects);
  self.className = "PixelNode_Game_TouchSelect";
  self.public_dir = __dirname;
}

// class inheritance
util.inherits(PixelNode_Game_TouchSelect, PixelNode_Game);

// module export
module.exports = PixelNode_Game_TouchSelect;


/* Variables
 * ==================================================================================================================== */

 PixelNode_Game_TouchSelect.prototype.default_options = {
   defaultEffect: "Direction",
   forceDirection: true,
   initialDirection: 1,
   effects: [
     "Heartbeat",
     "Fire",
     "Rain",
     "RainBow",
    "RedBlue",
    "RainBowRings",
    "ColouredRain",
    // "Ray",
    "Glitter"
   ]
 }

PixelNode_Game_TouchSelect.prototype.effects = [];
PixelNode_Game_TouchSelect.prototype.effect = null;
PixelNode_Game_TouchSelect.prototype.defaultEffect = null;
PixelNode_Game_TouchSelect.prototype.afterEffect = null;

PixelNode_Game_TouchSelect.prototype.effectBranch = [];
PixelNode_Game_TouchSelect.prototype.doEffectBranch = [];
PixelNode_Game_TouchSelect.prototype.timeouts = [];
PixelNode_Game_TouchSelect.prototype.cleartimeouts = [];
PixelNode_Game_TouchSelect.prototype.locked = false;
PixelNode_Game_TouchSelect.prototype.activeBranch = -1;


/* Overridden Methods
 * ==================================================================================================================== */

// init effect – override
PixelNode_Game_TouchSelect.prototype.init = function() {
	console.log("Init Game TouchSelect".grey);
	var self = this;

	self.setEffectByName(self.options.defaultEffect);
  self.effectBranch[0] = self.getEffectByName("Branch0");
  self.effectBranch[1] = self.getEffectByName("Branch1");
  self.effectBranch[2] = self.getEffectByName("Branch2");
  self.effectBranch[3] = self.getEffectByName("Branch3");
  self.defaultEffect = self.getEffectByName(self.options.defaultEffect);

  if (self.options.forceDirection) {
    self.setActiveBranch(self.options.initialDirection);
  }

  if (self.options.afterEffect) {
    self.afterEffect = self.getEffectByName(self.options.afterEffect);
  }


	if (global.config.inputMode == "server") {
    global.pixelNode.data.on("changed_inputs_touch_touches", function(paths, value) {
      if(self.options.name == global.pixelNode.data.get("game.name")) {
        self.effectSelector.call(self);
      }
    });
	}
	// global.pixelNode.data.on("changed_TouchSelect_effect", function() {
	// 	if(self.options.name == global.pixelNode.data.get("game.name")) {
	// 		self.setEffectByName.call(self,global.pixelNode.data.get("TouchSelect.effect"));
	// 	}
	// });
	global.pixelNode.data.on("replaced", function() {
		if(self.options.name == global.pixelNode.data.get("game.name")) {
			self.setEffectByName.call(self,global.pixelNode.data.get("TouchSelect.effect"));
		}
	});
}

PixelNode_Game_TouchSelect.prototype.effectSelector = function() {
  var self = this;
  var touches = global.pixelNode.data.fastGet(["inputs","touch","touches"]);

  if (!self.locked) {
    if ((self.activeBranch == 0 || self.activeBranch == -1)) self.branchSelector(touches[10], 0, "Rain", 10000); // "Heartbeat"
    if ((self.activeBranch == 1 || self.activeBranch == -1)) self.branchSelector(touches[8], 1, "RainBowRings", 10000); // "Fire"
    if ((self.activeBranch == 2 || self.activeBranch == -1)) self.branchSelector(touches[9], 2, "Heartbeat", 10000); // "Rain"
    if ((self.activeBranch == 3 || self.activeBranch == -1)) self.branchSelector(touches[11], 3, "Fire", 10000); // "RainBowRings"
  }
  self.branchSelector(touches[8] && touches[9] && touches[10] && touches[11], -1, "ColouredRain", 20000);
}

PixelNode_Game_TouchSelect.prototype.branchSelector = function(touched, number, effect, duration) {
  var self = this;
  //self.doEffectBranch[number] = false;

  if (touched) { // branch3

    // self.setEffectByName("RainBowRings");
    if (self.timeouts[number] == null) {
      self.timeouts[number] = setTimeout(function() {
         self.setEffectByName(effect);
         if (self.options.forceDirection) {
           self.setActiveBranch(number+1);
         }
         self.locked = true;
         self.resetTimers();
         setTimeout(function() {
           self.locked = false;
           self.setEffectByName(self.options.defaultEffect);
           self.pixelDataOff();
         }, duration);
      }, 2000);
    }
    clearTimeout(self.cleartimeouts[number]);

    self.doEffectBranch[number] = true;
  } else if (self.timeouts[number] != null) {
    self.cleartimeouts[number] = setTimeout(function() {

        self.doEffectBranch[number] = false;
        self.pixelDataOff();
        clearTimeout(self.timeouts[number]);
        self.timeouts[number] = null;
    }, 250);

  }
}

PixelNode_Game_TouchSelect.prototype.resetTimers = function() {
  var self = this;

  clearTimeout(self.cleartimeouts[-1]);
  clearTimeout(self.cleartimeouts[0]);
  clearTimeout(self.cleartimeouts[1]);
  clearTimeout(self.cleartimeouts[2]);
  clearTimeout(self.cleartimeouts[3]);
  clearTimeout(self.timeouts[-1]);
  clearTimeout(self.timeouts[0]);
  clearTimeout(self.timeouts[1]);
  clearTimeout(self.timeouts[2]);
  clearTimeout(self.timeouts[3]);
  self.timeouts[-1] = null;
  self.timeouts[0] = null;
  self.timeouts[1] = null;
  self.timeouts[2] = null;
  self.timeouts[3] = null;
  self.doEffectBranch = [false, false,false,false];
}

PixelNode_Game_TouchSelect.prototype.setActiveBranch = function(number) {
  var self = this;
  self.activeBranch = number;
  if (self.activeBranch>3) self.activeBranch = 0;
  self.defaultEffect.activeOutput = "branch_"+self.activeBranch;
}

PixelNode_Game_TouchSelect.prototype.pixelDataOff = function() {
	var self = this;
	if (global.pixelNode.gameManager) {
		global.mapping.forEach(function(map) {
			global.pixelNode.gameManager.pixelData[map.name].mode = "off";
		});
	}
}

// draw effect – override this
PixelNode_Game_TouchSelect.prototype.draw = function() {
	var self = this;
	if (self.effect) self.effect.draw();

  if (!self.locked && self.doEffectBranch[0] && (self.activeBranch == 0 || self.activeBranch == -1)) self.effectBranch[0].draw();
  if (!self.locked && self.doEffectBranch[1] && (self.activeBranch == 1 || self.activeBranch == -1)) self.effectBranch[1].draw();
  if (!self.locked && self.doEffectBranch[2] && (self.activeBranch == 2 || self.activeBranch == -1)) self.effectBranch[2].draw();
  if (!self.locked && self.doEffectBranch[3] && (self.activeBranch == 3 || self.activeBranch == -1)) self.effectBranch[3].draw();
  if (self.afterEffect) self.afterEffect.draw();

}


PixelNode_Game_TouchSelect.prototype.getEffectByName = function(name) {
	var self = this;
	var effect = null;
	self.effects.forEach(function(fx) {
		if (fx.name == name) {
			effect = fx;
		}
	});
	return effect;
}
PixelNode_Game_TouchSelect.prototype.setEffectByName = function(name) {
	var self = this;

  if (!self.effect || self.effect.name != name) {
  	self.pixelDataOff();

  	self.effect = self.getEffectByName(name);

  	global.pixelNode.clock.reset();

  	if (self.effect != undefined && self.effect.reset != undefined)  {
  		self.effect.reset();
  	}

    if (this.effect) {
  	 console.log(("Changed Effect to " + this.effect.options.name.white + (" (" + this.effect.options.module + ")").grey).grey);
  	 global.pixelNode.data.set("TouchSelect.effect", this.effect.options);
    }
  }
};
PixelNode_Game_TouchSelect.prototype.setAfterEffectByName = function(name) {
	var self = this;

  if (!self.afterEffect || self.afterEffect.name != name) {


  	self.afterEffect = self.getEffectByName(name);

  	// global.pixelNode.clock.reset();

  	if (self.afterEffect != undefined && self.afterEffect.reset != undefined)  {
  		self.afterEffect.reset();
  	}

    if (this.afterEffect) {
  	 console.log(("Changed AfterEffect to " + this.effect.options.name.white + (" (" + this.effect.options.module + ")").grey).grey);
  	 global.pixelNode.data.set("TouchSelect.afterEffect", this.effect.options);
    }
  }
};
