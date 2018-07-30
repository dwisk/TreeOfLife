module.exports = [
		{
		"name": "everything",
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 0, "to": 63}]}, // vagina
			{ "serial": [{"nbr": 0, "from": 127, "to": 64}]},  // 
			{ "serial": [{"nbr": 0, "from": 128, "to": 195}]},  // labia majora
			{ "serial": [{"nbr": 0, "from": 196, "to": 255}]},  // labia minora + clit
			{ "serial": [{"nbr": 0, "from": 319, "to": 256}]},
			{ "serial": [{"nbr": 0, "from": 320, "to": 383}]},
			{ "serial": [{"nbr": 0, "from": 384, "to": 447}]},
			{ "serial": [{"nbr": 0, "from": 448, "to": 511}]}
		]
	},
	
		// SIDES ----------------------------------------------
	
	{
		"name": "branch_0", // Cunt
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
//			{ "serial": [{"nbr": 0, "from": 0, "to": 63}]}, // vagina
			{ "serial": [{"nbr": 0, "from": 128, "to": 191}]}, // labia majora			
			{ "serial": [{"nbr": 0, "from": 192, "to": 255}]}, // labia minora + clit // 192 - 255
			
			// 192 - 204 - CLIT
			// 205 - 255 - labia minora
		]

	},
	{
		"name": "branch_1", // Camp Sign
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "to": 64, "from": 127}]},

			{ "serial": [{"nbr": 0, "from": 600, "to": 601}]}

		]
	},
	{
		"name": "branch_2", // Dick
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 320, "to": 383}]}, // innen und links // 383
			// 369 - 383 - corpus left - ok
			// 357 - 368 - penis glans - ok
			// 356 - 345 - corpus right - ok
			// 320 - 344 - left ball - ok
			
			
			{ "serial": [{"nbr": 0, "from": 384, "to": 447}]}, // aussen 447
			
			// 384 - 397 - left ball - ok 
			// 408 - 422 - penis glans - ok 
			// 423 - 432 - corpus - ok
			// 433 - 447 - right ball - ok

			{ "serial": [{"nbr": 0, "from": 448, "to": 511}]}, // mitte und rechtsd // 511
			
			// 500 - 511 - corpus left - ok
			// 499 - 487 - penis glans - ok
			// 486 - 471 - corpus right - ok
			// 470 - 448 - right ball - ok 
		]
	},
	{
		"name": "branch_3", // digina sign
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [

			{ "serial": [{"nbr": 0, "from": 319, "to": 256}]},
		]
	},
	
	
	// PARTS ----------------------------------------------
	
	{
		"name": "clitoris", // Clit 
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 192, "to": 203}]}, // 192 - 204 - CLIT

		]

	},

	{
		"name": "glans", // Glans
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 357, "to": 369}]}, // 357 - 368 - penis glans innen
			{ "serial": [{"nbr": 0, "from": 408, "to": 422}]}, // 408 - 422 - penis glans mitte
			{ "serial": [{"nbr": 0, "from": 499, "to": 487}]}, // 499 - 487 - penis glans aussen

		]

	},


	{
		"name": "majora", // Majora
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 128, "to": 191}]}, // labia majora
		]

	},


	{
		"name": "scrotum", // Scrotum
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 384, "to": 397}]}, // 384 - 397 - left ball aussen
			{ "serial": [{"nbr": 0, "from": 433, "to": 447}]}, // 433 - 447 - right ball aussen
			{ "serial": [{"nbr": 0, "from": 448, "to": 472}]}, // right ball
			{ "serial": [{"nbr": 0, "from": 320, "to": 344}]}, // 320 - 344 - left ball
			

		]

	},

	
	{
		"name": "minora", // Minora
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [

			
			{ "serial": [{"nbr": 0, "from": 204, "to": 255}]}, // 205 - 255 - labia minora
			{ "serial": [{"nbr": 0, "from": 600, "to": 601}]}
		]

	},

	{
		"name": "corpus", // Corpus
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [
			{ "serial": [{"nbr": 0, "from": 370, "to": 383}]}, // 369 - 383 - corpus left innen
			{ "serial": [{"nbr": 0, "from": 500, "to": 511}]}, // 500 - 511 - corpus left mitte
			{ "serial": [{"nbr": 0, "from": 356, "to": 345}]}, // 356 - 345 - corpus right innen
			{ "serial": [{"nbr": 0, "from": 486, "to": 473}]}, // 486 - 471 - corpus right mitte 
			{ "serial": [{"nbr": 0, "from": 423, "to": 432}]}, // 423 - 432 - corpus aussen rechts
			{ "serial": [{"nbr": 0, "from": 398, "to": 407}]}, //  - corpus aussen links
			
			{ "serial": [{"nbr": 0, "from": 600, "to": 601}]}

		]

	},

	{
		"name": "vagina", // Vagina
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [


			{ "serial": [{"nbr": 0, "from": 0, "to": 63}]}, // vagina



		]

	},



	{
		"name": "uretha", // Uretha
		"pixelColorCorrection": false,
		"createStrips": true,
		"strips": [


			{ "serial": [{"nbr": 0, "from": 254, "to": 254}]}, // uretha
			{ "serial": [{"nbr": 0, "from": 493, "to": 493}]}, // 499 - 487 - penis glans aussen


		]

	},

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

];
