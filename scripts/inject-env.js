import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
const envPath = path.resolve(process.cwd(), '.env');
const env = dotenv.config({ path: envPath }).parsed || {};

// Create a temporary file with the environment variables
const envContent = `
// This file is auto-generated. Do not edit.
export const OPENAI_API_KEY = "${env.VITE_OPENAI_API_KEY || ''}";
`;

// Write the file
fs.writeFileSync(path.resolve(process.cwd(), 'src-code/env.ts'), envContent);

console.log('Environment variables injected successfully.'); 