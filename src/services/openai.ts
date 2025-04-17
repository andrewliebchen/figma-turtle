import { dispatchTS } from '../utils';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export const sendChatMessage = async (messages: ChatMessage[]) => {
  // We'll send the request to the plugin code which will handle the actual API call
  // This is because we need to keep the API key secure in the plugin code
  dispatchTS('chat-request', { messages });
}; 