import type { EventTS } from "../shared/universals";
import type { Message } from "./globals";

export const dispatch = (pluginMessage: any, origin = "*") => {
  console.log('[UI] Dispatching message:', pluginMessage);
  parent.postMessage({ pluginMessage }, { targetOrigin: origin });
};

export const dispatchTS = <Key extends keyof EventTS>(
  event: Key,
  data: EventTS[Key],
  origin = "*"
) => {
  console.log('[UI] Dispatching typed message:', { event, data });
  dispatch({ event, data }, origin);
};

export const listenTS = <Key extends keyof EventTS>(
  eventName: Key,
  callback: (data: EventTS[Key]) => void,
  listenOnce = false
) => {
  console.log('[UI] Setting up listener for:', eventName);
  
  const func = (event: MessageEvent) => {
    console.log('[UI] Received message event:', event.data);
    const message = event.data.pluginMessage as Message;
    if (message && message.event === eventName) {
      console.log('[UI] Matched event, calling callback with:', message.data);
      callback(message.data as EventTS[Key]);
      if (listenOnce) window.removeEventListener("message", func);
    }
  };

  window.addEventListener("message", func);
  return () => window.removeEventListener("message", func);
}; 