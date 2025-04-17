import type { EventTS } from "../shared/universals";

export type Message = {
  event: keyof EventTS;
  data: EventTS[keyof EventTS];
};

export type PluginMessageEvent = {
  data: {
    pluginMessage: Message;
  };
}; 