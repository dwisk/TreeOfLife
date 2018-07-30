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

	{ // dick
	"name": "Branch2",
		"touch": "8",
		"module": "../effects/PixelNode_Effect_Rainbow",
		"scale": 10,
		"speed": 100,
		
		"outputs": [
			{
				"name": "rainbow",
				"targets": [
					"branch_2.rings"
				]
			}
		]
	},


	{
	"name": "Branch1", // sign
		"touch": "9",
		"module": "./effects/Fire",
		"outputs": [
			{
				"name": "ray",
				"targets": [
					"branch_1.strips"
				]
			}
		]
	},

	{ // Cunt
		"name": "Branch0",
		"touch": "11",
		"module": "../effects/PixelNode_Effect_Rainbow",
		"modulex": "../effects/PixelNode_Effect_RedBlue",
		"scale": 1,
		"speed": 1,
		"outputs": [
			{
				"name": "rainbow",
				"targets": [
					"branch_0.strips"
				]
			}
		]
	},


	// PARTS ----------------------------------------------------------------------

	// Clitoris
	{ 
		"name": "clitoris",
		"touch": "11",
"module": "./effects/Heartbeat",
		"scale": 10,
		"speed": 20,
		"outputs": [
			{
				"name": "rainbow",
				"targets": [
					"clitoris.rings",
					"glans.rings"
				]
			}
		]
	},


	// Minora
	{ 
		"name": "minora",
"module": "./effects/Heartbeat",
		"scale": 10,
		"speed": 20,
		"outputs": [
			{
				"name": "rainbow",
				"targets": [
					"minora.rings",
					"corpus.rings"
				]
			}
		]
	},

	// Majora
	{ 
		"name": "majora",
"module": "./effects/Heartbeat",
		"scale": 10,
		"speed": 20,
		"outputs": [
			{
				"name": "rainbow",
				"targets": [
					"majora.rings",
					"scrotum.rings"
				]
			}
		]
	},



	// Vagina
	{ 
		"name": "vagina",
"module": "./effects/Heartbeat",
		"scale": 10,
		"speed": 20,
		"outputs": [
			{
				"name": "rainbow",
				"targets": [
					"vagina.rings"
				]
			}
		]
	},

	// Uretha
	{ 
		"name": "uretha",
		"module": "../effects/PixelNode_Effect_TwoColor",

		"scale": 10,
		"speed": 20,
		"outputs": [
			{
				"name": "rainbow",
				"targets": [
					"uretha.rings"
				]
			}
		]
	},
	
	
	{
		"name": "Signs",
		"module": "./effects/Fire",
		"speed": 0,
		"outputs": [
			{
				"name": "glow",
				"targets": [
					"branch_1.strips",
					"branch_3.strips"
				]
			}
		],
		"sound": { file: "Fire.mp3", volume: 100 }
	},




	
	
	
	
	
	
	
	
	
	
	
	
	
	
]
