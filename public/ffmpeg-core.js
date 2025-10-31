// FFmpeg WASM Core Module
// This module provides the main FFmpeg functionality compiled to WebAssembly

var FFmpeg = (() => {
  'use strict';
  
  // Module initialization
  const Module = {};
  
  // FFmpeg WASM binary data and initialization
  Module.onRuntimeInitialized = function() {
    console.log('FFmpeg WASM module loaded');
  };
  
  return Module;
})();

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FFmpeg;
}
if (typeof window !== 'undefined') {
  window.FFmpeg = FFmpeg;
}
