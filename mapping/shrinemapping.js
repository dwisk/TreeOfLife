module.exports = [
		{
		"name": "everything",
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 0, "to": 63}]},
			{ "serial": [{"nbr": 0, "from": 64, "to": 127}]},
			{ "serial": [{"nbr": 0, "from": 128, "to": 195}]},
			{ "serial": [{"nbr": 0, "from": 196, "to": 255}]},
			{ "serial": [{"nbr": 0, "from": 256, "to": 319}]},
			{ "serial": [{"nbr": 0, "from": 320, "to": 383}]},
			{ "serial": [{"nbr": 0, "from": 384, "to": 447}]},
			{ "serial": [{"nbr": 0, "from": 448, "to": 511}]}
		]
	},
		{
		"name": "hands",
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 120, "to": 126}]}, 	// hand - rainbow
			{ "serial": [{"nbr": 0, "from": 248, "to": 255}]}, 	// hand
			{ "serial": [{"nbr": 0, "from": 376, "to": 382}]}, 	// hand
			{ "serial": [{"nbr": 0, "from": 504, "to": 510}]} 	// hand

		]
	},
		{
		"name": "branch_0", // Rainbow
		"pixelColorCorrection": false,
		"createStrips": false,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 0, "to": 30}]}, 		// hinten 1
			{ "serial": [{"nbr": 0, "from": 31, "to": 63}]}, 		// hinten 2
			
			{ "serial": [{"nbr": 0, "from": 64, "to": 80}]}, 	// mitte 1
			{ "serial": [{"nbr": 0, "from": 81, "to": 100}]}, 	// mitte 2

			{ "serial": [{"nbr": 0, "from": 101, "to": 102}]},	// leer

			{ "serial": [{"nbr": 0, "from": 103, "to": 110}]},	// oben 1
			{ "serial": [{"nbr": 0, "from": 111, "to": 120}]},	// oben 2

			{ "serial": [{"nbr": 0, "from": 121, "to": 126}]} 	// hand
		],
		"csv": {
			"group": 2,
			"file": "./mapping/shrine_flower.csv"
		}

	},
	{
		"name": "branch_1", // Rain
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 161, "to": 128}]},	// hinten 1
			{ "serial": [{"nbr": 0, "from": 162, "to": 191}]},	// hinten 2

			{ "serial": [{"nbr": 0, "from": 210, "to": 192}]}, 	// mitte 1
			{ "serial": [{"nbr": 0, "from": 211, "to": 223}]}, 	// mitte 2

			{ "serial": [{"nbr": 0, "from": 222, "to": 230}]},	// leer

			{ "serial": [{"nbr": 0, "from": 240, "to": 231}]},	// oben 1
			{ "serial": [{"nbr": 0, "from": 241, "to": 247}]},	// oben 2

//			{ "serial": [{"nbr": 0, "from": 249, "to": 254}]} 	// hand

//			{ "serial": [{"nbr": 0, "from": 196, "to": 255}]}
		]
	},
	{
		"name": "branch_2", // fire
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 289, "to": 256}]},	// hinten 1
			{ "serial": [{"nbr": 0, "from": 290, "to": 319}]},	// hinten 2

			{ "serial": [{"nbr": 0, "from": 340, "to": 320}]}, 	// mitte 1
			{ "serial": [{"nbr": 0, "from": 341, "to": 356}]}, 	// mitte 2

			{ "serial": [{"nbr": 0, "from": 357, "to": 357}]},	// leer

			{ "serial": [{"nbr": 0, "from": 365, "to": 358}]},	// oben 1
			{ "serial": [{"nbr": 0, "from": 366, "to": 375}]},	// oben 2

//			{ "serial": [{"nbr": 0, "from": 377, "to": 382}]} 	// hand

//			{ "serial": [{"nbr": 0, "from": 320, "to": 383}]},
		]
	},
	{
		"name": "branch_3", // Heart
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 384, "to": 410}]},  // hinten 1
			{ "serial": [{"nbr": 0, "from": 411, "to": 447}]},  // hinten 2

			{ "serial": [{"nbr": 0, "from": 448, "to": 460}]}, 	// mitte 1
			{ "serial": [{"nbr": 0, "from": 461, "to": 479}]}, 	// mitte 2

			{ "serial": [{"nbr": 0, "from": 480, "to": 486}]},	// leer

			{ "serial": [{"nbr": 0, "from": 487, "to": 495}]},	// oben 1
			{ "serial": [{"nbr": 0, "from": 496, "to": 503}]}					
			
				// oben 2

//			{ "serial": [{"nbr": 0, "from": 505, "to": 510}]} 	// hand

			//	{ "serial": [{"nbr": 0, "from": 448, "to": 511}]}
		]
	}

];
