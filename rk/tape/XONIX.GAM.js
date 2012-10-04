function tape_file() {
var file = {
name: "XONIX.GAM",
start: 0x0000,
end: 0x0775,
entry: 0x0000,
image:
"\xC3\x00\x07\x77\x72\x65\x6D\x71\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x73\x7E\x65\x74\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x20\x20\x77\x73\x65\x67\x6F\x20\x20\x20\x20\x20\x20\x20\x20\x70\x6F\x70\x79\x74\x6B\x69\x0C\x00\x00\x00\x00\x3E\x3C\x70\x23\x3D" +
"\xC2\x3D\x00\x70\x19\xC9\x22\x00\x76\x7A\xCD\x15\xF8\x7B\xCD\x15\xF8\x0E\x0C\xC3\x09\xF8\x7B\xA5\x47\x7A\xA4\xB0\x3E\x08\xE2\x62" +
"\x00\x0E\x07\xCD\x09\xF8\x3D\xC2\x65\x00\xC9\xB2\xC2\x56\x00\xC9\x11\x2A\x10\xCD\x00\x02\x3E\x40\x3D\xC2\x78\x00\x21\x06\x00\x19" +
"\xEB\x3E\x8A\xBB\xD2\x73\x00\xC9\x23\xC3\xE8\x00\x2B\xC3\xE8\x00\xD5\x11\xB2\xFF\x19\xD1\xC3\xE8\x00\x3E\x01\x85\x27\x6F\x3E\x00" +
"\x8C\x27\x67\xC9\x3A\x03\x10\x4F\xFE\x08\xC2\xAF\x00\x3E\x2A\x12\x7E\x32\x03\x10\xFE\x53\xCA\xBC\x00\x36\x7F\xC9\x36\x17\xC9\x2A" +
"\x04\x10\x54\x5D\x3A\x08\x10\x47\xCD\x1B\xF8\xFE\x18\xCA\x88\x00\xFE\x08\xCA\x8C\x00\xFE\x19\xCA\x90\x00\xFE\x1A\xC2\x60\x05\x00" +
"\x00\x00\xD5\x11\x4E\x00\x19\xD1\x47\x7E\xFE\x20\xCA\x0D\x01\xFE\x0D\xCA\x08\x05\xE6\x24\xC2\xC0\x04\xCD\xA4\x00\x22\x04\x10\xA9" +
"\xCA\x0D\x01\xA9\xFE\x53\xCA\x43\x01\xEB\x22\x06\x10\x78\x32\x08\x10\xC9\x2A\x09\x10\xCD\x99\x00\x22\x09\x10\xEB\x21\xB6\x7F\xCD" +
"\x46\x00\x3E\xF0\xA2\x1F\x1F\x1F\x1F\xFE\x03\xCA\x00\x00\x5F\x3A\x02\x10\xBB\xC8\x7B\x32\x02\x10\x0E\x15\x11\x80\x00\x21\x0C\x00" +
"\xC3\x56\x00\x3A\x01\x10\x47\x31\x2A\x10\xD1\x13\x1A\xFE\x53\xCA\x57\x01\xFE\x2A\xC2\x4B\x01\x1B\x1A\xFE\x09\xD2\x57\x01\xB7\xCA" +
"\xB3\x01\x0E\x02\x21\x7A\x01\x22\x90\x10\x3E\x0A\x12\x2A\x90\x10\xE9\x2A\x90\x10\x3E\x7A\xBD\xCA\xA9\x01\x62\x6B\x23\x7E\xFE\x0B" +
"\xDA\xF9\x01\x21\xB2\xFF\x19\x7E\xFE\x0B\xDA\xB9\x04\x62\x6B\x2B\x7E\xFE\x0B\xDA\x5E\x04\x21\x4E\x00\x19\x7E\xFE\x0B\xD2\x71\x01" +
"\xEB\x21\x8D\x01\x22\x90\x10\xFE\x0A\x3E\x00\x12\xC2\x6D\x01\x0D\xC2\x6A\x01\xD1\xD1\x05\xC2\x4A\x01\x31\xFF\x35\x21\xC3\x77\x01" +
"\x08\x53\x23\x7D\xB7\xC2\xDF\x01\x7C\xFE\x7F\xCA\x79\x04\xE5\xC5\xC6\x10\x2F\x4F\x11\x00\x02\x21\x03\x00\xCD\x56\x00\xC1\xE1\x7E" +
"\xB7\xCA\x65\x04\xE6\x09\xB9\xC2\xC2\x01\x70\xEB\x2A\x0B\x10\xCD\x99\x00\x22\x0B\x10\xEB\xC3\xC2\x01\xEB\x21\x96\x01\xC3\xA4\x01" +
"\xD5\x21\x00\x00\x39\x22\x15\x10\xEB\xF9\x11\x04\x00\x19\x22\x13\x10\xD1\xE1\xC1\xF9\x79\x32\xFF\x0F\xE1\x19\x7E\xFE\x17\xC2\x23" +
"\x02\x3E\x97\x4F\xE1\x19\x7E\xFE\x17\xC2\x2E\x02\x3E\x97\xB1\x4F\xC3\x67\x05\x3A\x17\x10\xB8\xC2\x19\x02\x21\x12\x00\x39\xF9\xC9" +
"\x1A\x4F\x7E\x12\x71\xEB\x2A\x13\x10\xC1\xF9\xC5\xD5\x2A\x15\x10\xF9\xD1\xC9\x08\xD3\x04\xC9\x31\xFF\x35\xFA\x08\x05\xC3\xC0\x04" +
"\xB2\xFF\x01\x00\xB3\xFF\x60\x02\x33\x02\x01\x00\x4E\x00\x4F\x00\x88\x02\x19\x02\xFF\xFF\xB2\xFF\xB1\xFF\xD8\x02\x19\x02\x4E\x00" +
"\xFF\xFF\x4D\x00\xB0\x02\x4D\x02\x01\x00\x4E\x00\x4F\x00\x88\x02\x33\x02\xB2\xFF\x01\x00\xB3\xFF\x60\x02\x19\x02\x4E\x00\xFF\xFF" +
"\x4D\x00\xB0\x02\x19\x02\xFF\xFF\xB2\xFF\xB1\xFF\xD8\x02\x4D\x02\x4E\x00\xFF\xFF\x4D\x00\xB0\x02\x33\x02\x01\x00\x4E\x00\x4F\x00" +
"\x88\x02\x19\x02\xFF\xFF\xB2\xFF\xB1\xFF\xD8\x02\x19\x02\xB2\xFF\x01\x00\xB3\xFF\x60\x02\x4D\x02\xFF\xFF\xB2\xFF\xB1\xFF\xD8\x02" +
"\x33\x02\x4E\x00\xFF\xFF\x4D\x00\xB0\x02\x19\x02\xB2\xFF\x01\x00\xB3\xFF\x60\x02\x19\x02\x01\x00\x4E\x00\x4F\x00\x88\x02\x4D\x02" +
"\x00\x00\x00\x00\x2A\x2E\x10\xEB\x21\x00\x00\x3E\x20\xBB\xC2\x16\x03\xAF\xBA\xCA\x1E\x03\x22\x11\x10\x3E\x30\x32\x10\x10\x22\x0E" +
"\x10\x3E\x30\x32\x0D\x10\x21\x03\x03\x22\x00\x10\x01\xD0\x7B\x11\x00\x80\x21\x60\x02\x31\x90\x10\xD5\xE5\xC5\x3E\x28\x85\xC2\x43" +
"\x03\x3E\x60\x6F\x03\x3E\xE0\xB9\xD2\x38\x03\x31\xFF\x35\x0E\x1F\xCD\x50\x05\x01\x08\x53\x11\x12\x00\x21\x25\x77\xCD\x3B\x00\xCD" +
"\x3B\x00\x70\x23\x70\x23\x70\x3E\x37\x23\x71\x3D\xC2\x69\x03\x23\x70\x23\x70\x23\x70\x19\x3E\xC3\xBD\xC2\x62\x03\xCD\x3B\x00\xCD" +
"\x3B\x00\x21\xB0\x7F\x22\x00\x76\x21\x03\x00\xCD\x18\xF8\x21\x00\x53\x22\x02\x10\x21\x43\x77\x22\x04\x10\x22\x06\x10\x36\x17\x31" +
"\x2A\x10\x01\x20\x08\x16\x4F\x3A\x01\x10\xE1\x72\xE1\xE1\xC5\xE1\x3D\xC2\xAA\x03\x21\x00\x00\x22\x0B\x10\x21\x00\x00\x22\x09\x10" +
"\x31\x2A\x10\x01\x00\x08\x11\xE1\x7E\x21\x60\x02\xC5\xE5\xD5\x3E\x28\x85\x6F\xFE\xD8\xC2\xCC\x03\x31\xFF\x35\x3E\xFF\x32\x08\x10" +
"\x2A\x09\x10\xEB\x21\xB6\x7F\xCD\x46\x00\x2A\x0B\x10\xEB\x21\xC5\x7F\xCD\x46\x00\x2A\x0E\x10\xEB\x21\xD6\x7F\xCD\x46\x00\x3A\x0D" +
"\x10\x2B\x77\x3A\x00\x10\x21\xE4\x7F\x22\x00\x76\xCD\x4E\x00\x0E\x0A\x11\x00\x10\x21\x06\x07\x00\x00\x00\xCD\x70\x00\xCD\xBF\x00" +
"\x11\x18\x10\xCD\x00\x02\xCD\x70\x00\xCD\x12\x01\x11\x1E\x10\xCD\x00\x02\xCD\x70\x00\xCD\xBF\x00\x11\x24\x10\xCD\x00\x02\xCD\x70" +
"\x00\xCD\x12\x01\x31\x18\x10\x01\x80\x53\x3A\x02\x10\xE1\x36\x0D\xE1\xE1\xC5\xE1\x3D\xF2\x4D\x04\x31\xFF\x35\xC3\x1A\x04\xEB\x21" +
"\x83\x01\xC3\xA4\x01\x71\x23\x7E\xFE\x2A\xCA\xEA\x01\xB8\xCA\xC2\x01\xFE\x09\xDA\x65\x04\xC3\x66\x04\x2A\x0B\x10\x3E\x09\xBC\xD2" +
"\xD8\x03\xEB\x21\xC5\x7F\xCD\x46\x00\x2A\x0E\x10\x7D\x83\x27\x6F\x7C\x8A\x27\x67\x22\x0E\x10\x3A\x0D\x10\xCE\x00\x32\x0D\x10\x2A" +
"\x00\x10\x3E\x02\x85\x27\x6F\x24\x22\x00\x10\x0E\x06\x11\x00\x18\x21\x07\x05\xCD\x56\x00\xC3\x4B\x03\xEB\x21\x7A\x01\xC3\xA4\x01" +
"\x0E\x01\x11\x00\x06\x21\x01\x00\xCD\x56\x00\x2A\x04\x10\xEB\x2A\x06\x10\x22\x04\x10\xCD\xA4\x00\x21\x43\x77\x01\x08\x2A\x23\x7E" +
"\xB8\xC2\xE5\x04\x71\x7C\xFE\x7F\xC2\xDE\x04\x3A\x00\x10\xC6\x99\x27\x32\x00\x10\xCA\x3C\x05\x31\x18\x10\x06\x03\xE1\x36\x53\xE1" +
"\xE1\x05\xC2\xFC\x04\xC3\xBA\x03\x0E\x10\x11\x00\x03\x21\x06\x00\xCD\x56\x00\x2A\x04\x10\xEB\x21\x43\x77\x22\x06\x10\xC3\xD2\x04" +
"\x1F\x0C\x0A\x0A\x0A\x6E\x61\x7E\x61\x6C\x6F\x20\x69\x67\x72\x79\x20\x2D\x20\x27\x70\x72\x6F\x62\x65\x6C\x27\x0C\x00\x21\x20\x05" +
"\xCD\x18\xF8\xCD\x03\xF8\xFE\x20\xCA\x00\x03\xC3\x43\x05\x00\x00\x21\xD0\x76\x11\x80\x20\x72\x23\x7C\xBB\xC2\x56\x05\xC9\x00\x00" +
"\x78\xFE\xFF\xC8\xC3\xCB\x00\x32\x17\x10\xE1\x19\x7E\xFE\x17\xC2\x74\x05\x3E\x97\xB1\xB8\xCA\x40\x02\x4F\x3A\xFF\x0F\xA1\xC2\x57" +
"\x02\xE1\xC9\x0E\x1F\xCD\x09\xF8\x21\xC2\x05\xCD\x18\xF8\xC3\x43\x05\x00\x00\xC3\x30\x0E\xFE\x32\xCA\x42\x0E\xC3\x20\x0E\x21\x83" +
"\x05\x01\x83\x25\x2B\x0B\x0A\x77\x7C\xB5\xC2\x36\x0E\xC3\x3C\x05\x21\x40\x08\x01\xC3\x2D\x2B\x0B\x0A\x77\x7C\xB5\xC2\x48\x0E\xC3" +
"\xC0\x05\x1B\x59\x24\x2D\x17\x20\x20\x17\x20\x20\x17\x17\x20\x20\x20\x17\x17\x20\x20\x17\x20\x20\x17\x20\x17\x20\x20\x17\x20\x17" +
"\x20\x20\x17\x20\x20\x17\x17\x1B\x59\x25\x2D\x17\x20\x20\x17\x20\x17\x20\x20\x17\x20\x17\x20\x20\x17\x20\x17\x20\x20\x17\x20\x17" +
"\x20\x20\x17\x20\x17\x20\x20\x17\x20\x17\x20\x20\x17\x1B\x59\x26\x2D\x17\x20\x17\x20\x20\x17\x20\x20\x20\x20\x17\x20\x20\x17\x20" +
"\x17\x20\x20\x17\x20\x17\x20\x06\x17\x20\x17\x20\x17\x20\x20\x17\x1B\x59\x27\x2D\x17\x17\x20\x20\x20\x17\x20\x20\x20\x20\x17\x20" +
"\x20\x17\x20\x17\x17\x17\x17\x20\x17\x20\x11\x17\x20\x17\x17\x20\x20\x20\x17\x1B\x59\x28\x2D\x17\x20\x17\x20\x20\x17\x20\x20\x20" +
"\x20\x17\x20\x20\x17\x20\x17\x20\x20\x17\x20\x17\x06\x20\x17\x20\x17\x20\x17\x20\x20\x17\x1B\x59\x29\x2D\x17\x20\x20\x17\x20\x17" +
"\x20\x20\x17\x20\x17\x20\x20\x17\x20\x17\x20\x20\x17\x20\x17\x11\x20\x17\x20\x17\x20\x20\x17\x20\x17\x1B\x59\x2A\x2D\x17\x20\x20" +
"\x17\x20\x20\x17\x17\x20\x20\x20\x17\x17\x20\x20\x17\x20\x20\x17\x20\x17\x20\x20\x17\x20\x17\x20\x20\x17\x20\x20\x17\x17\x1B\x59" +
"\x35\x2D\x6E\x61\x7E\x61\x6C\x6F\x20\x69\x67\x72\x79\x20\x5F\x20\x27\x70\x72\x6F\x62\x65\x6C\x27\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\xCD\x30\xF8\x7C\xFE\x75\xCA\x83\x05\x21\x2E\x03\x36\x3B\x21\x5B\x03\x36\x37\x21\x84\x03\x36\x3F\x21\x87\x03\x36\x36\x21\x96\x03" +
"\x36\x37\x21\xC8\x03\x36\x3E\x21\xE6\x03\x36\x3F\x21\xF0\x03\x36\x3F\x21\xFA\x03\x36\x3F\x21\x08\x04\x36\x3F\x21\x0B\x04\x36\x36" +
"\x21\x52\x05\x36\x36\x21\x54\x05\x36\x40\x21\xDA\x04\x36\x37\x21\xE7\x04\x36\x3F\x21\x19\x05\x36\x37\x21\xBE\x01\x36\x37\x21\xCA" +
"\x01\x36\x3F\x21\x48\x00\x36\x36\x21\x85\x04\x36\x3F\x21\x1E\x01\x36\x3F\xC3\x83\x05\x00"};
ui.file_loaded(file);
}
tape_file();