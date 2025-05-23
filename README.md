# Figma Turtle

An AI-powered Figma plugin that enables designers to generate visual layouts using natural language.

## Features

- Natural language layout generation
- Real-time preview of generated layouts
- Figma-native component conversion
- Design refinement through conversation
- OpenAI integration for intelligent design assistance
  - Reasoning model (`o4-mini-2025-04-16`) for design planning
  - HTML generation model (`o3-mini-2025-01-31`) for layout creation

## Prerequisites

- Node.js 18 or later
- NPM (comes with Node.js)
- Figma Desktop App
- OpenAI API key

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your OpenAI API key to the `.env` file:
     ```
     VITE_OPENAI_API_KEY=your_openai_api_key_here
     ```
   - Note: The API key must be prefixed with `VITE_` to be accessible in the frontend

3. Build the plugin (required before first run):
```bash
npm run build
```

4. Start development server with hot reloading:
```bash
npm run dev
```

## Adding Plugin to Figma

1. Open Figma Desktop App
2. Go to Plugins > Development > Import Plugin from Manifest
3. Select the `manifest.json` file in the `dist` folder
4. Enable "Hot reload plugin" under Plugins > Development

## Project Structure

- `src/` - Frontend UI code (React)
  - `index-react.tsx` - Main UI entry point
  - `utils.ts` - Frontend messaging utilities
  - `globals.ts` - Shared type definitions
- `src-code/` - Figma plugin backend code
  - `code.ts` - Main plugin code
  - `env.ts` - Environment variable handling
  - `utils/` - Backend utilities
- `shared/` - Shared code between frontend and backend
  - `universals.ts` - Shared type definitions and constants
- `dist/` - Built plugin files

## OpenAI Integration

The plugin uses two OpenAI models for different aspects of the design process:

1. Reasoning Model (`o4-mini-2025-04-16`):
   - Handles natural language understanding
   - Manages design conversation
   - Provides design suggestions
   - Uses `max_completion_tokens` parameter for response length control

2. HTML Generation Model (`o3-mini-2025-01-31`):
   - Converts design descriptions to HTML/CSS
   - Generates responsive layouts
   - Handles styling and component structure

### API Configuration

The OpenAI API is configured in `src-code/code.ts`:
```typescript
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const MODEL = 'o4-mini-2025-04-16';
```

Environment variables are handled in `src-code/env.ts`:
```typescript
export const OPENAI_API_KEY = process.env.VITE_OPENAI_API_KEY || '';
```

## Type-Safe Messaging System

The plugin uses a type-safe messaging system between the frontend and backend:

1. Message types are defined in `shared/universals.ts`:
```typescript
export type EventTS = {
  "test-connection": TestConnectionData;
  "connection-response": ConnectionResponseData;
  "generate-layout": GenerateLayoutData;
  "cancel": CancelData;
};
```

2. Send messages from frontend to backend:
```typescript
dispatchTS("test-connection", {});
```

3. Listen for messages in backend:
```typescript
listenTS("test-connection", () => {
  dispatchTS("connection-response", { message: "Hello!" });
});
```

4. Listen for responses in frontend:
```typescript
listenTS("connection-response", (data) => {
  console.log(data.message);
});
```

## Development Status

Current development progress can be found in [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md). Key completed features:

- ✅ Basic plugin structure and UI
- ✅ OpenAI API integration with reasoning model
- ✅ Chat interface with message history
- ✅ Error handling and loading states
- ✅ Type-safe messaging system

In progress:
- 🔄 HTML generation model integration
- 🔄 Layout preview system
- 🔄 Conversation persistence

## Technical Stack

