/// <reference types="@figma/plugin-typings" />

import { listenTS, dispatchTS } from "./utils/code-utils";

console.log('[Plugin] Starting plugin initialization');

figma.showUI(__html__, {
  themeColors: true,
  width: 550,
  height: 600,
});

console.log('[Plugin] UI window created');

// Set up message listeners
listenTS("test-connection", () => {
  console.log('[Plugin] Received test connection request');
  dispatchTS("connection-response", { message: "Hello from Figma!" });
});

listenTS("generate-layout", (data) => {
  console.log('[Plugin] Received generate layout request:', data);
  // TODO: Implement layout generation
  figma.notify('Layout generation coming soon!');
});

listenTS("cancel", () => {
  console.log('[Plugin] Received cancel request');
  figma.closePlugin();
});

console.log('[Plugin] All listeners initialized');
