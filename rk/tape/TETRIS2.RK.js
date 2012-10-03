function tape_file() {
var file = {
name: "TETRIS2.RK",
start: 0x0000,
end: 0x0c8d,
entry: 0x0000,
image:
"\xC3\x63\x0C\x18\x39\x17\x39\x16\x39\x15\x39\xC9\x38\xCA\x38\x66\x39\x65\x39\x18\x39\x17\x39\x16\x39\x15\x39\xC9\x38\xCA\x38\x66" +
"\x39\x65\x39\x5B\x97\x77\x78\x08\x66\x39\x78\x00\x9C\x7D\x73\x38\x25\x38\x1F\x1B\x59\x23\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A" +
"\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A" +
"\x2A\x2A\x2A\x2A\x1B\x59\x24\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A" +
"\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x1B\x59\x25\x2A\x2A\x2A\x20\x20\x20\x20\x20" +
"\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x20\x20\x20\x20\x2A\x2A\x1B\x59\x26\x2A\x2A\x2A\x20\x20\x20\x17\x17\x17\x17\x17\x20\x17\x17\x17\x17\x17\x20\x17\x17\x17\x17\x17" +
"\x20\x17\x17\x17\x17\x20\x20\x17\x20\x20\x20\x17\x20\x20\x17\x17\x17\x20\x20\x20\x20\x2A\x2A\x1B\x59\x27\x2A\x2A\x2A\x20\x20\x20" +
"\x20\x20\x7F\x20\x20\x20\x7F\x20\x20\x20\x20\x20\x20\x20\x7F\x20\x20\x20\x7F\x20\x20\x20\x7F\x20\x7F\x20\x20\x20\x7F\x20\x7F\x20" +
"\x20\x20\x7F\x20\x20\x20\x2A\x2A\x1B\x59\x28\x2A\x2A\x2A\x20\x20\x20\x20\x20\x7F\x20\x20\x20\x7F\x20\x20\x20\x20\x20\x20\x20\x7F" +
"\x20\x20\x20\x7F\x20\x20\x20\x7F\x20\x7F\x20\x20\x7F\x7F\x20\x7F\x20\x20\x20\x20\x20\x20\x20\x2A\x2A\x1B\x59\x29\x2A\x2A\x2A\x20" +
"\x20\x20\x20\x20\x7F\x20\x20\x20\x7F\x7F\x7F\x20\x20\x20\x20\x20\x7F\x20\x20\x20\x7F\x7F\x7F\x7F\x20\x20\x7F\x20\x7F\x20\x7F\x20" +
"\x7F\x20\x20\x20\x20\x20\x20\x20\x2A\x2A\x1B\x59\x2A\x2A\x2A\x2A\x20\x20\x20\x20\x20\x7F\x20\x20\x20\x7F\x20\x20\x20\x20\x20\x20" +
"\x20\x7F\x20\x20\x20\x7F\x20\x20\x20\x20\x20\x7F\x7F\x20\x20\x7F\x20\x7F\x20\x20\x20\x20\x20\x20\x20\x2A\x2A\x1B\x59\x2B\x2A\x2A" +
"\x2A\x20\x20\x20\x20\x20\x7F\x20\x20\x20\x7F\x20\x20\x20\x20\x20\x20\x20\x7F\x20\x20\x20\x7F\x20\x20\x20\x20\x20\x7F\x20\x20\x20" +
"\x7F\x20\x7F\x20\x20\x20\x7F\x20\x20\x20\x2A\x2A\x1B\x59\x2C\x2A\x2A\x2A\x20\x20\x20\x20\x20\x7F\x20\x20\x20\x7F\x7F\x7F\x7F\x7F" +
"\x20\x20\x20\x7F\x20\x20\x20\x7F\x20\x20\x20\x20\x20\x7F\x20\x20\x20\x7F\x20\x20\x7F\x7F\x7F\x20\x20\x20\x20\x2A\x2A\x1B\x59\x2D" +
"\x2A\x2A\x2A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2A\x2A\x1B\x59\x2E\x2A\x2A\x2A\x20\x20\x20\x20\x20\x6E\x61\x7E\x61\x6C\x6F\x20" +
"\x69\x20\x70\x72\x6F\x64\x6F\x6C\x76\x65\x6E\x69\x65\x20\x69\x67\x72\x79\x20\x2D\x20\x22\x77\x6B\x22\x20\x20\x20\x20\x2A\x2A\x1B" +
"\x59\x2F\x2A\x2A\x2A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2A\x2A\x1B\x59\x30\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A" +
"\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A" +
"\x2A\x1B\x59\x31\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A" +
"\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x00\x1B\x59\x33\x2D\x77\x77\x65\x64\x69\x74\x65\x20\x75" +
"\x72\x6F\x77\x65\x6E\x78\x20\x73\x6C\x6F\x76\x6E\x6F\x73\x74\x69\x20\x28\x30\x20\x2D\x20\x35\x29\x3A\x20\x00\x1B\x59\x2A\x30\x2A" +
"\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x1B\x59\x2B" +
"\x30\x2A\x20\x20\x20\x20\x20\x20\x20\x69\x67\x72\x61\x20\x6F\x6B\x6F\x6E\x7E\x65\x6E\x61\x20\x20\x20\x20\x20\x20\x20\x20\x2A\x1B" +
"\x59\x2C\x30\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A" +
"\x2A\x00\x00\x00\x00\x00\x00\x1B\x59\x2D\x30\x2A\x20\x77\x79\x20\x75\x73\x74\x61\x6E\x6F\x77\x69\x6C\x69\x20\x72\x65\x6B\x6F\x72" +
"\x64\x3A\x20\x20\x20\x20\x20\x20\x2A\x1B\x59\x2E\x30\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A" +
"\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x1B\x59\x2D\x48\x00\x00\x01\x00\x1B\x59\x37\x3A\x6F\x7E\x6B\x69\x3A\x00\x1B\x59\x37" +
"\x42\x00\x0C\x0A\x20\x20\x20\x0B\x20\x2D\x20\x70\x6F\x77\x6F\x72\x6F\x74\x0D\x0A\x20\x20\x20\x0E\x20\x2D\x20\x77\x70\x72\x61\x77" +
"\x6F\x0D\x0A\x20\x20\x20\x1D\x20\x2D\x20\x77\x6C\x65\x77\x6F\x0D\x0A\x20\x20\x20\x70\x72\x6F\x62\x65\x6C\x20\x2D\x20\x77\x6E\x69" +
"\x7A\x0D\x0A\x0A\x20\x20\x20\x72\x65\x6B\x6F\x72\x64\x3A\x20\x00\x00\x20\x20\x20\x20\x20\x73\x6F\x73\x74\x61\x77\x69\x6C\x20\x72" +
"\x6F\x7D\x69\x6E\x20\x61\x2E\x77\x2E\x20\x20\x20\x20\x20\x00\x00\x21\x32\x00\xCD\x18\xF8\x21\x13\x03\xCD\x18\xF8\x3E\x00\x32\x6F" +
"\x04\xCD\x03\xF8\x4F\xCD\x09\xF8\xFE\x30\xC2\x95\x04\x3E\x01\x32\x2A\x00\xC3\xE3\x04\xFE\x31\xC2\xA2\x04\x3E\x1E\x32\x2A\x00\xC3" +
"\xE3\x04\xFE\x32\xC2\xAF\x04\x3E\x50\x32\x2A\x00\xC3\xE3\x04\xFE\x33\xC2\xBC\x04\x3E\x78\x32\x2A\x00\xC3\xE3\x04\xFE\x34\xC2\xC9" +
"\x04\x3E\xA0\x32\x2A\x00\xC3\xE3\x04\xFE\x35\xC2\xD6\x04\x3E\xC8\x32\x2A\x00\xC3\xE3\x04\x0E\x08\xCD\x09\xF8\x0E\x3F\xCD\x09\xF8" +
"\xC3\x81\x04\xCD\x03\xF8\xFE\x0D\xC2\xE3\x04\x21\x00\x00\x22\xF1\x03\xCD\x86\x05\x21\x02\x04\xCD\x18\xF8\x3A\xA4\x03\xCD\x15\xF8" +
"\x3A\xA3\x03\xCD\x15\xF8\x21\xF3\x03\xCD\x18\xF8\xCD\x1B\xF8\xFE\x20\xCA\x0C\x05\x2A\x25\x00\x22\x28\x00\xCD\x11\x0C\xCD\xB6\x05" +
"\x5F\x16\x00\x21\x28\x05\x19\xE9\xC3\x47\x05\x00\xC3\x4B\x08\x00\xC3\x6F\x08\x00\xC3\x93\x08\x00\xC3\xB7\x08\x00\xC3\xDE\x08\x00" +
"\xC3\x02\x09\x00\xC3\x1D\x05\xCD\x6B\x05\xCD\x16\x07\x06\x17\xCD\x6F\x06\xCD\x90\x06\xCD\x6B\x05\xCD\x67\x07\xFE\x00\xCA\x4A\x05" +
"\xFE\x02\xCA\x47\x05\xCD\xDE\x07\xC3\x0C\x05\x21\x76\x05\x3A\x27\x00\x4F\x06\x00\x09\xE9\xC3\xD0\x05\x00\xC3\xF9\x05\x00\xC3\x20" +
"\x06\x00\xC3\x49\x06\xC9\x0E\x1F\xCD\x09\xF8\x2A\x25\x00\x11\xF6\xFF\x19\x11\x4E\x00\x06\x12\x36\x06\x19\x05\xC2\x97\x05\x06\x14" +
"\x23\x36\x03\x23\x05\xC2\xA1\x05\x11\xB2\xFF\x06\x12\x19\x36\x11\x19\x05\xC2\xAE\x05\xC9\xC5\x2A\x23\x00\x0E\x10\x7C\x29\xE6\x60" +
"\xEA\xC4\x05\x23\x0D\xC2\xBC\x05\x22\x23\x00\x7D\xE6\x1C\xC1\xC9\x2A\x28\x00\x22\x13\x00\x2B\x22\x15\x00\x23\x23\x22\x17\x00\x23" +
"\x22\x19\x00\x11\xAF\xFF\x19\x22\x1B\x00\x23\x22\x1D\x00\x19\x23\x23\x22\x1F\x00\x23\x22\x21\x00\xC9\x2A\x28\x00\x22\x13\x00\x2B" +
"\x22\x15\x00\x23\x23\x22\x17\x00\x23\x22\x19\x00\x23\x22\x1B\x00\x23\x22\x1D\x00\x11\x49\x00\x19\x22\x1F\x00\x23\x22\x21\x00\xC9" +
"\x2A\x28\x00\x22\x13\x00\x2B\x22\x15\x00\x2B\x22\x17\x00\x2B\x22\x19\x00\x11\x50\x00\x19\x22\x1B\x00\x23\x22\x1D\x00\x11\x4D\x00" +
"\x19\x22\x1F\x00\x23\x22\x21\x00\xC9\x2A\x28\x00\x22\x13\x00\x2B\x22\x15\x00\x2B\x22\x17\x00\x2B\x22\x19\x00\x2B\x22\x1B\x00\x2B" +
"\x22\x1D\x00\x11\xB6\xFF\x19\x22\x1F\x00\x23\x22\x21\x00\xC9\x2A\x03\x00\x70\x2A\x05\x00\x70\x2A\x07\x00\x70\x2A\x09\x00\x70\x2A" +
"\x0B\x00\x70\x2A\x0D\x00\x70\x2A\x0F\x00\x70\x2A\x11\x00\x70\xC9\x3A\x2A\x00\x4F\x0D\x3E\x00\x32\x2B\x00\xCD\x79\x0C\xFE\x18\xC2" +
"\xB2\x06\x2A\x28\x00\x23\x23\x22\x28\x00\x3E\x02\x32\x2B\x00\xC3\x09\x07\xFE\x08\xC2\xC7\x06\x2A\x28\x00\x2B\x2B\x22\x28\x00\x3E" +
"\x03\x32\x2B\x00\xC3\x09\x07\xFE\x19\xC2\xDE\x06\x3A\x27\x00\xC6\x04\xE6\x0C\x32\x27\x00\x3E\x01\x32\x2B\x00\xC3\x09\x07\xFE\x20" +
"\xC2\xEE\x06\x2A\x28\x00\x11\x4E\x00\x19\x22\x28\x00\xC9\xFE\x03\xCA\x70\x04\x06\xFF\x05\xC2\xF5\x06\x79\xFE\x00\xC2\x94\x06\x2A" +
"\x28\x00\x11\x4E\x00\x19\x22\x28\x00\x0E\x32\x06\xFF\x05\xC2\x0D\x07\x0D\xC2\x0B\x07\xC9\x06\x10\x11\x03\x00\x21\x13\x00\x7E\x12" +
"\x23\x13\x05\xC2\x1E\x07\xC9\x06\x00\x2A\x13\x00\xCD\x5A\x07\x2A\x15\x00\xCD\x5A\x07\x2A\x17\x00\xCD\x5A\x07\x2A\x19\x00\xCD\x5A" +
"\x07\x2A\x1B\x00\xCD\x5A\x07\x2A\x1D\x00\xCD\x5A\x07\x2A\x1F\x00\xCD\x5A\x07\x2A\x21\x00\xCD\x5A\x07\xC9\x7E\xFE\x00\xCA\x66\x07" +
"\xC1\x06\x01\xC3\x59\x07\xC9\x06\x00\xCD\x6F\x06\xCD\x27\x07\x78\xFE\x00\xCA\xD5\x07\x06\x17\xCD\x6F\x06\x3A\x2B\x00\xFE\x01\xC2" +
"\x8F\x07\x3A\x27\x00\xC6\x0C\xE6\x0C\x32\x27\x00\xC3\xDB\x07\xFE\x02\xC2\x9F\x07\x2A\x28\x00\x2B\x2B\x22\x28\x00\xC3\xDB\x07\xFE" +
"\x03\xC2\xAF\x07\x2A\x28\x00\x23\x23\x22\x28\x00\xC3\xDB\x07\x2A\x25\x00\xEB\x2A\x03\x00\x7A\xBC\xC2\xD8\x07\x7B\xBD\xC2\xD8\x07" +
"\x21\x3B\x03\xCD\x18\xF8\xE1\xCD\x37\x0C\xCD\x03\xF8\xFE\x0D\xC2\xCA\x07\xC3\x70\x04\x3E\x00\xC9\x3E\x01\xC9\x3E\x02\xC9\x0E\x12" +
"\x11\xB2\xFF\x2A\x2C\x00\x22\x30\x00\x2A\x30\x00\x06\x14\x7E\xFE\x17\xC2\x3F\x08\x23\x05\xC2\xEE\x07\xC5\x2A\x30\x00\x22\x2E\x00" +
"\x06\x14\x11\xB2\xFF\x19\xEB\x2A\x2E\x00\x1A\x77\x23\x13\x05\xC2\x0A\x08\x2A\x2E\x00\x11\xB2\xFF\x19\x0D\xC2\xFD\x07\x0E\x07\xCD" +
"\x09\xF8\xC1\x3A\x6F\x04\xFE\xFF\xCA\x3C\x08\x3C\x32\x6F\x04\x3A\x2A\x00\xFE\x0A\xDA\x3C\x08\xD6\x03\x32\x2A\x00\xC3\xE9\x07\x2A" +
"\x30\x00\x19\x22\x30\x00\x0D\xC2\xE9\x07\xC9\xCD\x51\x09\xCD\x16\x07\x06\x17\xCD\x6F\x06\xCD\x90\x06\xCD\x51\x09\xCD\x67\x07\xFE" +
"\x00\xCA\x4E\x08\xFE\x02\xCA\x4B\x08\xCD\xDE\x07\xC3\x0C\x05\xCD\xBB\x09\xCD\x16\x07\x06\x17\xCD\x6F\x06\xCD\x90\x06\xCD\xBB\x09" +
"\xCD\x67\x07\xFE\x00\xCA\x72\x08\xFE\x02\xCA\x6F\x08\xCD\xDE\x07\xC3\x0C\x05\xCD\x2B\x09\xCD\x16\x07\x06\x17\xCD\x6F\x06\xCD\x90" +
"\x06\xCD\x2B\x09\xCD\x67\x07\xFE\x00\xCA\x96\x08\xFE\x02\xCA\x93\x08\xCD\xDE\x07\xC3\x0C\x05\xCD\x25\x0A\xCD\x16\x07\x06\x17\xCD" +
"\x6F\x06\xCD\x90\x06\xCD\x25\x0A\xCD\x67\x07\xFE\x00\xCA\xBA\x08\xFE\x02\xCA\xB7\x08\xCD\xDE\x07\xC3\x0C\x05\xC3\x0C\x05\xCD\xE2" +
"\x0A\xCD\x16\x07\x06\x17\xCD\x6F\x06\xCD\x90\x06\xCD\xE2\x0A\xCD\x67\x07\xFE\x00\xCA\xE1\x08\xFE\x02\xCA\xDE\x08\xCD\xDE\x07\xC3" +
"\x0C\x05\xCD\xF6\x0B\xCD\x16\x07\x06\x17\xCD\x6F\x06\xCD\x90\x06\xCD\xF6\x0B\xCD\x67\x07\xFE\x00\xCA\x05\x09\xFE\x02\xCA\x02\x09" +
"\xCD\xDE\x07\xC3\x0C\x05\x00\x00\x00\x00\x00\x2A\x28\x00\x22\x13\x00\x2B\x22\x15\x00\x2B\x22\x17\x00\x2B\x22\x19\x00\x11\xB2\xFF" +
"\x19\x22\x1B\x00\x23\x22\x1D\x00\x23\x22\x1F\x00\x23\x22\x21\x00\xC9\x21\x5C\x09\x3A\x27\x00\x4F\x06\x00\x09\xE9\xC3\x6C\x09\x00" +
"\xC3\x95\x09\x00\xC3\x6C\x09\x00\xC3\x95\x09\xC9\x2A\x28\x00\x22\x13\x00\x2B\x22\x15\x00\x2B\x22\x17\x00\x2B\x22\x19\x00\x11\xB2" +
"\xFF\x19\x22\x1B\x00\x23\x22\x1D\x00\x11\x9D\x00\x19\x22\x1F\x00\x23\x22\x21\x00\xC9\x2A\x28\x00\x22\x13\x00\x2B\x22\x15\x00\x2B" +
"\x22\x17\x00\x2B\x22\x19\x00\x11\xB4\xFF\x19\x22\x1B\x00\x23\x22\x1D\x00\x23\x22\x1F\x00\x23\x22\x21\x00\xC9\x21\xC6\x09\x3A\x27" +
"\x00\x4F\x06\x00\x09\xE9\xC3\xD6\x09\x00\xC3\xFF\x09\x00\xC3\xD6\x09\x00\xC3\xFF\x09\xC9\x2A\x28\x00\x22\x13\x00\x2B\x22\x15\x00" +
"\x2B\x22\x17\x00\x2B\x22\x19\x00\x11\x4E\x00\x19\x22\x1B\x00\x23\x22\x1D\x00\x11\x65\xFF\x19\x22\x1F\x00\x23\x22\x21\x00\xC9\x2A" +
"\x28\x00\x22\x13\x00\x2B\x22\x15\x00\x2B\x22\x17\x00\x2B\x22\x19\x00\x11\x50\x00\x19\x22\x1B\x00\x23\x22\x1D\x00\x23\x22\x1F\x00" +
"\x23\x22\x21\x00\xC9\x21\x30\x0A\x3A\x27\x00\x4F\x06\x00\x09\xE9\xC3\x40\x0A\x00\xC3\x69\x0A\x00\xC3\x92\x0A\x00\xC3\xBC\x0A\xC9" +
"\x2A\x28\x00\x22\x13\x00\x2B\x22\x15\x00\x2B\x22\x17\x00\x2B\x22\x19\x00\x11\xB4\xFF\x19\x22\x1B\x00\x23\x22\x1D\x00\x11\xB2\xFF" +
"\x19\x22\x1F\x00\x2B\x22\x21\x00\xC9\x2A\x28\x00\x22\x13\x00\x2B\x22\x15\x00\x11\xB2\xFF\x19\x22\x17\x00\x23\x22\x19\x00\x11\x4F" +
"\x00\x19\x22\x1B\x00\x23\x22\x1D\x00\x23\x22\x1F\x00\x23\x22\x21\x00\xC9\x2A\x28\x00\x22\x13\x00\x2B\x22\x15\x00\x23\x23\x22\x17" +
"\x00\x23\x22\x19\x00\x11\x4B\x00\x19\x22\x1B\x00\x23\x22\x1D\x00\x11\x4E\x00\x19\x22\x1F\x00\x2B\x22\x21\x00\xC9\x2A\x28\x00\x22" +
"\x13\x00\x2B\x22\x15\x00\x2B\x22\x17\x00\x2B\x22\x19\x00\x2B\x22\x1B\x00\x2B\x22\x1D\x00\x11\x52\x00\x19\x22\x1F\x00\x23\x22\x21" +
"\x00\xC9\x21\xED\x0A\x3A\x27\x00\x4F\x06\x00\x09\xE9\xC3\xFD\x0A\x00\xC3\x29\x0B\x00\xC3\xFD\x0A\x00\xC3\x29\x0B\xC9\x2A\x28\x00" +
"\x22\x13\x00\x2B\x22\x15\x00\x11\x4E\x00\x19\x22\x17\x00\x23\x22\x19\x00\x11\x64\xFF\x19\x22\x1B\x00\x2B\x22\x1D\x00\x11\xB2\xFF" +
"\x19\x22\x1F\x00\x23\x22\x21\x00\xC9\x2A\x28\x00\x22\x13\x00\x2B\x22\x15\x00\x2B\x22\x17\x00\x2B\x22\x19\x00\x11\x04\x00\x19\x22" +
"\x1B\x00\x23\x22\x1D\x00\x23\x22\x1F\x00\x23\x22\x21\x00\xC9\x2A\x28\x00\x22\x13\x00\x23\x22\x15\x00\x23\x22\x17\x00\x11\xFD\xFF" +
"\x19\x22\x19\x00\x11\x4E\x00\x19\x22\x1B\x00\x23\x22\x1D\x00\x11\x64\xFF\x19\x22\x1F\x00\x2B\x22\x21\x00\xC9\x2A\x28\x00\x22\x13" +
"\x00\x23\x22\x15\x00\x23\x22\x17\x00\x11\xFB\xFF\x19\x22\x19\x00\x23\x22\x1B\x00\x23\x22\x1D\x00\x11\x4E\x00\x19\x22\x1F\x00\x23" +
"\x22\x21\x00\xC9\x2A\x28\x00\x22\x13\x00\x2B\x22\x15\x00\x2B\x22\x17\x00\x2B\x22\x19\x00\x11\xB4\xFF\x19\x22\x1B\x00\x23\x22\x1D" +
"\x00\x11\x9C\x00\x19\x22\x1F\x00\x2B\x22\x21\x00\xC9\x2A\x28\x00\x22\x13\x00\x23\x22\x15\x00\x23\x22\x17\x00\x11\xFB\xFF\x19\x22" +
"\x19\x00\x23\x22\x1B\x00\x23\x22\x1D\x00\x11\xB2\xFF\x19\x22\x1F\x00\x23\x22\x21\x00\xC9\x21\x01\x0C\x3A\x27\x00\x4F\x06\x00\x09" +
"\xE9\xC3\x4F\x0B\x00\xC3\x7B\x0B\x00\xC3\xA4\x0B\x00\xC3\xCD\x0B\xC9\x2A\xF1\x03\x7D\xC6\x01\x27\x6F\xDA\x1F\x0C\xC3\x24\x0C\x7C" +
"\xC6\x01\x27\x67\x22\xF1\x03\xEB\x21\xFD\x03\xCD\x18\xF8\x7A\xCD\x15\xF8\x7B\xCD\x15\xF8\xC9\x21\xA4\x03\x3A\xF2\x03\xBE\xDA\x61" +
"\x0C\xC2\x4C\x0C\x2B\x3A\xF1\x03\xBE\xDA\x61\x0C\x2A\xF1\x03\x22\xA3\x03\xEB\x21\xA7\x03\xCD\x18\xF8\x7A\xCD\x15\xF8\x7B\xCD\x15" +
"\xF8\xC9\x00\xCD\x30\xF8\x7C\xFE\x75\xCA\x70\x04\x21\x26\x00\x36\x38\x2E\x2D\x36\x3D\xC3\x70\x04\x00\xCD\x1B\xF8\xFE\xFF\xC8\xFE" +
"\x20\xC8\x47\x21\xFF\x0F\x2B\x7C\xB5\xC2\x86\x0C\x78\xC9"};
ui.file_loaded(file);
}
tape_file();
