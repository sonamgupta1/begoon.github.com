function tape_file() {
var file = {
name: "E_STAKAN.RKR",
start: 0x1100,
end: 0x1700,
entry: 0x1100,
image:
"\x31\x00\x75\x21\x00\x60\x11\xFF\x0F\x36\x00\x23\x1B\x7A\xB3\xC2\x09\x11\xCD\xBC\x11\x3E\x80\x32\x00\x60\x21\x46\x63\x36\x30\x2B" +
"\x36\x30\x2B\x36\x30\x21\xE2\x63\x06\x04\x36\x30\x2B\x05\xC2\x2A\x11\x21\x37\x63\x11\xF2\x11\xCD\xE9\x11\x21\xD3\x63\x11\xFC\x11" +
"\xCD\xE9\x11\x21\xCC\x64\x06\x06\x36\x30\x2B\x05\xC2\x48\x11\x21\xBD\x64\x11\x06\x12\xCD\xE9\x11\x3E\x2E\x32\x0F\x6F\x21\xA3\x68" +
"\x22\x0A\x6F\xAF\x32\x08\x6F\x3E\x55\x32\x0E\x6F\x21\x00\xFE\x22\x02\x6F\x21\x01\x18\x22\x06\x6F\x3E\x0C\x32\x11\x6F\xCD\x28\x12" +
"\xCD\x6F\x12\xCD\x0F\x12\xCD\x73\x13\xCD\x0F\x12\xCD\x1C\x12\xCD\x0F\x12\xCD\xE3\x12\xCD\x0F\x12\xCD\x73\x13\xCD\x0F\x12\xCD\x1C" +
"\x12\xCD\x0F\x12\xCD\xE3\x12\xCD\x0F\x12\xCD\x73\x13\xCD\x0F\x12\xCD\x1C\x12\xCD\x0F\x12\xCD\xE3\x12\xC3\x80\x11\x21\x01\xC0\x36" +
"\x00\x2B\x36\x4D\x36\x24\x36\x77\x36\xD3\x23\x36\x27\x7E\x7E\xE6\x20\xCA\xCE\x11\x21\x08\xE0\x36\x80\x2E\x04\x36\x00\x36\x60\x2C" +
"\x36\x45\x36\x4B\x2E\x08\x36\xA4\xC9\x1A\xB7\xC8\x77\x23\x13\xC3\xE9\x11\x8C\x45\x49\x4C\x55\x54\x45\x53\x80\x00\x84\x46\x49\x47" +
"\x55\x52\x4F\x53\x80\x00\x88\x54\x41\x53\x4B\x41\x49\x80\x00\xCD\x5A\x14\xCD\x5A\x14\xCD\x5A\x14\xCD\x5A\x14\xC9\x21\x4D\x68\x3E" +
"\x17\x32\x04\x6F\xCD\x2C\x14\xC9\x11\x3D\x00\x0E\x14\x06\x11\x21\xD0\x62\x36\x11\x23\x05\xC2\x45\x12\x36\x06\x06\x11\x19\x0D\xCA" +
"\x4A\x12\xC3\x32\x12\x36\x2E\xC3\x34\x12\x04\x2B\x36\x15\x23\x36\x14\x23\x05\xC2\x4F\x12\x36\x16\x11\x44\x00\x19\x36\x06\x23\x36" +
"\x11\x11\x4A\x00\x19\x3E\x08\x36\x17\x23\x3D\xC2\x67\x12\xC9\xCD\xDA\x12\xE6\x0F\x21\xD1\x62\x16\x00\x5F\x19\x36\x17\xE5\xCD\xDA" +
"\x12\xE1\x07\xDA\x90\x12\xE2\xAA\x12\x11\x4E\x00\x19\xC3\xA1\x12\xE2\xC2\x12\x11\x20\x9D\xEB\x19\xEB\xDA\xA0\x12\x23\xC3\xA1\x12" +
"\x2B\x36\x17\xCD\x41\x13\xCD\x67\x13\xC9\x3A\x45\x63\xFE\x30\xCA\x89\x12\x11\x4F\x00\x19\x11\xD2\x9C\xEB\x19\xEB\xDA\xA0\x12\xC3" +
"\xA1\x12\x3A\x45\x63\xFE\x30\xCA\x93\x12\x11\x4D\x00\x19\x11\xE1\x9C\xEB\x19\xEB\xD2\x9C\x12\xC3\xA1\x12\x2A\x02\x6F\x7E\x2C\x22" +
"\x02\x6F\xC9\x21\x9B\x68\x22\x00\x6F\x3E\x23\x0E\x14\x06\x10\xBE\xC2\xFB\x12\x23\x05\xC2\xEF\x12\xCD\x0A\x13\x2A\x00\x6F\x11\xB2" +
"\xFF\x19\x22\x00\x6F\x0D\xC2\xED\x12\xC9\x2A\x00\x6F\x06\x10\x3E\x2E\x77\x23\x05\xC2\x11\x13\x2A\x00\x6F\x3E\x23\x32\x04\x6F\xCD" +
"\x2C\x14\xCD\x5D\x13\xCD\x29\x13\xC9\x2A\x06\x6F\x11\xC0\xFF\x19\x22\x06\x6F\x21\x46\x63\x3E\x3A\x34\xBE\xC0\x36\x30\x2B\xC3\x38" +
"\x13\x21\xE2\x63\x3E\x3A\x34\xBE\xC0\x36\x30\x2B\xC3\x46\x13\x21\xCC\x64\x3E\x3A\x34\xBE\xC0\x36\x30\x2B\xC3\x54\x13\x06\x08\xCD" +
"\x4F\x13\x05\xC2\x5F\x13\xC9\x3A\x11\x6F\x47\xCD\x4F\x13\x05\xC2\x6B\x13\xC9\x21\x9B\x68\x06\x13\x0E\x10\xCD\x11\x14\xE5\xB7\xC2" +
"\x92\x13\x11\xB1\xFF\x19\xCD\x05\x14\xB7\xCA\x92\x13\x23\x23\xCD\x05\x14\xE1\x23\x0D\xC2\x7A\x13\x21\x9B\x68\x0E\x11\x7E\xFE\x23" +
"\xCA\xAB\x13\x23\x0D\xC2\x9D\x13\xC3\xFC\x13\x11\xB2\xFF\xE5\x19\xCD\x11\x14\xB7\xCA\xBB\x13\xE1\xC3\xA3\x13\x3C\xB8\xC2\xC3\x13" +
"\xC3\x43\x16\x23\xCD\x05\x14\xB7\xCA\xF8\x13\x2B\x2B\xCD\x05\x14\xB7\xCA\xF8\x13\x11\xB2\xFF\x19\xCD\x05\x14\xB7\xCA\xF8\x13\x23" +
"\x23\xCD\x05\x14\xB7\xCA\xF8\x13\x11\x9C\x00\x19\xCD\x05\x14\xB7\xCA\xF8\x13\x2B\x2B\xCD\x05\x14\xE1\xC3\xA3\x13\x11\xA1\xFF\x19" +
"\x05\xC2\x9B\x13\xC9\x3A\x10\x6F\xBE\xCA\x0D\x14\xC9\x36\x23\xAF\xC9\x7E\xFE\x17\xCA\x25\x14\xFE\x4F\xC0\x32\x10\x6F\x3E\x19\x32" +
"\x0E\x6F\xC3\x28\x14\x32\x10\x6F\x36\x23\xAF\xC9\x06\x14\x0E\x10\x3A\x04\x6F\xBE\xC2\x40\x14\xE5\x11\x4E\x00\x19\x77\xE1\x36\x2E" +
"\x23\x0D\xC2\x30\x14\x11\xA2\xFF\x19\x05\xC2\x2E\x14\xC9\x2A\x06\x6F\xF5\x2B\x7C\xB5\xC2\x52\x14\xF1\xC9\xCD\x4E\x14\xCD\x32\x16" +
"\x3A\x08\x6F\xB7\xC2\x0E\x15\xCD\x1B\xF8\xFE\xFF\xCA\x79\x14\xFE\x20\xC2\x76\x14\x3E\x19\x32\x0E\x6F\x2A\x0A\x6F\x3A\x0E\x6F\xE5" +
"\xFE\x08\xCA\x96\x14\xFE\x1A\xCA\x9A\x14\xFE\x18\xCA\xA1\x14\x11\xB2\xFF\x19\xC3\xA2\x14\x2B\xC3\xA2\x14\x11\x4E\x00\x19\xC3\xA2" +
"\x14\x23\x7E\xFE\x2E\xCA\xAD\x14\xFE\x23\xC2\xC2\x14\x47\x36\x2B\x22\x0A\x6F\xE1\x7E\xFE\x2B\x3A\x0F\x6F\x4F\x78\x32\x0F\x6F\xC0" +
"\x71\xC9\xFE\x17\xCA\xC9\x14\xE1\xC9\x22\x0A\x6F\x36\x4F\x3E\xFF\x32\x08\x6F\x23\x3E\x17\xBE\xCA\x06\x15\x2B\x2B\xBE\xCA\x06\x15" +
"\x23\x11\xB2\xFF\x19\xBE\xCA\x06\x15\x11\x9C\x00\x19\xBE\xCA\x06\x15\x23\xBE\xCA\x06\x15\x2B\x2B\xBE\xCA\x06\x15\x11\x64\xFF\x19" +
"\xBE\xCA\x06\x15\x23\x23\x22\x0C\x6F\x36\x4F\xC3\xB3\x14\xCD\x1B\xF8\xFE\xFF\xCA\x19\x15\x32\x0E\x6F\x2A\x0A\x6F\xE5\x2A\x0C\x6F" +
"\xE5\x3A\x0E\x6F\xFE\x08\xCA\x49\x15\xFE\x1A\xCA\x57\x15\xFE\x18\xCA\x68\x15\xFE\x20\xCA\xDA\x15\x11\xB2\xFF\x19\x22\x0C\x6F\x2A" +
"\x0A\x6F\x19\x22\x0A\x6F\xC3\x73\x15\x2B\x22\x0C\x6F\x2A\x0A\x6F\x2B\x22\x0A\x6F\xC3\x73\x15\x11\x4E\x00\x19\x22\x0C\x6F\x2A\x0A" +
"\x6F\x19\x22\x0A\x6F\xC3\x73\x15\x23\x22\x0C\x6F\x2A\x0A\x6F\x23\x22\x0A\x6F\xE1\x7E\xFE\x17\xCA\xC0\x15\xEB\xE1\xFE\x23\xCA\xD5" +
"\x15\x7E\xFE\x17\xCA\xCC\x15\xE5\xEB\xE5\x2A\x0A\x6F\x7E\xFE\x2E\xCA\x98\x15\xFE\x4F\xC2\xB7\x15\x2A\x0C\x6F\x7E\xFE\x2E\xCA\xA6" +
"\x15\xFE\x4F\xC2\xB7\x15\xE1\x36\x2E\xE1\x36\x2E\x2A\x0A\x6F\x36\x4F\x2A\x0C\x6F\x36\x4F\xC9\xE1\x22\x0C\x6F\xE1\x22\x0A\x6F\xC9" +
"\xE1\x7E\xFE\x4F\xC2\xD5\x15\x36\x2E\xC3\xD5\x15\xEB\x7E\xFE\x4F\xC2\xD5\x15\x36\x2E\xAF\x32\x08\x6F\xC9\xCD\xE7\x15\xE1\xE1\x3E" +
"\x55\x32\x0E\x6F\xC3\xD5\x15\x01\x4E\x00\x2A\x0C\x6F\xEB\x2A\x0A\x6F\xE5\x09\x7E\xFE\x23\xE1\xCA\x28\x16\xFE\x14\xCA\x28\x16\xFE" +
"\x17\xCA\x2D\x16\xD5\xEB\x09\x7E\xFE\x23\xEB\xD1\xCA\x28\x16\xFE\x14\xCA\x28\x16\xFE\x17\xCA\x2D\x16\x36\x2E\x09\x36\x4F\xEB\x36" +
"\x2E\x09\x36\x4F\xEB\xC3\xF1\x15\x3E\x23\x77\x12\xC9\x3E\x2E\xC3\x2A\x16\x21\xD1\x62\x06\x10\x3E\x23\xBE\xCA\x43\x16\x23\x05\xC2" +
"\x39\x16\xC9\x01\x07\x16\xCD\x09\xF8\x05\xC2\x46\x16\x21\x00\xFF\x22\x06\x6F\xCD\x4E\x14\xC3\x00\x11\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00"};
ui.file_loaded(file);
}
tape_file();
