function tape_file() {
var file = {
name: "ASM_ED.RKR",
start: 0x0000,
end: 0x0fff,
entry: 0x0000,
image:
"\xC3\x1E\x00\xC3\x03\xF8\x4F\xC3\x0C\xF8\xC3\x09\xF8\xC3\x06\xF8\xC3\x18\xF8\xC3\x00\xF8\xF5\xCD\x2D\xF8\xF1\xC9\x00\x00\x31\xFF" +
"\x75\x21\x98\x07\xCD\x10\x00\x21\x00\x19\xC3\x30\x00\xC9\x00\x00\x22\x89\x10\xCD\xF5\x03\x22\x87\x10\xCD\xE0\x02\xEB\x32\x84\x10" +
"\x3D\x32\x83\x10\x32\x85\x10\x01\x47\x00\xC5\xCD\x9A\x00\x11\xCD\x07\xCC\x84\x00\xCA\xE7\x01\x11\xB1\x07\xCD\x84\x00\x79\xFE\x20" +
"\xDA\xE7\x01\xCD\xDE\x01\xC5\x3A\x8F\x10\x3D\xC4\xB8\x04\xC1\x71\x7E\xCD\xE3\x01\x3A\x85\x10\x3C\xFE\x3F\xF2\xE7\x01\x32\x85\x10" +
"\x23\xC3\x0A\x00\xEB\xD5\x7E\xB7\xEB\xE1\xC8\xE5\xEB\xB9\x23\x5E\x23\x56\x23\xC2\x86\x00\xE1\xF1\xD5\xC9\xCD\xA7\x00\xC0\xCD\xA7" +
"\x00\xCA\x9E\x00\xAF\x79\xC9\xCD\x03\x00\x4F\xFE\x1B\xC9\xCD\x01\x01\x21\x40\x10\xCD\x2F\x01\x7E\xFE\x0D\xCA\xF0\x00\x44\x4D\x2A" +
"\x28\x00\xEB\x2A\x87\x10\xEB\x0B\xC5\xE5\x03\x0A\xFE\x0D\xCA\xE2\x00\xBE\x23\xCA\xCA\x00\xCD\xF5\x01\xD2\xF6\x00\xE1\xC1\x23\xC3" +
"\xC8\x00\xC1\xC1\xEB\x2A\x28\x00\xEB\xCD\xC3\x02\x23\xC3\xFB\x01\x2A\x89\x10\xC3\xFB\x01\x0E\x3F\xCD\x0A\x00\xCD\xE7\x01\xC3\x1E" +
"\x00\xC5\xCD\x3B\x03\x0E\x1F\xCD\x0A\x00\xC1\x79\xCD\x6A\x02\x0E\x20\xC3\x0A\x00\x0E\x0C\xC3\x0A\x00\x05\xF8\x3D\xF8\xC5\xCD\x0A" +
"\x00\x05\xF2\x1E\x01\xC1\xC3\x1B\x01\x21\x00\x10\xCD\xE0\x02\xE5\x32\x85\x10\xCD\xAC\x01\xCD\x9A\x00\xB7\xCA\xB6\x01\xFE\x0C\xCA" +
"\xB6\x01\xFE\x09\xC2\x4D\x01\xCD\xBC\x01\xC3\x33\x01\x4F\xFE\x1F\xCA\x78\x01\xFE\x08\xCA\x9A\x01\xFE\x18\xCA\x7B\x01\xFE\x19\xCA" +
"\xB6\x01\xFE\x1A\xCA\xB6\x01\x71\xFE\x0D\xC2\x7B\x01\x3A\x85\x10\x3C\x32\x84\x10\xE1\xC3\xF7\x04\xE1\x37\xC9\x7E\xB7\xCA\xB6\x01" +
"\x3A\x85\x10\x3C\xFE\x3F\xCA\xB6\x01\x32\x85\x10\xFE\x37\xCC\xE7\x01\x4E\x23\x13\xCD\x0A\x00\xC3\x33\x01\x3A\x85\x10\x3D\xFA\xB6" +
"\x01\x2B\x1B\x32\x85\x10\xCD\x0A\x00\xC3\x36\x01\x0E\x0E\xCD\x0A\x00\x0E\x08\xC3\x0A\x00\xCD\xE7\x01\xC3\x33\x01\x3A\x85\x10\xE6" +
"\x07\x57\x3E\x08\x92\x57\x3A\x85\x10\x3C\xFE\x3F\xCA\xE7\x01\x32\x85\x10\x0E\x20\x71\xCD\x0A\x00\x23\x15\xC8\xC3\xC6\x01\x7E\xB7" +
"\xCA\xE6\x01\xFE\x0D\xC0\xF1\xC5\x0E\x07\x06\x19\xCD\x0A\x00\x05\xC2\xEC\x01\xC1\xC9\x7C\xBA\xC0\x7D\xBB\xC9\xCD\x14\x01\x22\x89" +
"\x10\xAF\x32\x85\x10\x06\x18\x0E\x3F\xCD\xE0\x02\x7E\x12\xFE\x0D\xC2\x5E\x02\x3E\x2A\xCD\x6A\x02\xC5\x41\x3E\x01\x0E\x20\xCD\x19" +
"\x01\xC1\x23\x7E\x2B\x3C\xCA\x31\x02\x05\xCA\x32\x02\x23\xC3\x07\x02\x05\x3E\x08\xCD\x6A\x02\xCD\x6A\x02\x3E\x3F\x91\x4F\x32\x83" +
"\x10\x32\x84\x10\x3E\x17\x90\x32\x86\x10\x79\x2F\x3C\xCA\x54\x02\x4F\x06\xFF\x09\x22\x8B\x10\x11\x00\x10\xEB\xC3\x58\x05\x0D\xCA" +
"\x7F\x02\xCD\x6A\x02\x23\x13\xC3\x0C\x02\xC5\x4F\xCD\x0A\x00\xC1\xC9\x3A\x85\x10\x3D\xFA\xE7\x01\x32\x85\x10\x2B\xC3\x0A\x00\x11" +
"\x73\x07\x21\x69\x07\xCD\x10\x00\xEB\xCD\x10\x00\xC3\xFB\x00\xCD\xF1\x02\xFA\x28\x03\x2A\x8B\x10\xCD\xC2\x02\x23\x22\x8B\x10\xCD" +
"\xE0\x02\xD5\x06\x00\x7E\x12\xFE\x0D\xCA\xB2\x02\x04\x23\x13\xC3\xA5\x02\x78\x32\x83\x10\x32\x84\x10\xE1\x3A\x85\x10\x5F\x16\x00" +
"\x19\xC9\x2B\xC1\x2B\xCD\xF5\x01\xCA\xFB\x01\x7E\xFE\x0D\xC2\xC4\x02\xC5\xC9\xCD\xF5\x01\xCA\xFB\x01\xCD\xC2\x02\x23\xC3\xFB\x01" +
"\xC5\x06\x3F\x11\x00\x10\xD5\xAF\x12\x13\x05\xC2\xE8\x02\xD1\xC1\xC9\xCD\x0A\x00\xCD\x3B\x03\x21\x86\x10\x35\x2A\x28\x00\xEB\x2A" +
"\x89\x10\xC9\xCD\x3B\x03\x2A\x89\x10\x06\x17\xEB\x2A\x28\x00\xEB\xCD\xF5\x01\xCA\xFB\x01\x2B\x7E\xFE\x0D\xC2\x10\x03\x05\xC2\x10" +
"\x03\x23\xC3\xFB\x01\xCD\xF1\x02\xFC\xD3\x02\xAF\x32\x85\x10\x32\x86\x10\xCD\x14\x01\x2A\x89\x10\xC3\x9C\x02\x3A\x83\x10\xB7\xF8" +
"\x4F\x06\x00\x2A\x8B\x10\xE5\x09\xC2\x4C\x03\x2B\x3A\x84\x10\x91\x5F\x16\x00\xFC\x67\x03\xC4\x81\x03\xD1\x21\x00\x10\x7E\x12\xFE" +
"\x0D\xC8\x23\x13\xC3\x5D\x03\x15\xE5\x19\x44\x4D\x2A\x87\x10\xE5\x19\x22\x87\x10\xD1\xE1\x7E\x02\xCD\xF5\x01\xC8\x23\x03\xC3\x76" +
"\x03\x23\xE5\x2A\x87\x10\xE5\x19\xCD\x04\x04\x44\x4D\x22\x87\x10\xE1\xD1\x7E\x02\xCD\xF5\x01\xC8\x2B\x0B\xC3\x92\x03\xCD\x0A\x00" +
"\xCD\x3B\x03\x2A\x8B\x10\x3A\x84\x10\x4F\x06\x00\x09\x54\x5D\x23\x7E\x3C\xCA\x70\x05\x21\x86\x10\x34\x7E\xEB\xFE\x18\xFA\x9B\x02" +
"\xCD\xC9\x03\xCD\xC9\x03\xC3\xFB\x01\x2A\x89\x10\x7E\xD6\x0D\x23\xC2\xCC\x03\xC9\xCD\x3B\x03\x2A\x89\x10\x06\x18\x7E\x3C\xCC\xE7" +
"\x01\xCA\xEF\x03\x3D\xFE\x0D\x23\xC2\xDC\x03\x05\xC2\xDC\x03\x2B\x06\x02\xC3\x0B\x03\x2A\x28\x00\x7E\x3C\xC8\x06\x00\xCD\x04\x04" +
"\x23\xC3\xF8\x03\xEB\x21\xC1\xFF\x39\x09\xEB\xCD\xF5\x01\xD8\x36\xFF\x11\x82\x07\xC3\x82\x02\xCD\x4D\x05\x2A\x89\x10\x22\x80\x10" +
"\x2A\x8B\x10\x22\x8D\x10\xCD\xAC\x01\xCD\x9A\x00\xC2\x3C\x04\xFE\x44\xCA\x50\x04\xFE\x1A\xCA\x7C\x04\xC3\x4A\x04\xFE\x1F\xCA\xF0" +
"\x00\xD6\x19\xCA\x98\x04\x3D\xCA\x6D\x04\xCD\xE7\x01\xC3\x26\x04\x2A\x87\x10\xEB\x2A\x80\x10\x22\x89\x10\x2A\x8D\x10\x44\x4D\x2A" +
"\x8B\x10\xCD\x76\x03\x60\x69\x22\x87\x10\xC3\xF0\x00\xCD\x88\x04\xCA\x4A\x04\xCD\x9D\x03\xCD\xFC\x04\xC3\x26\x04\xCD\x88\x04\xCA" +
"\x4A\x04\xCD\xD4\x03\xC3\x76\x04\xE5\x2A\x8B\x10\x3A\x84\x10\x5F\x16\x00\x19\x23\x7E\x3C\xE1\xC9\x2A\x8B\x10\xEB\x2A\x8D\x10\xCD" +
"\xF5\x01\xCA\x4A\x04\x3A\x86\x10\xB7\xC2\xB2\x04\xCD\x25\x03\xC3\x26\x04\xCD\x8F\x02\xC3\x26\x04\x7E\xB7\xCA\xE7\x01\x11\x84\x10" +
"\x1A\x3C\xFE\x3F\xD2\xE7\x01\x12\xE5\xCD\x1D\x05\x23\x44\x4D\xD1\x2B\xCD\x92\x03\x36\x20\xCD\x10\x00\x36\x0D\x0E\x2A\xCD\x0A\x00" +
"\x0E\x20\xCD\x0A\x00\xCD\xB1\x01\xCD\xFC\x04\x3A\x85\x10\x47\x0E\x18\x3E\x01\xEB\xC3\x19\x01\x0E\x0A\xCD\x0A\x00\x0E\x0D\xC3\x0A" +
"\x00\xCD\xDE\x01\x11\x84\x10\x1A\x3D\x12\xE5\xE5\xE5\xCD\x1D\x05\xEB\xC1\xE1\x23\xCD\x76\x03\xD1\x62\x6B\xC3\xD6\x04\x7E\xD6\x0D" +
"\x23\xC2\x1D\x05\x2B\x77\xC9\xCD\x4D\x05\xCD\x3B\x03\xCD\x55\x05\xAF\x32\x83\x10\xCD\x29\x01\xDA\xF0\x00\xCD\x3B\x03\x3A\x84\x10" +
"\x5F\x16\x00\x2A\x8B\x10\x19\x22\x8B\x10\xC3\x30\x05\x3A\x85\x10\xB7\xC8\xC3\xE6\x01\xCD\xFC\x04\x3A\x86\x10\xF5\x47\x3E\x18\x90" +
"\x01\x20\x40\xCD\x19\x01\xCD\x14\x01\xF1\x01\x1A\x01\xC3\x19\x01\x0E\x19\xCD\x0A\x00\xC3\x2D\x05\xCD\x3B\x03\x21\x8B\x07\xCD\x10" +
"\x00\xCD\x9A\x00\xD6\x59\xC2\x1E\x00\x0E\x1F\xCD\x0A\x00\x2A\x28\x00\x22\x8B\x10\x36\x0D\x23\x22\x87\x10\x36\xFF\xC3\x30\x05\x3A" +
"\x83\x10\xB7\xF8\xCD\xDE\x01\xCD\xAC\x01\xCD\x9A\x00\xB7\xCA\xC8\x05\xFE\x1F\xCA\xC4\x05\x11\xA9\x07\x1A\xB9\xCA\xC8\x05\xB7\x13" +
"\xC2\xB9\x05\x71\x4E\xC3\x6F\x00\xCD\xE7\x01\xC3\xAA\x05\xCD\x0E\x06\xEB\x2A\x28\x00\xCD\x3A\x06\xC5\xD5\xCD\x2B\x06\xE3\xEB\x21" +
"\x00\x10\xCD\x57\x06\xCD\x4A\x06\xD1\x21\x00\xE7\x19\x3E\xE6\xCD\x06\x00\x7D\x2F\xCD\x06\x00\x7C\x2F\x2A\x28\x00\xCD\x62\x06\xC1" +
"\x79\xCD\x06\x00\x78\xCD\x06\x00\xCD\x16\x00\xC3\x1E\x00\xC5\xCD\x01\x01\x21\x91\x07\xCD\x10\x00\x3E\x3F\xCD\x0C\x01\xC1\x78\x32" +
"\x82\x10\xCD\x29\x01\xDA\x1E\x00\xC3\x1D\x05\x16\x04\xAF\x1E\x40\xEE\x55\xCD\x4F\x06\x15\xC2\x2E\x06\xC9\x01\x00\x00\x7E\xB7\xF8" +
"\x81\x4F\x3E\x00\x88\x47\x23\xC3\x3D\x06\xCD\x4D\x06\xAF\x5F\xCD\x06\x00\x1D\xC2\x4F\x06\xC9\x3E\xE6\x06\x04\xCD\x06\x00\x05\xC2" +
"\x5B\x06\xCD\x06\x00\xCD\xF5\x01\x7E\x23\xC2\x62\x06\xC3\x06\x00\x06\x00\xCD\x0E\x06\xCD\x1F\x07\xE5\xCD\x1A\x07\x47\x3A\x82\x10" +
"\x3C\xC2\x89\x06\x78\xBE\xC2\xA0\x06\x70\x04\x23\xC2\x79\x06\x2B\x3E\x08\xCD\xFE\x06\xE1\xC5\xCD\x3A\x06\xE3\x50\x59\xCD\xF5\x01" +
"\xCD\x16\x00\x21\x69\x07\xC2\x89\x02\xE1\x22\x87\x10\x2A\x28\x00\x22\x89\x10\xC3\xF0\x00\x21\xC0\x10\xCD\x07\x07\xCD\x1A\x07\x77" +
"\xB7\xCA\xC8\x06\x23\xC3\xBC\x06\xCD\x16\x00\x21\x91\x07\xCD\x10\x00\x3E\x3A\xCD\x0C\x01\x21\xC0\x10\xE5\xCD\x10\x00\xCD\xEE\x06" +
"\xE1\x11\x00\x10\x1A\xB7\xC8\xBE\x23\x13\xCA\xE4\x06\xC9\x11\x00\x00\x21\x00\x00\x2B\xCD\xF5\x01\xC8\xC3\xF4\x06\x3E\xFF\xCD\x0D" +
"\x00\x4F\xCD\x1A\x07\x47\xC9\x06\x04\x3E\xFF\xCD\x0D\x00\xFE\xE6\xC2\x07\x07\x05\x3E\x08\xC2\x0B\x07\xC9\x3E\x08\xC3\x0D\x00\xCD" +
"\xB6\x06\xC2\x1F\x07\xCD\xFC\x06\x2A\x28\x00\x3A\x82\x10\x3D\xFA\x35\x07\x2A\x87\x10\xC3\x04\x04\x06\xFF\xC3\x72\x06\x06\x01\xC3" +
"\x72\x06\xCD\x3B\x03\xCD\xC9\x03\x7E\x3C\xCA\xF6\x00\x01\x40\x10\xC3\xC2\x00\x2A\x87\x10\x22\x89\x10\xC3\x03\x03\x0E\x1F\xCD\x0A" +
"\x00\xC3\x00\x08\x79\x32\x8F\x10\xC9\x0D\x0A\x6F\x7B\x69\x62\x6B\x61\x3A\x00\x64\x6C\x69\x6E\x6E\x61\x71\x20\x73\x74\x72\x6F\x6B" +
"\x61\x00\x6D\x61\x6C\x6F\x20\x6F\x7A\x75\x00\x1F\x4E\x45\x57\x3F\x00\x0D\x0A\x66\x61\x6A\x6C\x00\x0D\x0A\x45\x44\x2E\x2A\x6D\x69" +
"\x6B\x72\x6F\x6E\x2A\x0D\x0A\x2A\x00\x08\x0A\x0C\x0D\x18\x19\x1A\x00\x01\x01\x05\x03\xB8\x04\x08\x71\x02\x18\x70\x00\x19\x8F\x02" +
"\x1A\x9D\x03\x0C\x25\x03\x1F\x5C\x07\x05\x13\x00\x00\x4C\xAE\x00\x44\x17\x04\x41\x27\x05\x4E\x78\x05\x5C\x9F\x05\x4F\xCE\x05\x49" +
"\x70\x06\x56\x38\x07\x4D\x3D\x07\x52\x42\x07\x42\xAD\x06\x45\x53\x07\x1A\xD4\x03\x19\x03\x03\x01\x64\x07\x03\x64\x07\x00\x00\x00" +
"\x31\xFF\x75\x21\xE0\x0F\xCD\x6A\x0E\xCD\x25\x08\xCD\x5E\x0E\xCD\xE1\x0D\xD6\x31\xFA\x6C\xF8\xFE\x03\x32\x12\x10\xFA\x2F\x08\x21" +
"\xF3\x0F\xC3\x5C\x0B\xCD\x61\x0E\x4F\xFE\x1F\xCA\x6D\x0E\xC9\x2A\x4C\x08\xCD\x4F\x0B\x7E\x3C\x23\xC2\x32\x08\x22\x00\x10\x77\x32" +
"\x13\x10\x67\x6F\x22\x14\x10\x3C\x32\x03\x10\x21\x00\x19\x22\x0F\x10\x21\x00\x11\x22\x05\x10\xAF\x32\x02\x10\xAF\x32\x04\x10\x2A" +
"\x05\x10\x22\x07\x10\x31\xFF\x75\xCD\x90\x0A\x21\x16\x10\x7E\xFE\x3B\xCA\xBE\x08\xCD\xC5\x0A\xFE\x3A\xC2\x95\x08\xAF\xB9\xCA\x88" +
"\x0A\xE5\xCD\x0A\x0B\xE1\xCD\x02\x0B\xB7\xCA\xBE\x08\xFE\x3B\xCA\xBE\x08\xCD\xC5\x0A\xE5\xCD\x1B\x0D\xE1\xCD\xC0\x0B\xE5\x21\x70" +
"\x0E\x3A\x09\x10\x5F\x16\x00\x19\x19\x5E\x23\x7E\xB9\xC2\x83\x0A\x21\xD9\x08\x19\x11\xBE\x08\xEB\xE3\xD5\x3A\x0B\x10\xC9\xCD\x8E" +
"\x0D\x2A\x4C\x08\xEB\x2A\x05\x10\xCD\x55\x0B\xCD\x64\x0E\xC4\x25\x08\xFE\x03\xCA\x00\x08\xC3\x5B\x08\xF6\x40\x32\x0C\x10\xCD\xA8" +
"\x0B\x3A\x0A\x10\xC3\x28\x0A\xF6\x06\x32\x0C\x10\xCD\xA8\x0B\x0E\x01\xC3\x36\x0A\xCD\x4C\x0A\xF6\x01\x32\x0C\x10\xCD\xA8\x0B\x0E" +
"\x02\xC3\x36\x0A\xCD\x4C\x0A\xC3\x28\x0A\xCD\x54\x0A\xC3\x28\x0A\xCD\x5C\x0A\xC3\x28\x0A\x3A\x0A\x10\x47\xE6\x07\xB8\xC2\x83\x0A" +
"\x07\x07\x07\xC3\x28\x0A\x2A\x05\x10\xEB\x2A\x0A\x10\x19\x22\x05\x10\xC9\x21\x16\x10\xCD\xC5\x0A\xFE\x3A\xC2\x88\x0A\x2A\x0A\x10" +
"\x22\x07\x10\xEB\x3A\x03\x10\x3D\xC0\x3A\x04\x10\x3D\xC8\xFA\x54\x09\x11\xFE\xFF\x2A\x0D\x10\x73\x23\x72\xC9\xEB\x2A\x05\x10\x1A" +
"\xFE\x27\xC2\x76\x09\x13\x1A\x13\xB7\xCA\x83\x0A\xFE\x27\xCA\x88\x09\x77\x23\xC3\x66\x09\x3A\x0A\x10\x77\x23\x3A\x09\x10\xFE\x0E" +
"\xCA\x88\x09\x3A\x0B\x10\x77\x23\x22\x05\x10\xEB\xCD\x02\x0B\xB7\xC8\xFE\x3B\xC8\xCD\xA8\x0B\xC3\x5B\x09\x3A\x13\x10\xB7\xC0\x3C" +
"\x32\x13\x10\x21\x00\x11\xEB\x2A\x0A\x10\xCD\x18\x0A\x22\x14\x10\xC9\xCD\x8E\x0D\x21\x03\x10\x35\xCA\x4B\x08\x3A\x12\x10\x3D\xC2" +
"\xF4\x09\x2A\x00\x10\x06\x06\x7E\xB7\xCA\xF4\x09\x4F\xCD\x5E\x0E\x05\x23\xC2\xC7\x09\x0E\x3D\xCD\x5E\x0E\x0E\x20\xCD\x5E\x0E\x23" +
"\x7E\xCD\x50\x0E\x2B\x7E\xCD\x50\x0E\x23\x23\x01\x20\x04\xCD\x1F\x0A\xC3\xC5\x09\x21\xD0\x0F\xCD\x6A\x0E\x3A\x02\x10\xCD\x50\x0E" +
"\xCD\xE1\x0D\x2A\x05\x10\x2B\xEB\x2A\x14\x10\x19\x0E\x2F\xCD\x56\x0E\xEB\xCD\x56\x0E\xC3\x00\x08\x7D\x93\x6F\x7C\x9A\x67\xC9\x04" +
"\x05\xC8\xCD\x5E\x0E\xC3\x20\x0A\x47\x3A\x0C\x10\xB0\x2A\x05\x10\x77\x23\x22\x05\x10\xC9\x2A\x0A\x10\xEB\x2A\x05\x10\x3A\x0C\x10" +
"\x77\x23\x73\x23\x0D\xCA\x32\x0A\x7A\xC3\x30\x0A\xFE\x40\xC2\x59\x0A\x3E\x30\xC9\xFE\x48\xC3\x4E\x0A\xFE\x20\xC8\xFE\x10\xC8\xB7" +
"\xC2\x83\x0A\xC9\x06\x01\xC3\x6E\x0A\x06\x02\x11\xFE\xFF\xE5\x21\x04\x10\x7E\xB0\x77\x21\x02\x10\x7E\x3C\x27\x77\xE1\xC9\x06\x04" +
"\xC3\x8A\x0A\x06\x08\xC3\x8A\x0A\x06\x10\xCD\x6E\x0A\xC3\xBE\x08\x11\x16\x10\x0E\x40\x2A\x0F\x10\x7E\x23\xFE\xFF\xCA\xB1\x09\xFE" +
"\x0D\xCA\xB9\x0A\xFE\x09\xC2\xAB\x0A\x3E\x20\xFE\x0A\xCA\x98\x0A\x12\x0D\xFA\x98\x0A\x13\xC3\x98\x0A\xAF\x12\x79\xFE\x40\xCA\x98" +
"\x0A\x22\x0F\x10\xC9\x0E\x06\x11\x56\x10\xD5\x3E\x20\x12\x13\x0D\xC2\xCD\x0A\xD1\xCD\x02\x0B\xFE\x3F\xF8\xFE\x80\xF0\x47\x79\xFE" +
"\x06\xCA\xE8\x0A\x78\x12\x13\x0C\x23\x7E\xFE\x30\xFA\x02\x0B\xFE\x3A\xCA\x00\x0B\xFA\xDD\x0A\xFE\x3F\xF8\xFE\x80\xFA\xDD\x0A\xC9" +
"\x23\xC9\x7E\xFE\x20\xC0\x23\xC3\x02\x0B\xCD\x86\x0B\x3A\x03\x10\x3D\xC2\x6D\x0B\xB9\xCA\x68\x0B\xE5\xE5\x01\x08\x00\x7E\x09\xE3" +
"\xB7\xC2\x1D\x0B\xC1\xD1\x7E\x02\xCD\x62\x0B\x2B\x0B\xC2\x26\x0B\x23\x11\x56\x10\x0E\x06\x1A\x77\x13\x23\x0D\xC2\x36\x0B\x22\x0D" +
"\x10\xE5\x2A\x05\x10\xEB\x2A\x14\x10\x19\xEB\xE1\x73\x23\x72\xEB\x21\xF8\xFF\x39\xEB\xCD\x62\x0B\xD8\x21\xF7\x0F\xCD\x6A\x0E\xC3" +
"\x00\x08\x7C\xBA\xC0\x7D\xBB\xC9\x3D\x77\x23\x77\xC9\x4E\x23\x46\xB8\xC0\xB9\xCA\x64\x0A\x3D\xB9\xCA\x69\x0A\xC9\xCD\x86\x0B\xFA" +
"\x69\x0A\x5E\x23\x56\xC9\x2A\x00\x10\x0E\x06\x7E\x3D\xF8\xE5\x11\x56\x10\x1A\xBE\xCA\xA0\x0B\xE1\xF8\x01\x08\x00\x09\xC3\x89\x0B" +
"\x13\x23\x0D\xC2\x92\x0B\xD1\xC9\x7E\xFE\x2C\xC2\x83\x0A\x23\xCD\xC0\x0B\x3A\x09\x10\xFE\x03\xCA\xBB\x0B\x0D\x0D\xC2\x83\x0A\xC9" +
"\xCD\xC5\x0A\xAF\x32\x11\x10\x32\x0A\x10\x32\x0B\x10\xB9\xCA\xE8\x0B\xCD\x30\x0C\xFE\x01\xC2\xE1\x0B\x4F\xCD\x25\x0C\xC8\xDA\x83" +
"\x0A\xE5\xCD\x7C\x0B\xC3\x11\x0C\xCD\x25\x0C\xC8\xFE\x2B\xCA\xF6\x0B\xFE\x2D\xC2\xFA\x0B\x32\x11\x10\x23\xCD\x66\x0C\x0C\xCA\x83" +
"\x0A\x3A\x11\x10\xFE\x2D\xC2\x10\x0C\xAF\x93\x5F\x3E\x00\x9A\x57\xE5\x2A\x0A\x10\x19\x22\x0A\x10\xE1\xCD\x66\x0C\x0C\xC2\x83\x0A" +
"\x0E\x02\xC3\xE8\x0B\x7E\xB7\xC8\xFE\x2C\xC8\xFE\x3B\xC8\x37\xC9\xE5\x21\x94\x0E\x41\x11\x56\x10\x48\x7E\x23\xB7\xCA\x64\x0C\xB9" +
"\xCA\x4D\x0C\x4F\x23\x0D\xC2\x44\x0C\x23\xC3\x35\x0C\x1A\x13\xBE\xC2\x44\x0C\x23\x0D\xC2\x4D\x0C\x7E\x32\x0A\x10\x07\x07\x07\x32" +
"\x0B\x10\x3E\x01\xE1\xC9\xCD\xC5\x0A\x0D\xF2\xFC\x0C\x7E\xFE\x27\xCA\xE0\x0C\xFE\x24\xCA\x0C\x0D\xFE\x30\xF8\xFE\x3A\xF0\x11\x56" +
"\x10\x0E\x00\xD6\x30\x12\x13\x23\x7E\xFE\x30\xFA\xA8\x0C\xFE\x3A\xFA\x83\x0C\xFE\x41\xFA\xA8\x0C\x0C\xFE\x48\xCA\xB2\x0C\xFE\x4A" +
"\xF2\x83\x0A\xD6\x07\xC3\x83\x0C\xAF\xB9\xC2\x83\x0A\x3E\x19\xC3\xB5\x0C\x23\x3E\x29\x12\xE5\x21\x56\x10\x11\x00\x00\xDE\x19\x47" +
"\x7E\x23\xFE\x10\xF2\x17\x0D\x4F\x78\xB7\x06\x00\xE5\x62\x6B\x29\x29\xC2\xD8\x0C\x19\xC3\xD9\x0C\x29\x29\x09\xEB\xE1\xC3\xBF\x0C" +
"\x0E\x02\x3A\x09\x10\xFE\x0E\xC2\xEC\x0C\xF1\xC9\x23\x5E\x23\x56\x7E\x23\xB7\xCA\x83\x0A\xFE\x27\xC2\xF0\x0C\xC9\x0C\xCD\x30\x0C" +
"\xFE\x01\xCA\x83\x0A\xE5\xCD\x7C\x0B\xC3\x17\x0D\x23\xE5\x2A\x07\x10\xEB\x2A\x14\x10\x19\xEB\xE1\x0E\x02\xC9\x3A\x59\x10\xFE\x58" +
"\xC2\x26\x0D\x32\x58\x10\x3A\x56\x10\xD6\x41\xFA\x7E\x0A\x5F\x16\x00\x21\xB6\x0E\x19\x5E\x23\x7E\x93\xCA\x7E\x0A\x4F\xC5\x21\xD1" +
"\x0E\x19\x19\x19\x0E\x20\x3A\x57\x10\x91\xCA\x51\x0D\x91\xFA\x7E\x0A\x07\x07\x07\x47\x3A\x58\x10\x91\xCA\x60\x0D\x91\xFA\x7E\x0A" +
"\x0F\x0F\x4F\xE6\x07\xB0\x57\x79\xE6\xC0\x5F\xC1\x7E\x23\xBA\xC2\x79\x0D\x7E\xE6\xC0\xBB\xCA\x82\x0D\x23\x23\x0D\xC2\x6C\x0D\xC3" +
"\x7E\x0A\x7E\xE6\x3F\x32\x09\x10\x23\x7E\x32\x0C\x10\xC9\x3A\x12\x10\xB7\xC0\x3A\x03\x10\x3D\xC8\xCD\xE1\x0D\x3A\x04\x10\xB7\xCA" +
"\xAD\x0D\xCD\x50\x0E\x0E\x2A\xCD\x5E\x0E\xC3\xB3\x0D\x01\x20\x03\xCD\x1F\x0A\x11\x16\x10\x1A\xFE\x3B\x01\x20\x11\xCA\xC6\x0D\xAF" +
"\x32\x11\x10\xCD\xEB\x0D\xEB\xCD\x1F\x0A\xCD\x6A\x0E\x3A\x11\x10\xB7\xC8\xCD\xE1\x0D\x01\x20\x03\xCD\x1F\x0A\xCD\xEB\x0D\xC3\xCD" +
"\x0D\x0E\x0A\xCD\x5E\x0E\x0E\x0D\xC3\x5E\x0E\x3A\x09\x10\xFE\x0C\xC8\xFE\x0D\xC8\x2A\x07\x10\xFE\x11\xCA\x4B\x0E\xF5\xD5\xEB\x2A" +
"\x14\x10\x19\xCD\x56\x0E\xEB\xD1\xF1\xFE\x10\xCA\x32\x0E\x06\x04\x3A\x05\x10\x95\xCA\x2A\x0E\x7E\x23\xCD\x50\x0E\xCD\x5E\x0E\x05" +
"\xC2\x10\x0E\x3A\x05\x10\x95\x22\x07\x10\x32\x11\x10\x78\x07\x80\x47\xC9\x0E\x28\xCD\x5E\x0E\x0E\x20\xCD\x5E\x0E\x2A\x0A\x10\xCD" +
"\x56\x0E\x0E\x29\xCD\x5E\x0E\x01\x20\x04\xC9\x06\x0C\xC3\x56\x0E\xC5\xCD\x67\x0E\xC1\xC9\x7C\xCD\x50\x0E\x7D\xCD\x50\x0E\xC3\x09" +
"\xF8\xC3\x03\xF8\xC3\x12\xF8\xC3\x15\xF8\xC3\x18\xF8\xC3\x00\x00\x0B\x00\x08\x01\x2E\x01\x00\x01\x16\x02\x0E\x01\x26\x02\x2B\x01" +
"\x31\x01\x37\x01\x1B\x01\x3D\x02\xC1\x02\xD8\x00\x82\x02\x82\x02\x4D\x02\x59\x02\x01\x41\x07\x01\x42\x00\x01\x43\x01\x01\x44\x02" +
"\x01\x45\x03\x01\x48\x04\x01\x4C\x05\x01\x4D\x06\x02\x53\x50\x08\x03\x50\x53\x57\x09\x00\x00\x06\x06\x13\x1B\x1E\x1E\x1E\x1F\x22" +
"\x2C\x2C\x30\x32\x33\x37\x3A\x3A\x48\x51\x51\x51\x51\x51\x55\x55\x55\x1A\x44\xCE\x20\xC1\x88\x21\x01\x80\x22\x44\xC6\x70\x41\xA0" +
"\x72\x44\xE6\x0B\x06\xCD\x18\x06\xDC\x68\x06\xFC\x68\x40\x2F\x68\xC0\x3F\x6C\x01\xB8\x70\xC6\xD4\x76\x86\xC4\x80\x06\xF4\x81\x46" +
"\xEC\x82\x44\xFE\x83\xC6\xE4\xD0\x06\xCC\x08\x40\x27\x09\x07\x09\x1C\x82\x05\x1E\x07\x0B\x48\x00\xF3\x10\x0E\x00\xB8\x0F\x00\x98" +
"\x10\x00\x48\x00\xFB\x71\x0D\x00\x8D\x51\x00\x65\x00\x76\x70\x04\xDB\x74\x82\x04\x76\x07\x03\x18\x06\xDA\x68\x06\xFA\x6C\x06\xC3" +
"\x00\x06\xC3\x70\xC6\xD2\x76\x86\xC2\x80\x06\xF2\x81\x46\xEA\x83\xC6\xE2\xD0\x06\xCA\x20\x46\x3A\x26\x09\x0A\x43\x06\x2A\xC2\x4A" +
"\x01\xB2\x45\x06\x7D\x83\x40\x7C\x00\x00\x90\x41\xB0\x92\x44\xF6\xAD\x04\xD3\x91\xCC\x00\x1A\x00\xE9\x7C\x08\xC1\xAC\xC8\xC5\x0B" +
"\x00\x17\x0C\x80\x1F\x60\xC0\x07\x90\xC0\x0F\x2D\x00\xC9\x18\x00\xD8\x70\xC0\xD0\xD0\x00\xC8\x76\x80\xC0\x80\x00\xF0\x68\x00\xF8" +
"\x81\x40\xE8\x83\xC0\xE0\x9D\x0B\xC7\x10\x81\x98\x12\x44\xDE\x43\x06\x22\x82\x00\xF9\xA0\x46\x32\xA6\x09\x02\xA0\xC0\x37\xA8\x81" +
"\x90\xAA\x44\xD6\x1A\x00\xEB\x90\x41\xA8\x92\x44\xEE\xA2\x00\xE3\x0D\x0A\x6B\x6F\x6E\x65\x63\x2E\x6F\x7B\x69\x62\x6F\x6B\x3A\x00" +
"\x0D\x0A\x41\x53\x53\x4D\x2E\x2A\x6D\x69\x6B\x72\x6F\x6E\x2A\x0D\x0A\x2A\x00\x3F\x3F\x3F\x00\x6D\x61\x6C\x6F\x20\x6F\x7A\x75\x00"};
ui.file_loaded(file);
}
tape_file();
