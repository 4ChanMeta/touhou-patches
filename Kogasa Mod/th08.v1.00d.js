{
	"options": {
		// Any names longer than 7 characters won't show up ingame
		"ReimuAndYukariStr": {
			"type": "s",
			"val": "Kk & Sk"
		},
		"MarisaAndAliceStr": {
			"type": "s",
			"val": "Kogasa"
		},
		"SakuyaAndRemiliaStr": {
			"type": "s",
			"val": "Mg & Gg"
		},
		"YoumuAndYuyukoStr": {
			"type": "s",
			"val": "Ym & Yy"
		},
		"ReimuSoloStr": {
			"type": "s",
			"val": "Koishi  "
		},
		"YukariSoloStr": {
			"type": "s",
			"val": "Satori "
		},
		"MarisaSoloStr": {
			"type": "s",
			"val": "Kogasa "
		},
		"AliceSoloStr": {
			"type": "s",
			"val": "Kogasa  "
		},
		"SakuyaSoloStr": {
			"type": "s",
			"val": "Mugetsu "
		},
		"RemiliaSoloStr": {
			"type": "s",
			"val": "Gengetsu "
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