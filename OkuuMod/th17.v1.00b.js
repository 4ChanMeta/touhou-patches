{
	"binhacks": {
		"allowShotWithBomb": {
			"addr": "Rx1206E",
			"code": "B8 6B 02 00 00 8B 15 D0 77 4B 00 C7 82 8C 8E 01 00 00 00 00 00 90 90 90 90"
		},
		"constantBombTime": {
			"addr": "Rx1209D",
			"code": "90 90 90"
		},
		"bombEndHijack1": {
			"addr": "Rx120E3",
			"code": "E9 49 01 00 00 90 90 90 90 90"
		},
		"bombEndHijack2": {
			"addr": "Rx12231",
			"code": "C7 81 C8 8E 01 00 00 00 80 3F E9 4A 01 00 00 90 90 90 90"
		},
		"changeInvincibilityFrameCount": {
			"addr": "Rx12138",
			"code": "C7 81 80 8E 01 00 00 00 00 40"
		},
		"noMoveBomb": {
			"addr": "Rx12142",
			"code": "90 90 90 90 90"
		},
		"noRotateBomb": {
			"addr": "Rx1212B",
			"code": "90 90 90 90 90"
		},
		"noScreenShake": {
			"addr": "Rx64701",
			"code": "90 8D 4E 2C 90 90 90 90 90"
		},
		"continuousDamage": {
			"addr": "Rx12166",
			"code": "90 90 90 90 90 90"
		},
		"initializeHitboxStruct1": {
			"addr": "Rx12193",
			"code": "0F 57 C0 90 90 0F 57 DB 90 90 90 90 90 0F 57 D2 90 90 90 90 90 6A 50 52 F3 0F 11 45 F4 F3 0F 10 46 18"
		},
		"initializeHitboxStruct2": {
			"addr": "Rx121B5",
			"code": "90 90 90 90 90 51 F3 0F 11 45 F8 F3 0F 10 46 1C F3 0F 58 45 FC F3 0F 11 45 FC 0F 57 C0 90 90"
		},
		"initializeHitboxStruct3": {
			"addr": "Rx121F5",
			"code": "83 08 03 50 FF 76 5C 8B 0D 20 9A 50 00 E8 69 42 06 00 F3 0F 10 40 50 F3 0F 59 05 2C 3D 4A 00 58 F3 0F 11 40 04"
		},
		"playSoundAtBombEnd": {
			"addr": "Rx1221A",
			"code": "8B 46 38 3D 58 02 00 00 75 08 51 6A 1B E8 24 32 05 00 E9 02 01 00 00"
		}
	}
}