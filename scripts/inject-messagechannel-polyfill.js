import fs from 'fs';
import path from 'path';

const polyfill = `// MessageChannel Polyfill for Cloudflare Workers
if (typeof globalThis.MessageChannel === 'undefined') {
  globalThis.MessageChannel = class MessageChannel {
    constructor() {
      const channel = new BroadcastChannel('message-channel-polyfill');
      this.port1 = {
        postMessage: (data) => channel.postMessage(data),
        close: () => channel.close()
      };
      this.port2 = {
        postMessage: (data) => channel.postMessage(data),
        close: () => channel.close()
      };
      channel.onmessage = (event) => {
        if (this.port1.onmessage) {
          this.port1.onmessage(event);
        }
        if (this.port2.onmessage) {
          this.port2.onmessage(event);
        }
      };
    }
  };
}

`;

const workerPath = path.join(process.cwd(), 'dist', '_worker.js', 'index.js');

try {
  // Read the worker file
  const content = fs.readFileSync(workerPath, 'utf8');
  
  // Inject the polyfill at the beginning
  const newContent = polyfill + content;
  
  // Write back to the file
  fs.writeFileSync(workerPath, newContent);
  
  console.log('✅ Successfully injected MessageChannel polyfill');
} catch (error) {
  console.error('❌ Failed to inject MessageChannel polyfill:', error);
  process.exit(1);
} 