/// <reference types="@figma/plugin-typings" />

import { listenTS, dispatchTS } from "./utils/code-utils";
import type { ChatMessage } from "../shared/universals";
import { OPENAI_API_KEY } from "./env";

// OpenAI API configuration
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const MODEL = 'o4-mini-2025-04-16'; // CRITICAL: DO NOT CHANGE THIS MODEL

// OpenAI API types
interface OpenAIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: ChatMessage;
    finish_reason: string;
  }[];
}

console.log('[Plugin] Starting plugin initialization');

// Set initial window size
figma.showUI(__html__, { width: 800, height: 600 });

// Listen for messages from the UI
listenTS("test-connection", () => {
  console.log('[Plugin] Test connection received');
  dispatchTS("connection-response", { message: "Hello from the plugin!" });
});

// Handle chat requests
listenTS("chat-request", async (data) => {
  console.log('[Plugin] Received chat request:', data);
  
  try {
    if (!OPENAI_API_KEY) {
      throw new Error('OpenAI API key not found in environment variables. Please check your .env file.');
    }

    const requestBody = {
      model: MODEL,
      messages: data.messages,
      max_completion_tokens: 2000  // Using the correct parameter for this model
    };

    console.log('[Plugin] Sending request to OpenAI:', JSON.stringify(requestBody, null, 2));

    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('[Plugin] OpenAI API error response:', errorData);
      throw new Error(`OpenAI API error: ${errorData.error?.message || response.statusText}`);
    }

    const result = await response.json() as OpenAIResponse;
    console.log('[Plugin] OpenAI API response:', result);
    
    if (!result.choices?.[0]?.message) {
      throw new Error('Invalid response format from OpenAI API');
    }
    
    const message: ChatMessage = result.choices[0].message;

    dispatchTS("chat-response", { message });
  } catch (error) {
    console.error('[Plugin] Chat error:', error);
    dispatchTS("chat-response", { 
      message: {
        role: 'assistant',
        content: `Error: ${error.message}`
      },
      error: error.message
    });
  }
});

// Handle layout generation
listenTS("generate-layout", (data) => {
  console.log('[Plugin] Received generate layout request:', data);
  // TODO: Implement layout generation
  figma.notify('Layout generation coming soon!');
});

// Handle cancel requests
listenTS("cancel", () => {
  console.log('[Plugin] Received cancel request');
  figma.closePlugin();
});

console.log('[Plugin] All listeners initialized');
