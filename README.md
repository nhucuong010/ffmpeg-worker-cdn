# FFmpeg Worker CDN

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

FFmpeg WASM worker build optimized for CDN deployment with CORS support. This repository provides pre-built FFmpeg WebAssembly modules ready to be deployed on CDN platforms.

## Features

- ✨ **FFmpeg WASM** - WebAssembly version of FFmpeg for browser
- 🚀 **CDN Optimized** - Designed for fast CDN distribution
- 🔐 **CORS Enabled** - Ready for cross-origin requests
- 📦 **Web Workers** - Includes worker implementation for background processing
- 🌐 **Vercel Ready** - Pre-configured for Vercel deployment
- 📝 **Lightweight** - Optimized bundle size

## Directory Structure

```
.
├── public/                    # CDN public directory
│   ├── ffmpeg-core.js        # FFmpeg WASM core module
│   ├── ffmpeg-core.wasm      # FFmpeg WebAssembly binary
│   ├── ffmpeg-core.worker.js # Worker thread implementation
│   └── .gitkeep              # Placeholder for git
├── vercel.json               # Vercel configuration with CORS headers
├── package.json              # Project metadata
└── README.md                 # This file
```

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/nhucuong010/ffmpeg-worker-cdn.git
cd ffmpeg-worker-cdn

# Install dependencies (if any)
npm install
```

### Local Development

```bash
# Start a local HTTP server
npm start

# Or use Python
python -m http.server 8000 --directory public
```

### Usage

#### Basic Usage

```javascript
// Include FFmpeg WASM
<script src="https://your-cdn-url/public/ffmpeg-core.js"></script>

// Initialize FFmpeg
const ffmpeg = new FFmpeg();
await ffmpeg.load();

// Use FFmpeg for video/audio processing
// Your code here
```

#### With Web Worker

```javascript
// Create worker instance
const worker = new Worker('https://your-cdn-url/public/ffmpeg-core.worker.js');

// Send commands
worker.postMessage({
  id: 1,
  method: 'convert',
  args: ['input.mp4', 'output.webm']
});

// Receive results
worker.onmessage = (event) => {
  console.log('Result:', event.data);
};
```

## Deployment

### Vercel Deployment

This project is pre-configured for Vercel:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

The `vercel.json` file includes:
- CORS headers configuration
- URL rewrites for asset delivery
- Optimized caching headers

### CDN Deployment

1. Upload the `public/` directory to your CDN provider
2. Ensure CORS headers are properly configured
3. Update your application URLs to point to the CDN

### AWS S3 + CloudFront

```bash
# Upload to S3
aws s3 sync public/ s3://your-bucket/ffmpeg-wasm/

# Update CloudFront distribution with CORS headers
```

## Configuration

### CORS Headers

The `vercel.json` file configures CORS headers for the `/public/*` path:

```json
{
  "headers": [{
    "source": "/public/(.*)",
    "headers": [
      {
        "key": "Access-Control-Allow-Origin",
        "value": "*"
      }
    ]
  }]
}
```

## Performance

- **Initial Load**: ~2-5 seconds (depends on WASM binary size)
- **Processing**: Near-native performance using WebAssembly
- **Memory**: ~50-100MB RAM for FFmpeg instance

## Supported Formats

### Video
- MP4, WebM, AVI, MOV, MKV, FLV, etc.

### Audio
- MP3, WAV, AAC, FLAC, OGG, etc.

### Image
- JPEG, PNG, WebP, GIF, etc.

## Browser Support

- Chrome/Edge: ✅ (60+)
- Firefox: ✅ (55+)
- Safari: ✅ (11.1+)
- Opera: ✅ (47+)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## References

- [FFmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)
- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)
- [WebAssembly](https://webassembly.org/)
- [Vercel Documentation](https://vercel.com/docs)

## Support

For issues and questions:
- Create an issue on [GitHub Issues](https://github.com/nhucuong010/ffmpeg-worker-cdn/issues)
- Check existing documentation and examples

---

**Made with ❤️ by nhucuong010**
