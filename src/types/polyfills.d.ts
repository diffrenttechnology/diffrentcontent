declare class MessageChannelPolyfill {
  port1: MessagePortPolyfill;
  port2: MessagePortPolyfill;
  constructor();
}

declare class MessagePortPolyfill {
  onmessage: ((event: MessageEvent) => void) | null;
  constructor();
  postMessage(message: any): void;
  start(): void;
  close(): void;
}

declare global {
  interface Window {
    MessageChannel: typeof MessageChannelPolyfill;
    MessagePort: typeof MessagePortPolyfill;
  }
} 