// FFmpeg WASM Worker
// This worker processes FFmpeg operations in a separate thread
// to avoid blocking the main UI thread

importScripts('ffmpeg-core.js');

self.onmessage = async (event) => {
  const { id, method, args } = event.data;
  try {
    if (typeof FFmpeg[method] === 'function') {
      const result = await FFmpeg[method](...args);
      self.postMessage({ id, result });
    } else {
      throw new Error(`Method ${method} not found in FFmpeg`);
    }
  } catch (error) {
    self.postMessage({ id, error: error.message });
  }
};

console.log('FFmpeg Worker initialized');
