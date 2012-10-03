function tape_file() {
var file = {
name: "GLASS2.GAM",
start: 0x0000,
end: 0x0900,
entry: 0x0000,
image:
"\x31\xFF\x75\x11\xF6\x03\xCD\x50\x03\xAF\x32\x2E\x13\x01\x0A\x10\xCD\x6F\x05\x21\x00\x01\x22\x05\x13\x21\x30\x13\xC3\x9D\x07\x00" +
"\x4E\x00\x50\x00\x02\x00\x00\x00\x4E\x00\x50\x00\x02\x00\x00\x00\x4E\x00\x50\x00\x02\x00\x00\x00\x4E\x00\x50\x00\x02\x00\x00\x00" +
"\x04\x00\xFE\xFF\x02\x00\x00\x00\x9C\x00\xB2\xFF\x4E\x00\x00\x00\x04\x00\xFE\xFF\x02\x00\x00\x00\x9C\x00\xB2\xFF\x4E\x00\x00\x00" +
"\x4C\x00\x4E\x00\x02\x00\x00\x00\x50\x00\x02\x00\xB2\xFF\x00\x00\x4C\x00\x4E\x00\x02\x00\x00\x00\x50\x00\x02\x00\xB2\xFF\x00\x00" +
"\x50\x00\x4E\x00\xFE\xFF\x00\x00\x4C\x00\xFE\xFF\xB2\xFF\x00\x00\x50\x00\x4E\x00\xFE\xFF\x00\x00\x4C\x00\xFE\xFF\xB2\xFF\x00\x00" +
"\x4C\x00\x02\x00\xFE\xFF\x00\x00\x50\x00\x4E\x00\xB2\xFF\x00\x00\xFE\xFF\x02\x00\xB4\xFF\x00\x00\x4E\x00\xB0\xFF\xB2\xFF\x00\x00" +
"\x50\x00\xFE\xFF\x02\x00\x00\x00\x4E\x00\xB4\xFF\xB2\xFF\x00\x00\x02\x00\xFE\xFF\xB0\xFF\x00\x00\x4C\x00\x4E\x00\xB2\xFF\x00\x00" +
"\x4E\x00\xFE\xFF\x02\x00\x00\x00\x4E\x00\x02\x00\xB2\xFF\x00\x00\xFE\xFF\x02\x00\xB2\xFF\x00\x00\x4E\x00\xFE\xFF\xB2\xFF\x00\x00" +
"\x21\x24\x78\x22\x07\x13\x22\x09\x13\xEB\x3E\x14\x32\x19\x13\xAF\x32\x11\x13\x32\x12\x13\xCD\x1F\x02\xCD\x4A\x02\x32\x2F\x13\xCD" +
"\x1F\x02\xCD\x5E\x02\x3A\x2F\x13\xFE\x2E\xC2\x2E\x03\x21\xCE\x7A\x01\x02\x08\x36\x20\x23\x05\xC2\x33\x01\x06\x08\x21\x1C\x7B\x0D" +
"\xC2\x33\x01\x3A\x17\x13\xB7\xC2\x53\x01\x11\xD0\x7A\xCD\x28\x02\xCD\x5E\x02\x3A\x0F\x13\x32\x0D\x13\x3A\x10\x13\x32\x0E\x13\xAF" +
"\x32\x0C\x13\x21\x0D\x13\x3C\xBE\xCC\x7B\x01\x21\x0E\x13\xBE\xCC\xBF\x02\x0E\xFF\x0D\xC2\x74\x01\xC3\x63\x01\xF5\x34\x3E\xFF\x32" +
"\x0B\x13\xCD\x1B\xF8\xFE\xFF\xCA\xBD\x02\x47\x21\x0D\x13\x3A\x0F\x13\x86\x77\x78\xFE\x08\xCA\xE1\x01\xFE\x18\xCA\xEC\x01\xFE\x1A" +
"\xCA\xF7\x01\xFE\x19\xCA\x07\x02\x2A\x07\x13\xEB\xCD\x1F\x02\xCD\x7F\x02\xCD\x1F\x02\x21\x4E\x00\x19\xEB\x3A\x19\x13\x3D\x32\x19" +
"\x13\xCD\x4A\x02\xFE\x2E\xCA\xB2\x01\xCD\x1F\x02\x21\xB2\xFF\x19\x22\x07\x13\xEB\x3A\x19\x13\x3C\x32\x19\x13\xCD\x5E\x02\xC3\xBD" +
"\x02\x2A\x07\x13\x2B\x2B\x22\x09\x13\xC3\x8C\x02\x2A\x07\x13\x23\x23\x22\x09\x13\xC3\x8C\x02\x3A\x11\x13\x3C\xFE\x04\xFA\x01\x02" +
"\xAF\x32\x12\x13\xC3\x8C\x02\x0E\x07\xCD\x09\xF8\x3A\x17\x13\xD6\x04\x32\x17\x13\xCA\xBD\x02\x3E\x04\x32\x17\x13\xC3\xBD\x02\x3A" +
"\x11\x13\x32\x13\x13\xC3\x34\x02\x3A\x00\x13\xC3\x37\x02\x3A\x12\x13\x32\x13\x13\x3A\x01\x13\x0F\x0F\x0F\xE6\xE0\x4F\x3A\x13\x13" +
"\x07\x07\x07\xE6\x1F\x81\x4F\x06\x00\xC9\x0A\x6F\x0C\x0A\x67\x0C\x19\x7E\xFE\x2E\xC0\x79\xE6\x07\xC2\x4A\x02\x3E\x2E\xC9\x3E\x17" +
"\x32\x02\x13\x3E\x11\x32\x03\x13\x0A\x6F\x0C\x0A\x67\x0C\x19\x3A\x02\x13\x77\x23\x3A\x03\x13\x77\x79\xE6\x07\xC2\x68\x02\xC9\x3E" +
"\x2E\x32\x02\x13\x3E\x20\x32\x03\x13\xC3\x68\x02\x2A\x07\x13\xEB\xCD\x1F\x02\xCD\x7F\x02\x2A\x09\x13\xEB\xCD\x2E\x02\xCD\x4A\x02" +
"\xFE\x2E\xC2\xB3\x02\xEB\x22\x07\x13\xAF\x32\x0B\x13\x3A\x12\x13\x32\x11\x13\xCD\x1F\x02\x2A\x07\x13\xEB\xCD\x5E\x02\xF1\xC9\xF5" +
"\x3A\x10\x13\x86\x32\x0E\x13\x2A\x07\x13\xEB\x21\x4E\x00\x19\x22\x09\x13\xCD\x1F\x02\xCD\x7F\x02\x2A\x09\x13\xEB\x79\xD6\x08\x4F" +
"\xCD\x4A\x02\xFE\x2E\xC2\xFB\x02\xEB\x22\x07\x13\x3A\x19\x13\x3D\x32\x19\x13\xCD\x1F\x02\xCD\x5E\x02\xF1\xC9\x3A\x0B\x13\xB7\xC2" +
"\x16\x03\x2A\x07\x13\xEB\xC3\xF3\x02\x2A\x07\x13\xEB\xCD\x1F\x02\xCD\x7F\x02\xC3\xB3\x02\x3A\x0C\x13\xB7\xC2\x24\x03\x3C\x32\x0C" +
"\x13\xC3\x02\x03\x2A\x07\x13\xEB\xCD\x1F\x02\xCD\x5E\x02\x31\xFF\x75\xC3\x36\x08\x2A\x05\x13\x0E\x10\x7C\x29\xE6\x60\xEA\x41\x03" +
"\x23\x0D\xC2\x39\x03\x22\x05\x13\x7C\x85\xE6\x07\xCA\x34\x03\xC9\x0E\x1F\xD5\xCD\x09\xF8\xD1\x21\x97\x79\x06\x07\x1A\x13\x32\x18" +
"\x13\xC5\x01\x08\x08\x1A\x13\xD5\x5F\x3A\x18\x13\x57\x7B\x17\xD2\x73\x03\x72\x23\x0D\xC2\x6E\x03\x0E\x08\xD1\x05\xC2\x65\x03\xC1" +
"\x05\xC8\x0E\x0E\x23\x0D\xC2\x84\x03\xC3\x61\x03\x0E\x1F\xCD\x09\xF8\x16\x15\xD5\xCD\x77\x05\x01\x18\x0B\xCD\x6F\x05\xD1\x15\xCA" +
"\xAD\x03\xD5\x21\x5D\x04\xCD\x18\xF8\xD1\xC3\x93\x03\x21\x74\x04\xCD\x18\xF8\x0E\x0C\xCD\x09\xF8\xC9\x21\x85\x78\x11\x8B\x04\xCD" +
"\xED\x03\x21\x1E\x79\xCD\xED\x03\x21\x6C\x79\xCD\xED\x03\x21\xBA\x79\xCD\xED\x03\x21\x08\x7A\xCD\xED\x03\x21\xDC\x7B\xCD\xED\x03" +
"\x21\x78\x7C\xCD\xED\x03\x21\x14\x7D\xCD\xED\x03\xC9\x1A\x13\xB7\xC8\x77\x23\xC3\xED\x03\x40\x00\x78\xFE\x18\x42\x18\x42\x00\x00" +
"\x84\x10\x24\x44\x24\x42\x00\x00\x80\x10\x42\x48\x42\x42\x00\x00\x80\x10\x42\x70\x42\x7E\x00\x00\x80\x10\x7E\x48\x7E\x42\x00\x00" +
"\x84\x10\x42\x44\x42\x42\x00\x00\x78\x10\x42\x42\x42\x42\x00\x0D\x0A\x0A\x20\x20\x20\x20\x20\x77\x61\x7B\x65\x20\x69\x6D\x71\x20" +
"\x3F\x20\x00\x0D\x0A\x0A\x20\x20\x20\x20\x20\x77\x61\x7B\x20\x72\x61\x6E\x67\x20\x28\x30\x2D\x39\x29\x20\x3F\x20\x00\x11\x2E\x20" +
"\x2E\x20\x2E\x20\x2E\x20\x2E\x20\x2E\x20\x2E\x20\x2E\x20\x2E\x20\x2E\x20\x11\x00\x15\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14" +
"\x14\x14\x14\x14\x14\x14\x14\x14\x14\x11\x00\x75\x70\x72\x61\x77\x6C\x65\x6E\x69\x65\x00\x1D\x20\x2D\x20\x73\x64\x77\x69\x67\x20" +
"\x77\x6C\x65\x77\x6F\x00\x0E\x20\x2D\x20\x73\x64\x77\x69\x67\x20\x77\x70\x72\x61\x77\x6F\x00\x0F\x20\x2D\x20\x70\x6F\x77\x6F\x72" +
"\x6F\x74\x00\x0B\x20\x2D\x20\x70\x6F\x6B\x61\x7A\x61\x74\x78\x20\x73\x6C\x65\x64\x75\x60\x7D\x60\x60\x00\x77\x73\x65\x67\x6F\x20" +
"\x6F\x7E\x6B\x6F\x77\x20\x20\x2D\x00\x72\x61\x6E\x67\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2D\x00\x70\x6F\x6C\x6E\x79\x68\x20\x73" +
"\x74\x72\x6F\x6B\x20\x2D\x00\x21\xE6\x7D\x22\x2A\x13\x06\x14\x0E\x0A\x7E\xFE\x2E\xCA\x26\x05\x23\x23\x0D\xC2\x11\x05\xCD\x35\x05" +
"\x2A\x2A\x13\xC3\x0F\x05\x11\xB2\xFF\x2A\x2A\x13\x19\x22\x2A\x13\x05\xC2\x0F\x05\xC9\xC5\x3A\x14\x13\x3C\x32\x14\x13\x2A\x2A\x13" +
"\x22\x2C\x13\x05\x0E\x14\x2A\x2C\x13\xEB\x21\xB2\xFF\x19\x22\x2C\x13\x7E\x12\x13\x23\x0D\xC2\x51\x05\x05\xC2\x44\x05\x2A\x2C\x13" +
"\x11\x20\x2E\x0E\x0A\x72\x23\x73\x23\x0D\xC2\x65\x05\xC1\xC9\xCD\x09\xF8\x05\xC2\x6F\x05\xC9\x0E\x0A\xCD\x09\xF8\x0E\x0D\xC3\x09" +
"\xF8\x3A\x14\x13\x3C\x47\x3A\x38\x13\x3C\x4F\xAF\xC6\x0A\x0D\xC2\x8C\x05\xB8\xF0\x3A\x38\x13\xFE\x09\xC8\x3C\x32\x38\x13\x0E\x07" +
"\xC3\x09\xF8\x3A\x19\x13\x21\x38\x13\x86\x86\x86\x21\x17\x13\x86\x5F\x16\x00\x2A\x15\x13\x19\x22\x15\x13\xC9\x22\x27\x13\xEB\xAF" +
"\x32\x26\x13\x7C\x32\x29\x13\x1E\x00\x06\x10\xB7\x7D\x17\x6F\x7C\x17\x67\x7B\x17\x5F\xD6\x0A\x3F\xD2\xDC\x05\x5F\x05\xC2\xCC\x05" +
"\x17\xE6\x01\x29\xB5\x6F\x7B\xC6\x30\xCD\xFE\x05\x7C\xB5\xC2\xC7\x05\x3A\x29\x13\xB7\xF2\xFD\x05\x3E\x2D\xCD\xFE\x05\xC9\xE5\x4F" +
"\x2A\x27\x13\x54\x5D\x23\x22\x27\x13\x3A\x26\x13\xB7\xCA\x1B\x06\x47\xEB\x7E\xEB\x77\x2B\x1B\x05\xC2\x11\x06\x79\x77\x3A\x26\x13" +
"\x3C\x32\x26\x13\x2B\x77\xE1\xC9\x46\x23\x7E\x12\x23\x13\x05\xC2\x2A\x06\xC9\x21\x30\x13\x06\x08\xE5\xCD\x03\xF8\x4F\xFE\x08\xCA" +
"\x57\x06\xFE\x0D\xCA\x66\x06\xFE\x20\xFA\x39\x06\xCD\x09\xF8\xE1\x71\x23\x05\xC2\x38\x06\xC9\x78\xFE\x08\xF2\x39\x06\xCD\x09\xF8" +
"\xE1\x2B\x04\xC3\x38\x06\xE1\x36\x20\x23\x05\xC2\x67\x06\xC9\x21\x00\x10\x3A\x2E\x13\x3C\x5F\x16\x01\x7A\xFE\x0A\xF2\xD2\x06\x0E" +
"\x20\xC6\x30\x47\xCD\x8A\x07\x48\xCD\x8A\x07\x0E\x2E\xCD\x8A\x07\xCD\x88\x07\x06\x08\xCD\x7E\x07\xCD\x92\x07\x7E\x23\xC6\x30\x4F" +
"\xCD\x8A\x07\xCD\x92\x07\x06\x06\x23\xCD\x7E\x07\xCD\x92\x07\x01\x08\x03\xCD\x95\x07\x3A\x22\x13\xBA\xC2\xC4\x06\x0E\x2A\xCD\x8A" +
"\x07\xCD\x8A\x07\x14\x7A\xBB\xF0\xE5\xD5\xCD\x77\x05\xD1\xE1\xC3\x79\x06\x0E\x31\xC6\x26\x47\xC3\x84\x06\x3A\x2E\x13\xB7\xC2\xEE" +
"\x06\x3C\x32\x2E\x13\x11\x00\x10\x21\x30\x13\xC3\x73\x07\x47\x04\x0E\x00\x11\x39\x13\x21\x00\x10\x79\x07\x07\x07\x07\xC6\x09\x6F" +
"\x1A\xBE\xCA\x2E\x07\xFA\x3C\x07\x7D\xE6\xF0\x6F\x22\x20\x13\x79\x3C\x32\x22\x13\xCD\x60\x07\x2A\x20\x13\xEB\x21\x30\x13\x06\x10" +
"\xCD\x75\x07\x3A\x2E\x13\xFE\x0F\xC8\x3C\x32\x2E\x13\xC9\x7E\x23\x13\x32\x23\x13\x1A\xBE\xCA\x56\x07\xF2\x08\x07\x0C\x78\xB9\xC2" +
"\xF2\x06\x0D\x3A\x2E\x13\xFE\x0F\xC2\x08\x07\x11\xE0\x10\x3E\x0F\x32\x22\x13\xC3\x1B\x07\x3A\x23\x13\x3D\xC2\x2F\x07\xC3\x3C\x07" +
"\x21\xEF\x10\x11\xFF\x10\x7E\x12\x2B\x1B\x3A\x20\x13\x3D\xBD\xC2\x66\x07\xC9\x06\x10\x7E\x12\x23\x13\x05\xC2\x75\x07\xC9\x4E\x23" +
"\xCD\x8A\x07\x05\xC2\x7E\x07\xC9\x0E\x20\xE5\xD5\xCD\x09\xF8\xD1\xE1\xC9\x01\x20\x05\xE5\xD5\xCD\x6F\x05\xD1\xE1\xC9\x01\x20\x10" +
"\x71\x23\x05\xC2\xA0\x07\x21\x2F\x04\xCD\x18\xF8\xCD\x33\x06\x21\x43\x04\xCD\x18\xF8\xCD\x03\xF8\x4F\xD6\x30\xFA\xB5\x07\xFE\x0A" +
"\xF2\xB5\x07\x32\x38\x13\xCD\x8C\x03\x21\x00\x00\x22\x15\x13\xAF\x32\x14\x13\x3E\x04\x32\x17\x13\xCD\xB9\x03\xCD\x34\x03\x32\x00" +
"\x13\x3A\x38\x13\x21\x88\x7C\xC6\x30\x77\x21\x1A\x13\x3A\x14\x13\x5F\x16\x00\xCD\xBB\x05\x21\x1A\x13\x11\x24\x7D\xCD\x28\x06\x11" +
"\x39\x13\x2A\x15\x13\xEB\xCD\xBB\x05\x21\x39\x13\x11\xEC\x7B\xCD\x28\x06\x3A\x00\x13\x32\x01\x13\xCD\x34\x03\x32\x00\x13\x3E\x5A" +
"\x21\x38\x13\x96\x96\x96\x96\x96\x96\x32\x10\x13\x3E\x50\x96\x96\x32\x0F\x13\xC3\x00\x01\xCD\x07\x05\xCD\x81\x05\xCD\xA3\x05\x3A" +
"\x2F\x13\xFE\x2E\xCA\xE1\x07\xCD\xDA\x06\x21\x82\x08\xCD\x18\xF8\xCD\x77\x05\xCD\x6F\x06\x21\x6E\x08\xCD\x18\xF8\xCD\x03\xF8\xE6" +
"\x5F\xFE\x44\xCA\x19\x00\xFE\x4E\xCA\x6C\xF8\xC3\x5C\x08\x1B\x59\x34\x25\x65\x7D\x65\x20\x72\x61\x7A\x20\x28\x44\x2F\x4E\x29\x20" +
"\x3F\x00\x1F\x0A\x0A\x20\x20\x20\x20\x20\x20\x69\x6D\x71\x20\x20\x20\x20\x20\x20\x72\x61\x6E\x67\x20\x20\x20\x20\x6F\x7E\x6B\x69" +
"\x0D\x0A\x00\xCA\x62\x03\x79\xBA\xCA\x0B\x03\x78\xA3\xBA\xC2\x36\x03\x3E\x23\x32\x5A\x03\xC3\x55\x03\xBB\xC2\x42\x03\x3E\x2B\x32" +
"\x5A\x03\xC3\x55\x03\xFE\x40\xC2\x4D\x03\x11\xB2\xFF\xC3\x50\x03\x11\x4E\x00\x3E\x19\x32\x5A\x03\x78\xE6\x3F\x47\x71\x23\x05\xC2" +
"\xE0\x01\xC3\x0B\x03\xC9\x00\x00\x00\xC9\x00\x00\x00\x00\x00\x00\x00\x02\x03\x03\x2E\x14\x02\x20\x81\x03\x01\x05\x01\x10\x81\x02" +
"\x00"};
ui.file_loaded(file);
}
tape_file();
