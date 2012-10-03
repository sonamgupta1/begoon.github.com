function tape_file() {
var file = {
name: "MUZ_SYST.RKR",
start: 0x0000,
end: 0x11ef,
entry: 0x0000,
image:
"\x21\xFC\x35\x01\xE2\xFF\x09\x7D\x32\xA9\x05\x7C\x32\xAC\x05\x3E\x3E\x32\x58\x00\xE5\x21\xA5\x11\xCD\xAF\x0B\x21\xEA\x15\xCD\xF5" +
"\x04\xE1\xCD\xF5\x04\xCD\x4D\x05\x21\x3B\x00\xE5\x21\xB3\x04\xE5\x21\x9A\x09\xE5\xE5\x21\xEA\x11\x3E\x85\xC9\x31\xFF\x35\xCD\x2D" +
"\xF8\x31\xFF\x35\xCD\x4D\x05\x31\xFF\x35\x21\x3B\x00\xE5\x21\xE9\x11\x22\x43\x12\x23\x1E\x02\x3E\x3E\xCD\x16\x05\x3A\x53\x12\xB7" +
"\xCA\x83\x00\x3D\x32\x53\x12\xFE\x02\x11\xEB\x11\xCA\x7E\x03\x2A\x39\x12\x22\x37\x12\x21\x00\x00\x22\x39\x12\xFE\x01\xCA\xED\x05" +
"\xC3\x09\x0A\x01\x83\x00\xC5\xCD\x28\x05\xC8\xFE\x08\xCA\xBA\x00\x77\xFE\x0D\xCA\x0B\x01\xFE\x20\xD8\xC2\xAB\x00\x3E\x02\xBB\xC2" +
"\xA9\x00\x3A\x55\x12\xB7\xC2\xCF\x00\x3E\x20\xFE\x7F\xD0\xCD\x16\x05\x3E\x48\xBB\xDA\xC0\x00\x23\x1C\xC9\x3E\x02\xBB\xC8\x2B\x1D" +
"\x3E\x08\xCD\x16\x05\x3E\x20\xCD\x16\x05\x3E\x08\xC3\x16\x05\xE5\x01\xFF\xFF\xCD\x5E\x04\x2A\x3F\x12\x01\x10\x00\x09\xCD\xF5\x04" +
"\xD1\x7C\xCD\xF9\x00\x7C\xCD\xFD\x00\x7D\xCD\xF9\x00\x7D\xCD\xFD\x00\x3E\x20\x12\x13\xEB\x1E\x07\xC9\x1F\x1F\x1F\x1F\xE6\x0F\xFE" +
"\x0A\xDA\x06\x01\xC6\x07\xC6\x30\x12\x13\xC9\xCD\x4D\x05\xE1\x21\xE9\x11\x73\x1D\x1D\xC8\x23\x7E\xE5\xEB\xFE\x3A\xDA\x0D\x04\x13" +
"\x1A\xFE\x21\xD2\x1F\x01\xCD\xB8\x05\x22\x37\x12\xCD\xB8\x05\x22\x39\x12\xD1\x1A\x21\xAE\x0C\xCD\xDA\x05\xC3\x40\x01\xCD\x6A\x01" +
"\x1A\xFE\x0D\xC2\x48\x01\x1B\x1A\xF5\x3E\xBF\x12\x2A\x43\x12\xCD\x43\x05\xF1\x12\xAF\x32\x53\x12\x3A\x54\x12\xB7\xCA\x41\x00\xAF" +
"\x32\x54\x12\xC3\x99\x01\x21\x54\x01\xE5\x21\x01\x0D\xCD\x44\x05\xE1\xE3\xCD\x44\x05\x21\x01\x0D\xCD\x44\x05\xC3\x4D\x05\x3A\x55" +
"\x12\x2F\x32\x55\x12\x3A\x58\x00\xEE\x15\x32\x58\x00\xC3\x41\x00\x21\x1E\x0E\xCD\xAF\x0B\xC3\x47\x00\xCD\xED\x01\xE5\xC5\x21\xEA" +
"\x11\x06\x46\x36\x00\x23\x05\xC2\xA3\x01\xC1\xE1\xCD\xB1\x05\xC2\xBA\x01\x2A\x3B\x12\x7C\xB5\xCA\x41\x00\x22\x3B\x12\x44\x4D\xCD" +
"\x5E\x04\xC2\x22\x0D\x21\xE9\x11\x1A\x47\xCD\xD4\x03\xC3\x00\x02\xC5\xF5\x0E\x1B\xCD\x09\xF8\x0E\x59\xCD\x09\xF8\x3E\x20\x82\x4F" +
"\xCD\x09\xF8\x3E\x20\x83\x4F\xCD\x09\xF8\xF1\xC1\xC9\xC5\xF5\x0E\x07\xCD\x09\xF8\x01\x00\xC0\x0B\x78\xB1\xC2\xF7\x01\xF1\xC1\xC9" +
"\x3A\xE9\x11\x3D\x32\xE9\x11\x3E\x55\x32\x29\x11\x0E\x1F\xCD\x09\xF8\x21\xF9\x0F\xCD\xAF\x0B\x11\x00\x10\xEB\x22\x26\x11\xEB\x11" +
"\x00\x10\xCD\xD0\x01\x21\xF1\x10\xCD\xAF\x0B\x11\x00\x10\xCD\xD0\x01\x21\xEA\x11\x7E\xFE\x0D\xCA\x42\x02\x4E\xCD\x09\xF8\x23\xC3" +
"\x34\x02\x2A\x26\x11\xEB\xCD\xD0\x01\xCD\x03\xF8\xFE\x08\xCA\xB9\x02\xFE\x18\xCA\xC9\x02\xFE\x09\xCA\x12\x03\xFE\x04\xCA\xE0\x02" +
"\xFE\x0D\xCA\x3A\x03\x32\x28\x11\x3A\x29\x11\xFE\xAA\xC2\x94\x02\x11\xEA\x11\x2A\x26\x11\x26\x00\x19\x2B\xE5\x3A\xE9\x11\x6F\x26" +
"\x00\x19\xD1\x7E\x23\x77\x2B\x2B\x7D\xBB\xC2\x83\x02\x3A\xE9\x11\x3C\x32\xE9\x11\x11\xEA\x11\x2A\x26\x11\x3A\x29\x11\xFE\xAA\xCA" +
"\xAA\x02\x3A\xE9\x11\x3D\xBD\xCA\x42\x03\x2C\x22\x26\x11\x26\x00\x19\x2B\x3A\x28\x11\x77\xC3\x1F\x02\x2A\x26\x11\x7D\xFE\x00\xCA" +
"\x49\x02\x2D\x22\x26\x11\xC3\x42\x02\x2A\x26\x11\x7D\xFE\x30\xCA\x49\x02\x3A\xE9\x11\x2C\xBD\xCA\x49\x02\x22\x26\x11\xC3\x42\x02" +
"\x2A\x26\x11\x3A\xE9\x11\x3D\xBD\xCA\x42\x03\x26\x00\x11\xEA\x11\x19\xE5\x3A\xE9\x11\x6F\x26\x00\x19\xEB\xE1\x23\x7E\x2B\x77\x23" +
"\x7D\xBB\xC2\xFB\x02\x3A\xE9\x11\x3D\xCA\x49\x02\x32\xE9\x11\xC3\x1F\x02\x3A\x29\x11\x2F\x32\x29\x11\x11\x08\x17\xCD\xD0\x01\xFE" +
"\xAA\xC2\x34\x03\x21\xD9\x10\xCD\xAF\x0B\x2A\x26\x11\xEB\xCD\xD0\x01\xC3\x49\x02\x21\xF1\x10\xC3\x27\x03\x0E\x1F\xCD\x09\xF8\xC3" +
"\x4A\x03\x0E\x07\xCD\x09\xF8\xC3\x49\x02\x3A\xE9\x11\x3C\x32\xE9\x11\x21\xEA\x11\xCD\x44\x05\x21\xEA\x11\x54\x5D\x0E\x01\x0C\x7E" +
"\x23\xFE\x0D\xC2\x5E\x03\x79\xFE\x06\xDA\x72\x03\x32\xE9\x11\xC3\x0D\x04\x21\x06\x0D\xCD\x44\x05\xCD\x4D\x05\xC3\xB2\x01\x21\xEA" +
"\x15\xCD\x94\x05\x22\x33\x12\x22\x51\x12\xE5\xC5\xD5\xCD\xC4\x0B\xCD\x2D\xF8\xD1\xC1\xE1\xC3\xC7\x04\x41\x4C\x41\x4E\x20\x20\x32" +
"\x36\x2E\x31\x31\x2E\x31\x39\x38\x37\x20\x20\x20\x6D\x6F\x73\x6B\x77\x61\x2A\x33\x12\xCD\x94\x05\xE5\x7E\x3D\xCA\xCB\x03\xCD\x5B" +
"\x09\x7E\x23\xFE\x0D\xCA\xB9\x03\xC3\x76\x0D\xCD\xDD\x0A\xCD\x2D\xF8\xC3\x41\x00\x1A\x77\x13\x23\x05\xC2\xD4\x03\xC9\xCD\xB1\x05" +
"\xC8\x97\x32\xE9\x11\x44\x4D\xCD\x5E\x04\xD5\xD5\xC2\xFA\x03\xCD\x77\x04\x2A\x39\x12\x7C\xB5\xCA\x29\x04\x2A\x39\x12\x7C\xB5\xCA" +
"\x41\x00\x44\x4D\xCD\x5E\x04\xC2\x29\x04\xC3\x26\x04\xCD\xB8\x05\xFE\x0D\xCA\x40\x01\xFE\x20\x13\x1A\xCA\x10\x04\x44\x4D\xCD\x5E" +
"\x04\xD5\xC2\x35\x04\xD5\xCD\x77\x04\xC1\x2A\x35\x12\xCD\x57\x05\x60\x69\x22\x35\x12\xC1\x2A\x35\x12\xE5\x3A\xE9\x11\xCD\x5B\x09" +
"\x11\xEA\x11\xCD\x9E\x05\x22\x35\x12\x36\x01\xD1\xCD\x85\x05\x11\xE9\x11\x62\x6B\x7E\xCD\x5B\x09\xCD\x57\x05\xC3\x47\x00\x2A\x33" +
"\x12\xEB\xCD\x7F\x04\xD5\xCD\xB7\x05\x22\x3F\x12\xD1\x7D\x91\x6F\x7C\x98\xDA\x77\x04\xB5\xC9\xEB\x7E\xCD\x5B\x09\xC3\x61\x04\x1A" +
"\x3D\xC0\xF1\x97\x3C\xC9\xCD\xB1\x05\x44\x4D\xC2\x92\x04\x2B\x22\x39\x12\xCD\x5E\x04\x2A\x39\x12\x44\x4D\xCA\xAA\x04\xCD\x7F\x04" +
"\xD5\xCD\xB7\x05\xD1\x79\x95\x78\x9C\xD8\xEB\xCD\x43\x05\xEB\x13\xC3\x9D\x04\x21\xEA\x15\xCD\x94\x05\x22\x33\x12\x36\x01\x21\x00" +
"\x00\x22\x3B\x12\x22\x3F\x12\x2A\x33\x12\xCD\x94\x05\x22\x33\x12\xE5\xFE\x23\x7E\x3D\xCA\xE7\x04\xCD\x5B\x09\x7E\xFE\x0D\xCA\xD2" +
"\x04\x11\xEA\x11\xC3\x76\x0D\x22\x35\x12\xE3\xCD\xF5\x04\xE1\xCD\xF5\x04\xC3\x41\x00\x7C\xCD\x02\x05\x7D\xCD\x02\x05\x3E\x20\xC3" +
"\x16\x05\xF5\x1F\x1F\x1F\x1F\xCD\x0B\x05\xF1\xE6\x0F\xFE\x0A\xDA\x14\x05\xC6\x07\xC6\x30\xC5\x4F\xCD\x09\xF8\xC1\xCD\x28\x05\xFE" +
"\x20\xC0\xCD\x28\x05\xC0\x3B\x3B\xCD\x12\xF8\xB7\xC8\xCD\x03\xF8\xFE\x03\xCA\x00\xF8\xFE\x18\xCA\x41\x00\xFE\x7F\xC0\x3E\x7F\xC9" +
"\xCD\x16\x05\x23\x7E\xFE\xFF\xC8\xFE\x0D\xC2\x40\x05\x3E\x0D\xCD\x16\x05\x3E\x0A\xC3\x16\x05\x7C\xBA\xC2\x5F\x05\x7D\xBB\xC8\x1A" +
"\x02\x13\x03\xC3\x57\x05\x21\xBD\x06\x7E\xFE\x00\xCA\x79\x05\x07\x07\x4F\xCD\x09\xF8\x23\xC3\x69\x05\xCD\xED\x01\xCD\xED\x01\xCD" +
"\xED\x01\xC3\x00\xF8\x78\xBA\xC2\x8D\x05\x79\xBB\xC8\x1B\x2B\x1A\x77\xC3\x85\x05\xD5\xEB\xCD\xB1\x05\xC2\x9D\x05\x19\xD1\x7D\xD6" +
"\xEA\x7C\xDE\x15\xDA\x5C\x0D\x7D\xD6\xDE\x7C\xDE\x35\xD2\x5C\x0D\xC9\x2A\x37\x12\x7C\xB5\xC9\x13\x21\x00\x00\x1A\xFE\x20\xCA\xB7" +
"\x05\xFE\x22\xD8\xCD\x81\x09\xF5\x3E\xF0\xA4\xC2\x5C\x0D\xF1\x29\x29\x29\x29\x85\x6F\x13\x1A\xC3\xC1\x05\x23\x23\xBE\x23\xD8\xC2" +
"\xDA\x05\xF1\x7E\x23\x66\x6F\xE9\x3E\x01\x32\x53\x12\xD5\x2A\x33\x12\xEB\x2A\x35\x12\x7B\xBD\xC2\x0B\x06\x7A\xBC\xD1\xCA\x03\x06" +
"\xC3\x0C\x06\x3E\x00\x32\x53\x12\xC3\x41\x00\xD1\x2A\x3B\x12\x22\x3D\x12\x3E\x01\x32\x54\x12\x2A\x35\x12\x23\xCD\x94\x05\x22\x47" +
"\x12\x22\x45\x12\x3E\x70\xCD\x9A\x09\x22\x49\x12\x3E\x19\x21\x56\x12\xCD\x9A\x09\xCD\x93\x07\x2A\x33\x12\xEB\x1B\x21\x61\x06\xE5" +
"\x13\x1A\x3D\xCA\x6A\x09\xEB\x22\x43\x12\xEB\xCD\xB7\x05\x22\x3B\x12\x13\x1A\xFE\x0D\xCA\x40\x06\xFE\x20\xC9\x31\xFC\x35\xCD\x51" +
"\x06\x21\x5B\x06\xE5\xC8\x21\xD3\x0C\xCD\xDA\x05\xCD\xAB\x09\xD0\x21\x5D\x12\x46\xCD\x10\x07\x13\x1A\x1B\x21\x99\x0C\xCD\xA2\x09" +
"\xDA\x89\x06\xB0\x47\x13\x21\x06\x70\x3A\x5B\x12\x21\x4B\x12\xCD\x5B\x09\xD5\x5E\x23\x56\xE3\xEB\x3A\x59\x12\x77\x23\x4E\x70\x13" +
"\x1A\x1B\xFE\x27\xCC\xFB\x06\xFE\x22\xCC\xFB\x06\xFE\x2C\xCC\xF4\x06\x23\xEB\xE3\x72\x2B\x73\xD1\x0C\xC2\x95\x0D\xC9\xC7\x82\x43" +
"\x82\x43\x82\x43\x08\x08\x08\x08\x08\x08\x08\x08\x50\x13\x50\x93\x08\x08\x08\x08\x0D\x08\x5B\x58\x5C\x08\x4C\x4E\x0E\x0E\x08\xD9" +
"\xDB\x19\x58\x08\x08\x8B\x08\x5B\xDB\xDC\xDA\xDD\x58\x08\x8B\x43\x82\x43\x82\x00\x2B\x7E\x1F\x77\xC3\x05\x07\x0F\x3E\x01\x2B\x35" +
"\xDA\x05\x07\x35\x3C\x23\x23\x77\x23\x7E\xA1\x4F\x36\x70\x13\xC9\x21\x94\x0C\xCD\xA2\x09\xDA\x1C\x07\x47\x13\x1A\xCD\x81\x09\xB0" +
"\x47\xC9\xD5\x2A\x49\x12\x44\x4D\x21\x6F\x12\x22\x4B\x12\x11\x42\x00\x19\x22\x4D\x12\x19\x22\x4F\x12\x60\x69\x3E\x05\xCD\x5B\x09" +
"\x11\xEA\x11\xCD\x9E\x05\x2A\x4B\x12\x7E\x2A\x4D\x12\xBE\xDA\x52\x07\x7E\x2A\x4F\x12\xBE\xDA\x5A\x07\x7E\xFE\xFF\xCA\x89\x07\x02" +
"\x03\x57\x2A\x4B\x12\x3A\x5C\x12\xCD\xB7\x07\x22\x4B\x12\x2A\x4D\x12\x3A\x5E\x12\xCD\xB7\x07\x22\x4D\x12\x2A\x4F\x12\x3A\x60\x12" +
"\xCD\xB7\x07\x22\x4F\x12\xC3\x39\x07\xCD\x93\x07\x60\x69\x22\x49\x12\xD1\xC9\x97\x32\x5B\x12\x21\x6F\x12\x22\x4B\x12\xCD\xA9\x07" +
"\x22\x4D\x12\xCD\xA9\x07\x22\x4F\x12\x3E\x42\x36\xFF\x23\x3D\xC2\xAB\x07\x2B\x36\x70\x23\xC9\x32\x5A\x12\xEB\xE5\x1A\xFE\xFF\xCA" +
"\x27\x08\x94\x12\x13\x1A\x1B\xC2\xCC\x07\x13\x13\xF5\xE6\x8F\x87\xD2\xD5\x07\x2F\x3C\xC6\x10\x21\x5A\x12\x86\xC6\x0E\xFA\xDB\x07" +
"\x21\x24\x0C\xCD\x5B\x09\x23\x7E\x2B\x32\x58\x12\xE3\x3E\x70\xBC\xCA\x26\x08\xA4\xF5\x3A\x58\x12\x21\x68\x12\xCD\x5B\x09\xF1\xC4" +
"\x2C\x08\x7E\xE1\x86\x6F\x3A\x5F\x12\x85\xFE\x33\xDA\x1A\x08\xB7\xFA\x15\x08\xD6\x18\xC6\x0C\xC3\x0A\x08\x21\x62\x0C\xCD\x5B\x09" +
"\x7E\x02\x03\xE1\xEB\xC9\xE1\x3E\xFF\xC3\x21\x08\x36\xFF\x87\xF8\x34\x87\xF0\x34\xC9\x3E\x80\xFE\x97\x32\x5D\x12\xC9\xCD\x7E\x09" +
"\x3D\xFE\x03\xD2\xA9\x0D\x87\x32\x5B\x12\xC9\x13\x1A\x06\x00\xCD\x10\x07\x3A\x5B\x12\x21\x5C\x12\xCD\x5B\x09\x78\x87\x77\xD0\x2F" +
"\x3C\x77\xC9\xCD\x22\x07\xD5\x11\x61\x12\x21\x68\x12\x44\x4D\xCD\x57\x05\xD1\xCD\x51\x06\xC2\x73\x08\xC9\x21\x61\x12\x3E\x07\xCD" +
"\x9A\x09\xCD\x51\x06\xC8\xCD\x81\x09\xFE\x08\xD2\xC7\x0D\x47\x04\x13\x1A\x21\x16\x0C\x0E\x01\xFE\x23\xCA\xA6\x08\xFE\x26\xC2\xC7" +
"\x0D\x21\x1D\x0C\x0E\xFF\xD5\xEB\x05\xC2\xAE\x08\xD1\xC9\x1A\x21\x61\x12\xCD\x5B\x09\x71\x13\xC3\xA8\x08\xCD\x7E\x09\x2F\x3C\xC3" +
"\xC5\x08\xCD\x7E\x09\x32\x5F\x12\xC9\xCD\x51\x06\xCD\xAB\x09\xDA\xE1\x0D\xCD\xF2\x08\x1F\x1F\xE6\x0F\x32\x56\x12\x2A\x45\x12\xC3" +
"\xEE\x08\xCD\xB7\x05\x1B\x7D\x32\x57\x12\x2A\x45\x12\x23\x23\x23\x77\xC9\x1F\x1F\xE6\x7F\x47\x1F\x1F\xE6\x3F\x4F\x1F\x1F\xE6\x3F" +
"\x80\x81\x3C\xC9\x13\x1A\xFE\x0D\xC2\x04\x09\x1B\xC9\xCD\x60\x09\x44\x4D\xCD\x4A\x09\x22\x45\x12\xD5\xEB\x2A\x47\x12\x79\x95\x12" +
"\x13\x78\x9C\x12\x13\x2A\x56\x12\xEB\x73\x23\x72\xD1\xC9\xCD\x4A\x09\xD5\x5E\x23\x56\x23\x4E\x23\x46\x2A\x45\x12\x73\x23\x72\x23" +
"\x71\x23\x70\x7A\xB3\xD1\xCA\x04\x0E\xC9\x13\x1A\xD6\x41\xDA\x04\x0E\xFE\x1A\xD2\x04\x0E\x87\x87\x2A\x47\x12\x85\x6F\xD0\x24\xC9" +
"\xCD\x22\x07\x36\xFF\x23\x22\x49\x12\xC9\xCD\x60\x09\xE5\x2A\x3D\x12\x22\x3B\x12\xAF\x32\x54\x12\x2A\x47\x12\xC3\xEB\x04\xCD\x51" +
"\x06\xFE\x30\xDA\x38\x0D\xFE\x3A\xDA\x97\x09\xFE\x41\xDA\x38\x0D\xFE\x47\xD2\x38\x0D\xD6\x07\xD6\x30\xC9\x36\x00\x23\x3D\xC2\x9A" +
"\x09\xC9\x23\xBE\x23\xD8\xC2\xA2\x09\x7E\xC9\x21\xA0\x0C\xCD\xA2\x09\xD8\x21\x59\x12\x77\x13\x1A\xFE\x2E\xC2\xC3\x09\x7E\x1F\x86" +
"\x77\x13\x1A\xFE\x3A\x7E\xC2\xCE\x09\xCD\xF3\x08\x77\x13\x1B\xBF\xC9\xD5\xE5\x2A\x33\x12\xEB\x2A\x35\x12\x7A\xBC\xC2\xEE\x09\x7B" +
"\xBD\xC2\xEE\x09\xE1\xD1\xC3\x41\x00\xE1\xD1\xC3\xE8\x05\xEB\x2A\x45\x12\x2B\x7C\xBA\xC2\xE9\x09\x7D\xBB\xC2\xE9\x09\xE1\xD1\x13" +
"\x1A\xFE\x0D\xCA\x09\x0A\xC3\xD1\x09\xF5\x3E\x80\x32\x08\xE0\xF1\x2A\x47\x12\xCD\x94\x05\x22\x47\x12\x3E\x1A\xF5\xE5\xE5\xE1\xC1" +
"\xF1\x3D\xFA\x3B\x00\xF5\x5E\x23\x56\x23\x7A\xB3\xEB\x09\xEB\xC5\x4E\x23\x46\x23\xE5\xC4\x3B\x0A\xC3\x1E\x0A\x21\x00\x00\x39\x22" +
"\x41\x12\xEB\xF9\x79\x32\x8A\x0A\x78\x32\x91\x0A\xE1\x7D\xFE\xFF\xCA\xC5\x0A\x32\x8F\x0A\x3E\xC2\x24\xC2\x5D\x0A\x3C\x32\xA4\x0A" +
"\xE1\x3E\xC2\x2C\xC2\x68\x0A\x3C\x32\x9C\x0A\x3E\xC2\x24\xC2\x72\x0A\x3C\x32\x94\x0A\x21\xFE\xFF\x39\x22\xD7\x0A\x21\x00\x00\x39" +
"\x22\xD9\x0A\x31\xDB\x0A\x2A\xD7\x0A\x3E\x01\x32\xB9\x0A\x1E\x18\x3E\xDF\x23\x05\xC2\x99\x0A\xFB\x46\x2B\x0D\xF3\xC3\xA1\x0A\xFB" +
"\x4E\x2B\x15\xF3\xC2\xA9\x0A\xFB\x56\x23\x3D\xF3\xE3\x66\x2C\xE3\xA7\xC2\x92\x0A\x1D\xC2\x90\x0A\x3E\x01\x3D\xC2\x8B\x0A\x2A\xD9" +
"\x0A\xF9\xC3\x4C\x0A\x2A\x41\x12\xF9\xC9\x00\x00\x00\x00\x00\x00\x00\x00\x4B\x78\x46\x02\x44\x8F\x1A\x91\x1A\x4A\xFF\xCD\xBA\x0B" +
"\x2A\x33\x12\xEB\x2A\x35\x12\x23\xCD\x97\x0B\x22\xD2\x0A\x2A\x33\x12\xEB\x2A\x35\x12\x23\x7D\x93\x6F\x7C\x9A\x67\x22\xD4\x0A\x21" +
"\x80\x02\x0E\x00\xCD\x0C\xF8\x2B\x7C\xB5\xC2\x02\x0B\x0E\xE6\xCD\x0C\xF8\x2A\xD2\x0A\x4D\xCD\x0C\xF8\x4C\xCD\x0C\xF8\x2A\xD4\x0A" +
"\x4D\xCD\x0C\xF8\x4C\xCD\x0C\xF8\xEB\x2A\x33\x12\x4E\xCD\x0C\xF8\x23\x1B\x7A\xB3\xC2\x2C\x0B\x21\x82\x11\xCD\xAF\x0B\xCD\x03\xF8" +
"\xE6\x7F\xFE\x4E\xC8\xCD\xBA\x0B\x21\x2A\x11\xCD\xAF\x0B\xCD\x03\xF8\xCD\xBA\x0B\x2A\xD2\x0A\x3E\xFF\xCD\x06\xF8\xBD\xC2\x8B\x0B" +
"\xCD\x92\x0B\xBC\xC2\x8B\x0B\x2A\xD4\x0A\xCD\x92\x0B\xBD\xC2\x8B\x0B\xCD\x92\x0B\xBC\xC2\x8B\x0B\xEB\x2A\x33\x12\xCD\x92\x0B\xBE" +
"\xC2\x8B\x0B\x23\x1B\x7A\xB3\xC2\x7C\x0B\xC9\x21\x60\x11\xCD\xAF\x0B\xC9\x3E\x08\xC3\x06\xF8\x01\x00\x00\x1A\x81\x4F\x3E\x00\x88" +
"\x47\x13\x7A\xBC\xC2\x9A\x0B\x7B\xBD\xC2\x9A\x0B\x69\x60\xC9\x7E\xB7\xC8\x4E\xCD\x09\xF8\x23\xC3\xAF\x0B\x0E\x0D\xCD\x09\xF8\x0E" +
"\x0A\xC3\x09\xF8\xCD\xBA\x0B\x3E\xFF\xCD\x06\xF8\x6F\xCD\x92\x0B\x67\x22\xD2\x0A\xCD\x92\x0B\x6F\xCD\x92\x0B\x67\x22\xD4\x0A\xEB" +
"\x2A\x33\x12\xCD\x92\x0B\x77\x23\x1B\x7A\xB3\xC2\xE3\x0B\x2A\x33\x12\xEB\x2A\xD4\x0A\x19\x22\x51\x12\x2B\x22\x35\x12\x23\xCD\x97" +
"\x0B\xEB\x2A\xD2\x0A\x7A\xBC\xC2\x0D\x0C\x7B\xBD\xC8\x21\x50\x11\xCD\xAF\x0B\xC9\xDB\xFF\x03\x00\x04\x01\x05\x02\x06\x06\x02\x05" +
"\x01\x04\x00\x03\xFF\x06\x00\x00\x02\x01\x04\x02\x05\x03\x07\x04\x09\x05\x0B\x06\x0C\x00\x0E\x01\x10\x02\x11\x03\x13\x04\x15\x05" +
"\x17\x06\x18\x00\x1A\x01\x1C\x02\x1D\x03\x1F\x04\x21\x05\x23\x06\x24\x00\x26\x01\x28\x02\x29\x03\x2B\x04\x2D\x05\x2F\x06\x30\x00" +
"\x32\x01\x00\xF1\xE4\xD7\xCB\xC0\xB5\xAB\xA1\x98\x90\x88\x80\x79\x72\x6B\x65\x60\x5A\x55\x51\x4C\x48\x44\x40\x3C\x39\x36\x33\x30" +
"\x2D\x2B\x28\x26\x24\x22\x20\x1E\x1C\x1B\x19\x18\x17\x15\x14\x13\x12\x11\x10\x0F\x0E\x2B\x00\x2D\x80\xFF\x23\x20\x25\x10\x26\x40" +
"\xFF\x48\x60\x49\x18\x51\x30\x53\x0C\x54\x06\x57\xC0\x58\x03\xFF\x41\x7E\x01\x44\xDD\x03\x45\x99\x01\x47\x7E\x03\x4C\x86\x04\x4D" +
"\x90\x01\x4E\xB3\x04\x50\xD1\x09\x52\xE8\x05\x53\xED\x05\x56\xC7\x04\x57\xB2\x03\xFF\x24\x87\x06\x2A\x38\x08\x2F\x04\x09\x3C\xBA" +
"\x08\x3D\xE2\x08\x3E\xC2\x08\x40\x35\x08\x4B\x7A\x08\x4D\x63\x08\x4E\xC9\x08\x50\x0D\x09\x52\x2E\x09\x56\x3D\x08\x5E\x4B\x08\xFF" +
"\xFF\x20\x2B\x2B\x20\xFF\x2B\x2B\x20\x6F\x7B\x69\x62\x6B\x61\x20\x72\x65\x64\x61\x6B\x74\x69\x72\x6F\x77\x61\x6E\x69\x71\x20\x2B" +
"\x2B\xFF\xCD\x66\x01\x73\x74\x72\x6F\x6B\x61\x20\x6F\x74\x73\x75\x74\x73\x74\x77\x75\x65\x74\xFF\xCD\x3D\x01\x6F\x7B\x69\x62\x6B" +
"\x61\x20\x7B\x65\x73\x74\x6E\x61\x64\x63\x61\x74\x65\x72\x69\x7E\x6E\x6F\x67\x6F\x20\x6E\x6F\x6D\x65\x72\x61\xFF\xCD\x3D\x01\x70" +
"\x72\x65\x77\x79\x7B\x65\x6E\x20\x72\x61\x7A\x6D\x65\x72\x20\x70\x61\x6D\x71\x74\x69\xFF\xCD\x3D\x01\x6F\x7B\x69\x62\x6B\x61\x20" +
"\x73\x69\x6E\x74\x61\x6B\x73\x69\x73\x61\x20\x70\x61\x72\x74\x69\x74\x75\x72\x79\xFF\xCD\x3D\x01\x33\x32\x20\x6E\x6F\x74\x79\x20" +
"\x6E\x61\x20\x67\x6F\x6C\x6F\x73\xFF\xCD\x3D\x01\x6D\x6E\x6F\x67\x6F\x20\x67\x6F\x6C\x6F\x73\x6F\x77\x20\x28\x33\x2D\x4D\x41\x6B" +
"\x73\x69\x6D\x75\x6D\x29\xFF\xCD\x3D\x01\x64\x6F\x70\x75\x73\x74\x69\x6D\x79\x65\x20\x6B\x6C\x61\x77\x69\x7B\x69\x20\x30\x2D\x37" +
"\xFF\xCD\x3D\x01\x6E\x65\x70\x72\x61\x77\x69\x6C\x78\x6E\x79\x6A\x20\x77\x72\x65\x6D\x65\x6E\x6E\x6F\x6A\x20\x70\x61\x72\x61\x6D" +
"\x65\x74\x72\xFF\xCD\x3D\x01\x6F\x7B\x69\x62\x6B\x61\x20\x70\x6F\x77\x74\x6F\x72\x61\x20\x28\x20\x41\x2D\x5A\x20\x29\xFF\x1F\x20" +
"\x20\x20\x20\x20\x20\x20\x20\x2A\x20\x70\x65\x72\x65\x7E\x65\x6E\x78\x20\x6B\x6F\x6D\x61\x6E\x64\x20\x73\x69\x73\x74\x65\x6D\x79" +
"\x20\x2A\x0D\x0A\x0D\x0A\x0D\x0A\x41\x20\x2D\x2D\x20\x61\x77\x74\x6F\x6E\x75\x6D\x65\x72\x61\x63\x69\x71\x20\x73\x74\x72\x6F\x6B" +
"\x20\x77\x6B\x6C\x2D\x77\x79\x6B\x6C\x0D\x0A\x44\x20\x20\x58\x58\x58\x58\x20\x28\x59\x59\x59\x59\x29\x20\x2D\x2D\x20\x75\x64\x61" +
"\x6C\x65\x6E\x69\x65\x20\x73\x74\x72\x6F\x6B\x20\x73\x20\x58\x58\x58\x58\x20\x70\x6F\x20\x59\x59\x59\x59\x0D\x0A\x45\x20\x28\x58" +
"\x58\x58\x58\x29\x20\x2D\x2D\x20\x72\x65\x64\x61\x6B\x74\x69\x72\x6F\x77\x61\x6E\x69\x65\x20\x73\x74\x72\x6F\x6B\x69\x20\x73\x20" +
"\x6E\x6F\x6D\x65\x72\x6F\x6D\x20\x58\x58\x58\x58\x0D\x0A\x47\x20\x20\x20\x20\x20\x20\x20\x2D\x2D\x20\x77\x77\x6F\x64\x20\x70\x61" +
"\x72\x74\x69\x74\x75\x72\x79\x20\x73\x20\x6D\x61\x67\x6E\x69\x74\x6F\x66\x6F\x6E\x61\x20\x0D\x0A\x4C\x20\x28\x58\x58\x58\x58\x29" +
"\x20\x28\x59\x59\x59\x59\x29\x20\x2D\x2D\x20\x70\x72\x6F\x73\x6D\x6F\x74\x72\x20\x70\x61\x72\x74\x69\x74\x75\x72\x79\x20\x73\x20" +
"\x58\x58\x58\x58\x20\x70\x6F\x20\x59\x59\x59\x59\x0D\x0A\x4D\x20\x20\x20\x20\x20\x20\x20\x20\x2D\x2D\x20\x6B\x72\x61\x74\x6B\x61" +
"\x71\x20\x73\x70\x72\x61\x77\x6B\x61\x20\x70\x6F\x20\x6B\x6F\x6D\x61\x6E\x64\x61\x6D\x0D\x0A\x4E\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x2D\x2D\x20\x6E\x61\x7E\x61\x74\x78\x20\x6E\x6F\x77\x75\x60\x20\x70\x61\x72\x74\x69\x74\x75\x72\x75\x20\x20\x0D\x0A\x52\x20\x20" +
"\x20\x20\x20\x20\x20\x20\x2D\x2D\x20\x6B\x6F\x6D\x70\x69\x6C\x71\x63\x69\x71\x20\x2B\x20\x69\x67\x72\x61\x20\x70\x61\x72\x74\x69" +
"\x69\x0D\x0A\x56\x20\x20\x20\x20\x20\x20\x20\x20\x2D\x2D\x20\x73\x70\x72\x61\x77\x6B\x61\x20\x6F\x20\x72\x61\x7A\x6D\x65\x72\x65" +
"\x20\x70\x61\x72\x74\x69\x74\x75\x72\x79\x0D\x0A\x57\x20\x20\x20\x20\x20\x20\x20\x20\x2D\x2D\x20\x7A\x61\x70\x69\x73\x78\x20\x70" +
"\x61\x72\x74\x69\x74\x75\x72\x79\x20\x6E\x61\x20\x6D\x61\x67\x6E\x69\x74\x6F\x66\x6F\x6E\x0D\x0A\x00\x20\x20\x20\x20\x20\x20\x20" +
"\x20\x72\x65\x64\x61\x6B\x74\x69\x72\x6F\x77\x61\x6E\x69\x65\x20\x73\x74\x72\x6F\x6B\x69\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x0D\x0A\x0D\x0A\x0D\x0A\x20\x6B\x75\x72\x73" +
"\x6F\x72\x20\x77\x6C\x65\x77\x6F\x20\x20\x20\x20\x20\x2D\x20\x75\x73\x2B\x48\x20\x2C\x20\x3C\x2D\x2D\x2D\x0D\x0A\x0D\x0A\x20\x6B" +
"\x75\x72\x73\x6F\x72\x20\x77\x70\x72\x61\x77\x6F\x20\x20\x20\x20\x2D\x20\x75\x73\x2B\x58\x20\x2C\x20\x2D\x2D\x2D\x3E\x0D\x0A\x0D" +
"\x0A\x20\x75\x64\x61\x6C\x69\x74\x78\x20\x73\x69\x6D\x77\x6F\x6C\x20\x20\x20\x2D\x20\x75\x73\x2B\x44\x0D\x0A\x0D\x0A\x20\x77\x73" +
"\x74\x61\x77\x6B\x61\x20\x77\x6B\x6C\x2D\x77\x79\x6B\x6C\x20\x2D\x20\x75\x73\x2B\x49\x0D\x0A\x0D\x0A\x20\x6B\x6F\x6E\x65\x63\x20" +
"\x72\x65\x64\x61\x6B\x74\x69\x72\x6F\x77\x61\x6E\x69\x71\x20\x20\x20\x2D\x20\x20\x3C\x77\x6B\x3E\x00\x2A\x2A\x20\x77\x73\x74\x61" +
"\x77\x6B\x61\x20\x77\x6B\x6C\x60\x7E\x65\x6E\x61\x20\x2A\x2A\x20\x00\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x20\x20\x20\x20\x20\x00\x08\x10\x20\xAA\x70\x6F\x64\x67\x6F\x74\x6F\x77\x74\x65\x73\x78\x20\x6B\x20\x70\x72\x6F\x77\x65\x72\x6B" +
"\x65\x2C\x20\x6E\x61\x76\x6D\x69\x74\x65\x20\x3C\x77\x6B\x3E\x00\x6F\x7B\x69\x62\x6B\x61\x20\x7E\x74\x65\x6E\x69\x71\x0D\x0A\x00" +
"\x6F\x7B\x69\x62\x6B\x61\x20\x70\x72\x6F\x77\x65\x72\x6B\x69\x20\x6B\x61\x7E\x65\x73\x74\x77\x61\x20\x7A\x61\x70\x69\x73\x69\x0D" +
"\x0A\x00\x70\x72\x6F\x77\x65\x72\x71\x74\x78\x20\x6B\x61\x7E\x65\x73\x74\x77\x6F\x20\x7A\x61\x70\x69\x73\x69\x20\x28\x59\x2F\x4E" +
"\x29\x20\x3F\x20\x00\x1F\x2A\x20\x6D\x75\x7A\x79\x6B\x61\x6C\x78\x6E\x61\x71\x20\x73\x69\x73\x74\x65\x6D\x61\x20\x20\x20\x20\x20" +
"\x6D\x73\x20\x33\x2E\x32\x20\x20\x0D\x0A\x0D\x0A\x73\x77\x6F\x62\x6F\x64\x6E\x61\x71\x20\x70\x61\x6D\x71\x74\x78\x3A\x20\x20\x00" +
"\x41\x4C\x41\x4E\x20\x31\x39\x38\x37\x00\x00\x00\x00\x00\x00\x00"};
ui.file_loaded(file);
}
tape_file();
