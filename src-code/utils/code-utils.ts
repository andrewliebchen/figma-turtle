import type { Message, PluginMessageEvent } from "../../src/globals";
import type { EventTS } from "../../shared/universals";

export const dispatch = (data: any, origin = "*") => {
  console.log('[Plugin] Dispatching message:', data);
  figma.ui.postMessage(data, {
    origin,
  });
};

export const dispatchTS = <Key extends keyof EventTS>(
  event: Key,
  data: EventTS[Key],
  origin = "*",
) => {
  console.log('[Plugin] Dispatching typed message:', { event, data });
  dispatch({ event, data }, origin);
};

export const listenTS = <Key extends keyof EventTS>(
  eventName: Key,
  callback: (data: EventTS[Key]) => any,
  listenOnce = false,
) => {
  console.log('[Plugin] Setting up listener for:', eventName);

  const func = (event: any) => {
    console.log('[Plugin] Received message:', event);
    if (event.event === eventName) {
      console.log('[Plugin] Matched event, calling callback with:', event.data);
      callback(event.data);
      if (listenOnce) {
        console.log('[Plugin] One-time listener, removing');
        figma.ui && figma.ui.off("message", func);
      }
    }
  };

  figma.ui.on("message", func);
};

export const getStore = async (key: string) => {
  const value = await figma.clientStorage.getAsync(key);
  return value;
};

export const setStore = async (key: string, value: string) => {
  await figma.clientStorage.setAsync(key, value);
};
