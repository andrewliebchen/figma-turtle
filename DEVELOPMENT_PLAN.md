# Figma Turtle Development Plan

## Project Overview
Figma Turtle is an AI-powered Figma plugin that enables designers to generate visual layouts using natural language. The plugin uses OpenAI's API to generate HTML/CSS and converts it into Figma-native components.

## Technical Stack
- **Boilerplate**: [Bolt Figma](https://github.com/hyperbrew/bolt-figma)
  - Vite + TypeScript + React
  - Hot reloading support
  - Type-safe messaging between frontend and backend
  - Optimized build process
- **OpenAI Models**:
  - Reasoning/Planning: `o4-mini-2025-04-16`
  - HTML Generation: `o3-mini-2025-01-31`
- **Development Tools**:
  - Node.js 18+
  - TypeScript
  - React
  - Vite
  - Figma Plugin API

## Development Phases

### Phase 1: Project Setup and Basic Plugin Structure
**Status**: Completed
**Duration**: 1 day

Tasks:
- [x] Initialize project using Bolt Figma boilerplate
  - [x] Configure for React + TypeScript
  - [x] Set up development environment
- [x] Configure hot reloading
- [x] Create basic plugin UI structure
- [x] Set up type-safe messaging system
- [x] Implement plugin manifest and entry points
- [x] Set up testing infrastructure for TDD approach

Dependencies:
- Node.js 18+
- Bolt Figma boilerplate
- TypeScript
- Vite
- React
- Figma Plugin API

**Acceptance Criteria**:
- [x] Plugin can be loaded in Figma's development environment
- [x] Hot reloading works for both UI and plugin code changes
- [x] Basic plugin UI renders without errors
- [x] Type-safe messaging system is functional between frontend and backend
- [x] Development environment is properly configured with all necessary dependencies
- [x] Build process successfully creates a working plugin bundle
- [x] Basic error handling is in place for development environment

### Phase 2: Core UI and OpenAI Agent Integration
**Status**: Not Started
**Estimated Duration**: 2-3 days

Tasks:
- [ ] Build prompt input interface
  - [ ] Create chat-like interface for designer interaction
  - [ ] Add message history display
  - [ ] Implement input field with send button
- [ ] Implement OpenAI API integration
  - [ ] Set up reasoning model (`o4-mini-2025-04-16`) for design planning
    - [ ] Implement chat agent for design discussion
    - [ ] Add context management for conversation history
    - [ ] Handle design refinement requests
  - [ ] Configure HTML generation model (`o3-mini-2025-01-31`)
    - [ ] Implement drawing agent for HTML/CSS generation
    - [ ] Add validation for generated code
    - [ ] Handle generation errors and retries
  - [ ] Implement type-safe API communication
- [ ] Add basic error handling and loading states
- [ ] Implement "Generate Layout" button
- [ ] Add conversation persistence (local storage)

Dependencies:
- OpenAI API
- Phase 1 completion

**Acceptance Criteria**:
- [ ] Users can have a natural conversation with the design agent
- [ ] Design agent can:
  - [ ] Understand and clarify design requirements
  - [ ] Suggest improvements to the design
  - [ ] Handle follow-up questions and refinements
  - [ ] Maintain context throughout the conversation
- [ ] Drawing agent can:
  - [ ] Generate valid HTML/CSS based on the design discussion
  - [ ] Handle common layout patterns
  - [ ] Generate responsive designs
  - [ ] Include basic styling
- [ ] Loading states are shown during API calls
- [ ] Error messages are displayed for failed API calls
- [ ] Conversation history is preserved between sessions
- [ ] API key can be securely configured
- [ ] Generated HTML/CSS is validated before proceeding

### Phase 3: HTML/CSS Preview System
**Status**: Not Started
**Estimated Duration**: 2-3 days

Tasks:
- [ ] Create iframe rendering system
  - [ ] Implement secure sandbox environment
  - [ ] Set up message passing between iframe and plugin
- [ ] Implement HTML/CSS sanitization and validation
- [ ] Add basic styling support
- [ ] Create preview controls (zoom, refresh, etc.)
- [ ] Add error boundaries and fallback UI
- [ ] Implement "Insert to Canvas" button
- [ ] Add preview persistence

Dependencies:
- Phase 2 completion

**Acceptance Criteria**:
- [ ] Preview iframe renders HTML/CSS in a secure sandbox
- [ ] Preview updates in real-time as new HTML/CSS is generated
- [ ] Basic styling is correctly applied and visible
- [ ] Preview controls (zoom, refresh) work as expected
- [ ] Invalid HTML/CSS is caught and handled gracefully
- [ ] Preview maintains aspect ratio and scaling
- [ ] Message passing between iframe and plugin works reliably
- [ ] Preview is responsive to different screen sizes
- [ ] "Insert to Canvas" button is enabled when valid HTML is available

### Phase 4: DOM to Figma Conversion (TDD Approach)
**Status**: Not Started
**Estimated Duration**: 4-5 days

Tasks:
- [ ] Set up testing infrastructure
  - [ ] Configure Jest/Vitest for plugin testing
  - [ ] Create test utilities for Figma node creation
  - [ ] Set up mock Figma API environment
- [ ] Implement DOM parser service with tests
  - [ ] Write tests for basic element parsing
  - [ ] Implement parser with TDD
  - [ ] Add tests for nested structures
  - [ ] Add tests for attribute handling
- [ ] Implement node type conversions with tests
  - [ ] Text nodes → Figma Text
    - [ ] Write tests for text content
    - [ ] Write tests for text styling
    - [ ] Implement conversion
  - [ ] Div nodes → Figma Frame
    - [ ] Write tests for frame creation
    - [ ] Write tests for layout properties
    - [ ] Implement conversion
  - [ ] Image nodes → Figma Image
    - [ ] Write tests for image handling
    - [ ] Write tests for placeholder images
    - [ ] Implement conversion
- [ ] Add Auto-layout support with tests
  - [ ] Write tests for layout direction
  - [ ] Write tests for spacing
  - [ ] Write tests for alignment
  - [ ] Implement Auto-layout
- [ ] Implement styling conversion with tests
  - [ ] Write tests for color conversion
  - [ ] Write tests for typography
  - [ ] Write tests for spacing
  - [ ] Implement style conversion
- [ ] Add positioning logic with tests
  - [ ] Write tests for element positioning
  - [ ] Write tests for nested positioning
  - [ ] Implement positioning system

Dependencies:
- Phase 3 completion

**Acceptance Criteria**:
- [ ] All conversion features have comprehensive test coverage
- [ ] Tests pass for basic HTML elements:
  - [ ] Text elements with various styles
  - [ ] Div elements with different layouts
  - [ ] Image elements with placeholders
- [ ] Tests pass for complex scenarios:
  - [ ] Nested elements
  - [ ] Auto-layout containers
  - [ ] Responsive layouts
  - [ ] Various styling combinations
- [ ] Performance tests pass for:
  - [ ] Large DOM trees
  - [ ] Complex styling
  - [ ] Multiple conversions
- [ ] Error handling tests pass for:
  - [ ] Invalid HTML
  - [ ] Unsupported elements
  - [ ] Missing attributes
  - [ ] Style conflicts
- [ ] Generated Figma nodes match expected structure
- [ ] Auto-layout is correctly applied
- [ ] Styling is accurately converted
- [ ] Positioning is precise
- [ ] Conversion process is performant

### Phase 5: Polish and Optimization
**Status**: Not Started
**Estimated Duration**: 2-3 days

Tasks:
- [ ] Add loading states and progress indicators
- [ ] Implement error handling and user feedback
- [ ] Add basic prompt history (local storage)
- [ ] Optimize performance
- [ ] Add documentation
- [ ] Perform final testing and bug fixes
- [ ] Add user testing feedback
- [ ] Polish UI/UX

Dependencies:
- Phase 4 completion

**Acceptance Criteria**:
- [ ] Loading states are smooth and informative
- [ ] Error messages are clear and actionable
- [ ] Prompt history is saved and retrievable
- [ ] Plugin performs well with large layouts
- [ ] Documentation is complete and clear
- [ ] UI is responsive and user-friendly
- [ ] All error cases are handled gracefully
- [ ] Plugin maintains state correctly between sessions
- [ ] All tests continue to pass
- [ ] User testing feedback has been incorporated
- [ ] Edge cases are handled properly
- [ ] Performance meets or exceeds benchmarks
- [ ] Code meets quality standards

## Out of Scope (v1)
- Bi-directional syncing (Figma → HTML/CSS)
- Full fidelity CSS support (e.g. animations, transitions)
- Custom component system
- Authentication or saved prompt history

## Questions to Resolve
1. OpenAI API key management strategy
2. Specific testing requirements
3. Performance benchmarks
4. Error handling strategy for OpenAI API failures
5. Rate limiting and quota management

## Progress Tracking
- Total Tasks: 30
- Completed Tasks: 7
- Current Phase: Phase 2 (Starting)
- Last Updated: 2024-03-19

## Notes
- Each phase should include thorough testing
- Regular commits and documentation updates
- Weekly progress reviews
- User feedback integration at each phase
- Follow Bolt Figma best practices for plugin development
- Implement proper error handling for OpenAI API calls
- Use type-safe messaging between frontend and backend 