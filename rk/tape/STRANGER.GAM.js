function tape_file() {
var file = {
name: "STRANGER.GAM",
start: 0x0000,
end: 0x1020,
entry: 0x0000,
image:
"\xC3\x30\x08\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x20\x20\x20\x20\x7F\x7F\x7F\x20\x20\x7F\x7F\x7F\x7F\x7F" +
"\x20\x7F\x7F\x7F\x7F\x20\x20\x20\x20\x7F\x7F\x7F\x00\x7F\x00\x20\x20\x7F\x20\x20\x7F\x7F\x7F\x20\x20\x20\x7F\x7F\x7F\x7F\x20\x7F" +
"\x7F\x7F\x7F\x20\x20\x20\x7F\x7F\x7F\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x20\x00\x00\x7F\x20\x00\x00\x7F\x20\x20\x20\x7F\x20\x00\x00\x7F\x20\x20\x20\x7F\x00\x20\x7F\x20\x20\x7F\x00\x7F\x00\x20\x00\x7F" +
"\x00\x7F\x00\x00\x20\x7F\x00\x00\x7F\x20\x00\x00\x00\x7F\x20\x20\x00\x7F\x00\x7F\x00\x00\x00\x7F\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x20\x20\x20\x7F\x00\x00\x00\x20\x20\x20\x20\x7F\x20\x20\x20\x7F\x20\x00" +
"\x20\x7F\x00\x7F\x00\x20\x20\x7F\x00\x7F\x7F\x20\x00\x7F\x00\x7F\x00\x00\x20\x20\x00\x00\x7F\x20\x00\x00\x00\x7F\x00\x20\x00\x7F" +
"\x00\x7F\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x20\x20\x20\x20" +
"\x7F\x7F\x7F\x00\x20\x20\x20\x7F\x20\x20\x20\x7F\x7F\x7F\x7F\x20\x20\x7F\x7F\x7F\x7F\x7F\x00\x7F\x00\x7F\x00\x7F\x00\x7F\x00\x00" +
"\x20\x20\x20\x20\x7F\x7F\x7F\x7F\x20\x7F\x7F\x7F\x7F\x20\x20\x00\x7F\x7F\x7F\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x20\x00\x00\x20\x20\x00\x00\x7F\x20\x20\x20\x7F\x20\x00\x00\x7F\x00\x20\x7F\x00\x00\x7F" +
"\x00\x20\x00\x7F\x20\x7F\x00\x20\x7F\x7F\x20\x7F\x20\x00\x7F\x7F\x7F\x00\x7F\x20\x00\x00\x20\x7F\x00\x00\x7F\x00\x00\x20\x00\x00" +
"\x00\x7F\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x20\x00\x00\x7F\x20\x00\x00\x7F" +
"\x20\x20\x20\x7F\x20\x00\x00\x7F\x20\x00\x20\x7F\x00\x7F\x00\x20\x00\x7F\x00\x7F\x00\x20\x00\x7F\x00\x7F\x00\x00\x20\x7F\x00\x00" +
"\x7F\x20\x00\x00\x00\x7F\x00\x20\x00\x7F\x00\x7F\x00\x00\x00\x7F\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x20\x20\x20\x7F\x7F\x7F\x00\x20\x20\x20\x7F\x20\x00\x00\x7F\x20\x00\x20\x7F\x20\x7F\x00\x20\x00\x7F" +
"\x00\x7F\x00\x00\x20\x7F\x20\x20\x7F\x7F\x7F\x20\x20\x20\x7F\x7F\x7F\x7F\x00\x7F\x00\x00\x20\x7F\x20\x00\x7F\x7F\x7F\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x56\x31\x2E\x30\x3A\x6D\x69\x6B\x72\x6F\x7B\x61\x20" +
"\x20\x20\x20\x20\x20\x20\x20\x20\x20\x67\x2E\x73\x61\x72\x61\x74\x6F\x77\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x61\x2E\x77" +
"\x2E\x6E\x6F\x77\x69\x6B\x6F\x77\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14" +
"\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x14\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x2E\x2E\x2E\x32\x31\x30\x31\x20\x67\x6F\x64\x2E\x20\x7A\x65\x6D\x6C" +
"\x71\x6E\x65\x20\x77\x65\x64\x75\x74\x20\x77\x6F\x6A\x6E\x75\x20\x73\x20\x77\x72\x61\x76\x64\x65\x62\x6E\x6F\x6A\x20\x69\x6E\x6F" +
"\x70\x6C\x61\x2D\x20\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x6E\x65\x74" +
"\x6E\x6F\x6A\x20\x63\x69\x77\x69\x6C\x69\x7A\x61\x63\x69\x65\x6A\x2C\x20\x20\x70\x79\x74\x61\x60\x7D\x65\x6A\x73\x71\x20\x20\x77" +
"\x79\x73\x61\x64\x69\x74\x78\x20\x64\x65\x73\x61\x6E\x74\x20\x20\x6E\x61\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x7A\x65\x6D\x6C\x60\x20\x69\x20\x70\x6F\x72\x61\x62\x6F\x74\x69\x74\x78\x20\x20\x65" +
"\x65\x2E\x20\x6F\x62\x6F\x72\x6F\x6E\x61\x20\x6F\x64\x6E\x6F\x67\x6F\x20\x20\x69\x7A\x20\x20\x66\x6F\x72\x70\x6F\x73\x74\x6F\x77" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x64\x6F\x77\x65\x72\x65\x6E" +
"\x61\x20\x77\x61\x6D\x2E\x20\x75\x70\x72\x61\x77\x6C\x71\x71\x20\x70\x61\x74\x72\x75\x6C\x78\x6E\x79\x6D\x69\x20\x6B\x6F\x72\x61" +
"\x62\x6C\x71\x6D\x69\x2C\x20\x6E\x61\x64\x6F\x00\x6E\x65\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x64\x6F\x70\x75\x73\x6B\x61\x74\x78\x20\x70\x6F\x73\x61\x64\x6B\x69\x20\x6E\x61\x20\x7A\x65\x6D\x6C" +
"\x60\x20\x74\x72\x65\x68\x20\x6B\x6F\x72\x61\x62\x6C\x65\x6A\x20\x70\x72\x69\x7B\x65\x6C\x78\x63\x65\x77\x00\x2C\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x74\x61\x6B\x20\x6B\x61\x6B\x2C\x20\x6F\x62" +
"\x27\x65\x64\x69\x6E\x69\x77\x20\x73\x77\x6F\x69\x20\x7C\x6E\x65\x72\x67\x65\x74\x69\x7E\x65\x73\x6B\x69\x65\x20\x75\x73\x74\x61" +
"\x6E\x6F\x77\x6B\x69\x2C\x20\x6F\x6E\x69\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x72\x61\x7A\x72\x75\x7B\x61\x74\x20\x7A\x61\x7D\x69\x74\x6E\x6F\x65\x20\x70\x6F\x6C\x65\x20\x66\x6F\x72\x70\x6F\x73" +
"\x74\x61\x2E\x2E\x2E\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C" +
"\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C\x1C" +
"\x1C\x1C\x1C\x1C\x1C\x1C\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x6B\x6C\x61\x77\x69\x7B\x69\x20\x75\x70\x72\x61\x77\x6C\x65\x6E\x69\x71\x20\x70\x61\x74\x72\x75\x6C\x78" +
"\x6E\x79\x6D\x20\x6B\x6F\x72\x61\x62\x6C\x65\x6D\x3A\x20\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x0B\x20\x20\x20\x20\x20\x0F\x20" +
"\x20\x20\x20\x20\x0E\x20\x20\x20\x20\x20\x1D\x20\x20\x20\x20\x3C\x70\x72\x6F\x62\x65\x6C\x3E\x20\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x6B\x77\x61\x6C\x69\x66\x69\x6B\x61\x63\x69\x71\x20\x28\x31\x2D\x39\x29\x3A\x20" +
"\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x73\x6B\x6F\x72\x6F\x73\x74\x78\x28\x31\x2D\x35\x29\x3A\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x80\x31\xFF\x75\xCD\x3F\x0E\x21\x6E\x0E\xE5\x3A\xC2\x77\xC9\x3E\x82" +
"\x32\xC2\x77\x3E\x80\x32\x32\x7A\x21\xFF\x0F\xCD\x8F\x0E\x3E\x3A\x91\x07\x32\x09\x10\x21\x18\x0D\x36\x40\xFE\x09\xD2\x68\x08\x36" +
"\x60\xFE\x04\xD2\x68\x08\x36\x80\x21\x04\x10\xCD\x8F\x0E\x79\xFE\x36\xD2\x68\x08\xD6\x26\x07\x07\x07\x07\x32\x0A\x10\x21\x3F\x7C" +
"\x22\x10\x10\x21\x00\x00\x22\x0E\x10\x3E\x30\x32\x0D\x10\x3E\x06\x32\x0C\x10\xAF\x32\x0B\x10\x0E\x03\x21\x1E\x10\x36\x00\x23\x0D" +
"\xC2\x9C\x08\x0E\x03\x21\x17\x10\x36\x00\x23\x0D\xC2\xA8\x08\x0E\x1F\xCD\x09\xF8\x0E\x40\xC5\xCD\x2A\x0E\x7D\xFE\x2D\xD2\xB7\x08" +
"\xFE\x20\xDA\xB7\x08\x7C\xFE\x60\xD2\xB7\x08\xFE\x20\xDA\xB7\x08\x22\xFC\x0F\x21\xFA\x0F\xCD\x18\xF8\x0E\x2E\xCD\x09\xF8\xC1\x0D" +
"\xC2\xB6\x08\x0E\x0C\xCD\x09\xF8\x0E\x20\x11\x01\x00\x21\x26\x77\x06\x40\xCD\x09\x0E\x21\x52\x7C\x06\x40\x0E\x5F\xCD\x09\x0E\x0E" +
"\x20\x11\x4E\x00\x21\xC1\x77\x06\x18\xCD\x09\x0E\x21\x00\x78\x06\x18\xCD\x09\x0E\x21\xA0\x7C\x11\xFF\x7F\x36\x17\x23\xCD\x32\x0F" +
"\xC2\x1A\x09\x21\x3E\x7C\x36\x17\x21\xF0\x7B\x36\x12\x23\x36\x03\x23\x36\x17\x23\x36\x03\x23\x36\x05\x21\xA4\x7B\x36\x0B\x21\x42" +
"\x7C\x36\x17\x21\xDD\x7C\x36\x80\x2B\x3A\x0C\x10\xC6\x30\x77\x2B\x36\x82\xCD\xE6\x0D\x3A\x0C\x10\xB7\xCA\xFB\x09\xAF\x32\x00\x80" +
"\x3A\x01\x80\xFE\xFF\xCA\xFB\x09\x21\xA4\x7B\x3E\xF8\x32\x00\x80\x3A\x01\x80\xFE\xDF\xC2\x80\x09\x36\x0B\x21\xB2\xFF\xC3\xF8\x09" +
"\x3E\xF8\x32\x00\x80\x3A\x01\x80\xFE\x7F\xC2\x99\x09\x36\x0F\x21\x4E\x00\xC3\xF8\x09\xE5\xC3\x95\x09\x3E\xF8\x32\x00\x80\x3A\x01" +
"\x80\xFE\xEF\xC2\xAE\x09\x36\x1D\x21\xFF\xFF\xC3\xF8\x09\x3E\xF8\x32\x00\x80\x3A\x01\x80\xFE\xBF\xC2\xC3\x09\x36\x0E\x21\x01\x00" +
"\xC3\xF8\x09\x3E\xF8\x32\x00\x80\x3A\x01\x80\xFE\xF7\xC2\xFB\x09\x2A\x0E\x10\xEB\x2A\x10\x10\x23\xE5\x0E\x2A\xCD\x05\x0E\xCD\xEA" +
"\x0E\xE1\x0E\x00\xCD\x05\x0E\xFE\x7F\xCA\x4B\x0C\x2A\x10\x10\xCD\x82\x0D\xCD\x9D\x0D\xC3\xFB\x09\x22\x0E\x10\x2A\x0E\x10\xEB\x2A" +
"\x10\x10\x19\x19\x19\x7E\xFE\x20\xC2\x19\x0A\x2A\x0E\x10\x7C\x2F\x67\x7D\x2F\x6F\x23\x22\x0E\x10\xEB\x2A\x10\x10\xCD\x82\x0D\x19" +
"\x22\x10\x10\x7E\xFE\x5F\xCC\xEC\x0B\xF5\xCC\x4D\x0D\xF1\xCA\x88\x0A\xCD\x9D\x0D\xCD\x2A\x0E\x7C\xFE\x0B\xDA\x16\x0D\xFE\xB0\xD2" +
"\x88\x0A\xFE\x44\xDA\x4D\x0A\x11\xFF\xFF\xC3\x50\x0A\x11\x4E\x00\x2A\x12\x10\xE5\x19\x7E\xE1\xFE\x3C\xCA\x66\x0A\xFE\x09\xCA\x66" +
"\x0A\xFE\x3E\xC2\x68\x0A\x3E\x2E\x47\xFE\x20\xC2\x75\x0A\x11\x4F\x00\xE5\x19\x7E\xE1\xFE\x5F\xCA\x97\x0A\x3A\x1D\x10\x77\x78\x32" +
"\x1D\x10\x19\x22\x12\x10\x36\x7F\x3A\x0A\x10\x47\x0E\x00\x03\x78\xB1\xC2\x8E\x0A\xC3\x55\x09\x11\x25\x7C\x2A\x12\x10\xCD\x32\x0F" +
"\xDA\xA9\x0A\x11\xB1\xFF\xC3\x50\x0A\x36\x00\x23\x22\x12\x10\x36\x7F\x3E\x90\x32\x10\x77\x0E\x2B\xCD\x26\x0C\xCD\xC1\x0E\xAF\x32" +
"\x10\x77\x0E\x00\xCD\x26\x0C\x2A\x10\x10\x11\x3F\x7C\xCD\x32\x0F\xCA\xDC\x0A\xCD\xC0\x0D\xCD\x82\x0D\xCD\x4D\x0D\x2A\x12\x10\x36" +
"\x00\x23\x36\x7F\xE5\x01\x4E\x00\x09\x2B\x36\x5F\x23\x36\x5C\x01\x00\xF8\xC5\xCD\x23\x0E\x36\x21\xC1\xC5\xCD\x23\x0E\x36\x2F\xC1" +
"\xCD\x23\x0E\xE1\x11\x26\x7C\xCD\x32\x0F\xDA\xDF\x0A\xE5\x01\x4E\x00\x09\x36\x5F\xE1\x3A\x0B\x10\x3C\x32\x0B\x10\x01\xB2\xFF\x36" +
"\x23\x09\xC5\xF5\x00\x00\x00\xCD\x23\x0E\xF1\xC1\x3D\xC2\x1F\x0B\x36\x21\x3A\x0B\x10\xFE\x03\xDA\xE6\x0B\x21\x8A\x7B\x1E\x19\x01" +
"\x1E\x10\xAF\xCD\x27\xFD\x32\x16\x10\x3E\x01\x32\x02\xD8\x00\x00\x00\x00\x00\x00\x00\x00\xE5\xD5\xC5\x11\x4E\x00\x3E\x03\xF5\x0A" +
"\x2B\x77\x23\x7E\x02\x36\x0E\x19\x03\xF1\x3D\xC2\x5E\x0B\x3A\x16\x10\x32\x02\xD8\x3C\x32\x16\x10\x3E\x01\xCD\x27\xFD\x01\x00\xF0" +
"\xCD\x23\x0E\xC1\xD1\xE1\x23\x3A\x16\x10\xCD\x27\xFD\x3C\x32\x16\x10\x3E\x01\x32\x02\xD8\x1D\xC2\x56\x0B\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x21\xA1\x7B\x01\x06\x03\xC5\xE5\xC5\xE5\xCD\x2A\x0E\x7C\xE6\x17\xE1\x77\x23\xC1\x0D\xC2\xAA\x0B\xE1\xC1\x11\x4E\x00\x19" +
"\x05\xC2\xA8\x0B\x3E\x90\x32\x10\x77\xCD\xC1\x0E\xAF\x32\x10\x77\x21\x8E\x0F\xCD\x18\xF8\xCD\x03\xF8\xFE\x03\xCA\x00\xF8\xFE\x0D" +
"\xC2\xD6\x0B\xC3\x7D\x08\xCD\xE6\x0D\xC3\x88\x0A\xF5\xD5\xE5\x7E\x32\x1A\x10\x36\x5C\x23\x7E\x32\x1B\x10\x36\x7F\x23\x7E\x32\x1C" +
"\x10\x36\x2F\xCD\x13\x0F\xE1\x0E\x03\xEB\x21\x1A\x10\x7E\x23\xEB\x77\x23\xEB\x0D\xC2\x0D\x0C\x0E\x03\x21\x17\x10\x36\x00\x23\x0D" +
"\xC2\x1C\x0C\xD1\xF1\xC9\x2A\x12\x10\xE5\x2B\xCD\x42\x0C\xE1\xE5\x23\xCD\x42\x0C\xE1\xE5\x11\xB2\xFF\x19\xCD\x42\x0C\xE1\x11\x4E" +
"\x00\x19\x7E\xFE\x20\xC8\xFE\x5F\xC8\x71\xC9\x3E\x2E\x32\x1D\x10\x3E\x25\x32\x16\x10\x00\x00\x00\x00\x00\x00\x00\x00\x2A\x10\x10" +
"\xCD\x82\x0D\xCD\x9D\x0D\x11\x4E\x00\x2A\x12\x10\x3A\x1D\x10\x77\x19\x7E\xFE\x3E\xCA\x04\x0D\xFE\x09\xCA\x04\x0D\xFE\x3C\xCA\x04" +
"\x0D\xB7\xCA\xD1\x0C\xFE\x2E\xCA\xD1\x0C\x2B\xCD\xEC\x0B\x21\x67\x0F\xCD\x18\xF8\x3A\x0D\x10\x3C\x32\x0D\x10\x4F\xCD\x09\xF8\x0E" +
"\x20\xCD\x09\xF8\xFE\x36\xC2\x52\x09\x21\x74\x7C\x11\xB2\xFF\x0E\x03\x36\x21\x19\xC5\x01\x00\xD0\xCD\x23\x0E\xC1\x0D\xC2\xB1\x0C" +
"\x36\x21\x23\x36\x17\x21\xD3\x0F\xCD\x18\xF8\x21\xB0\x0F\xC3\xD3\x0B\x32\x1D\x10\xE5\xCD\x2A\x0E\x3E\x01\x84\xE6\x17\xE1\x77\x01" +
"\x00\xF8\xCD\x23\x0E\x3A\x16\x10\x3C\x00\x00\x00\x00\x00\x00\xF5\x01\x00\xF8\xCD\x23\x0E\xF1\x3C\x32\x02\xD8\x32\x02\xD8\x32\x16" +
"\x10\xC3\x6C\x0C\x2B\xE5\x0E\x03\x36\x00\x23\x0D\xC2\x08\x0D\xCD\x4D\x0D\xE1\xC3\x8B\x0C\x7D\xFE\x40\xD2\x88\x0A\x2A\x10\x10\x11" +
"\x3F\x7C\xCD\x32\x0F\xCA\x88\x0A\x3E\x90\x32\x10\x77\x0E\x2B\xCD\x26\x0C\xCD\xC1\x0E\xAF\x32\x10\x77\x0E\x00\xCD\x26\x0C\x2A\x10" +
"\x10\xCD\xC0\x0D\xCD\x82\x0D\xCD\x4D\x0D\xC3\x88\x0A\x21\x00\x00\x22\x0E\x10\x21\x3F\x7C\x22\x10\x10\x3E\x30\x32\xDC\x7C\x0E\x03" +
"\x21\x17\x10\x36\x00\x23\x0D\xC2\x63\x0D\x3A\x0C\x10\xB7\xC8\x3D\x32\x0C\x10\xC6\x30\x32\xDC\x7C\xD6\x30\xC0\x21\x3E\x0F\xCD\x18" +
"\xF8\xC9\xE5\xD5\x11\x17\x10\x0E\x03\xEB\x7E\xFE\x7F\xC2\x92\x0D\x3E\x2E\xEB\x77\x23\x13\x0D\xC2\x89\x0D\xD1\xE1\xC9\x3A\x0C\x10" +
"\xB7\xC8\xE5\xD5\x11\x17\x10\x7E\xEB\x77\xEB\x36\x3C\x23\x13\x7E\xEB\x77\xEB\x36\x09\x23\x13\x7E\xEB\x77\xEB\x36\x3E\xD1\xE1\xC9" +
"\x3E\x11\xCD\xD5\x0D\x3E\x14\xCD\xD5\x0D\x3E\x1C\xCD\xD5\x0D\x3E\x2E\xCD\xD5\x0D\xAF\xE5\x0E\x03\x77\x23\x0D\xC2\xD8\x0D\x01\x00" +
"\xE0\xCD\x23\x0E\xE1\xC9\xCD\x2A\x0E\x7D\xFE\x23\xDA\xE6\x0D\xFE\x37\xD2\xE6\x0D\x26\x00\x11\x10\x78\x19\xF2\x01\x0E\x11\x4E\x00" +
"\x19\x22\x12\x10\xC9\x3A\x09\x10\x47\x7E\xB7\xCA\x1C\x0E\xFE\x09\xCA\x1C\x0E\xFE\x5F\xC8\xFE\x7F\xC8\xFE\x24\xD8\x71\x19\x05\xC2" +
"\x09\x0E\xC9\x03\x78\xB1\xC2\x23\x0E\xC9\x2A\x14\x10\x0E\x10\x7C\x29\xE6\x60\xEA\x37\x0E\x23\x0D\xC2\x2F\x0E\x22\x14\x10\xC9\x21" +
"\x01\xD0\x36\x00\x2B\x36\x4D\x36\x1D\x36\x99\x36\xD3\x23\x36\x27\x7E\x7E\xE6\x20\xCA\x51\x0E\x21\x08\xF8\x36\x80\x21\x04\xF8\x36" +
"\xD0\x36\x76\x2C\x36\x23\x36\x49\x21\x08\xF8\x36\xA4\xC9\x11\x3E\x08\xD5\x01\x03\x00\x16\x00\x21\xC2\x77\x0A\xFE\x80\xD2\x88\x0E" +
"\x77\x23\xAA\x57\x03\xC3\x7A\x0E\x3E\x54\xBA\xC8\xC3\x95\x09\xCD\x18\xF8\xCD\x03\xF8\xFE\x31\xDA\x92\x0E\xFE\x3A\xD2\x92\x0E\x4F" +
"\xCD\x09\xF8\xCD\x03\xF8\xFE\x08\xCC\xB4\x0E\xCA\x92\x0E\xFE\x0D\xC2\xA3\x0E\xC9\xCD\xBC\x0E\x0E\x20\xCD\x09\xF8\x0E\x08\xC3\x09" +
"\xF8\x00\x00\x00\x3E\x20\x00\x00\x00\x3D\xC8\xF5\x36\x06\x3E\x10\xCD\xDD\x0E\x77\x3E\x10\xCD\xDD\x0E\xF1\xC3\xC6\x0E\xC5\x47\x48" +
"\x0D\xC2\xE0\x0E\x3D\xC2\xDF\x0E\xC1\xC9\x00\x00\x00\x00\x00\x00\x00\x00\x21\x38\x0F\x7E\xB7\xCA\x0A\x0F\x32\x02\xD8\x32\x02\xD8" +
"\x23\x01\x00\xFC\xCD\x23\x0E\xC3\xF5\x0E\x00\x00\x00\x00\x00\x00\x00\x00\xC9\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\xCD\x27\xFD" +
"\x32\x02\xD8\x01\x00\xF0\xCD\x23\x0E\x00\x00\x00\x00\x00\x00\x00\x00\xC9\x7C\xBA\xC0\x7D\xBB\xC9\x05\x08\x10\x17\x25\x00\x1B\x59" +
"\x32\x2F\x20\x70\x6F\x67\x69\x62\x20\x70\x6F\x73\x6C\x65\x64\x6E\x69\x6A\x20\x70\x61\x74\x72\x75\x6C\x78\x6E\x79\x6A\x20\x6B\x6F" +
"\x72\x61\x62\x6C\x78\x20\x00\x1B\x59\x34\x2F\x20\x75\x6E\x69\x7E\x74\x6F\x76\x65\x6E\x6F\x20\x6B\x6F\x72\x61\x62\x6C\x65\x6A\x20" +
"\x70\x72\x69\x7B\x65\x6C\x78\x63\x65\x77\x20\x3A\x20\x00\x1B\x59\x36\x32\x20\x66\x6F\x72\x70\x6F\x73\x74\x20\x7A\x65\x6D\x6C\x71" +
"\x6E\x20\x75\x6E\x69\x7E\x74\x6F\x76\x65\x6E\x20\x21\x21\x21\x20\x1B\x59\x38\x32\x20\x64\x6C\x71\x20\x70\x72\x6F\x64\x6F\x6C\x76" +
"\x65\x6E\x69\x71\x20\x6E\x61\x76\x69\x6D\x74\x65\x20\x3C\x77\x6B\x3E\x20\x00\x1B\x59\x36\x30\x20\x7A\x65\x6D\x6E\x61\x71\x20\x63" +
"\x69\x77\x69\x6C\x69\x7A\x61\x63\x69\x71\x20\x73\x70\x61\x73\x65\x6E\x61\x20\x77\x61\x6D\x69\x21\x20\x00\x1B\x59\x21\x55\x00\x1B" +
"\x00\x12\x17\x00\x1B\x59\x37\x55\x00\x12\xB0\x00\x06\x30\x00\x00\x3F\x7C\x5A\x7A\x20\xF1\x01\x00\x00\x00\x5F\x5F\x5F\x00\x00\x00" +
"\x00"};
ui.file_loaded(file);
}
tape_file();
