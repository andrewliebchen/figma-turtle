# Product Requirements Document

**Title:** Turtle
**Description:** AI-Powered Figma Plugin for Rapid Layout Prototyping

## Overview
This Figma plugin enables designers to generate visual layouts directly on the Figma canvas using natural language. By integrating OpenAI’s API and leveraging a live HTML/CSS rendering pipeline, users can preview AI-generated UIs and convert them into editable Figma nodes.

## Goals
- Allow designers to rapidly prototype UI layouts using plain language.
- Provide a visual preview of AI-generated HTML/CSS. 
- Automatically translate HTML structure into Figma-native components.
- Maintain plugin developer velocity with a hot-reload development environment.

## Core Features

### 1. Prompt Input
- Text field for users to describe the UI they want (e.g. "A mobile onboarding screen with a progress bar and illustration").
- Prompts are sent to OpenAI for HTML/CSS generation.

### 2. AI-Powered Layout Generator
- OpenAI returns valid HTML/CSS in response to the prompt.

### 3. Preview Panel (Iframe)
- An embedded iframe renders the generated HTML/CSS.
- Users can preview and optionally refine the layout before recreating the design on the Figma canvas.

### 4. DOM-to-Figma Conversion
- On user action (e.g. "Insert to Canvas"), the DOM is parsed.
- Using the computed DOM from the iFrame, HTML nodes are translated into corresponding Figma nodes (e.g. `<div>` to `Frame`, `<img>` to `Image`, `<p>` to `Text`).
- Figma canvas elements should use best practices including Auto-layout for most elements.

### 5. Hot Reloading for Development
- Local development setup supports hot reload of both the UI and plugin logic for faster iteration.
- Cursor agent to create documentation to guide and track development process.

## Out of Scope (for v1)
- Bi-directional syncing (Figma → HTML/CSS)
- Full fidelity CSS support (e.g. animations, transitions)
- Custom component system
- Authentication or saved prompt history

## Tech Stack
- Figma Plugin API
- React (for plugin UI)
- OpenAI API (via fetch or Node backend, depending on plugin type)
- Vite or similar for hot module reloading
- Custom DOM parser for HTML → Figma node conversion
  - Use TDD red/green/refactor flow to develop

## User Flow (v1)
1. User opens the plugin.
2. Enters a prompt: _"A landing page hero with a big headline, a CTA button, and a background image."_
3. Plugin sends prompt to OpenAI → receives HTML/CSS
4. Preview iframe renders layout
5. User clicks “Insert to Canvas”
6. DOM is parsed → matching Figma nodes are created and placed on canvas
