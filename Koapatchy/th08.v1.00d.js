{
	"options": {
		// Any names longer than 7 characters won't show up ingame
		"ReimuAndYukariStr": {
			"type": "s",
			"val": "Koa & Patchy"
		},
		"MarisaAndAliceStr": {
			"type": "s",
			"val": "Ma & Al"
		},
		"SakuyaAndRemiliaStr": {
			"type": "s",
			"val": "Sk & Rm"
		},
		"YoumuAndYuyukoStr": {
			"type": "s",
			"val": "Ym & Yy"
		},
		"ReimuSoloStr": {
			"type": "s",
			"val": "Koakuma  "
		},
		"YukariSoloStr": {
			"type": "s",
			"val": "Patchouli "
		},
		"MarisaSoloStr": {
			"type": "s",
			"val": "Marisa "
		},
		"AliceSoloStr": {
			"type": "s",
			"val": "Alice  "
		},
		"SakuyaSoloStr": {
			"type": "s",
			"val": "Sakuya "
		},
		"RemiliaSoloStr": {
			"type": "s",
			"val": "Remilia "
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