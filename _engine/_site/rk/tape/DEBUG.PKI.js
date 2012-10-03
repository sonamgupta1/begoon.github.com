function tape_file() {
var file = {
name: "DEBUG.PKI",
start: 0x6100,
end: 0x73ff,
entry: 0x6100,
image:
"\xC3\x00\x64\x1F\x1B\x59\x20\x25\x20\x20\x20\x20\x20\x20\x64\x69\x72\x65\x6B\x74\x69\x77\x79\x20\x6F\x74\x6C\x61\x64\x7E\x69\x6B" +
"\x61\x0A\x0D\x0A\x31\x2D\x74\x72\x61\x73\x73\x69\x72\x6F\x77\x6B\x61\x20\x6B\x6F\x6D\x61\x6E\x64\x2C\x20\x32\x2D\x73\x74\x65\x6B" +
"\x20\x69\x20\x77\x65\x72\x7B\x69\x6E\x61\x20\x73\x74\x65\x6B\x61\x2C\x20\x20\x0D\x0A\x33\x2D\x74\x72\x61\x73\x73\x2E\x20\x70\x6F" +
"\x64\x70\x72\x6F\x67\x72\x61\x6D\x6D\x2C\x20\x34\x2D\x74\x72\x61\x73\x73\x2E\x20\x70\x65\x72\x65\x68\x6F\x64\x6F\x77\x2C\x20\x20" +
"\x20\x20\x20\x20\x0D\x0A\x35\x2D\x70\x6F\x7B\x61\x67\x6F\x77\x79\x6A\x20\x72\x65\x76\x69\x6D\x2C\x20\x20\x20\x20\x36\x2D\x77\x79" +
"\x62\x6F\x72\x20\x6F\x62\x22\x65\x6B\x74\x61\x20\x6C\x6F\x77\x75\x7B\x65\x6B\x2C\x20\x0D\x0A\x37\x2D\x70\x72\x6F\x68\x6F\x76\x64" +
"\x65\x6E\x69\x65\x20\x6C\x6F\x77\x75\x7B\x65\x6B\x2C\x38\x2D\x77\x79\x77\x6F\x64\x20\x77\x20\x77\x65\x72\x68\x6E\x60\x60\x20\x73" +
"\x74\x72\x6F\x6B\x75\x2C\x0A\x0D\x0A\x46\x31\x2C\x46\x32\x2C\x46\x33\x20\x2D\x20\x69\x6E\x77\x65\x72\x74\x69\x72\x6F\x77\x61\x6E" +
"\x69\x65\x20\x70\x65\x72\x65\x6E\x6F\x73\x61\x2C\x6E\x75\x6C\x71\x2C\x7A\x6E\x61\x6B\x61\x2C\x0D\x0A\x46\x34\x20\x20\x2D\x20\x20" +
"\x77\x79\x70\x6F\x6C\x6E\x65\x6E\x69\x65\x20\x70\x6F\x64\x70\x72\x6F\x67\x72\x61\x6D\x6D\x79\x2C\x20\x20\x0A\x0D\x0A\x4D\x2C\x4C" +
"\x2C\x46\x2C\x54\x2C\x53\x20\x20\x20\x2D\x20\x72\x61\x62\x6F\x74\x61\x20\x73\x20\x70\x61\x6D\x71\x74\x78\x60\x2C\x0D\x0A\x57\x20" +
"\x41\x31\x2C\x41\x32\x2C\x6B\x6F\x64\x20\x2D\x20\x70\x6F\x69\x73\x6B\x20\x73\x6C\x6F\x77\x61\x2C\x20\x20\x20\x20\x0D\x0A\x44\x2F" +
"\x41\x31\x2F\x2C\x4E\x2F\x20\x2D\x20\x64\x61\x6D\x70\x20\x70\x61\x6D\x71\x74\x69\x2C\x20\x20\x20\x20\x20\x20\x20\x0D\x0A\x5A\x2F" +
"\x41\x31\x2F\x2C\x4E\x2F\x20\x2D\x20\x64\x69\x7A\x61\x73\x73\x65\x6D\x62\x6C\x69\x72\x6F\x77\x61\x6E\x69\x65\x2C\x0D\x0A\x4F\x2F" +
"\x4E\x2F\x2C\x41\x31\x2F\x20\x2D\x20\x75\x73\x74\x61\x6E\x6F\x77\x6B\x61\x20\x6C\x6F\x77\x75\x7B\x65\x6B\x2C\x20\x0D\x0A\x4B\x20" +
"\x41\x31\x2C\x41\x32\x20\x20\x2D\x20\x77\x79\x7E\x69\x73\x6C\x65\x6E\x69\x65\x20\x6B\x6F\x6E\x74\x72\x2E\x73\x75\x6D\x6D\x79\x2C" +
"\x20\x20\x0D\x0A\x49\x2F\x41\x31\x2C\x41\x32\x2F\x20\x2D\x20\x69\x6E\x74\x65\x72\x77\x61\x6C\x78\x6E\x61\x71\x20\x6C\x6F\x77\x75" +
"\x7B\x6B\x61\x2C\x20\x20\x20\x20\x0D\x0A\x58\x20\x20\x20\x20\x20\x20\x20\x20\x2D\x20\x69\x7A\x6D\x65\x6E\x65\x6E\x69\x65\x20\x72" +
"\x65\x67\x69\x73\x74\x72\x6F\x77\x2C\x20\x20\x20\x20\x20\x0D\x0A\x55\x20\x6D\x65\x74\x6B\x61\x20\x20\x2D\x20\x61\x64\x72\x65\x73" +
"\x20\x28\x7A\x6E\x61\x7E\x65\x6E\x69\x65\x29\x20\x6D\x65\x74\x6B\x69\x2C\x20\x20\x0D\x0A\x41\x20\x41\x31\x2F\x2C\x4E\x2F\x20\x2D" +
"\x20\x75\x73\x74\x61\x6E\x6F\x77\x6B\x61\x20\x61\x64\x72\x65\x73\x61\x20\x69\x20\x73\x6B\x6F\x72\x6F\x73\x74\x69\x2C\x20\x0D\x0A" +
"\x47\x20\x20\x69\x20\x20\x4A\x20\x20\x2D\x20\x77\x79\x70\x6F\x6C\x6E\x65\x6E\x69\x65\x20\x70\x72\x6F\x67\x72\x61\x6D\x6D\x79\x2C" +
"\x20\x20\x20\x20\x0D\x0A\x52\x20\x20\x20\x20\x20\x20\x20\x20\x2D\x20\x75\x68\x6F\x64\x20\x77\x20\x70\x72\x6F\x67\x72\x61\x6D\x6D" +
"\x75\x2C\x20\x20\x20\x20\x20\x20\x20\x20\x0D\x0A\x3F\x2F\x4E\x2F\x20\x20\x20\x20\x20\x2D\x20\x73\x70\x72\x61\x77\x6B\x61\x2E\x00" +
"\xC3\xB3\x65\xC3\x91\x68\xC3\xEE\x65\xC3\x6C\xF8\xC3\x00\x00\xC3\x18\xF8\xC3\x03\xF8\xC3\x1B\xF8\x4F\xC3\x09\xF8\xC3\x1E\xF8\xC3" +
"\x2A\xF8\xC3\x30\xF8\xC3\x33\xF8\x03\x61\x08\x03\x7C\xBA\xC0\x7D\xBB\xC9\xCD\x2C\x64\xC2\x3B\x64\x33\x33\xC9\x23\xC9\xCD\x15\x64" +
"\xFE\x2E\xC0\xCD\xE3\x66\xC3\xEE\x65\x7E\xC5\xCD\xB7\x64\xCD\x50\x72\xC1\xC9\xCD\x9E\x64\xCD\x49\x64\xCD\x32\x64\x7D\xE6\x0F\xCA" +
"\x53\x64\xC3\x56\x64\x71\xCD\x32\x64\xC3\x65\x64\x79\xBE\xCC\x9E\x64\xCD\x32\x64\xC3\x6C\x64\x7E\x02\x03\xCD\x32\x64\xC3\x77\x64" +
"\xCD\x9E\x64\x7E\xB7\xFA\x8D\x64\xFE\x20\xD2\x8F\x64\x3E\x2E\xCD\x18\x64\xCD\x32\x64\x7D\xE6\x0F\xCA\x80\x64\xC3\x83\x64\xC5\xCD" +
"\x61\x72\xE5\x21\xEE\x64\xCD\x0F\x64\xE1\x7C\xCD\xB7\x64\x7D\xCD\xB7\x64\xCD\x50\x72\xC1\xC9\xF5\x0F\x0F\x0F\x0F\xCD\xC0\x64\xF1" +
"\xE6\x0F\xFE\x0A\xFA\xC9\x64\xC6\x07\xC6\x30\xCD\x18\x64\xC9\x0E\x07\xC3\x19\x64\x20\x50\x43\x2D\x20\x48\x4C\x2D\x20\x42\x43\x2D" +
"\x20\x44\x45\x2D\x20\x53\x50\x2D\x20\x41\x46\x2D\x0D\x0A\x18\x18\x18\x18\x00\x08\x20\x08\x00\x3A\x94\x74\xE6\x80\xC8\xE5\xCD\x1C" +
"\x64\x22\x9D\x74\x2A\x9B\x74\xCD\x3E\x65\x3E\x01\x32\x9F\x74\xE1\xC9\x3A\x94\x74\xE6\x80\xC8\x3A\x9F\x74\xB7\xC8\xAF\x32\x9F\x74" +
"\xE5\xCD\x1C\x64\x22\x9B\x74\x2A\x9D\x74\xCD\x3E\x65\xE1\xC9\xCD\x3B\x65\x3E\x3E\xCD\x52\x72\xCD\x3B\x65\xC9\x2A\x2A\x64\x0E\x1B" +
"\xCD\x19\x64\x0E\x59\xCD\x19\x64\x11\x18\x1D\x19\x4C\xCD\x19\x64\x4D\xCD\x19\x64\xC9\x79\xBE\xC2\x61\x65\x23\x78\xBE\x2B\xCC\x9E" +
"\x64\xCD\x32\x64\xC3\x55\x65\xCD\x1F\x64\x60\x69\xCD\x9E\x64\xC9\x21\xD8\x64\x22\x50\x74\x21\x40\x74\x22\x99\x74\x06\x05\xCD\x61" +
"\x72\x2A\x50\x74\xCD\x8E\x72\x22\x50\x74\x2A\x99\x74\xC5\xE5\x5E\x23\x56\x23\x22\x99\x74\xEB\xCD\x85\x72\xCD\x50\x72\xCD\xA0\x6A" +
"\xD2\xAC\x65\xCD\x62\x6A\xD1\xEB\x73\x23\x72\xE5\xE1\xC1\x05\xC2\x7E\x65\xC9\x21\x40\x74\xF9\x11\x9F\x74\x0E\x00\xCD\x65\x64\x21" +
"\xD2\x73\xCD\x0F\x64\x3E\x11\x32\x94\x74\xCD\x22\x64\x22\x46\x74\x2A\x46\x74\xCD\x25\x64\x21\x08\x03\x22\x9B\x74\x21\x00\x64\x22" +
"\x78\x74\x21\x9F\x74\x22\x7A\x74\x21\xEE\x65\xCD\xF8\x6E\x31\x40\x74\xCD\xE3\x66\x21\xE5\x73\xCD\x0F\x64\xCD\x12\x64\xF5\xCD\xE3" +
"\x66\xF1\x21\x7D\x74\x06\x00\xFE\x1F\xCA\x0C\x64\xFE\x1B\xCA\x09\x64\xFE\x0D\xC4\xA8\x6A\x21\xEE\x65\xE5\x21\x7D\x74\x7E\xFE\x58" +
"\xCA\x70\x65\xFE\x47\xCA\x0B\x6C\xFE\x4A\xCA\x0B\x6C\xFE\x52\xCA\x1E\x6C\xFE\x48\xCA\x9C\x66\xCD\xA3\x66\xDA\xA7\x6B\xFE\x55\xCA" +
"\x95\x69\xF5\xCD\x33\x6A\x2A\x91\x74\x4D\x44\x2A\x8F\x74\xEB\x2A\x8D\x74\xF1\xFE\x44\xCA\xED\x6A\xFE\x4D\xCA\x60\x6B\xFE\x46\xCA" +
"\x65\x64\xFE\x53\xCA\x6C\x64\xFE\x57\xCA\x55\x65\xFE\x4B\xCA\x67\x65\xFE\x54\xCA\x77\x64\xFE\x4C\xCA\x81\x6B\xFE\x3F\xCA\xE5\x69" +
"\xFE\x5A\xCA\x2A\x6C\xFE\x41\xCA\xF7\x6B\xFE\x4F\xCA\x4A\x6C\xFE\x49\xCA\x6F\x6C\xFE\xFF\xCA\xEE\x65\xC3\x98\x6A\x2A\x28\x64\xCD" +
"\x0F\x64\xC9\xFE\x31\xDA\xAB\x66\xFE\x39\xC9\x3F\xC9\xC5\xB7\xC2\xB4\x66\x06\x01\xFE\x01\xC2\xBB\x66\x06\x40\xFE\x02\xC2\xC2\x66" +
"\x06\x80\x3A\x48\x74\xA8\x32\x48\x74\xC1\xCD\xE3\x66\xC3\xF3\x66\x3A\x98\x74\x0F\x0F\x0F\x0F\x47\x0E\x01\x0B\xC5\xC1\x78\xB1\xC2" +
"\xDA\x66\xC9\xCD\xCF\x64\xCD\x15\x64\xFE\xFF\xC2\xE6\x66\xAF\x32\x05\x76\xC9\x3A\x7D\x74\xFE\x4A\xC4\x48\x68\xCD\x67\x67\x3A\x94" +
"\x74\xE6\x01\xCA\x09\x67\xCD\xB3\x68\xCD\x15\x64\xFE\x20\xCA\x58\x67\xFE\x03\xDA\xAD\x66\xFE\x52\xCA\x1E\x6C\xCD\xA3\x66\xD2\x2A" +
"\x67\xCD\xA7\x6B\xCD\xE3\x66\xC3\xF3\x66\xFE\x2E\xC2\x35\x67\xCD\xE3\x66\xC3\xEE\x65\xFE\x03\xC2\x43\x67\xCD\xE3\x66\x2A\x4E\x74" +
"\xCD\x7B\x68\x4F\x3A\x94\x74\xE6\x10\xCA\x55\x67\x79\xFE\xFF\xCA\x09\x67\xCD\xE3\x66\xCD\xE6\x66\xC3\x79\x6C\x31\x40\x74\x2A\x4E" +
"\x74\x22\x52\x74\xC3\xF3\x66\x2A\x4E\x74\x7C\xFE\xF8\xCA\x77\x67\xD8\xCD\xF7\x64\xC3\x7B\x68\x7D\xFE\x03\xCA\xA8\x67\xFE\x1B\xCA" +
"\xA8\x67\xFE\x12\xC2\x71\x67\xCD\x93\x67\xFE\x7F\xC2\xBA\x67\xAF\xC3\xBC\x67\xCD\xF7\x64\x21\xF9\x73\xCD\x0F\x64\xCD\xE3\x66\xCD" +
"\x12\x64\xFE\x04\xCA\xEE\x65\xC9\xCD\x93\x67\xFE\x7F\xCA\xBA\x67\xFE\x0F\xC2\xBC\x67\x3E\xFE\xC3\xBC\x67\xF6\xFF\x32\x49\x74\xCD" +
"\xE3\x66\x3E\x01\x32\x96\x74\xC3\xE6\x6D\x1A\xBE\x23\x13\xCA\xD4\x67\x1B\x2B\xC9\x1A\xBE\xC3\xD1\x67\x21\x40\x74\x3A\x94\x74\xE6" +
"\x20\xC2\xE7\x67\x21\x4C\x74\x11\x60\x74\xCD\x70\x68\xCA\x25\x68\xEB\xCD\x70\x68\xEB\xCA\x00\x68\xCD\xCA\x67\x3E\x04\xCA\x2E\x68" +
"\x3E\x6C\x13\x13\xBB\xC2\xF0\x67\xE5\x5E\x23\x56\x2A\x78\x74\xCD\x76\x68\xDA\x19\x68\xE1\xC3\x25\x68\x2A\x7A\x74\xCD\x76\x68\xE1" +
"\x3E\x00\xD2\x2E\x68\x23\x23\x3E\x50\xBD\xC2\xE7\x67\xC9\xF5\xCD\x61\x72\x21\xEC\x73\xCD\x0F\x64\xF1\xCD\xC0\x64\xCD\xB3\x68\x3A" +
"\x94\x74\xE6\x40\xC0\xC3\xEE\x65\x3A\x6C\x74\xB7\xCA\x5A\x68\xE5\x2A\x4E\x74\xBE\xE1\x3E\x01\xCC\x2E\x68\x3A\x6E\x74\xB7\xC8\xE5" +
"\x21\x49\x74\xBE\xE1\x3E\x02\xCC\x2E\x68\x21\x4E\x74\xC3\xE7\x67\xE5\x7E\x23\xB6\xE1\xC9\x7D\x93\x7C\x9A\xC9\x22\x57\x74\x21\x5F" +
"\x6F\xCD\xF8\x6E\x3E\xC3\x32\x56\x74\x3E\x01\x32\x96\x74\xC3\x3E\x6D\x22\x40\x74\x21\x5F\x74\x36\x0A\xC3\x58\x6D\xCD\x0F\x6F\x22" +
"\x4E\x74\x21\x47\x0D\x22\x7D\x74\x3A\x94\x74\xF6\x11\x32\x94\x74\xC3\x5B\x67\xE5\xCD\x61\x72\xCD\x1A\x69\x21\xE0\x64\xCD\x8E\x72" +
"\x2A\x44\x74\xCD\x85\x72\x21\xD8\x64\xCD\x8E\x72\x2A\x40\x74\xCD\x85\x72\x0E\x2F\xCD\x19\x64\x7E\xCD\xB7\x64\x3A\x94\x74\xE6\x02" +
"\xCA\x15\x69\xCD\x61\x72\x3E\x0A\xCD\x52\x72\x21\xE4\x64\xCD\x8E\x72\x2A\x46\x74\xCD\x85\x72\x0E\x2F\xCD\x19\x64\xC5\x06\x03\x5E" +
"\x23\x56\x23\xEB\xCD\x85\x72\xCD\x50\x72\xEB\x05\xC2\xFF\x68\x3E\x03\xCD\x52\x72\xC1\xE1\xCD\x78\x69\xC9\x21\xE2\x73\xCD\x0F\x64" +
"\x3A\x49\x74\xCD\xB7\x64\xCD\x50\x72\x3A\x48\x74\x57\x1E\x2E\x4B\xE6\x01\xCA\x37\x69\x0E\x43\xCD\x19\x64\x4B\x7A\xE6\x40\xCA\x43" +
"\x69\x0E\x5A\xCD\x19\x64\x7A\x0E\x50\xB7\xF2\x4F\x69\x0E\x4D\xCD\x19\x64\x7A\x4B\xE6\x10\xCA\x5B\x69\x0E\x41\xCD\x19\x64\x7A\x0E" +
"\x4F\xE6\x04\xCA\x68\x69\x0E\x45\xCD\x19\x64\x21\xDC\x64\xCD\x8E\x72\x2A\x42\x74\xCD\x85\x72\xC9\xE5\x3E\x03\xCD\x52\x72\x2A\x4E" +
"\x74\xCD\x85\x72\x0E\x3A\xCD\x19\x64\xCD\x50\x72\x2A\x4E\x74\xCD\xBE\x6F\xE1\xC9\xC9\x2A\x8F\x0B\x7C\xFE\x56\xC2\x98\x6A\x21\x56" +
"\x10\x11\x7E\x74\x0E\x06\x1A\xFE\x0D\xCA\xE0\x69\x13\x77\x23\x0D\xC2\xA6\x69\x2A\x4C\x08\x3E\xFF\xBE\x23\xC2\xB8\x69\x22\x00\x10" +
"\xCD\x86\x0B\x11\x00\x00\xFA\xCC\x69\x5E\x23\x56\xEB\x22\x99\x74\xCD\x82\x72\x3E\x04\xCD\x52\x72\x5E\x23\x56\xEB\xCD\x85\x72\xC9" +
"\x3E\x20\xC3\xAD\x69\xCD\xB3\x68\x7D\xB7\xC8\xCD\x17\x6A\x2D\xC8\xCD\x61\x72\x21\x60\x74\x5E\x23\x56\x23\xEB\xCD\x82\x72\xEB\x3E" +
"\x70\xBD\xC2\xF6\x69\x2A\x78\x74\xCD\x82\x72\x0E\x2D\xCD\x19\x64\x2A\x7A\x74\xCD\x85\x72\xC9\xCD\x61\x72\x11\x01\x08\x7B\xCD\xC5" +
"\x6B\x48\x7B\xC6\x30\x47\x3A\x94\x74\xA1\xCD\xD8\x6B\x1C\x15\xC2\x1D\x6A\xC9\x21\x8D\x74\x11\x93\x74\x0E\x00\xCD\x65\x64\x11\x7E" +
"\x74\x1A\xFE\x0D\xC8\xCD\x62\x6A\x22\x8D\x74\x3E\xFF\x32\x93\x74\xD8\xCD\x62\x6A\x22\x8F\x74\xD8\xCD\x62\x6A\x22\x91\x74\xD8\xC3" +
"\x98\x6A\x21\x00\x00\x1A\x13\xFE\x0D\xCA\x96\x6A\xFE\x2C\xC8\xFE\x20\xCA\x65\x6A\xD6\x30\xFA\x98\x6A\xFE\x0A\xFA\x8A\x6A\xFE\x11" +
"\xFA\x98\x6A\xFE\x17\xF2\x98\x6A\xD6\x07\x4F\x29\x29\x29\x29\xDA\x98\x6A\x09\xC3\x65\x6A\x37\xC9\x3E\x3F\xCD\x18\x64\xC3\xEE\x65" +
"\x21\x7D\x74\x06\x00\xCD\x12\x64\xFE\x08\xCA\xDB\x6A\xFE\x7F\xCA\xDB\x6A\xC4\x18\x64\x77\xFE\x0D\xCA\xCC\x6A\xFE\x2E\xCA\xEE\x65" +
"\x06\xFF\x3E\x8C\xBD\xCA\x98\x6A\x23\xC3\xA5\x6A\xF5\xC5\xCD\xE3\x66\xC1\xF1\x78\x17\x11\x7D\x74\x06\x00\xC9\x3E\x7D\xBD\xCA\xA3" +
"\x6A\xE5\x21\xF3\x64\xCD\x0F\x64\xE1\x2B\xC3\xA5\x6A\x3A\x93\x74\xB7\xC2\xF7\x6A\x2A\x52\x74\x7B\xB7\xC2\xFE\x6A\x3E\x08\x4F\xC5" +
"\xCD\x61\x72\x3E\x0A\xCD\x52\x72\x06\x10\x3E\x10\x90\xCD\xC0\x64\x3E\x02\xCD\x52\x72\x05\xC2\x0A\x6B\xC1\xC5\x54\x7D\xF6\x0F\x5F" +
"\xE6\xF0\x6F\xD5\xE5\xCD\x53\x64\xE1\xD1\xCD\x37\x6B\xC1\x23\x22\x52\x74\x0D\xC2\x1A\x6B\xC9\xCD\x61\x72\x3E\x08\xCD\x52\x72\x3E" +
"\x02\xCD\x52\x72\xCD\x50\x6B\xCD\x32\x64\xC3\x3F\x6B\xCD\x52\x72\x7E\xB7\xFA\x5A\x6B\xFE\x20\xD2\x5C\x6B\x3E\x2E\xCD\x18\x64\xC9" +
"\xCD\x9E\x64\xCD\x49\x64\x3E\x02\xCD\x4D\x6B\xCD\x50\x72\xE5\xCD\xA0\x6A\xE1\xD2\x7D\x6B\xE5\xCD\x62\x6A\x7D\xE1\x77\x23\xC3\x60" +
"\x6B\x7A\xB3\xC2\x80\x64\xCD\x9E\x64\xCD\x49\x64\x3E\x02\xCD\x4D\x6B\xCD\x50\x72\xCD\x12\x64\xFE\x2E\xC8\xFE\x0D\xCA\xA3\x6B\x77" +
"\xCD\x18\x64\x23\xC3\x86\x6B\x57\xD6\x30\xCD\xC5\x6B\xCD\xCF\x6B\x42\xF5\x78\xFE\x38\xC2\xBD\x6B\x0E\x1F\xCD\x19\x64\xCD\x61\x72" +
"\xF1\xCD\xD8\x6B\xC9\x47\xAF\x37\x17\x05\xC2\xC8\x6B\x47\xC9\x3A\x94\x74\xA8\x32\x94\x74\xA0\xC9\xF5\x0E\x46\xCD\x19\x64\x48\xCD" +
"\x19\x64\x0E\x3D\xCD\x19\x64\x0E\x30\xF1\xB7\xCA\xF0\x6B\x0E\x31\xCD\x19\x64\xCD\x50\x72\xC9\x22\x4E\x74\x7B\xE6\x07\x32\x98\x74" +
"\xAF\x32\x97\x74\x2A\x4E\x74\x22\x52\x74\xC9\x3A\x94\x74\xE6\x80\xCA\xF3\x66\x3E\x0F\xCD\x52\x72\xCD\x61\x72\xC3\xF3\x66\x2A\x4E" +
"\x74\x22\x57\x74\xCD\xE3\x66\xC3\x84\x68\x3A\x93\x74\xB7\xC2\x34\x6C\x2A\x52\x74\x7B\xB7\xC2\x3B\x6C\x1E\x16\xCD\x61\x72\xCD\x76" +
"\x6F\x23\x22\x52\x74\x1D\xC2\x3B\x6C\xC9\x7A\xB5\xB3\xCA\x64\x6C\xEB\xE5\x16\x00\x7B\xE6\x07\x87\x21\x60\x74\x5F\x19\xD1\x73\x23" +
"\x72\xC3\xF0\x69\x21\x60\x74\x11\x70\x74\x0E\x00\xC3\x65\x64\x22\x78\x74\xEB\x22\x7A\x74\xC3\xF0\x69\x2A\x4E\x74\xCD\xB2\x72\x0C" +
"\x21\x5C\x74\x71\x23\x23\x70\x21\x00\x00\x22\x4A\x74\x22\x4C\x74\xC5\xCD\x33\x6F\xC1\x79\xFE\x01\xCA\xC9\x6C\xFE\x02\xC2\xAE\x6C" +
"\xFE\x36\xC2\x36\x6D\x2A\x40\x74\x22\x4C\x74\xC3\x36\x6D\x3A\x56\x74\xFE\x31\xCA\x31\x6E\x78\xFE\x12\xD2\x92\x6E\xFE\x09\xD2\xA5" +
"\x6E\xFE\x05\xD2\x17\x6E\xC3\x20\x6E\x3A\x56\x74\xFE\xE9\xCA\x38\x6E\xFE\x76\xCA\x83\x6E\xFE\xF9\xCA\x29\x6E\xFE\x34\xCA\xA5\x6C" +
"\xFE\x35\xCA\xA5\x6C\x57\xE6\xC7\xFE\x46\xCA\xA5\x6C\x7A\xE6\xF8\xFE\x70\xCA\xA5\x6C\x7A\xFE\x02\xCA\x00\x6D\xFE\x0A\xC2\x06\x6D" +
"\x2A\x42\x74\x22\x4C\x74\xFE\x12\xCA\x10\x6D\xFE\x1A\xC2\x16\x6D\x2A\x44\x74\x22\x4C\x74\xFE\xC0\xDA\x36\x6D\xFE\xC9\xCA\x46\x6E" +
"\xE6\x0F\xFE\x07\xCA\x5A\x6E\xFE\x0F\xCA\x5A\x6E\xFE\x00\xCA\x46\x6E\xFE\x08\xCA\x46\x6E\x3A\x7D\x74\xFE\x4A\xC4\xD9\x67\x3E\x47" +
"\x32\x7D\x74\x2A\x48\x74\xE5\xF1\x31\x42\x74\xC1\xD1\xE1\xF9\x2A\x40\x74\xC3\x56\x74\x22\x40\x74\x21\x95\x74\x36\x00\xD2\x62\x6D" +
"\x36\x01\x21\x00\x00\x39\x31\x48\x74\xE5\xD5\xC5\x31\x40\x74\x21\xEE\x65\xE5\xF5\xE1\x22\x48\x74\x7D\x21\x95\x74\xAE\x32\x48\x74" +
"\x3A\x5F\x74\xFE\x00\xCA\xA1\x6D\xFE\x01\xCA\xAF\x6D\xFE\x02\xCA\xE6\x6D\xFE\x0A\xCA\x9C\x68\xCD\x0F\x6F\xAF\x32\x96\x74\xC3\xA1" +
"\x6D\x2A\x5C\x74\xEB\x2A\x4E\x74\x19\x22\x4E\x74\xC3\x5B\x67\x3A\x96\x74\xB7\xCA\xD9\x6D\x2A\x52\x74\xEB\x2A\x4E\x74\x3A\x96\x74" +
"\x3D\xCA\xCC\x6D\x06\x3E\xCD\xD6\x6E\xC3\xD9\x6D\x06\x0E\xCD\xD6\x6E\x3A\x97\x74\xC6\x05\x32\x97\x74\xAF\x32\x96\x74\x2A\x52\x74" +
"\x22\x4E\x74\xC3\x5B\x67\xCD\x0F\x6F\x22\x52\x74\xCD\x11\x65\x3A\x96\x74\xB7\xCA\x11\x6E\x3A\x97\x74\xD6\x05\x32\x97\x74\x06\x1D" +
"\x2A\x4E\x74\xEB\x2A\x52\x74\xCD\xD6\x6E\xAF\x32\x96\x74\x2A\x52\x74\x22\x4E\x74\xC3\x5B\x67\x2A\x57\x74\x22\x4C\x74\xC3\x36\x6D" +
"\x2A\x57\x74\x22\x4A\x74\xC3\x36\x6D\x3E\x05\x32\x97\x74\xC3\x36\x6D\xAF\x32\x97\x74\xC3\x20\x6E\x2A\x40\x74\x22\x57\x74\x3E\xC3" +
"\x32\x56\x74\xC3\x92\x6E\x21\x5F\x6F\xCD\xF8\x6E\x21\x6A\x6F\x22\x58\x74\x3E\x01\x32\x96\x74\xC3\x3E\x6D\x3A\x56\x74\xE6\x38\x0F" +
"\x0F\x0F\x21\x00\x00\x11\x08\x00\xB7\xCA\x71\x6E\x19\x3D\xC3\x68\x6E\x22\x52\x74\x2A\x4E\x74\x23\xCD\xF8\x6E\x3E\x01\x32\x96\x74" +
"\xC3\xAF\x6D\x2A\x4E\x74\x23\x22\x4E\x74\x3E\x03\xCD\x2E\x68\xC3\x5B\x67\xCD\x26\x6F\x3A\x94\x74\xE6\x08\xCA\x36\x6D\x3E\x02\x32" +
"\x96\x74\xC3\x3E\x6D\x2A\x4E\x74\x23\x23\x23\xCD\xF8\x6E\x3A\x56\x74\xFE\xCD\xC2\xBE\x6E\x3E\xC3\x32\x56\x74\xC3\xC5\x6E\xE6\xF8" +
"\xF6\x02\x32\x56\x74\xCD\x26\x6F\x21\x6A\x6F\x22\x5A\x74\x3E\x01\x32\x96\x74\xC3\x3E\x6D\x3A\x94\x74\xE6\x04\xC8\xCD\x61\x72\x3A" +
"\x97\x74\xFE\x34\xDA\xE9\x6E\x3E\x32\xCD\x52\x72\xCD\x85\x72\x48\xCD\x19\x64\xEB\xCD\x85\x72\xC9\xEB\xE5\xC5\x2A\x46\x74\x2B\x46" +
"\x72\x2B\x4E\x73\x22\x46\x74\xC5\xE1\x22\x54\x74\xC1\xD1\xC9\x2A\x46\x74\xD5\xEB\x2A\x54\x74\xEB\x2B\x2B\x23\x23\x5E\x23\x56\x23" +
"\x22\x46\x74\xEB\xD1\xC9\x2A\x57\x74\x22\x52\x74\x21\x54\x6F\x22\x57\x74\xC9\x2A\x4E\x74\xEB\x21\x56\x74\x3A\x5C\x74\x4F\x1A\x77" +
"\x23\x13\x0D\xC2\x3E\x6F\x36\xC3\x11\x55\x6D\x23\x73\x23\x72\xAF\x32\x5F\x74\xC9\x22\x40\x74\x21\x5F\x74\x36\x01\xC3\x58\x6D\x22" +
"\x40\x74\x21\x5F\x74\x36\x02\xC3\x58\x6D\x22\x40\x74\x21\x5F\x74\x36\x03\xC3\x58\x6D\x21\xD5\xE5\xCD\x85\x72\x0E\x3A\xCD\x19\x64" +
"\x3E\x02\xCD\x52\x72\xCD\x49\x64\xCD\xB2\x72\xAF\xB1\xC5\x06\x07\xCA\xA3\x6F\x23\xCD\x49\x64\x06\x04\x0D\xCA\xA3\x6F\x23\xCD\x49" +
"\x64\x06\x01\x78\xCD\x52\x72\xC1\xE1\xE5\x41\x16\x03\xCD\x50\x6B\x23\x15\x05\xF2\xAD\x6F\x7A\xC6\x05\xCD\x52\x72\xE1\xD1\xD5\xE5" +
"\xCD\x50\x72\x16\x00\x7E\x87\xDA\x0C\x70\xF2\x2D\x70\x0F\x47\xFE\x76\xC2\xE0\x6F\x21\xF3\x72\x11\x00\x03\xCD\x91\x72\xE1\xD1\xC9" +
"\x21\xF6\x72\x11\x03\x03\xCD\x91\x72\x21\xF9\x72\xE6\x38\x0F\x0F\x0F\x5F\x19\x11\x00\x01\xCD\x91\x72\x0E\x2C\xCD\x19\x64\x78\xE6" +
"\x07\x21\xF9\x72\x5F\x19\x11\x00\x01\xC3\xDA\x6F\xFA\x46\x71\x0F\x47\xE6\x38\x0F\x0F\x0F\x21\x01\x73\x1E\x03\xB7\xCA\x24\x70\x19" +
"\x3D\xC3\x1B\x70\x11\x03\x03\xCD\x91\x72\xC3\xFE\x6F\x0F\x4F\x3E\x38\xA1\x47\x3E\x07\xA1\xC2\x49\x70\xB0\x21\x19\x73\xCA\xD7\x6F" +
"\x21\x1C\x73\x11\x00\x01\xC3\xDA\x6F\xFE\x04\xC2\x5E\x70\x21\x1D\x73\x11\x03\x03\xCD\x91\x72\x78\x0F\x0F\x0F\xC3\xFF\x6F\xFE\x05" +
"\xC2\x69\x70\x21\x20\x73\xC3\x51\x70\xFE\x06\xC2\x95\x70\x21\x23\x73\x11\x03\x03\xCD\x91\x72\x78\x0F\x0F\x0F\x21\xF9\x72\x5F\x19" +
"\x11\x00\x01\xCD\x91\x72\x0E\x2C\xCD\x19\x64\xE1\x23\xE5\x7E\xCD\xB7\x64\xC3\xDD\x6F\xFE\x01\xC2\xEA\x70\x21\x26\x73\x3E\x08\xA0" +
"\xCA\xBA\x70\x11\x03\x03\xCD\x91\x72\x21\x2F\x73\x78\x0F\x0F\x0F\xE6\x06\x5F\x19\x11\x00\x02\xC3\xDA\x6F\x21\x37\x73\x11\x03\x03" +
"\xCD\x91\x72\x21\x2F\x73\x78\x0F\x0F\x0F\x5F\x19\x11\x00\x01\xFE\x06\xC2\xD5\x70\x14\xCD\x91\x72\x0E\x2C\xCD\x19\x64\xE1\x23\x5E" +
"\x23\x56\xE5\xEB\xCD\x85\x72\xC3\xDD\x6F\xFE\x03\xC2\xFE\x70\x21\x29\x73\x3E\x08\xA0\xCA\xA3\x70\x21\x2C\x73\xC3\xA3\x70\xFE\x07" +
"\xC2\x0C\x71\x21\x3A\x73\xCD\xA3\x72\xC3\xD7\x6F\x3E\x20\xA0\xC2\x34\x71\x3E\x08\xA0\x21\x56\x73\xC2\x1E\x71\x21\x52\x73\x11\x02" +
"\x04\xCD\x91\x72\x21\x2F\x73\x3E\x10\xA0\x16\x02\xCA\xDA\x6F\x23\x23\xC3\xDA\x6F\x3E\x18\xA0\x0F\x21\x5A\x73\x5F\x19\x11\x02\x04" +
"\xCD\x91\x72\xC3\xDD\x70\x0F\x47\x3E\x07\xA0\xC2\x63\x71\x0E\x52\xCD\x19\x64\x21\x85\x73\x3E\x38\xA0\x0F\x0F\x5F\x19\x11\x03\x02" +
"\xC3\xDA\x6F\xFE\x07\xC2\x7E\x71\x21\x6A\x73\x11\x03\x03\xCD\x91\x72\x78\x0F\x0F\x0F\xEE\xD8\x4F\xCD\x19\x64\xC3\xDD\x6F\xFE\x06" +
"\xC2\x92\x71\x21\x6D\x73\xCD\xA3\x72\x11\x03\x03\xCD\x91\x72\xC3\x8B\x70\xFE\x02\xC2\xAF\x71\x0E\x4A\xCD\x19\x64\x21\x85\x73\x3E" +
"\x38\xA0\x0F\x0F\x5F\x19\x11\x03\x02\xCD\x91\x72\xC3\xDD\x70\xFE\x04\xC2\xB9\x71\x0E\x43\xC3\x99\x71\xFE\x01\xC2\xFA\x71\x3E\x08" +
"\xA0\xC2\xD6\x71\x21\x95\x73\x11\x03\x03\xCD\x91\x72\x21\x8C\x73\x78\x0F\x47\xC3\x06\x71\x3E\x20\xA0\xCA\xEE\x71\x21\xA4\x73\x1E" +
"\x04\x3E\x10\xA0\xCA\xE8\x71\x19\x11\x00\x04\xC3\xDA\x6F\x3E\x10\xA0\xC2\x40\x70\x21\xAC\x73\xC3\xD7\x6F\xFE\x05\xC2\x1D\x72\x3E" +
"\x08\xA0\xC2\x0E\x72\x21\xAF\x73\x11\x02\x04\xC3\xCA\x71\x3E\x30\xA0\xC2\x40\x70\x21\xB3\x73\x11\x02\x04\xC3\xA9\x71\x3E\x20\xA0" +
"\xCA\x2F\x72\x21\xB7\x73\x3E\x18\xA0\x0F\x5F\x19\xC3\xE8\x71\x3E\x10\xA0\xCA\x44\x72\x21\xC7\x73\x1E\x03\x3E\x08\xA0\xCA\x89\x71" +
"\x19\xC3\x89\x71\x3E\x08\xA0\xC2\x40\x70\x21\xCD\x73\xC3\x3D\x71\x3E\x01\xB7\xC8\xC5\xF5\x0E\x20\xCD\x19\x64\xF1\xC1\x3D\xC3\x52" +
"\x72\xE5\xC5\xCD\x3D\x64\xCD\xD0\x66\x3A\x94\x74\xE6\x80\xCA\x79\x72\xD5\xCD\x2F\x65\xD1\xC1\xE1\xC9\x21\xE9\x73\xCD\x0F\x64\xC1" +
"\xE1\xC9\xCD\x61\x72\x7C\xCD\xB7\x64\x7D\xCD\xB7\x64\xC9\x11\x00\x04\xC5\xF5\x4E\xCD\x19\x64\x23\x15\xC2\x93\x72\x7B\xCD\x52\x72" +
"\xF1\xC1\xC9\x1E\x03\x3E\x38\xA0\x0F\x0F\x0F\xB7\xC8\x19\x3D\xC3\xAB\x72\x11\xC7\x72\x01\x02\x1A\x1A\xBE\xC8\x13\x05\xC2\xB8\x72" +
"\x0D\xC8\x06\x12\xC3\xB8\x72\xC3\xC2\xCA\xD2\xDA\xE2\xEA\xF2\xFA\xCD\xC4\xCC\xD4\xDC\xE4\xEC\xF4\xFC\x2A\x3A\x22\x32\x01\x11\x21" +
"\x31\x06\x0E\x16\x1E\x26\x2E\x36\x3E\xC6\xCE\xD6\xDE\xE6\xEE\xF6\xFE\xDB\xD3\x48\x4C\x54\x4D\x4F\x56\x42\x43\x44\x45\x48\x4C\x4D" +
"\x41\x41\x44\x44\x41\x44\x43\x53\x55\x42\x53\x42\x42\x41\x4E\x41\x58\x52\x41\x4F\x52\x41\x43\x4D\x50\x4E\x4F\x50\x3F\x49\x4E\x52" +
"\x44\x43\x52\x4D\x56\x49\x44\x41\x44\x49\x4E\x58\x44\x43\x58\x42\x20\x44\x20\x48\x20\x53\x50\x4C\x58\x49\x52\x4C\x43\x52\x52\x43" +
"\x52\x41\x4C\x52\x41\x52\x44\x41\x41\x43\x4D\x41\x53\x54\x43\x43\x4D\x43\x53\x54\x41\x58\x4C\x44\x41\x58\x53\x48\x4C\x44\x4C\x48" +
"\x4C\x44\x53\x54\x41\x20\x4C\x44\x41\x20\x52\x53\x54\x41\x44\x49\x41\x43\x49\x53\x55\x49\x53\x42\x49\x41\x4E\x49\x58\x52\x49\x4F" +
"\x52\x49\x43\x50\x49\x4E\x5A\x5A\x20\x4E\x43\x43\x20\x50\x4F\x50\x45\x50\x20\x4D\x20\x50\x4F\x50\x42\x20\x20\x44\x20\x20\x48\x20" +
"\x20\x50\x53\x57\x50\x43\x48\x4C\x53\x50\x48\x4C\x52\x45\x54\x50\x55\x53\x48\x43\x41\x4C\x4C\x58\x54\x48\x4C\x58\x43\x48\x47\x44" +
"\x49\x20\x20\x45\x49\x20\x20\x4F\x55\x54\x49\x4E\x20\x4A\x4D\x50\x20\x20\x1F\x44\x50\x2A\x53\x20\x54\x20\x46\x2A\x20\x56\x32\x2E" +
"\x30\x00\x41\x3D\x00\x0D\x0A\x3E\x00\x0D\x0A\x00\x0D\x0A\x2A\x6C\x4F\x77\x75\x7B\x6B\x61\x3A\x20\x00\x3F\x08\x00\x00\x00\x00\x00"};
ui.file_loaded(file);
}
tape_file();
