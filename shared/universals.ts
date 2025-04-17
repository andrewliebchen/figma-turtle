// Define the shape of each event's data
interface TestConnectionData {}

interface ConnectionResponseData {
  message: string;
}

interface GenerateLayoutData {
  prompt: string;
}

interface CancelData {}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatRequestData {
  messages: ChatMessage[];
}

export interface ChatResponseData {
  message: ChatMessage;
  error?: string;
}

// Export the event type mapping
export type EventTS = {
  "test-connection": TestConnectionData;
  "connection-response": ConnectionResponseData;
  "generate-layout": GenerateLayoutData;
  "cancel": CancelData;
  "chat-request": ChatRequestData;
  "chat-response": ChatResponseData;
}; 