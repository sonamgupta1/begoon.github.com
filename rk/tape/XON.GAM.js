function tape_file() {
var file = {
name: "XON.GAM",
start: 0x0000,
end: 0x0aff,
entry: 0x0000,
image:
"\xC3\xD1\x07\x77\x72\x65\x6D\x71\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x73\x7E\x65\x74\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
"\x20\x20\x77\x73\x65\x67\x6F\x20\x20\x20\x20\x20\x20\x20\x20\x70\x6F\x70\x79\x74\x6B\x69\x0C\x00\x3E\x3F\x70\x23\x3D\xC2\x3A\x00" +
"\x70\x19\xC9\xCD\x7A\x09\x7A\xCD\x15\xF8\x7B\xCD\x15\xF8\x0E\x0C\xC3\x09\xF8\x7B\xA5\x47\x7A\xA4\xB0\x3E\x08\xE2\x5F\x00\x0E\x07" +
"\xCD\x09\xF8\x3D\xC2\x62\x00\xC9\x11\x2A\x10\xCD\x05\x02\x3E\x01\x3D\xC2\x70\x00\x21\x06\x00\x19\xEB\x3E\x8A\xBB\xD2\x6B\x00\xC9" +
"\x23\xC3\xE2\x00\x2B\xC3\xE2\x00\xD5\x11\xB2\xFF\x19\xD1\xC3\xE2\x00\x3E\x01\x85\x27\x6F\x3E\x00\x8C\x27\x67\xC9\x3A\x03\x10\x4F" +
"\xFE\x08\xC2\xA7\x00\x3E\x2A\x12\x7E\x32\x03\x10\xFE\x53\xCA\xB4\x00\x36\x7F\xC9\x36\x17\xC9\x2A\x04\x10\x54\x5D\x3A\x08\x10\x47" +
"\xCD\x1B\xF8\xFE\x18\xCA\x80\x00\xFE\x08\xCA\x84\x00\xFE\x19\xCA\x88\x00\xFE\x48\xCA\x0C\x01\xFE\x1A\xC2\xC0\x05\xD5\x11\x4E\x00" +
"\x19\xD1\x47\x7E\xFE\x20\xCA\x07\x01\xFE\x0D\xCA\x8F\x05\xE6\x24\xC2\x47\x05\xCD\x9C\x00\x22\x04\x10\xA9\xCA\x07\x01\xA9\xFE\x53" +
"\xCA\x48\x01\xEB\x22\x06\x10\x78\x32\x08\x10\xC9\xCD\x1B\xF8\xFE\x53\xCA\xC0\x00\xC3\x0C\x01\x2A\x09\x10\xCD\x91\x00\x22\x09\x10" +
"\xEB\x21\x10\x1D\xCD\x43\x00\x3E\xF0\xA2\x1F\x1F\x1F\x1F\xFE\x03\xCA\x00\x00\x5F\x3A\x02\x10\xBB\xC8\x7B\x32\x02\x10\x0E\x15\x11" +
"\x80\x00\x21\x0C\x00\xC3\x53\x00\x3A\x01\x10\x47\x31\x2A\x10\xD1\x13\x1A\xFE\x53\xCA\x5C\x01\xFE\x2A\xC2\x50\x01\x1B\x1A\xFE\x09" +
"\xD2\x5C\x01\xB7\xCA\xB8\x01\x0E\x02\x21\x7F\x01\x22\x90\x10\x3E\x0A\x12\x2A\x90\x10\xE9\x2A\x90\x10\x3E\x7A\xBD\xCA\xAE\x01\x62" +
"\x6B\x23\x7E\xFE\x0B\xDA\xFE\x01\x21\xB2\xFF\x19\x7E\xFE\x0B\xDA\x40\x05\x62\x6B\x2B\x7E\xFE\x0B\xDA\xCB\x04\x21\x4E\x00\x19\x7E" +
"\xFE\x0B\xD2\x76\x01\xEB\x21\x92\x01\x22\x90\x10\xFE\x0A\x3E\x00\x12\xC2\x72\x01\x0D\xC2\x6F\x01\xD1\xD1\x05\xC2\x4F\x01\x31\xFF" +
"\x75\x21\xC3\x77\x01\x08\x53\x23\x7D\xB7\xC2\xE4\x01\x7C\xFE\x7F\xCA\xE6\x04\xE5\xC5\xC6\x10\x2F\x4F\x11\x00\x02\x21\x03\x00\xCD" +
"\x53\x00\xC1\xE1\x7E\xB7\xCA\xD2\x04\xE6\x09\xB9\xC2\xC7\x01\x70\xEB\x2A\x0B\x10\xCD\x91\x00\x22\x0B\x10\xEB\xC3\xC7\x01\xEB\x21" +
"\x9B\x01\xC3\xA9\x01\xD5\x21\x00\x00\x39\x22\x15\x10\xEB\xF9\x11\x04\x00\x19\x22\x13\x10\xD1\xE1\xC1\xF9\x79\x32\xFF\x0F\xE1\x19" +
"\x7E\xFE\x17\xC2\x28\x02\x3E\x97\x4F\xE1\x19\x7E\xFE\x17\xC2\x33\x02\x3E\x97\xB1\x4F\xC3\xC7\x05\x3A\x17\x10\xB8\xC2\x1E\x02\x21" +
"\x12\x00\x39\xF9\xC9\x1A\x4F\x7E\x12\x71\xEB\x2A\x13\x10\xC1\xF9\xC5\xD5\x2A\x15\x10\xF9\xD1\xC9\x31\xFF\x75\xFA\x8F\x05\xC3\x47" +
"\x05\xB2\xFF\x01\x00\xB3\xFF\x61\x02\x38\x02\x01\x00\x4E\x00\x4F\x00\x89\x02\x1E\x02\xFF\xFF\xB2\xFF\xB1\xFF\xD9\x02\x1E\x02\x4E" +
"\x00\xFF\xFF\x4D\x00\xB1\x02\x52\x02\x01\x00\x4E\x00\x4F\x00\x89\x02\x38\x02\xB2\xFF\x01\x00\xB3\xFF\x61\x02\x1E\x02\x4E\x00\xFF" +
"\xFF\x4D\x00\xB1\x02\x1E\x02\xFF\xFF\xB2\xFF\xB1\xFF\xD9\x02\x52\x02\x4E\x00\xFF\xFF\x4D\x00\xB1\x02\x38\x02\x01\x00\x4E\x00\x4F" +
"\x00\x89\x02\x1E\x02\xFF\xFF\xB2\xFF\xB1\xFF\xD9\x02\x1E\x02\xB2\xFF\x01\x00\xB3\xFF\x61\x02\x52\x02\xFF\xFF\xB2\xFF\xB1\xFF\xD9" +
"\x02\x38\x02\x4E\x00\xFF\xFF\x4D\x00\xB1\x02\x1E\x02\xB2\xFF\x01\x00\xB3\xFF\x61\x02\x1E\x02\x01\x00\x4E\x00\x4F\x00\x89\x02\x52" +
"\x02\x2A\x2E\x10\xEB\x21\x00\x00\x3E\x20\xBB\xC2\x13\x03\xAF\xBA\xCA\x1B\x03\x22\x11\x10\x3E\x30\x32\x10\x10\x22\x0E\x10\x3E\x30" +
"\x32\x0D\x10\x21\x03\x03\x22\x00\x10\x01\xD0\x7B\x11\x00\x80\x21\x61\x02\x31\x90\x10\xD5\xE5\xC5\x3E\x28\x85\xFE\x01\xC2\x42\x03" +
"\x3E\x61\x6F\x03\x3E\xE0\xB9\xD2\x35\x03\x31\xFF\x75\xCD\xB2\x05\x01\x08\x53\x11\x0F\x00\x21\xC2\x77\xCD\x38\x00\xCD\x38\x00\x70" +
"\x23\x70\x3E\x3C\x23\x71\x3D\xC2\x64\x03\x23\x70\x23\x70\x19\x3E\xC4\xBD\xC2\x5F\x03\xCD\x38\x00\xCD\x38\x00\x21\x0A\x1D\xCD\x7A" +
"\x09\x21\x03\x00\xCD\x18\xF8\x21\x0A\x01\xCD\x7A\x09\x21\x2C\x0A\xCD\x18\xF8\xE5\x3A\x8E\x0A\x21\x8F\x0A\x01\x0F\x00\x3D\xCA\xA5" +
"\x03\x09\xC3\x9D\x03\xCD\x18\xF8\xE1\x23\xCD\x18\xF8\x21\x00\x53\x22\x02\x10\x21\xDF\x77\x22\x04\x10\x22\x06\x10\x36\x17\x31\x2A" +
"\x10\x01\x20\x08\x16\x4F\x3A\x01\x10\xE1\x72\xE1\xE1\xC5\xE1\x3D\xC2\xC9\x03\x21\x00\x00\x22\x0B\x10\x21\x00\x00\x22\x09\x10\x31" +
"\x2A\x10\x01\x00\x08\x11\xE2\x7E\x21\x61\x02\xC5\xE5\xD5\x3E\x28\x85\x6F\xFE\xD9\xC2\xEB\x03\x31\xFF\x75\x3E\xFF\x32\x08\x10\x2A" +
"\x09\x10\xEB\x21\x10\x1D\xCD\x43\x00\x2A\x0B\x10\xEB\x21\x1F\x1D\xCD\x43\x00\x2A\x0E\x10\xEB\xC5\x21\x8F\x0A\x01\x0F\x00\x3A\x8E" +
"\x0A\x3D\xCA\x29\x04\x09\xC3\x21\x04\x01\x0C\x00\x09\x3A\x0D\x10\x77\x23\x72\x23\x73\xC1\x21\x2F\x1D\xCD\x7A\x09\x2A\x00\x76\x3A" +
"\x0D\x10\x77\x21\x30\x1D\xCD\x43\x00\x3A\x00\x10\x21\x3E\x1D\xCD\x7A\x09\xCD\x4B\x00\x21\x8F\x0A\x01\x0F\x00\x3A\x8E\x0A\x3D\xCA" +
"\x66\x04\x09\xC3\x5E\x04\x01\x0B\x00\x09\x3A\x01\x10\x77\xF5\x21\x3E\x01\xCD\x7A\x09\x21\x4A\x0A\xCD\x18\xF8\xF1\xCD\x4B\x00\x0E" +
"\x0A\x11\x00\x10\x21\x06\x07\xCD\x68\x00\xCD\xB7\x00\x11\x18\x10\xCD\x05\x02\xCD\x68\x00\xCD\x17\x01\x11\x1E\x10\xCD\x05\x02\xCD" +
"\x68\x00\xCD\xB7\x00\x11\x24\x10\xCD\x05\x02\xCD\x68\x00\xCD\x17\x01\x31\x18\x10\x01\x80\x53\x3A\x02\x10\xE1\x36\x0D\xE1\xE1\xC5" +
"\xE1\x3D\xF2\xBA\x04\x31\xFF\x75\xC3\x87\x04\xEB\x21\x88\x01\xC3\xA9\x01\x71\x23\x7E\xFE\x2A\xCA\xEF\x01\xB8\xCA\xC7\x01\xFE\x09" +
"\xDA\xD2\x04\xC3\xD3\x04\x2A\x0B\x10\x3E\x09\xBC\xD2\xF7\x03\xEB\x21\x1F\x1D\xCD\x43\x00\x2A\x0E\x10\x7D\x83\x27\x6F\x7C\x8A\x27" +
"\x67\x22\x0E\x10\x3A\x0D\x10\xCE\x00\x32\x0D\x10\xC5\x21\x44\x01\xCD\x7A\x09\x2A\x00\x76\x7E\xD6\x30\x07\x07\x07\x07\x47\x23\x7E" +
"\xD6\x30\xB0\xC1\x2A\x00\x10\x85\x27\x6F\x7C\xC6\x01\x27\x67\x22\x00\x10\x0E\x06\x11\x00\x18\x21\x07\x05\xCD\x53\x00\xC3\x4A\x03" +
"\xEB\x21\x7F\x01\xC3\xA9\x01\x0E\x01\x11\x00\x06\x21\x01\x00\xCD\x53\x00\x2A\x04\x10\xEB\x2A\x06\x10\x22\x04\x10\xCD\x9C\x00\x21" +
"\xDF\x77\x01\x08\x2A\x23\x7E\xB8\xC2\x6C\x05\x71\x7C\xFE\x7F\xC2\x65\x05\x3A\x00\x10\xC6\x99\x27\x32\x00\x10\xCA\xC5\x08\x31\x18" +
"\x10\x06\x03\xE1\x36\x53\xE1\xE1\x05\xC2\x83\x05\xC3\xD9\x03\x0E\x10\x11\x01\x03\x21\x06\x00\xCD\x53\x00\x2A\x04\x10\xEB\x21\xDF" +
"\x77\x22\x06\x10\xC3\x59\x05\xCD\x03\xF8\xFE\x5A\xCA\x01\x03\xC3\xA7\x05\x21\xD0\x76\x11\x80\x20\x72\x23\x7C\xBB\xC2\xB8\x05\xC9" +
"\x78\xFE\xFF\xC8\xC3\xC3\x00\x32\x17\x10\xE1\x19\x7E\xFE\x17\xC2\xD4\x05\x3E\x97\xB1\xB8\xCA\x45\x02\x4F\x3A\xFF\x0F\xA1\xC2\x58" +
"\x02\xE1\xC9\x06\x1A\xCD\x09\x06\x21\x20\x06\x1E\x09\xCD\x18\xF8\x23\xE5\xCD\x16\x06\x0E\x0D\xCD\x09\xF8\x0E\x0A\xCD\x09\xF8\xE1" +
"\x1D\xC2\xED\x05\x06\x0F\xC3\x09\x06\x0E\x0A\xCD\x09\xF8\xCD\x16\x06\x05\xC2\x0B\x06\xC9\x21\x00\x02\x2B\x7C\xB5\xC2\x19\x06\xC9" +
"\x0D\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x58\x58\x58\x58\x58\x58\x58\x58\x58\x20\x20\x41\x44\x41\x50\x54\x45" +
"\x44\x20\x20\x42\x59\x20\x20\x58\x58\x58\x58\x58\x58\x58\x58\x58\x00\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x58" +
"\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x58" +
"\x00\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x58\x20\x7F\x20\x20\x20\x7F\x20\x20\x7F\x7F\x7F\x20\x20\x7F\x20\x20" +
"\x20\x7F\x20\x20\x7F\x7F\x7F\x20\x20\x7F\x20\x20\x20\x7F\x20\x58\x00\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x58" +
"\x20\x20\x7F\x20\x7F\x20\x20\x7F\x20\x20\x20\x7F\x20\x7F\x7F\x20\x20\x7F\x20\x20\x20\x7F\x20\x20\x20\x20\x7F\x20\x7F\x20\x20\x58" +
"\x00\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x58\x20\x20\x20\x7F\x20\x20\x20\x7F\x20\x20\x20\x7F\x20\x7F\x20\x7F" +
"\x20\x7F\x20\x20\x20\x7F\x20\x20\x20\x20\x20\x7F\x20\x20\x20\x58\x00\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x58" +
"\x20\x20\x7F\x20\x7F\x20\x20\x7F\x20\x20\x20\x7F\x20\x7F\x20\x20\x7F\x7F\x20\x20\x20\x7F\x20\x20\x20\x20\x7F\x20\x7F\x20\x20\x58" +
"\x00\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x58\x20\x7F\x20\x20\x20\x7F\x20\x20\x7F\x7F\x7F\x20\x20\x7F\x20\x20" +
"\x20\x7F\x20\x20\x7F\x7F\x7F\x20\x20\x7F\x20\x20\x20\x7F\x20\x58\x00\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x58" +
"\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x58" +
"\x00\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x58\x58\x58\x58\x58\x58\x58\x58\x20\x2A\x20\x4D\x20\x49\x20\x43\x20" +
"\x52\x20\x4F\x20\x4E\x20\x2A\x20\x58\x58\x58\x58\x58\x58\x58\x58\x00\xCD\xE3\x05\x21\x51\x0A\xCD\x18\xF8\xCD\x03\xF8\x4F\xCD\x09" +
"\xF8\xFE\x64\x3E\x2A\xC2\xEA\x07\x3E\x53\x32\xA6\x00\x23\xCD\x18\xF8\xCD\x03\xF8\xD6\x31\xFA\xF1\x07\xFE\x09\xF2\xF1\x07\x47\xC6" +
"\x31\x4F\xCD\x09\xF8\x0E\x10\x3E\x09\x90\x47\x3E\x01\x05\xCA\x15\x08\x81\xC3\x0D\x08\x32\x6F\x00\x21\x15\x11\xCD\x7A\x09\x21\x98" +
"\x09\xCD\x18\xF8\xCD\x03\xF8\xFE\x31\xFA\x24\x08\xFE\x36\xF2\x24\x08\x4F\xCD\x09\xF8\xD6\x30\x32\x8D\x0A\x57\x1E\x00\x21\x1F\x13" +
"\xCD\x7A\x09\x1C\x7A\xBB\xDA\xC1\x08\x24\xE5\x21\xBE\x09\xCD\x18\xF8\x7B\xC6\x30\x4F\xCD\x09\xF8\x23\xCD\x18\xF8\x01\x0F\x00\x7B" +
"\x21\x8F\x0A\x3D\xCA\x6B\x08\x09\xC3\x63\x08\x06\x0A\xCD\x03\xF8\xFE\x08\xCA\xA7\x08\xFE\x0D\xCA\x9D\x08\xFE\x60\xDA\x6D\x08\xFE" +
"\x7F\xF2\x6D\x08\x77\x23\x4F\xCD\x09\xF8\x05\xC2\x6D\x08\x36\x00\x06\x03\x23\x36\x30\x05\xC2\x92\x08\xE1\xC3\x40\x08\x36\x20\x23" +
"\x05\xC2\x9D\x08\xC3\x8E\x08\x78\xFE\x0A\xCA\x6D\x08\x04\x2B\x0E\x08\xCD\x09\xF8\x0E\x20\xCD\x09\xF8\x0E\x08\xCD\x09\xF8\xC3\x6D" +
"\x08\xAF\x32\x8E\x0A\x21\x8E\x0A\x34\x56\x3A\x8D\x0A\xBA\xFA\x00\x09\xCD\xE3\x05\x21\x1B\x11\xCD\x7A\x09\x21\xCC\x09\xCD\x18\xF8" +
"\x21\x8F\x0A\x15\xCA\xEE\x08\x01\x0F\x00\x09\xC3\xE3\x08\xCD\x18\xF8\x21\x16\x17\xCD\x7A\x09\x21\xE0\x09\xCD\x18\xF8\xC3\xA7\x05" +
"\xCD\xB2\x05\xCD\xE3\x05\x21\x1A\x11\xCD\x7A\x09\x21\x05\x0A\xCD\x18\xF8\x3A\x8D\x0A\x57\x1E\x00\x21\x8F\x0A\x1C\x7A\xBB\xFA\x5E" +
"\x09\xD5\xE5\x53\x21\x68\x11\x7B\x84\x67\xCD\x7A\x09\xE3\xCD\x18\xF8\x23\xE3\x01\x0C\x00\x09\xCD\x7A\x09\xE1\x7E\xCD\x15\xF8\x06" +
"\x05\x0E\x20\xCD\x09\xF8\x05\xC2\x41\x09\x23\x4E\xCD\x09\xF8\x23\x7E\xCD\x15\xF8\x23\x7E\xCD\x15\xF8\xD1\x23\xC3\x1B\x09\x21\x20" +
"\x19\xCD\x7A\x09\x21\x1D\x0A\xCD\x18\xF8\xCD\x03\xF8\xFE\x64\xCA\xC1\x08\xFE\x6E\xCA\xD1\x07\xC3\x6A\x09\xD5\xC5\xE5\x22\x02\x76" +
"\xEB\x21\xD0\x76\x01\x4E\x00\x15\xFA\x8F\x09\x09\xC3\x87\x09\x14\x19\x22\x00\x76\xE1\xC1\xD1\xC9\x73\x6B\x6F\x6C\x78\x6B\x6F\x20" +
"\x69\x67\x72\x6F\x6B\x6F\x77\x20\x62\x75\x64\x65\x74\x20\x69\x67\x72\x61\x74\x78\x28\x31\x2E\x2E\x2E\x35\x29\x3F\x20\x00\x69\x6D" +
"\x71\x20\x00\x20\x69\x67\x72\x6F\x6B\x61\x3A\x00\x70\x72\x69\x67\x6C\x61\x7B\x61\x65\x74\x73\x71\x20\x69\x67\x72\x6F\x6B\x20\x00" +
"\x64\x6C\x71\x20\x6E\x61\x7E\x61\x6C\x61\x20\x69\x67\x72\x79\x20\x6E\x61\x76\x6D\x69\x74\x65\x20\x6B\x6C\x61\x77\x69\x7B\x75\x20" +
"\x22\x5A\x22\x0C\x00\x69\x6D\x71\x20\x20\x20\x20\x20\x20\x20\x20\x7B\x61\x72\x79\x20\x20\x20\x20\x73\x7E\x65\x74\x00\x65\x7D\x65" +
"\x20\x72\x61\x7A\x28\x64\x2F\x6E\x29\x3F\x20\x00\x69\x67\x72\x61\x65\x74\x20\x00\x20\x20\x20\x20\x20\x20\x2A\x20\x6D\x20\x69\x20" +
"\x6B\x20\x72\x20\x6F\x20\x6E\x20\x2A\x00\x7B\x61\x72\x6F\x77\x20\x00\x1B\x59\x2B\x2F\x76\x65\x6C\x61\x65\x74\x65\x20\x75\x70\x72" +
"\x6F\x7D\x65\x6E\x6E\x79\x6A\x20\x77\x61\x72\x69\x61\x6E\x74\x28\x64\x2F\x6E\x29\x3F\x00\x1B\x59\x2C\x38\x73\x6B\x6F\x72\x6F\x73" +
"\x74\x78\x20\x28\x31\x2E\x2E\x2E\x39\x29\x3A\x20\x00\x01\x01\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x00\x03\x30\x00\x00\x09\xFE" +
"\x0D\xCA\xB9\x0A\xFE\x09\xC2\xAB\x0A\x3E\x20\xFE\x0A\xCA\x98\x0A\x12\x0D\xFA\x98\x0A\x13\xC3\x98\x0A\xAF\x12\x79\xFE\x40\xCA\x98" +
"\x0A\x22\x0F\x10\xC9\x0E\x06\x11\x56\x10\xD5\x3E\x20\x12\x13\x0D\xC2\xCD\x0A\xD1\xCD\x02\x0B\xFE\x3F\xF8\xFE\x80\xF0\x47\x79\xFE" +
"\x06\xCA\xE8\x0A\x78\x12\x13\x0C\x23\x7E\xFE\x30\xFA\x02\x0B\xFE\x3A\xCA\x00\x0B\xFA\xDD\x0A\xFE\x3F\xF8\xFE\x80\xFA\xDD\x0A\xC9"};
ui.file_loaded(file);
}
tape_file();
