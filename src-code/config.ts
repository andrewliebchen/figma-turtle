// OpenAI API configuration
export const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
export const MODEL = 'o4-mini-2025-04-16'; // Using the model specified in DEVELOPMENT_PLAN.md

// This will be replaced during build time with the actual API key from .env
export const OPENAI_API_KEY = process.env.VITE_OPENAI_API_KEY || ''; 