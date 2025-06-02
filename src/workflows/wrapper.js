// MessageChannel polyfill for Cloudflare Workers
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

// This is a wrapper file for exporting both the Astro application as well as
// the CustomerWorkflow class. This is necessary because Astro does not allow
// us to manually export non-Astro stuff as part of the bundle file.
import astroEntry, { pageMap } from "./_worker.js/index.js";
import { CustomerWorkflow } from "../src/workflows/customer_workflow.js";
export default astroEntry;
export { CustomerWorkflow, pageMap };
