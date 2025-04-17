// Define the shape of each event's data
interface TestConnectionData {}

interface ConnectionResponseData {
  message: string;
}

interface GenerateLayoutData {
  prompt: string;
}

interface CancelData {}

// Export the event type mapping
export type EventTS = {
  "test-connection": TestConnectionData;
  "connection-response": ConnectionResponseData;
  "generate-layout": GenerateLayoutData;
  "cancel": CancelData;
}; 