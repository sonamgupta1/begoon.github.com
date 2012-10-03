function tape_file() {
var file = {
name: "mon16.bin",
start: 0xf800,
end: 0xffff,
entry: 0xf800,
image:
"\xC3\x36\xF8\xC3\x63\xFE\xC3\x98\xFB\xC3\xBA\xFC\xC3\x46\xFC\xC3\xBA\xFC\xC3\x01\xFE\xC3\xA5\xFC\xC3\x22\xF9\xC3\x72\xFE\xC3\x7B" +
"\xFA\xC3\x7F\xFA\xC3\xB6\xFA\xC3\x49\xFB\xC3\x16\xFB\xC3\xCE\xFA\xC3\x52\xFF\xC3\x56\xFF\x3E\x8A\x32\x03\x80\x31\xCF\x36\xCD\xCE" +
"\xFA\x21\x00\x36\x11\x5F\x36\x0E\x00\xCD\xED\xF9\x21\xCF\x36\x22\x1C\x36\x21\x5A\xFF\xCD\x22\xF9\xCD\xCE\xFA\x21\xFF\x35\x22\x31" +
"\x36\x21\x2A\x1D\x22\x2F\x36\x3E\xC3\x32\x26\x36\x31\xCF\x36\x21\x66\xFF\xCD\x22\xF9\x32\x02\x80\x3D\x32\x02\xA0\xCD\xEE\xF8\x21" +
"\x6C\xF8\xE5\x21\x33\x36\x7E\xFE\x58\xCA\xD3\xFF\xFE\x55\xCA\x00\xF0\xF5\xCD\x2C\xF9\x2A\x2B\x36\x4D\x44\x2A\x29\x36\xEB\x2A\x27" +
"\x36\xF1\xFE\x44\xCA\xC5\xF9\xFE\x43\xCA\xD7\xF9\xFE\x46\xCA\xED\xF9\xFE\x53\xCA\xF4\xF9\xFE\x54\xCA\xFF\xF9\xFE\x4D\xCA\x26\xFA" +
"\xFE\x47\xCA\x3F\xFA\xFE\x49\xCA\x86\xFA\xFE\x4F\xCA\x2D\xFB\xFE\x4C\xCA\x08\xFA\xFE\x52\xCA\x68\xFA\xC3\x00\xF0\x3E\x33\xBD\xCA" +
"\xF1\xF8\xE5\x21\x9E\xFF\xCD\x22\xF9\xE1\x2B\xC3\xF3\xF8\x21\x33\x36\x06\x00\xCD\x63\xFE\xFE\x08\xCA\xDC\xF8\xFE\x7F\xCA\xDC\xF8" +
"\xC4\xB9\xFC\x77\xFE\x0D\xCA\x1A\xF9\xFE\x2E\xCA\x6C\xF8\x06\xFF\x3E\x52\xBD\xCA\xAE\xFA\x23\xC3\xF3\xF8\x78\x17\x11\x33\x36\x06" +
"\x00\xC9\x7E\xA7\xC8\xCD\xB9\xFC\x23\xC3\x22\xF9\x21\x27\x36\x11\x2D\x36\x0E\x00\xCD\xED\xF9\x11\x34\x36\xCD\x5A\xF9\x22\x27\x36" +
"\x22\x29\x36\xD8\x3E\xFF\x32\x2D\x36\xCD\x5A\xF9\x22\x29\x36\xD8\xCD\x5A\xF9\x22\x2B\x36\xD8\xC3\xAE\xFA\x21\x00\x00\x1A\x13\xFE" +
"\x0D\xCA\x8E\xF9\xFE\x2C\xC8\xFE\x20\xCA\x5D\xF9\xD6\x30\xFA\xAE\xFA\xFE\x0A\xFA\x82\xF9\xFE\x11\xFA\xAE\xFA\xFE\x17\xF2\xAE\xFA" +
"\xD6\x07\x4F\x29\x29\x29\x29\xDA\xAE\xFA\x09\xC3\x5D\xF9\x37\xC9\x7C\xBA\xC0\x7D\xBB\xC9\xCD\xA4\xF9\xCD\x90\xF9\xC2\xA2\xF9\x33" +
"\x33\xC9\x23\xC9\xCD\x72\xFE\xFE\x03\xC0\xCD\xCE\xFA\xC3\xAE\xFA\xE5\x21\x6C\xFF\xCD\x22\xF9\xE1\xC9\x7E\xC5\xCD\xA5\xFC\x3E\x20" +
"\xCD\xB9\xFC\xC1\xC9\xCD\x78\xFB\xCD\xB9\xF9\xCD\x96\xF9\x7D\xE6\x0F\xCA\xC5\xF9\xC3\xC8\xF9\x0A\xBE\xCA\xE6\xF9\xCD\x78\xFB\xCD" +
"\xB9\xF9\x0A\xCD\xBA\xF9\x03\xCD\x96\xF9\xC3\xD7\xF9\x71\xCD\x99\xF9\xC3\xED\xF9\x79\xBE\xCC\x78\xFB\xCD\x96\xF9\xC3\xF4\xF9\x7E" +
"\x02\x03\xCD\x99\xF9\xC3\xFF\xF9\xCD\x78\xFB\x7E\xB7\xFA\x15\xFA\xFE\x20\xD2\x17\xFA\x3E\x2E\xCD\xB9\xFC\xCD\x96\xF9\x7D\xE6\x0F" +
"\xCA\x08\xFA\xC3\x0B\xFA\xCD\x78\xFB\xCD\xB9\xF9\xE5\xCD\xEE\xF8\xE1\xD2\x3B\xFA\xE5\xCD\x5A\xF9\x7D\xE1\x77\x23\xC3\x26\xFA\xCD" +
"\x90\xF9\xCA\x5A\xFA\xEB\x22\x23\x36\x7E\x32\x25\x36\x36\xF7\x3E\xC3\x32\x30\x00\x21\xA2\xFF\x22\x31\x00\x31\x18\x36\xC1\xD1\xE1" +
"\xF1\xF9\x2A\x16\x36\xC3\x26\x36\x3E\x90\x32\x03\xA0\x22\x01\xA0\x3A\x00\xA0\x02\x03\xCD\x99\xF9\xC3\x6D\xFA\x2A\x02\x36\xC9\xE5" +
"\x2A\x00\x36\x7E\xE1\xC9\x3A\x2D\x36\xB7\xCA\x91\xFA\x7B\x32\x2F\x36\xCD\xB6\xFA\xCD\x78\xFB\xEB\xCD\x78\xFB\xEB\xC5\xCD\x16\xFB" +
"\x60\x69\xCD\x78\xFB\xD1\xCD\x90\xF9\xC8\xEB\xCD\x78\xFB\x3E\x3F\xCD\xB9\xFC\xC3\x6C\xF8\x3E\xFF\xCD\xFF\xFA\xE5\x09\xEB\xCD\xFD" +
"\xFA\xE1\x09\xEB\xE5\xCD\x0A\xFB\x3E\xFF\xCD\xFF\xFA\xE1\xE5\x21\x01\xC0\x36\x00\x2B\x36\x4D\x36\x1D\x36\x99\x36\x93\x23\x36\x27" +
"\x7E\x7E\xE6\x20\xCA\xE1\xFA\x21\x08\xE0\x36\x80\x2E\x04\x36\xD0\x36\x36\x2C\x36\x23\x36\x49\x2E\x08\x36\xA4\xE1\xC9\x3E\x08\xCD" +
"\x98\xFB\x47\x3E\x08\xCD\x98\xFB\x4F\xC9\x3E\x08\xCD\x98\xFB\x77\xCD\x99\xF9\xC3\x0A\xFB\x01\x00\x00\x7E\x81\x4F\xF5\xCD\x90\xF9" +
"\xCA\x9F\xF9\xF1\x78\x8E\x47\xCD\x99\xF9\xC3\x19\xFB\x79\xB7\xCA\x35\xFB\x32\x30\x36\xE5\xCD\x16\xFB\xE1\xCD\x78\xFB\xEB\xCD\x78" +
"\xFB\xEB\xE5\x60\x69\xCD\x78\xFB\xE1\xC5\x01\x00\x00\xCD\x46\xFC\x05\xE3\xE3\xC2\x4D\xFB\x0E\xE6\xCD\x46\xFC\xCD\x90\xFB\xEB\xCD" +
"\x90\xFB\xEB\xCD\x86\xFB\x21\x00\x00\xCD\x90\xFB\x0E\xE6\xCD\x46\xFC\xE1\xCD\x90\xFB\xC3\xCE\xFA\xC5\xCD\xB0\xF9\x7C\xCD\xA5\xFC" +
"\x7D\xCD\xBA\xF9\xC1\xC9\x4E\xCD\x46\xFC\xCD\x99\xF9\xC3\x86\xFB\x4C\xCD\x46\xFC\x4D\xC3\x46\xFC\xE5\xC5\xD5\x57\x3E\x80\x32\x08" +
"\xE0\x21\x00\x00\x39\x31\x00\x00\x22\x0D\x36\x0E\x00\x3A\x02\x80\x0F\x0F\x0F\x0F\xE6\x01\x5F\xF1\x79\xE6\x7F\x07\x4F\x26\x00\x25" +
"\xCA\x34\xFC\xF1\x3A\x02\x80\x0F\x0F\x0F\x0F\xE6\x01\xBB\xCA\xBF\xFB\xB1\x4F\x15\x3A\x2F\x36\xC2\xDC\xFB\xD6\x12\x47\xF1\x05\xC2" +
"\xDD\xFB\x14\x3A\x02\x80\x0F\x0F\x0F\x0F\xE6\x01\x5F\x7A\xB7\xF2\x0B\xFC\x79\xFE\xE6\xC2\xFF\xFB\xAF\x32\x2E\x36\xC3\x09\xFC\xFE" +
"\x19\xC2\xB7\xFB\x3E\xFF\x32\x2E\x36\x16\x09\x15\xC2\xB7\xFB\x21\x04\xE0\x36\xD0\x36\x36\x23\x36\x23\x36\x49\x3E\x27\x32\x01\xC0" +
"\x3E\xE0\x32\x01\xC0\x2E\x08\x36\xA4\x2A\x0D\x36\xF9\x3A\x2E\x36\xA9\xC3\xA1\xFC\x2A\x0D\x36\xF9\xCD\xCE\xFA\x7A\xB7\xF2\xAE\xFA" +
"\xCD\xA4\xF9\xC3\x9C\xFB\xE5\xC5\xD5\xF5\x3E\x80\x32\x08\xE0\x21\x00\x00\x39\x31\x00\x00\x16\x08\xF1\x79\x07\x4F\x3E\x01\xA9\x32" +
"\x02\x80\x3A\x30\x36\x47\xF1\x05\xC2\x66\xFC\x3E\x00\xA9\x32\x02\x80\x15\x3A\x30\x36\xC2\x7A\xFC\xD6\x0E\x47\xF1\x05\xC2\x7B\xFC" +
"\x14\x15\xC2\x58\xFC\xF9\x21\x04\xE0\x36\xD0\x36\x36\x23\x36\x23\x36\x49\x3E\x27\x32\x01\xC0\x3E\xE0\x32\x01\xC0\x2E\x08\x36\xA4" +
"\xF1\xD1\xC1\xE1\xC9\xF5\x0F\x0F\x0F\x0F\xCD\xAE\xFC\xF1\xE6\x0F\xFE\x0A\xFA\xB7\xFC\xC6\x07\xC6\x30\x4F\xF5\xC5\xD5\xE5\xCD\x01" +
"\xFE\x21\x85\xFD\xE5\x2A\x02\x36\xEB\x2A\x00\x36\x3A\x04\x36\x3D\xFA\xEE\xFC\xCA\x65\xFD\xE2\x73\xFD\x79\xD6\x20\x4F\x0D\xFA\xE9" +
"\xFC\xC5\xCD\xB9\xFD\xC1\xC3\xDD\xFC\xAF\x32\x04\x36\xC9\x79\xE6\x7F\x4F\xFE\x1F\xCA\xA3\xFD\xFE\x0C\xCA\xB2\xFD\xFE\x0D\xCA\xF3" +
"\xFD\xFE\x0A\xCA\x47\xFD\xFE\x08\xCA\xD6\xFD\xFE\x18\xCA\xB9\xFD\xFE\x19\xCA\xE2\xFD\xFE\x1A\xCA\xC5\xFD\xFE\x1B\xCA\x9E\xFD\xFE" +
"\x07\xC2\x38\xFD\x01\xF0\x05\x78\xFB\x3D\xC2\x28\xFD\x78\xF3\x3D\xC2\x2E\xFD\x0D\xC2\x27\xFD\xC9\x71\xCD\xB9\xFD\x7A\xFE\x03\xC0" +
"\x7B\xFE\x08\xC0\xCD\xE2\xFD\x7A\xFE\x1B\xC2\xC5\xFD\xE5\xD5\x21\xC2\x37\x11\x10\x38\x01\x9E\x07\x1A\x77\x23\x13\x0B\x79\xB0\xC2" +
"\x58\xFD\xD1\xE1\xC9\x79\xFE\x59\xC2\xE9\xFC\xCD\xB2\xFD\x3E\x02\xC3\xEA\xFC\x79\xD6\x20\x4F\x0D\x3E\x04\xFA\xEA\xFC\xC5\xCD\xC5" +
"\xFD\xC1\xC3\x77\xFD\x22\x00\x36\xEB\x22\x02\x36\x3E\x80\x32\x01\xC0\x7D\x32\x00\xC0\x7C\x32\x00\xC0\xE1\xD1\xC1\xF1\xC9\x3E\x01" +
"\xC3\xEA\xFC\x21\xF4\x3F\x11\x25\x09\xAF\x77\x2B\x1B\x7B\xB2\xC2\xA9\xFD\x11\x08\x03\x21\xC2\x37\xC9\x7B\x23\x1C\xFE\x47\xC0\x1E" +
"\x08\x01\xC0\xFF\x09\x7A\xFE\x1B\x01\x4E\x00\xC2\xD3\xFD\x16\x02\x01\xB0\xF8\x14\x09\xC9\x7B\x2B\x1D\xFE\x08\xC0\x1E\x47\x01\x40" +
"\x00\x09\x7A\xFE\x03\x01\xB2\xFF\xC2\xF0\xFD\x16\x1C\x01\x50\x07\x15\x09\xC9\x7D\x93\xD2\xF9\xFD\x25\x6F\x1E\x08\x01\x08\x00\x09" +
"\xC9\x3A\x02\x80\xE6\x80\xCA\x0E\xFE\x3A\x05\x36\xB7\xC0\xE5\x2A\x09\x36\xCD\x72\xFE\xBD\x6F\xCA\x2A\xFE\x3E\x01\x32\x0B\x36\x26" +
"\x15\xAF\x22\x09\x36\xE1\x32\x05\x36\xC9\x25\xC2\x21\xFE\x3C\xCA\x22\xFE\x3C\xCA\x51\xFE\xC5\x01\x03\x50\xCD\x27\xFD\xC1\x3A\x0B" +
"\x36\x26\xE0\x3D\x32\x0B\x36\xCA\x4C\xFE\x26\x40\x3E\xFF\xC3\x22\xFE\x3A\x02\x80\xE6\x80\xCA\x51\xFE\x3A\x06\x36\x2F\x32\x06\x36" +
"\xC3\x1A\xFE\xCD\x01\xFE\xB7\xCA\x63\xFE\xAF\x32\x05\x36\x3A\x09\x36\xC9\x3A\x02\x80\xE6\x80\xC2\x7D\xFE\x3E\xFE\xC9\xAF\x32\x00" +
"\x80\x32\x02\x80\x3A\x06\x36\xE6\x01\xF6\x06\x32\x03\x80\x3A\x01\x80\x3C\xC2\x97\xFE\x3D\xC9\xE5\x2E\x01\x26\x07\x7D\x0F\x6F\x2F" +
"\x32\x00\x80\x3A\x01\x80\x2F\xB7\xC2\xB3\xFE\x25\xF2\x9C\xFE\x3E\xFF\xE1\xC9\x2E\x20\x3A\x01\x80\x2F\xB7\xCA\xAF\xFE\x2D\xC2\xB5" +
"\xFE\x2E\x08\x2D\x07\xD2\xC3\xFE\x7C\x65\x6F\xFE\x01\xCA\xFA\xFE\xDA\xF3\xFE\x07\x07\x07\xC6\x20\xB4\xFE\x5F\xC2\x06\xFF\x3E\x20" +
"\xE1\xC9\x09\x0A\x0D\x7F\x08\x19\x18\x1A\x0C\x1F\x1B\x00\x01\x02\x03\x04\x05\x7C\x21\xEA\xFE\xC3\xFE\xFE\x7C\x21\xE2\xFE\x85\x6F" +
"\x7E\xFE\x40\xE1\xD8\xE5\x6F\x3A\x02\x80\x67\xE6\x40\xC2\x1A\xFF\x7D\xFE\x40\xFA\x3F\xFF\xE6\x1F\xE1\xC9\x3A\x06\x36\xB7\xCA\x2A" +
"\xFF\x7D\xFE\x40\xFA\x2A\xFF\xF6\x20\x6F\x7C\xE6\x20\xC2\x3F\xFF\x7D\xFE\x40\xFA\x3B\xFF\x7D\xEE\x20\xE1\xC9\x7D\xE6\x2F\x6F\x7D" +
"\xFE\x40\xE1\xF0\xE5\x6F\xE6\x0F\xFE\x0C\x7D\xFA\x50\xFF\xEE\x10\xE1\xC9\x2A\x31\x36\xC9\x22\x31\x36\xC9\x1F\x72\x61\x64\x69\x6F" +
"\x2D\x38\x36\x72\x6B\x00\x0D\x0A\x2D\x2D\x3E\x00\x0D\x0A\x18\x18\x18\x18\x00\x0D\x0A\x20\x50\x43\x2D\x0D\x0A\x20\x48\x4C\x2D\x0D" +
"\x0A\x20\x42\x43\x2D\x0D\x0A\x20\x44\x45\x2D\x0D\x0A\x20\x53\x50\x2D\x0D\x0A\x20\x41\x46\x2D\x19\x19\x19\x19\x19\x19\x00\x08\x20" +
"\x08\x00\x22\x16\x36\xF5\xE1\x22\x1E\x36\xE1\x2B\x22\x14\x36\x21\x00\x00\x39\x31\x1E\x36\xE5\xD5\xC5\x2A\x14\x36\x31\xCF\x36\xCD" +
"\x78\xFB\xEB\x2A\x23\x36\xCD\x90\xF9\xC2\x6C\xF8\x3A\x25\x36\x77\xC3\x6C\xF8\x21\x73\xFF\xCD\x22\xF9\x21\x14\x36\x06\x06\x5E\x23" +
"\x56\xC5\xE5\xEB\xCD\x78\xFB\xCD\xEE\xF8\xD2\xF6\xFF\xCD\x5A\xF9\xD1\xD5\xEB\x72\x2B\x73\xE1\xC1\x05\x23\xC2\xDE\xFF\xC9\xFF\xFF"};
ui.file_loaded(file);
}
tape_file();
