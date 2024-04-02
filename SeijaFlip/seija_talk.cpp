// clang++ -m32 -msse -msse2 -mfpmath=sse -O2 -c seija_talk.cpp -o seija_talk.obj

#include <Windows.h>
#include <stdint.h>

struct ZunVertex {
    float x, y, z, w;
    DWORD color;
    float u, v;
};

class CAnmFile {
public:
    char pad0[4];
    char name[0x104];
};

class CAnmVM {
public:
    char gap0[0x24];
    uint32_t layer;
    char gap28[0x8];
    CAnmFile* file;
    char gap34[0x50c];
    uint32_t id;
};

class CAnmManager {
public:
    void FlushSprites();
    int DrawSprite(CAnmVM* sprite);
    CAnmFile* PreloadAnm(uint32_t slot, const char* filename);

    char gap0[0xCC];
    uint32_t flush_count;
    char gapD0[0xBC80C3];
    char blend_op;
    char gapBC8194[0x5C];
    uint32_t sprite_count;
    char gapBC81F4[0x380000];
    ZunVertex *next_vertex_buffer;
    ZunVertex *vertex_buffer;
    char gapF481FC[0xAD0D8];
};

class CMsgVM {
public:
    char gap0[0x58];
    uint32_t line_1_id;
    uint32_t line_2_id;
    uint32_t furigana_1_id;
    uint32_t furigana_2_id;
    char gap68[0x128];
    uint32_t active_side;
};

class CFront {
public:
    static CFront* Instance;

    char gap0[0x194];
    CMsgVM* msg_vm;
};

class CStage {
public:
    static CStage* Instance;

    char gap0[0x423c];
    uint32_t stage_num;
};

CAnmFile* g_seija_anm = nullptr;
CAnmFile* g_front_anm = nullptr;
extern "C" int __thiscall draw_sprite_hook(CAnmManager* self, CAnmVM* sprite) {
    int ret;
    auto msg_vm = CFront::Instance ? CFront::Instance->msg_vm : nullptr;
    auto id = sprite->id;
    if (
        CStage::Instance && CStage::Instance->stage_num == 5 && (
            ((sprite->layer == 26 || sprite->layer == 6) && sprite->file == g_seija_anm) ||
            (sprite->layer == 28 && sprite->file == g_front_anm && msg_vm && msg_vm->active_side) ||
            (sprite->layer == 29 && msg_vm && msg_vm->active_side && (id == msg_vm->line_1_id || id == msg_vm->line_2_id || id == msg_vm->furigana_1_id || id == msg_vm->furigana_2_id))
        )
    ) {
        self->FlushSprites();
        ret = self->DrawSprite(sprite);

        for (int i = 0; i < self->sprite_count * 6; i++)
            self->vertex_buffer[i].y = 960 - self->vertex_buffer[i].y;
    } else {
        ret = self->DrawSprite(sprite);
    }

    return ret;
}

extern "C" CAnmFile* __thiscall preload_anm_hook(CAnmManager* self, uint32_t slot, const char* filename) {
    auto ret = self->PreloadAnm(slot, filename);
    if (!strcmp(filename, "st05enm.anm"))
        g_seija_anm = ret;
    else if (!strcmp(filename, "front.anm"))
        g_front_anm = ret;
    return ret;
}
