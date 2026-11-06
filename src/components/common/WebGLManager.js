// WebGL & Canvas concurrency manager
// Enforces that no more than two canvas or WebGL effects are running simultaneously anywhere on screen.

const MAX_CONCURRENT_CANVASES = 2;
const activeSet = new Set();
const listeners = new Set();

function notify() {
  listeners.forEach((fn) => fn());
}

export const WebGLManager = {
  request(id) {
    if (activeSet.has(id)) return true;
    if (activeSet.size < MAX_CONCURRENT_CANVASES) {
      activeSet.add(id);
      notify();
      return true;
    }
    return false;
  },

  release(id) {
    if (activeSet.delete(id)) {
      notify();
    }
  },

  isActive(id) {
    return activeSet.has(id);
  },

  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};

export default WebGLManager;
