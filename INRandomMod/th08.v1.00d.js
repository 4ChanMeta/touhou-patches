{
	"options": {
		// Any names longer than 7 characters won't show up ingame
		"ReimuAndYukariStr": {
			"type": "s",
			"val": "Ma & Sa"
		},
		"MarisaAndAliceStr": {
			"type": "s",
			"val": "Nk & Ty"
		},
		"SakuyaAndRemiliaStr": {
			"type": "s",
			"val": "Kg & Ds"
		},
		"YoumuAndYuyukoStr": {
			"type": "s",
			"val": "Ym & Yy"
		},
		"ReimuSoloStr": {
			"type": "s",
			"val": "Minoriko "
		},
		"YukariSoloStr": {
			"type": "s",
			"val": "Shizuha "
		},
		"MarisaSoloStr": {
			"type": "s",
			"val": "Nitori "
		},
		"AliceSoloStr": {
			"type": "s",
			"val": "Takane  "
		},
		"SakuyaSoloStr": {
			"type": "s",
			"val": "Kaguya "
		},
		"RemiliaSoloStr": {
			"type": "s",
			"val": "Doremy "
		},
		"YoumuSoloStr": {
			"type": "s",
			"val": "Youmu  "
		},
		"YuyukoSoloStr": {
			"type": "s",
			"val": "Yuyuko "
		}
	},
	"binhacks": {
		"replace_team_name_strings": {
			"addr": [ 0x4C8010, 0x4C86C0 ],
			"code": "<option:ReimuAndYukariStr><option:MarisaAndAliceStr><option:SakuyaAndRemiliaStr><option:YoumuAndYuyukoStr><option:ReimuSoloStr><option:YukariSoloStr><option:MarisaSoloStr><option:AliceSoloStr><option:SakuyaSoloStr><option:RemiliaSoloStr><option:YoumuSoloStr><option:YuyukoSoloStr>"
		}
	}
}