module.exports = [

{
"name": "Heartbeat",
"module": "./effects/Heartbeat",
"outputs": [
	{
		"name": "ray",
		"targets": [
			"everything.strips"
		]
	}
],
"sound": { file: "Heartbeat.mp3", volume: 100 }
},
	{
		"name": "Color",
		"module": "../effects/PixelNode_Effect_TwoColor",
		"outputs": [
			{
				"name": "both",
				"targets": [
					"everything.strips"
				]
			}
		]
	},
	{
		"name": "Glitter",
		"module": "../effects/PixelNode_Effect_TwoGlitter",
		"outputs": [
			{
				"name": "glow",
				"targets": [
					"everything.rings"
				]
			}
		]
	},
		{
		"name": "Cuts",
		"module": "./effects/Cuts2",
		"outputs": [
			{
				"name": "ray",
				"targets": [
					"everything.rings"
				]
			}
		]
	},
		{
		"name": "Ray",
		"module": "../effects/PixelNode_Effect_TwoRay",
		"speed": 2,
		"outputs": [
			{
				"name": "ray",
				"targets": [
					"everything.strips"
				]
			}
		]
	},
	{
		"name": "RainBow",
		"module": "../effects/PixelNode_Effect_Rainbow",
		"scale": 1,
		"speed": 100,
		"outputs": [
			{
				"name": "rainbow",
				"targets": [
					"everything.rings"
				]
			}
		],
		"sound": { file: "Birds.mp3", volume: 100 }
	},
	{
		"name": "RainBowRings",
		"module": "../effects/PixelNode_Effect_Rainbow",
		"scale": 1,
		"speed": 100,
		"outputs": [
			{
				"name": "rainbow",
				"targets": [
					"everything.strips"
				]
			}
		],
		"sound": { file: "Birds.mp3", volume: 100 }
	},
	{
		"name": "RedBlue",
		"module": "../effects/PixelNode_Effect_RedBlue",
		"scale": 2,
		"outputs": [
			{
				"name": "glow",
				"targets": [
					"everything.strips"
				]
			}
		]
	},
	{
		"name": "Fire",
		"module": "./effects/Fire",
		"speed": 0,
		"outputs": [
			{
				"name": "glow",
				"targets": [
					"everything.strips"
				]
			}
		],
		"sound": { file: "Fire.mp3", volume: 100 }
	},
	{
		"name": "Rain",
		"module": "../effects/PixelNode_Effect_ColouredRain",
		"speed": 0,
		"direction": 1,
		"intensity": 0.25,
		"fixedColor": [0,0,255],
		"outputs": [
			{
				"name": "glow",
				"targets": [
					"everything.strips"
				]
			}
		],
		"sound": { file: "Rain.mp3", volume: 100 }
	},
	{
		"name": "ColouredRain",
		"module": "../effects/PixelNode_Effect_ColouredRain",
		"scale": 0,
		"speed": 0,
		"intensity": 0.15,
		"direction": -1,
		"outputs": [
			{
				"name": "glow",
				"targets": [
					"everything.strips"
				]
			}
		]
	},
	{
		"name": "Off",
		"module": "../effects/PixelNode_Effect_Off",
		"outputs": [
			{
				"name": "glow",
				"targets": [
					"everything.rings"
				]
			}
		]
	},
	{
		"name": "Hands",
		"module": "../effects/PixelNode_Effect_TwoColor",
		"outputs": [
			{
				"name": "both",
				"targets": [
					"hands.rings"
				]
			}
		]
	},
	
	{
		"name": "Branch3",
		"touch": "10",
		"module": "./effects/Heartbeat",
		"outputs": [
			{
				"name": "ray",
				"targets": [
					"branch_3.strips"
				]
			}
		]
	},
	{
	"name": "Branch2",
		"touch": "8",
		"module": "./effects/Fire",
		"outputs": [
			{
				"name": "ray",
				"targets": [
					"branch_2.strips"
				]
			}
		]
	},


	{
	"name": "Branch1",
		"touch": "9",
		"module": "../effects/PixelNode_Effect_ColouredRain",
		"speed": 0,
		"direction": 1,
		"intensity": 0.25,
		"fixedColor": [0,0,255],
		"outputs": [
			{
				"name": "ray",
				"targets": [
					"branch_1.strips"
				]
			}
		]
	},

	{
		"name": "Branch0",
		"touch": "11",
		"module": "../effects/PixelNode_Effect_Rainbow",
		"scale": 1,
		"speed": 100,
		"outputs": [
			{
				"name": "rainbow",
				"targets": [
					"branch_0.rings"
				]
			}
		]
	},




	
	
	
]