- **Frontend**: React + TypeScript
- **Build System**: Vite
- **AI Integration**: OpenAI API
- **Boilerplate**: [Bolt Figma](https://github.com/hyperbrew/bolt-figma)

## Development Plan

See [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md) for detailed development phases and progress tracking.

## License

MIT

<img src="src/assets/bolt-figma-darkmode.svg" alt="Bolt Figma" title="Bolt Figma" width="400" />

A lightning-fast boilerplate for building Figma Plugins in Svelte, React, or Vue built on Vite + TypeScript + Sass

![npm](https://img.shields.io/npm/v/bolt-figma)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/hyperbrew/bolt-figma/blob/master/LICENSE)
[![Chat](https://img.shields.io/badge/chat-discord-7289da.svg)](https://discord.gg/PC3EvvuRbc)

## Features

- Lightning Fast Hot Reloading on changes
- Setup with TypeScript Definitions for Figma in Frontend, Backend, and Manifest
- Optimized Build Size
- Easy Smart Bundling in Frontend UI and Backend Code contexts
- Spin a up a new project in Svete, React, or Vue
- Select apps including Figma (Design Mode), Figma (Dev Mode), or FigJam
- Easily configure in figma.config.ts
- Easy Package to Zip archive with sidecar assets
- GitHub Actions ready-to-go for Zip Releases

## Backers

Huge thanks to our backers who have made this project possible!

### Founding Backers

_Founding backers have made substantial contribution to the project at the start which has made this project possible._

<a href="https://figma.com/" target="_blank">
<img src="https://cdn.sanity.io/images/g3so7nt7/production/6cb43009e94a67554c68fb50b9363a0aa68f3d23-418x200.png?w=1000&h=1000&fit=max" alt="Figma" title="Figma" width="300" /></a>

...

### Feature Backers

_Feature backers have sponsored individual features that have made this project better for the whole community._

<a href="https://battleaxe.co/" target="_blank">
<img src="https://battleaxe.dev/servile/logotype_lightgrey.png" alt="Battle Axe" title="Battle Axe" width="150" /></a>

...

If you're interested in supporting this open-source project, please [contact the Hyper Brew team](https://hyperbrew.co/contact/).

## Support

### Free Support

If you have questions with getting started using Bolt Figma, feel free to ask and discuss in our free Discord community [Discord Community](https://discord.gg/PC3EvvuRbc).

### Paid Support

If your team is interested in paid consulting or development with Bolt Figma, please [contact the Hyper Brew team](https://hyperbrew.co/contact/). More info on our [Custom Plugin Development & Consulting Services](https://hyperbrew.co/landings/boost-development)

## Can I use Bolt Figma in my free or commercial project?

Yes! Bolt Figma is **100% free and open source**, being released under the MIT license with no attribution required. This means you are free to use it in your free or commercial projects.

We would greatly appreciate it if you could provide a link back to this tool's info page in your product's site or about page:

Bolt Figma Info Page Link: https://hyperbrew.co/resources/bolt-figma

**Built with Bolt Figma** button graphics:

**PNG Files**

<div style="display:flex;gap:1rem;">
<a href="./src/assets/built-with-bolt-figma/Built_With_BOLT_Figma_Logo_White_V01.png" target="_blank">
<img src="./src/assets/built-with-bolt-figma/Built_With_BOLT_Figma_Logo_White_V01.png" width="200" /></a>

<a href="./src/assets/built-with-bolt-figma/Built_With_BOLT_Figma_Logo_Black_V01.png" target="_blank">
<img src="./src/assets/built-with-bolt-figma/Built_With_BOLT_Figma_Logo_Black_V01.png" width="200" /></a>

</div>

**SVG Files**

<div style="display:flex;gap:1rem;">
<a href="src/assets/built-with-bolt-figma/Built_With_BOLT_Figma_Logo_White_V01.svg" target="_blank">
<img src="src/assets/built-with-bolt-figma/Built_With_BOLT_Figma_Logo_White_V01.svg" width="200" /></a>

<a href="src/assets/built-with-bolt-figma/Built_With_BOLT_Figma_Logo_Black_V01.svg" target="_blank">
<img src="src/assets/built-with-bolt-figma/Built_With_BOLT_Figma_Logo_Black_V01.svg" width="200" /></a>

</div>

### Info on Build Process

Frontend code is built to the `.tmp` directory temporarily and then copied to the `dist` folder for final. This is done to avoid Figma throwing plugin errors with editing files directly in the `dist` folder.

The frontend code (JS, CSS, HTML) is bundled into a single `index.html` file and all assets are inlined.

The backend code is bundled into a single `code.js` file.

Finally the `manifest.json` is generated from the `figma.config.ts` file with type-safety. This is configured when running `yarn create bolt-figma`, but you can make additional modifications to the `figma.config.ts` file after initialization.

### Read if Dev or Production Mode

Use the built-in Vite env var MODE to determine this:

```js
const mode = import.meta.env.MODE; // 'dev' or 'production'
```

### Troubleshooting Assets

Figma requires the entire frontend code to be wrapped into a single HTML file. For this reason, bundling external images, svgs, and other assets is not possible.

The solution to this is to inline all assets. Vite is already setup to inline most asset types it understands such as JPG, PNG, SVG, and more, however if the file type you're trying to inline doesn't work, you may need to add it to the assetsInclude array in the vite config:

More Info: https://vitejs.dev/config/shared-options.html#assetsinclude

Additionally, you may be able to import the file as a raw string, and then use that data inline in your component using the `?raw` suffix.

For example:

```ts
import icon from "./assets/icon.svg?raw";
```

and then use that data inline in your component:

```js
// Svelte
{@html icon}

// React
<div dangerouslySetInnerHTML={{ __html: icon }}></div>

// Vue
<div v-html="icon"></div>
```

---

## Sending Messages between the Frontend and Backend

Bolt Figma makes messaging between the frontend UI and backend code layers simple and type-safe. This can be done with `listenTS()` and `dispatchTS()`.

Using this method accounts for:

- Setting up a scoped event listener in the listening context
- Removing the listener when the event is called (if `once` is set to true)
- Ensuring End-to-End Type-Safety for the event

### 1. Declare the Event Type in EventTS in shared/universals.ts

```js
export type EventTS = {
  myCustomEvent: {
    oneValue: string,
    anotherValue: number,
  },
  // [... other events]
};
```

### 2a. Send a Message from the Frontend to the Backend

**Backend Listener:** `src-code/code.ts`

```js
import { listenTS } from "./utils/code-utils";

listenTS("myCustomEvent", (data) => {
  console.log("oneValue is", data.oneValue);
  console.log("anotherValue is", data.anotherValue);
});
```

**Frontend Dispatcher:** `index.svelte` or `index.tsx` or `index.vue`

```js
import { dispatchTS } from "./utils/utils";

dispatchTS("myCustomEvent", { oneValue: "name", anotherValue: 20 });
```

### 2b. Send a Message from the Backend to the Frontend

**Frontend Listener:** `index.svelte` or `index.tsx` or `index.vue`

```js
import { listenTS } from "./utils/utils";

listenTS(
  "myCustomEvent",
  (data) => {
    console.log("oneValue is", data.oneValue);
    console.log("anotherValue is", data.anotherValue);
  },
  true,
);
```

_Note: `true` is passed as the 3rd argument which means the listener will only listen once and then be removed. Set this to true to avoid duplicate events if you only intend to recieve one reponse per function._

**Backend Dispatcher:** `src-code/code.ts`

```js
import { dispatchTS } from "./utils/code-utils";

dispatchTS("myCustomEvent", { oneValue: "name", anotherValue: 20 });
```

---
