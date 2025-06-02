// Polyfill for MessageChannel in Cloudflare Workers
if (typeof MessageChannel === 'undefined') {
  class MessageChannelPolyfill {
    port1: MessagePortPolyfill;
    port2: MessagePortPolyfill;

    constructor() {
      this.port1 = new MessagePortPolyfill();
      this.port2 = new MessagePortPolyfill();
      this.port1.setOtherPort(this.port2);
      this.port2.setOtherPort(this.port1);
    }
  }

  class MessagePortPolyfill {
    private otherPort: MessagePortPolyfill | null = null;
    private messageQueue: any[] = [];
    private onmessage: ((event: MessageEvent) => void) | null = null;

    setOtherPort(port: MessagePortPolyfill) {
      this.otherPort = port;
    }

    postMessage(message: any) {
      if (this.otherPort) {
        this.otherPort.messageQueue.push(message);
        if (this.otherPort.onmessage) {
          const event = new MessageEvent('message', { data: message });
          this.otherPort.onmessage(event);
        }
      }
    }

    set onmessagehandler(handler: ((event: MessageEvent) => void) | null) {
      this.onmessage = handler;
      if (this.messageQueue.length > 0) {
        this.messageQueue.forEach(message => {
          const event = new MessageEvent('message', { data: message });
          handler?.(event);
        });
        this.messageQueue = [];
      }
    }

    get onmessagehandler() {
      return this.onmessage;
    }

    start() {
      // No-op in polyfill
    }

    close() {
      // No-op in polyfill
    }
  }

  // Add to global scope
  (globalThis as any).MessageChannel = MessageChannelPolyfill;
  (globalThis as any).MessagePort = MessagePortPolyfill;
} 