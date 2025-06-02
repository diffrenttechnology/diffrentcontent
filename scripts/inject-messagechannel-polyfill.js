import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

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

async function injectPolyfill() {
  try {
    // Find all relevant worker files
    const workerFiles = await glob('dist/_worker.js/**/*.{js,mjs}', {
      ignore: ['**/node_modules/**']
    });

    console.log('Found worker files:', workerFiles);

    for (const file of workerFiles) {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Only inject if the file doesn't already have the polyfill
      if (!content.includes('MessageChannel Polyfill')) {
        const newContent = polyfill + content;
        fs.writeFileSync(filePath, newContent);
        console.log(`✅ Injected polyfill into ${file}`);
      } else {
        console.log(`⏭️  Skipped ${file} (already has polyfill)`);
      }
    }

    console.log('✅ Successfully processed all worker files');
  } catch (error) {
    console.error('❌ Failed to inject MessageChannel polyfill:', error);
    process.exit(1);
  }
}

injectPolyfill(); 