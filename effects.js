module.exports = [
	{
	"name": "Branch2",
	"touch": "10",
	"module": "./effects/Heartbeat",
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
	"name": "Branch3",
	"touch": "8",
	"module": "./effects/Fire",
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
	"name": "Branch0",
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
				"branch_0.strips"
			]
		}
	]
	},

	{
	"name": "Branch1",
	"touch": "11",
	"module": "../effects/PixelNode_Effect_Rainbow",
	"scale": 1,
	"speed": 100,
	"outputs": [
		{
			"name": "rainbow",
			"targets": [
				"branch_1.strips"
			]
		}
	]
	},




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
]
},
{
	"name": "Direction",
	"module": "./effects/Direction",
	"outputs": [
		{
			"name": "everyting",
			"targets": [
				"everything.strips"
			]
		},
		{
			"name": "branch_0",
			"targets": [
				"root_0.strips"
			]
		},
		{
			"name": "branch_1",
			"targets": [
				"root_1.strips"
			]
		},
		{
			"name": "branch_2",
			"targets": [
				"root_2.strips"
			]
		},
		{
			"name": "branch_3",
			"targets": [
				"root_3.strips"
			]
		}
	]
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
					"everything.strips"
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
		]
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
		]
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
		]
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
		]
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
	}
]
