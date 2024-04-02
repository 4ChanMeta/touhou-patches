{
    options: {
        seija_talk_const_0: {
            type: "s",
            val: "st05enm.anm",
        },
        seija_talk_const_1: {
            type: "s",
            val: "front.anm",
        },
    },
    codecaves: {
        "seija_talk.text": {
            access: "rx",
            code: "5553575689cea1<0x4DB550>85c074088b8094010000eb0231c08b0d<0x4DB528>85c9742a83b93c4200000575218b7c24148b4f2483f906740a83f91c741b83f91a75308b47303b05<codecave:seija_talk.bss>745189f15e5f5b5de9[0x478F60]8b4f303b0d(<codecave:seija_talk.bss>+0x4)75ea85c074e683b89001000000752eebdb83f91d75d685c074d283b8900100000074c98b8f400500003b4858740f3b485c740a3b486074053b486475af89f1e8[0x475EB0]89f157e8[0x478F60]8b8ef081bc008d14098d145285d20f84930000008bbef881f40031f683fa04725089d383e3fc8d6f5831f6f30f1005<codecave:seija_talk_comdat_pool>0f28c8f30f5c4dacf30f114dac0f28c8f30f5c4dc8f30f114dc80f28c8f30f5c4de4f30f114de40f28c8f30f5c4d00f30f114d0083c60483c57039f375c2f6c20274318d14f68d145201f201fa83c20483e1016bc93831f6f30f1005<codecave:seija_talk_comdat_pool>0f28c8f30f5c0c32f30f110c3283c61c39f175ec5e5f5b5dc204000f1f44000057568b7c241057ff742410e8[0x47CFF0]89c668<option:seija_talk_const_0>57e8[th_strcmp]83c40885c0741968<option:seija_talk_const_1>57e8[th_strcmp]83c40885c0750eb8(<codecave:seija_talk.bss>+0x4)eb05b8<codecave:seija_talk.bss>893089f05e5fc20800",
        },
        "seija_talk.bss": {
            access: "rw",
            size: 8,
        },
        seija_talk_comdat_pool: {
            access: "r",
            code: "00007044",
        },
        seija_talk_patch_init: {
            access: "rx",
            code: "c3",
            "export": true,
        },
    },
    binhacks: {
        seija_talk_draw_sprite: {
            addr: "0x47E84E",
            code: "E8 [codecave:seija_talk.text]",
        },
        seija_talk_preload_anm_1: {
            addr: "0x422565",
            code: "E8 [codecave:seija_talk.text+0x160]",
        },
        seija_talk_preload_anm_2: {
            addr: "0x47D0C9",
            code: "E8 [codecave:seija_talk.text+0x160]",
        },
    },
}