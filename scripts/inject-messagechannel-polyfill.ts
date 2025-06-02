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

function findWorkerFiles(dir: string): string[] {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findWorkerFiles(fullPath));
    } else if (entry.isFile() && /\.(js|mjs)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function injectPolyfill(): void {
  try {
    const workerDir = path.join(process.cwd(), 'dist', '_worker.js');
    const workerFiles = findWorkerFiles(workerDir);

    console.log('Found worker files:', workerFiles);

    for (const file of workerFiles) {
      const content = fs.readFileSync(file, 'utf8');
      
      // Only inject if the file doesn't already have the polyfill
      if (!content.includes('MessageChannel Polyfill')) {
        const newContent = polyfill + content;
        fs.writeFileSync(file, newContent);
        console.log(`✅ Injected polyfill into ${path.relative(process.cwd(), file)}`);
      } else {
        console.log(`⏭️  Skipped ${path.relative(process.cwd(), file)} (already has polyfill)`);
      }
    }

    console.log('✅ Successfully processed all worker files');
  } catch (error) {
    console.error('❌ Failed to inject MessageChannel polyfill:', error);
    process.exit(1);
  }
}

injectPolyfill(); 