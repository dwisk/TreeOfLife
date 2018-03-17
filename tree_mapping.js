module.exports = [
	{
		"name": "everything",
		"pixelColorCorrection": false,
		"csv": {
			"delimiter": "tab",
			"groupStrips": 8,
			"file": "./tree_mapping.csv"
		}
	},
	{
		"name": "alternative",
		"pixelColorCorrection": false,
		"csv": {
			"delimiter": "tab",
			"groupStrips": 8,
			"file": "./tree_mapping_alternative.csv"
		}
	},

	{
		"name": "everything2",
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [
				{"nbr": 0, "from": 0, "to": 62},
				{"nbr": 0, "from": 63, "to": 113},
				{"nbr": 0, "from": 114, "to": 126}
			]},
			{ "serial": [{"nbr": 0, "from": 128, "to": 255}]},
			{ "serial": [{"nbr": 0, "from": 256, "to": 383}]},
			{ "serial": [{"nbr": 0, "from": 384, "to": 511}]}
		]
	},
	{
		"name": "north",
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 0, "to": 127}]}
		]
	},
	{
		"name": "east",
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 128, "to": 255}]}
		]
	},
	{
		"name": "south",
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 256, "to": 383}]}
		]
	},
	{
		"name": "west",
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 384, "to": 511}]}
		]
	},

	{
		"name": "canope",
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 0, "to": 62}]},
			{ "serial": [{"nbr": 0, "from": 128, "to": 191}]},
			{ "serial": [{"nbr": 0, "from": 256, "to": 319}]},
			{ "serial": [{"nbr": 0, "from": 384, "to": 447}]}
		]
	},
	{
		"name": "trunk",
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 63, "to": 113}]},
			{ "serial": [{"nbr": 0, "from": 192, "to": 242}]},
			{ "serial": [{"nbr": 0, "from": 320, "to": 370}]},
			{ "serial": [{"nbr": 0, "from": 448, "to": 498}]}
		]
	},
	{
		"name": "roots",
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 114, "to": 126}]},
			{ "serial": [{"nbr": 0, "from": 243, "to": 255}]},
			{ "serial": [{"nbr": 0, "from": 371, "to": 383}]},
			{ "serial": [{"nbr": 0, "from": 298, "to": 510}]}

		]
	},

	{
		"name": "strips",
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 0, "to": 63}]},
			{ "serial": [{"nbr": 0, "from": 63, "to": 127}]},
			{ "serial": [{"nbr": 0, "from": 128, "to": 191}]},
			{ "serial": [{"nbr": 0, "from": 192, "to": 255}]},
			{ "serial": [{"nbr": 0, "from": 256, "to": 319}]},
			{ "serial": [{"nbr": 0, "from": 320, "to": 383}]},
			{ "serial": [{"nbr": 0, "from": 384, "to": 447}]},
			{ "serial": [{"nbr": 0, "from": 448, "to": 511}]}
		]
	}
]
