function tape_file() {
var file = {
name: "ASSM_MIC.RKR",
start: 0x0000,
end: 0x104f,
entry: 0x0000,
image:
"\xF3\x2A\x69\x00\x22\xBD\x11\x2A\x65\x00\xF9\xCD\x83\x03\x21\xC1\x11\x3E\xC3\xBE\xCA\x29\x00\x77\x2A\x67\x00\x22\xBF\x11\x21\x50" +
"\x13\x22\x4A\x13\x26\xFF\x22\x4C\x13\x11\x32\x00\xCD\xBE\x02\xC3\x6B\x00\x61\x73\x73\x65\x6D\x62\x6C\x65\x72\x09\x2A\x20\x6D\x69" +
"\x6B\x72\x6F\x7B\x61\x20\x2A\x0D\x67\x6F\x74\x6F\x77\x07\x0D\x7E\x74\x6F\x3F\x0D\x75\x77\x79\x20\x6E\x65\x20\x6D\x6F\x67\x75\x20" +
"\x2E\x2E\x2E\x2E\x0D\xFF\x35\xFF\x34\x00\x31\x21\x00\x00\x22\xC4\x11\x2A\x65\x00\xF9\x21\x00\x00\x22\x02\x11\x11\x48\x00\xCD\xBE" +
"\x02\xCD\xEE\x00\xD5\x11\x25\x11\xCD\x3C\x02\xCD\xDE\x01\x7C\xB5\xC1\xCA\x07\x04\x1B\x7C\x12\x1B\x7D\x12\xC5\xD5\x79\x93\xF5\xCD" +
"\xFE\x01\xD5\xC2\xB6\x00\xD5\xCD\x17\x02\xC1\x2A\x4A\x13\xCD\xA4\x02\x60\x69\x22\x4A\x13\xC1\x2A\x4A\x13\xF1\xE5\xFE\x03\xCA\xE0" +
"\x00\x85\x5F\x3E\x00\x8C\x57\x2A\xBD\x11\xEB\xCD\xD8\x01\xD2\xF8\x01\x22\x4A\x13\xD1\xCD\xAF\x02\xD1\xE1\xCD\xA4\x02\xC3\x81\x00" +
"\x2A\xC4\x11\x7C\xB5\xCA\x71\x00\xF1\xF1\xF1\xC3\x81\x00\x2A\xC4\x11\x7D\xB4\xCA\xF9\x00\xCD\x0E\x03\x3E\x3E\xCD\x1B\x03\xC9\x21" +
"\xDD\x04\xCD\xDE\x01\xD5\x1A\x13\xFE\x2E\xCA\x69\x04\x23\xBE\xCA\x06\x01\x3E\x7F\x1B\xBE\xDA\x70\x04\x23\xBE\xD2\x19\x01\x23\x23" +
"\xD1\xC3\x02\x01\xCD\xDB\x0F\xC8\xCD\x2F\x01\xC0\xC3\x6B\x00\xCD\xE6\x0F\xFE\x20\xCA\x2F\x01\xFE\x03\xC9\xCD\xDB\x0F\xC8\xCD\x2F" +
"\x01\xC0\xF1\xF1\xC3\x75\x00\xCD\xE6\x01\xC3\x1E\x00\xCD\x3C\x02\xCD\xE6\x01\xEB\x2A\xBF\x11\x7D\x93\x5F\x7C\x9A\x57\x2A\x4A\x13" +
"\xCD\xD8\x01\xD2\xF8\x01\xEB\x22\xBD\x11\xC3\x29\x00\xCD\x3C\x02\xE5\x21\xFF\xFF\xCD\x23\x02\x2C\x03\xCD\x3C\x02\xE3\xCD\xE6\x01" +
"\xCD\xFE\x01\xDA\x75\x00\xE3\x7C\xB5\xCA\x75\x00\x2B\xE3\xCD\x24\x01\xCD\x08\x03\xCD\xBE\x02\xCD\x06\x02\xC3\x83\x01\x2A\x4A\x13" +
"\xD5\xEB\x2A\xBD\x11\xCD\xC7\x01\xCD\x0E\x03\xCD\x83\x03\xC3\x75\x00\xE5\x6C\x26\x00\xCD\xBC\x01\x41\x7D\xE1\x67\x0E\xFF\x0C\xCD" +
"\xC7\x01\xD2\xBE\x01\x19\xC9\x7D\x93\x6F\x7C\x9A\x67\xC9\x7C\xAA\xF2\xD4\x01\xEB\xCD\xD8\x01\xC9\x7C\xBA\xC0\x7D\xBB\xC9\x1A\xFE" +
"\x20\xC0\x13\xC3\xDE\x01\xCD\xDE\x01\xFE\x0D\xC8\x11\x4F\x00\xCD\x83\x03\xCD\xBE\x02\xC3\x29\x00\x11\x54\x00\xC3\xEF\x01\x7C\xB7" +
"\xFA\xEC\x01\x11\x4C\x13\x13\x1A\x1B\x87\xD8\x1A\x95\x47\x13\x1A\x9C\xDA\x18\x02\x1B\xB0\xC9\x13\x13\x1A\xFE\x0D\xC2\x18\x02\x13" +
"\xC3\x06\x02\xE3\xCD\xDE\x01\xBE\x23\xCA\x33\x02\xC5\x4E\x06\x00\x09\xC1\x1B\x13\x23\xE3\xC9\x3E\x01\xC3\x3E\x02\x3E\xFF\x32\xAD" +
"\x11\xCD\xDE\x01\xFE\x0D\xC2\x4D\x02\x21\x00\x00\xC9\x3E\x15\x32\x0E\x11\x21\x15\x11\x0E\x07\x36\x00\x23\x0D\xC2\x57\x02\x1A\xFE" +
"\x2C\xCA\x8E\x02\xFE\x0D\xCA\x8E\x02\x4F\x2E\xAD\x7E\x3C\xC2\x7C\x02\x79\xFE\x30\xDA\x8E\x02\xFE\x3A\xD2\x8E\x02\x3A\x0E\x11\x6F" +
"\x71\x3C\xFE\x1C\xCA\x8E\x02\x32\x0E\x11\x13\xC3\x5E\x02\xD5\xCD\x0C\x0F\x21\x15\x11\x3A\x0E\x11\xBD\xCA\x9F\x02\xCD\xD9\x0A\xD1" +
"\x2A\x02\x11\xC9\xCD\xD8\x01\xC8\x1A\x02\x13\x03\xC3\xA4\x02\x78\x92\xC2\xB7\x02\x79\x93\xC8\x1B\x2B\x1A\x77\xC3\xAF\x02\x97\x47" +
"\x1A\x13\xB8\xC8\xCD\x85\x03\xFE\x0D\xC2\xC0\x02\xC9\x06\x00\xD5\x11\x0A\x00\xD5\x0D\xC5\xCD\xB1\x01\x78\xB1\xCA\xE6\x02\xE3\x2D" +
"\xE5\x60\x69\xC3\xD6\x02\xC1\x0D\x79\xB7\xFA\xF5\x02\x3E\x20\xCD\x85\x03\xC3\xE7\x02\x78\xB7\xC4\x85\x03\x5D\x7B\xFE\x0A\xD1\xC8" +
"\xC6\x30\xCD\x85\x03\xC3\xFB\x02\x1A\x6F\x13\x1A\x67\x13\x0E\x07\xCD\xCD\x02\x3E\x20\xCD\x85\x03\xC9\x3E\x0D\x11\x25\x11\xCD\x85" +
"\x03\xCD\xE6\x0F\xFE\x0A\xCA\x21\x03\xFE\x03\xCA\x00\x00\xFE\x18\xCA\x00\xF8\xFE\x1A\xCA\x19\x03\x12\xFE\x08\xC2\x52\x03\x7B\xFE" +
"\x25\xCA\x21\x03\x1A\xCD\x85\x03\x3E\x20\xCD\x85\x03\x1A\x1B\xC3\x1E\x03\xFE\x0D\xCA\x62\x03\x7B\xFE\xAD\xCA\x21\x03\x1A\x13\xC3" +
"\x1E\x03\x13\x13\x3E\xFF\x12\x1B\xC3\x83\x03\xCD\x37\x02\xCD\xE6\x01\x7D\xB4\xCA\x7C\x03\xCD\x82\x03\xC3\x29\x00\x2A\xBD\x11\xC3" +
"\x76\x03\xE9\x3E\x0D\xCD\x14\x10\xFE\x0D\xC0\x3E\x0A\xCD\x14\x10\x3E\x0D\xC9\xCD\xCA\x03\x3E\xE6\xCD\xFC\x0F\x3E\xFF\xCD\xFC\x0F" +
"\x21\x4A\x13\xEB\x2A\x4A\x13\xCD\xC7\x01\x7D\xCD\xFC\x0F\x7C\xCD\xFC\x0F\x2A\x4A\x13\xEB\x21\x4C\x13\x7E\xCD\xFC\x0F\x23\xCD\xD8" +
"\x01\xC2\xB9\x03\xCD\xCA\x03\xC3\x71\x00\x21\x00\x00\x11\xA0\x00\x3E\x00\xCD\xFC\x0F\x23\xCD\xD8\x01\xC2\xD0\x03\xC9\x21\x4A\x13" +
"\x3E\xFF\xCD\xF2\x0F\xCD\xF0\x0F\x6F\xCD\xF0\x0F\x67\xEB\x21\x4A\x13\x19\x22\x4A\x13\xEB\x21\x4B\x13\x23\xCD\xF0\x0F\x77\xCD\xD8" +
"\x01\xC2\xF9\x03\xC3\x71\x00\x2A\xC4\x11\x7C\xB5\xCA\xFF\x00\xE5\xD5\xEB\x2A\xC2\x11\x19\x22\xC4\x11\xD1\xE1\xC3\x94\x00\xCD\x3C" +
"\x02\x7C\xB5\xC2\x29\x04\x21\x0A\x00\x22\xC4\x11\x21\x0A\x00\xCD\x23\x02\x2C\x03\xCD\x3C\x02\x22\xC2\x11\xCD\xE6\x01\xC9\xCD\x1E" +
"\x04\x11\x4C\x13\x2A\xC4\x11\x13\x1A\x1B\x87\xDA\x6B\x00\xEB\x73\x23\x72\x23\x7E\xFE\x0D\xC2\x52\x04\x23\xE5\x2A\xC2\x11\x19\xD1" +
"\xC3\x47\x04\xCD\x1E\x04\xC3\x71\x00\x3E\x7F\x23\xBE\xD2\x6B\x04\x23\x7E\x23\x66\x6F\xF1\xE9\x21\x35\x13\x23\x1A\x77\x13\xFE\x0D" +
"\xC2\x7A\x04\x21\x36\x13\x22\xBA\x11\x2A\xBD\x11\x22\xB0\x11\x21\x00\x00\x39\x22\xB3\x11\x2A\x4A\x13\x23\x23\x22\xAE\x11\x21\xC8" +
"\x12\x22\xB8\x11\xC3\x4D\x0F\xD5\xE5\x2A\xC8\x11\x3A\xC6\x11\xFE\x0D\xCA\xD8\x04\xFE\x0A\xC2\xCD\x04\xEB\x21\x00\x00\xCD\x06\x02" +
"\xDA\xFE\x0D\x1A\x6F\x13\x1A\x67\x22\x05\x11\x13\xEB\x7E\x23\x22\xC8\x11\x32\xC6\x11\xE1\xD1\xC9\x3E\x0A\xC3\xCF\x04\x00\x41\x53" +
"\x53\x45\x4D\x42\x4C\x45\x52\x80\x77\x04\x43\x53\x41\x56\x45\x80\x93\x03\x43\x4C\x4F\x41\x44\x80\xDD\x03\x4C\x49\x53\x54\x80\x6D" +
"\x01\x4E\x45\x57\x80\x47\x01\x52\x45\x4E\x55\x4D\x80\x3E\x04\x52\x45\x47\x49\x4F\x4E\x80\x4D\x01\x41\x55\x54\x4F\x80\x63\x04\x43" +
"\x41\x4C\x4C\x80\x6B\x03\x53\x49\x5A\x45\x80\x9D\x01\x80\xEC\x01\x4D\x4F\x56\x0C\x40\x4A\x4D\x50\x02\xC3\x4A\x4E\x5A\x02\xC2\x4A" +
"\x4E\x43\x02\xD2\x4A\x50\x4F\x02\xE2\x4A\x50\x45\x02\xEA\x43\x4E\x5A\x02\xC4\x43\x4E\x43\x02\xD4\x43\x50\x4F\x02\xE4\x43\x50\x45" +
"\x02\xEC\x52\x45\x54\x00\xC9\x52\x4E\x5A\x00\xC0\x52\x4E\x43\x00\xD0\x52\x50\x4F\x00\xE0\x52\x50\x45\x00\xE8\x4D\x56\x49\x09\x06" +
"\x41\x44\x49\x01\xC6\x41\x43\x49\x01\xCE\x53\x55\x49\x01\xD6\x53\x42\x49\x01\xDE\x41\x4E\x49\x01\xE6\x58\x52\x49\x01\xEE\x4F\x52" +
"\x49\x01\xF6\x43\x50\x49\x01\xFE\x4C\x58\x49\x0A\x01\x44\x41\x44\x18\x01\x49\x4E\x52\x08\x04\x44\x43\x52\x08\x05\x49\x4E\x58\x08" +
"\x03\x44\x43\x58\x18\x03\x4C\x44\x41\x02\x3A\x53\x54\x41\x02\x32\x52\x53\x54\x08\xC7\x50\x4F\x50\x08\xC1\x44\x41\x41\x00\x27\x43" +
"\x4D\x41\x00\x2F\x53\x54\x43\x00\x37\x43\x4D\x43\x00\x3F\x4F\x55\x54\x01\xD3\x52\x4C\x43\x00\x07\x52\x52\x43\x00\x0F\x52\x41\x4C" +
"\x00\x17\x52\x41\x52\x00\x1F\x4E\x4F\x50\x00\x00\x48\x4C\x54\x00\x76\x41\x44\x44\x04\x80\x41\x44\x43\x04\x88\x53\x55\x42\x04\x90" +
"\x53\x42\x42\x04\x98\x41\x4E\x41\x04\xA0\x58\x52\x41\x04\xA8\x4F\x52\x41\x04\xB0\x43\x4D\x50\x04\xB8\x4F\x52\x47\x81\x00\x45\x4E" +
"\x44\x82\x00\x53\x45\x54\x83\x00\x00\x4A\x5A\x02\xCA\x4A\x43\x02\xDA\x4A\x50\x02\xF2\x4A\x4D\x02\xFA\x43\x5A\x02\xCC\x43\x43\x02" +
"\xDC\x43\x50\x02\xF4\x43\x4D\x02\xFC\x52\x5A\x00\xC8\x52\x43\x00\xD8\x52\x50\x00\xF0\x52\x4D\x00\xF8\x49\x4E\x01\xDB\x44\x49\x00" +
"\xF3\x45\x49\x00\xFB\x44\x53\x84\x00\x44\x42\x85\x00\x44\x57\x86\x00\x00\x50\x43\x48\x4C\x00\xE9\x43\x41\x4C\x4C\x02\xCD\x4C\x44" +
"\x41\x58\x18\x02\x53\x54\x41\x58\x08\x02\x50\x55\x53\x48\x08\xC5\x58\x54\x48\x4C\x00\xE3\x53\x50\x48\x4C\x00\xF9\x58\x43\x48\x47" +
"\x00\xEB\x4C\x48\x4C\x44\x02\x2A\x53\x48\x4C\x44\x02\x22\x00\x2E\x25\xCD\xA7\x04\xB7\xCA\xD1\x06\x77\x23\x47\x7D\xFE\xAD\x78\xCA" +
"\xEF\x06\xFE\x0D\xC2\xD1\x06\xCD\x24\x01\x2E\x07\x36\x25\xC9\x2D\xC3\xE2\x06\x21\x04\x11\x7E\xA7\xC4\xCF\x06\x2E\x04\x36\x00\x2E" +
"\x07\x6E\x7E\xFE\x0A\xC2\x0E\x07\xCD\x3B\x07\xC3\x01\x07\xFE\x3B\x4F\x2E\x09\xC2\x1A\x07\x77\xC3\x3B\x07\xFE\x0D\xC2\x33\x07\x36" +
"\x00\x2E\x04\x36\xFF\x2E\x08\xAF\xBE\xC2\x30\x07\xCD\xD3\x0C\xC9\x36\x00\xC9\x7E\xA7\xC2\x08\x07\x2E\x08\x71\x2E\x07\x34\xC9\x3A" +
"\x0A\x11\x00\xA7\xCA\x49\x07\x37\xC9\x21\x15\x11\x1E\x07\xCD\xC8\x0E\x2E\x0E\x36\x15\x2E\x0A\x7E\x36\x00\x2C\x77\xAF\x2E\x0D\x77" +
"\x2E\x0C\x36\x00\xCD\xF3\x06\x79\xFE\x27\xCA\xB1\x07\xFE\x2B\xCA\xE9\x07\xFE\x2D\xCA\xE9\x07\xFE\x09\xCA\xB7\x07\xFE\x20\xCA\xB7" +
"\x07\xFE\x0D\xCA\xF5\x07\xFE\x3A\xCA\xE9\x07\xFE\x3B\xCA\xB7\x07\xFE\x2C\xCA\x08\x08\x2E\x0D\x7E\xFE\x06\xCA\x60\x07\x34\x2C\x6E" +
"\x71\x7D\xD6\x1B\xF2\xA8\x07\x2C\x36\x00\x7D\x32\x0E\x11\xC3\x60\x07\x32\x15\x11\xC3\x12\x08\x2E\x0D\x7E\xA7\xCA\x60\x07\xCD\xF3" +
"\x06\x79\xFE\x20\xCA\xBE\x07\xFE\x3B\xCA\xBE\x07\xFE\x0D\xCA\xF5\x07\xFE\x2B\xCA\xE9\x07\xFE\x2D\xCA\xE9\x07\xFE\x3A\xCA\xE9\x07" +
"\xFE\x09\xCA\xBE\x07\x35\xC3\x12\x08\x2E\x0C\x71\x2C\x7E\xA7\xCA\x19\x08\xC3\x12\x08\x2E\x0D\x7E\xA7\xCA\x02\x08\x2E\x0A\x75\xC3" +
"\x12\x08\x2E\x0B\x75\xC3\x60\x07\x3A\x0D\x11\xA7\xCA\xE4\x0D\xC3\xBE\x07\x2E\x0B\x7E\xA7\xC8\x37\xC9\x3E\x50\xC3\xE6\x0D\xAF\x32" +
"\x10\x11\xAF\x2A\xAE\x11\x01\x15\x11\xBE\xCA\x57\x08\x0A\xBE\xC2\x3C\x08\xA7\xCA\x78\x08\x03\x23\xC3\x2D\x08\x23\xAF\xBE\xC2\x3B" +
"\x08\x01\x15\x11\x23\x23\x23\xBE\xC2\x2D\x08\x3A\xB1\x11\xBC\xC2\x57\x08\x3E\x4F\xC3\xE6\x0D\x01\x15\x11\x0A\x77\xFE\x00\xCA\x66" +
"\x08\x03\x23\xC3\x5A\x08\xCD\x6D\x08\x23\x36\x00\xC9\x23\x11\x02\x11\x1A\x77\x13\x23\x1A\x77\xC9\x3A\x10\x11\xA7\xC2\x6D\x08\x23" +
"\xAF\x4F\xBE\xCA\x87\x08\x0C\x23\xBE\xCA\x8D\x08\x0C\xB9\xC2\x96\x08\x2B\x2B\xC3\x6D\x08\x11\x02\x11\x1A\xFE\x00\xC2\xA6\x08\x13" +
"\x1A\xFE\x00\xCA\xB8\x08\x11\x03\x11\x1A\xBE\xC2\xB3\x08\x1B\x2B\x1A\xBE\xC8\x3E\x44\xC3\xE6\x0D\x7E\x12\x1B\x2B\x7E\x12\xC9\x21" +
"\x15\x11\x48\x1A\xBE\xC2\xD1\x08\x23\x13\x0D\xC2\xC3\x08\xEB\xAF\xC9\x13\x0D\xC2\xD1\x08\x13\x13\x1A\xB7\xC2\xBF\x08\x3C\xC9\xAF" +
"\x2E\x17\xBE\xCA\xF2\x08\x2C\xBE\xCA\xFA\x08\x2C\xBE\xCA\x02\x09\x3C\xC9\x06\x02\x11\x49\x06\xC3\x07\x09\x11\x30\x05\x06\x03\xC3" +
"\x07\x09\x06\x04\x11\x92\x06\xCD\xBF\x08\xC0\x7E\x32\x0F\x11\x23\x46\xA7\xC8\xFA\x60\x09\x32\x10\x11\xE6\xFC\xC8\xCD\x3F\x07\xDA" +
"\xE4\x0D\x21\x10\x11\x7E\x4E\xE6\x03\x2E\x0F\x77\x2E\x15\x7E\xCD\x62\x09\xFA\x22\x0A\x57\x79\xE6\x10\xCA\x3D\x09\x14\x79\xE6\x08" +
"\x7A\xCA\x5E\x09\x07\x07\x07\xB0\x47\x79\xE6\x04\xCA\x60\x09\xCD\x3F\x07\xDA\xE4\x0D\x2E\x15\x7E\xCD\x62\x09\xFA\x22\x0A\xB0\x47" +
"\xAF\xC9\xFE\x30\xFA\xC7\x09\xFE\x38\xF2\x6F\x09\xE6\x07\xC9\xFE\x4D\xC2\x78\x09\x3E\x06\xA7\xC9\xFE\x41\xC2\x81\x09\x3E\x07\xA7" +
"\xC9\xFE\x42\xFA\x9D\x09\xFE\x46\xFA\xC4\x09\xFE\x48\xC2\x94\x09\x3E\x04\xA7\xC9\xFE\x4C\xC2\x9D\x09\x3E\x05\xA7\xC9\xFE\x53\xC2" +
"\xAD\x09\x2C\x7E\xFE\x50\xC2\xC7\x09\x3E\x06\xA7\xC9\xFE\x50\xC2\xC7\x09\x2C\x7E\xFE\x53\xC2\xC7\x09\x2C\x7E\xFE\x57\xC2\xC7\x09" +
"\x3E\x06\xA7\xC9\xD6\x42\xC9\xF6\xFF\xC9\xCD\x49\x07\xCD\xD3\x0C\xCD\x30\x0A\xA7\xCA\x27\x0A\xCD\xDF\x08\xA7\xC2\x5C\x0C\x21\x0F" +
"\x11\x7E\xA7\xCA\x19\x0A\xFA\xB3\x0B\x7E\xE6\x01\xC2\x04\x0A\xCD\x27\x0D\x3E\x07\x32\x11\x11\xCD\x5D\x0A\x3A\x11\x11\xA7\xC4\xFA" +
"\x0E\xC3\xCD\x09\xCD\x27\x0D\x3E\x70\x32\x11\x11\xCD\x5D\x0A\x3A\x11\x11\xA7\xC4\xF4\x0E\xC3\xCD\x09\xCD\x27\x0D\xCD\x49\x07\xDA" +
"\xCD\x09\x3E\x48\xC3\xE6\x0D\xCD\x49\x07\xD2\xD0\x09\xC3\xCD\x09\x21\x0C\x11\x3E\x3A\xBE\xC0\x21\x15\x11\x7E\xFE\x41\xFA\x50\x0A" +
"\xFE\x5B\xF2\x50\x0A\x2A\x00\x11\x22\x02\x11\xCD\x1E\x08\xAF\xC9\x3E\x4D\xC3\xE6\x0D\x21\x00\x11\x34\xC0\x23\x34\xC9\xCD\x67\x0A" +
"\xCD\x49\x07\xD8\xC3\x22\x0A\xCD\x0C\x0F\xCD\x3F\x07\xDA\xE4\x0D\xCD\xB4\x0A\x3A\x0C\x11\xB7\xC8\x32\xB5\x11\x2A\x02\x11\x22\xB6" +
"\x11\xCD\x3F\x07\xDA\x2C\x0B\xCD\x0C\x0F\xCD\xB4\x0A\x2A\x02\x11\xEB\x2A\xB6\x11\x3A\xB5\x11\xFE\x2D\xCA\xA8\x0A\xFE\x2B\xC2\x2C" +
"\x0B\x19\x22\x02\x11\xC3\x73\x0A\x7D\x93\x6F\x7C\x9A\x67\x22\x02\x11\xC3\x73\x0A\x21\x15\x11\x7E\xFE\x24\xCA\xCA\x0A\xFE\x41\xFA" +
"\xD9\x0A\xFE\x5B\xF2\x2C\x0B\xC3\x1E\x08\x2A\x00\x11\x3A\x11\x11\xA7\xCA\xD5\x0A\x2B\x22\x02\x11\xC9\x2E\x1C\x2D\x7D\xFE\x14\xCA" +
"\x2C\x0B\x7E\xB7\xCA\xDB\x0A\xFE\x48\xCA\x31\x0B\xFE\x51\xCA\x64\x0B\xFE\x27\xCA\x1D\x0B\x21\x00\x00\x11\x15\x11\x1A\xFE\x30\xDA" +
"\x2C\x0B\xFE\x3A\xD2\x2C\x0B\x44\x4D\x29\x29\x09\x29\xE6\x0F\x06\x00\x4F\x09\x13\x1A\xB7\xC2\xFD\x0A\x22\x02\x11\xC9\x21\x07\x11" +
"\x6E\x7E\x32\x02\x11\x2E\x09\x36\x3B\xC3\x3B\x07\x3E\x43\xC3\xE6\x0D\x01\x15\x11\x16\x48\xCD\x9D\x0B\x44\x0A\xDA\x2C\x0B\xCD\x48" +
"\x0B\x03\x0A\xBA\xC8\xC3\x36\x0B\xD6\x30\xFA\x2C\x0B\xFE\x0A\xFA\x5E\x0B\xFE\x11\xFA\x2C\x0B\xFE\x17\xF2\x2C\x0B\xD6\x07\x21\x02" +
"\x11\x86\x77\xC9\x01\x15\x11\x16\x51\x1E\x00\xCD\xA2\x0B\x44\x0A\xD2\x74\x0B\x1C\xCD\x8D\x0B\x03\x0A\xBA\xC2\x6B\x0B\x7B\xA7\xCA" +
"\x87\x0B\x3D\xC2\x2C\x0B\x37\x2E\x03\x7E\x1F\x77\xC9\xD6\x30\xFA\x2C\x0B\xFE\x08\xF2\x2C\x0B\x21\x02\x11\x86\x77\xC9\x06\x04\xC3" +
"\xA4\x0B\x06\x03\xA7\x2E\x02\x7E\x17\x77\x2C\x7E\x17\x77\x05\xC8\xC3\xA5\x0B\x06\x81\xB8\xCA\x33\x0C\x04\xB8\xCA\xFE\x0D\x04\x04" +
"\xB8\xCA\x4B\x0C\x04\xB8\xCA\xDB\x0B\xCD\x49\x07\xDA\xCD\x09\xCD\x0C\x0F\xCD\x70\x0A\xCD\xFA\x0E\xC3\xC9\x0B\xCD\x49\x07\xDA\xCD" +
"\x09\x3A\x15\x11\xFE\x27\xCA\x05\x0C\xCD\x0C\x0F\xCD\x70\x0A\x3A\x02\x11\x47\xCD\x27\x0D\x3A\x03\x11\xB7\xCA\xDB\x0B\x3E\x56\x32" +
"\xCE\x12\xC3\xDB\x0B\x21\x07\x11\x6E\x7E\xFE\x27\xCA\x1E\x0C\xFE\x0D\xCA\x2C\x0B\x47\xCD\x27\x0D\xCD\x3B\x07\xC3\x08\x0C\xCD\x3B" +
"\x07\x6E\x7E\xFE\x27\xCA\x14\x0C\xFE\x2C\xC2\xDB\x0B\xCD\x3B\x07\xC3\xDB\x0B\xCD\x5D\x0A\x2A\x02\x11\x22\x00\x11\x21\x13\x11\x7E" +
"\xE6\x01\xCA\xCD\x09\xCD\x80\x0D\xC3\xCD\x09\xCD\x5D\x0A\x2A\x02\x11\xEB\x2A\x00\x11\x19\x22\x00\x11\xC3\x3C\x0C\x3A\x15\x11\xFE" +
"\x27\xCA\x05\x0C\xD6\x30\xFA\x22\x0A\xFE\x0A\xFA\xE1\x0B\xFE\x11\xFA\x22\x0A\xFE\x2B\xF2\x22\x0A\x21\x1C\x11\x01\x15\x11\xCD\xC5" +
"\x0C\xCD\x3F\x07\xDA\xE4\x0D\xCD\xDF\x08\xA7\xC2\xE4\x0D\x3A\x0F\x11\xFE\x83\xC2\xE4\x0D\xCD\x3F\x07\xDA\xE4\x0D\xCD\x0C\x0F\xCD" +
"\x70\x0A\xCD\x49\x07\xD2\x22\x0A\x01\x15\x11\x21\x1C\x11\xCD\xC5\x0C\xAF\x3C\x32\x10\x11\xCD\x22\x08\x21\x1C\x11\x01\x15\x11\xCD" +
"\xC5\x0C\xC3\xCD\x09\x16\x06\x0A\x5E\x77\x7B\x02\x15\xC8\x03\x23\xC3\xC7\x0C\x21\x11\x11\x7E\xF5\x2E\x13\xA6\xC4\xFA\x0E\xF1\x0F" +
"\x0F\x0F\x0F\xA6\xC4\xF4\x0E\x2E\x13\x3E\x02\xA6\xC8\x2D\x46\xCD\xEE\x0E\x05\xC2\xEF\x0C\x36\x10\x3E\x0A\xCD\x8A\x0F\x2E\x25\xCD" +
"\xD0\x0E\x3E\x0D\xCD\x8A\x0F\x21\x05\x11\xCD\x13\x0F\x3E\x3A\xCD\x8A\x0F\xCD\xEE\x0E\xCD\xEE\x0E\x2E\x01\x46\xCD\x5F\x0E\x2B\x46" +
"\xCD\x5F\x0E\xCD\xEE\x0E\xC9\x21\x13\x11\x7E\xA7\xCA\x66\x0D\xFE\x04\xCA\x3F\x0D\xE6\x02\xC2\x5E\x0D\xCD\x69\x0D\xC3\x66\x0D\xD5" +
"\x2A\xBF\x11\xEB\x2A\x00\x11\xCD\xD8\x01\xD2\xF8\x01\xEB\x2A\xBD\x11\x2B\xCD\xD8\x01\xD2\xF8\x01\xEB\x70\xD1\xC3\x66\x0D\x3A\x12" +
"\x11\xFE\x04\xF4\x5F\x0E\xC3\x55\x0A\x3A\xCB\x11\xFE\xF4\xCC\x80\x0D\x21\xCE\x11\x3C\x32\xCB\x11\x85\x6F\x3E\x00\x8C\x67\x70\xC9" +
"\xC5\x3A\xCB\x11\xB7\xC4\x8E\x0D\xCD\xD1\x0D\xC1\xAF\xC9\xCD\xCA\x03\x3E\xE6\xCD\xFC\x0F\x3E\x3A\xCD\xFC\x0F\x06\x00\x3A\xCB\x11" +
"\xC6\x04\x4F\x21\xCB\x11\x7E\xCD\xB8\x0D\x23\x0D\xC2\xA6\x0D\xAF\x90\xCD\xB8\x0D\xCD\xCA\x03\xC9\xF5\x80\x47\xF1\xF5\x0F\x0F\x0F" +
"\x0F\xCD\xC5\x0D\xF1\xE6\x0F\xC6\x90\x27\xCE\x40\x27\xCD\xFC\x0F\xC9\x21\xCB\x11\x36\x00\x23\x3A\x01\x11\x77\x23\x3A\x00\x11\x77" +
"\x23\x36\x00\xC9\x3E\x54\x32\xCE\x12\x3A\xAD\x11\xA7\xC2\xEC\x01\x2A\xB3\x11\xF9\x21\x04\x11\x2E\x04\x36\xFF\xC3\xCA\x09\x3A\x13" +
"\x11\xE6\x03\xCA\x1E\x0E\xE6\x01\xCA\x1B\x0E\xCD\x80\x0D\x36\x01\x2B\xAF\x77\x2B\x77\xCD\x8E\x0D\xCD\xCA\x03\xCD\xD3\x0C\xC3\x4D" +
"\x0F\xCD\xE3\x0E\xC3\x1E\x0E\xCD\xE3\x0E\xCD\xE3\x0E\x2A\xAE\x11\xAF\xBE\xCA\x21\x0E\xCD\xD0\x0E\x23\x23\x3E\x3A\xCD\x8A\x0F\x3E" +
"\x09\xCD\x8A\x0F\x46\xCD\x5F\x0E\x2B\x46\xCD\x5F\x0E\x3A\xBC\x11\xFE\x40\x3E\x09\xF4\xE3\x0E\xFC\x8A\x0F\x23\x23\xC3\x30\x0E\xE5" +
"\x21\x12\x11\x35\x35\xE1\x78\x0F\x0F\x0F\x0F\xCD\x6F\x0E\x78\xE6\x0F\xFE\x0A\xFA\x78\x0E\xC6\x07\xC6\x30\xC3\x8A\x0F\x21\x13\x11" +
"\x36\x04\xC3\x8F\x0E\xAF\x2A\xAE\x11\x77\x21\x13\x11\x36\x00\x21\x02\x11\x1E\x10\xCD\xC8\x0E\xCD\xCF\x06\xC3\xCA\x09\x21\x13\x11" +
"\x36\x01\xCD\xCA\x03\xCD\xD1\x0D\xC3\x8F\x0E\x21\x13\x11\x36\x02\x2D\x36\x18\xCD\xE3\x0E\x21\xC8\x12\x22\xB8\x11\xAF\x32\xBC\x11" +
"\x3E\x0D\x32\xE0\x12\xC3\x8F\x0E\x36\x00\x23\x1D\xC8\xC3\xC8\x0E\x7E\xA7\xC8\xFE\x0D\xC8\xFE\x0A\xCA\xDE\x0E\xCD\x8A\x0F\x23\x05" +
"\xC3\xD0\x0E\x3E\x0D\xCD\x8A\x0F\x3E\x0A\xCD\x8A\x0F\xC9\x3E\x20\xCD\x8A\x0F\xC9\x21\x02\x11\xC3\x03\x0F\x21\x02\x11\x46\xCD\x27" +
"\x0D\x2E\x03\x46\xCD\x27\x0D\x2E\x11\xAF\x77\xC9\x21\x00\x00\x22\x02\x11\xC9\xE5\xD5\x5E\x23\x66\x6B\x11\x18\xFC\xCD\x32\x0F\x11" +
"\x9C\xFF\xCD\x32\x0F\x11\xF6\xFF\xCD\x32\x0F\x7D\xCD\x48\x0F\xD1\xE1\xC9\x06\x00\x04\x19\x7C\xA7\xF2\x34\x0F\x05\x7B\x2F\xC6\x01" +
"\x5F\x7A\x2F\xCE\x00\x57\x19\x78\xF6\x30\xC3\x8A\x0F\x21\x4C\x13\x22\xC8\x11\x3E\x0A\x32\xC6\x11\xAF\x32\xAD\x11\x2A\xBD\x11\x22" +
"\x00\x11\x2A\xB3\x11\xF9\xCD\x09\x10\xFE\x31\xCA\x85\x0E\xFE\x32\xCA\xAB\x0E\xFE\x33\xCA\x9D\x0E\xFE\x34\xCA\x7D\x0E\xFE\x53\xCA" +
"\x27\x0E\xFE\x0D\xC2\x4D\x0F\xC3\x29\x00\xE5\xD5\xC5\xF5\xFE\x09\xCA\xCB\x0F\xFE\x0A\xCA\xB6\x0F\x2A\xB8\x11\x77\x23\xFE\x0D\xC2" +
"\xAA\x0F\x3E\xFF\x32\xBC\x11\x21\xC8\x12\x22\xB8\x11\x21\xBC\x11\x34\xF1\xC1\xD1\xE1\xC9\x21\xC8\x12\x7E\xCD\x14\x10\x23\xFE\x0D" +
"\xC2\xB9\x0F\x3E\x0A\xCD\x14\x10\xC3\xB1\x0F\x3E\x20\xCD\x8A\x0F\x3A\xBC\x11\xE6\x07\xC2\xCB\x0F\xC3\xB1\x0F\xE5\xD5\xC5\xCD\x12" +
"\xF8\xC1\xD1\xE1\xA7\xC9\xE5\xD5\xC5\xCD\x03\xF8\xC1\xD1\xE1\xC9\x3E\x08\xE5\xD5\xC5\xCD\x06\xF8\xC1\xD1\xE1\xC9\xE5\xD5\xC5\xF5" +
"\x4F\xCD\x0C\xF8\xF1\xC1\xD1\xE1\xC9\xE5\x2A\xBA\x11\x7E\x23\x22\xBA\x11\xE1\xC9\xE5\xF5\x21\xCA\x11\xFE\x09\xCA\x2C\x10\xFE\x0D" +
"\xC2\x25\x10\x36\xFF\x34\xF1\xE1\xCD\x3C\x10\xC9\x3E\x20\xCD\x3C\x10\x7E\x3C\x77\xE6\x07\xC2\x2C\x10\xF1\xE1\xC9\xE5\xD5\xC5\xF5" +
"\x4F\xCD\x09\xF8\xF1\xC1\xD1\xE1\xC9\x57\xFF\xFF\xFF\xFF\xFF\xFF"};
ui.file_loaded(file);
}
tape_file();
