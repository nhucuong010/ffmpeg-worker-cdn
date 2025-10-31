// FFmpeg WASM core module
// This is a placeholder for the actual ffmpeg-core.js
// Contains FFmpeg.js wrapper and initialization logic

if (typeof FFmpeg === 'undefined') {
  window.FFmpeg = {
    isLoaded: function() { return true; },
    load: async function() { return true; },
  };
}

module.exports = FFmpeg;
