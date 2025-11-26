# Testing and Debugging MERN Application

This project implements comprehensive testing and debugging strategies for a MERN stack application, including unit testing, integration testing, and end-to-end testing, with tools such as Jest, React Testing Library, Supertest, and Cypress.
The goal is to ensure reliability, correctness, and maintainability across both the client and server.

## Assignment Overview
This MERN testing assignment includes:

✔ Setting up Jest for server and client
✔ Writing unit tests for components, middleware, and utilities
✔ Creating API integration tests using Supertest
✔ Running the application with an in-memory MongoDB for test isolation
✔ Setting up Cypress for end-to-end browser tests
✔ Implementing debugging strategies (logs, error handlers, boundaries)

All test categories successfully pass with high coverage.

## Testing Strategy
The project implements three levels of testing:


## 1️⃣ Unit Tests
Unit tests focus on isolated pieces of logic:

## Client (React) Unit Tests
Component tests using React Testing Library
Testing component props, events, rendering, and disabled state
Utility function tests (e.g., utils/math.js)

Example:
Button.test.jsx
math.test.js

## Server Unit Tests
Middleware tests (authMiddleware)
Utility functions (auth utilities)
Controller logic (isolated)

## Goals:
✔ Fast feedback
✔ High code coverage
✔ Test small logic blocks independently

## 2️⃣ Integration Tests
Integration tests verify multiple modules working together.

## Server Integration Tests
Using Supertest + MongoDB Memory Server:

Tested features:
POST /api/posts
GET filtered posts
Pagination
Authentication blocking unauthorized requests
CRUD operations

These tests ensure:
✔ Routing → Middleware → Controller → MongoDB
✔ Validations and error handling
✔ Data consistency

## 3️⃣ End-to-End (E2E) Tests
Using Cypress, we test real-world browser workflows:

🔹 App loads successfully
🔹 Buttons and UI components work correctly
🔹 Navigation
🔹 (For full MERN apps) Login → Create Post → Edit → Delete
These tests simulate real user behavior, ensuring the entire system works.

## 🛠 Tools & Technologies

| Tool                      | Purpose                               |
| ------------------------- | ------------------------------------- |
| **Jest**                  | Test runner for client + server       |
| **React Testing Library** | Tests UI behavior, not implementation |
| **Supertest**             | Tests Express routes                  |
| **MongoDB Memory Server** | In-memory MongoDB for isolated tests  |
| **Cypress**               | End-to-end browser testing            |
| **Babel**                 | Transpiling JSX & ES6 tests           |
| **Identity-Obj-Proxy**    | Mocking CSS modules for Jest          |


## Project Structure

mern-testing/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── utils/
│   │   ├── tests/
│   │   │   ├── unit/
│   │   │   └── integration/
│   └── cypress/
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   └── tests/
│       ├── unit/
│       └── integration/
├── jest.config.js
├── package.json
└── README.md

## How to Run Tests
📌 Install dependencies
npm run install-all

🧪 Run ALL tests
npm test

 🧩 Run Unit Tests Only
npm run test:unit

Runs both:
✔ client unit tests
✔ server unit tests

 🔌 Run Integration Tests
npm run test:integration
Tests API routes + MongoDB Memory Server.

🌍 Run End-to-End Tests
npm run test:e2e
Runs Cypress E2E in the client project.

## Debugging Techniques

✔ 1. Server-side Debugging
console.error() for catching failed DB operations
Logging middleware to track requests
Testing environment clearly separated from development

✔ 2. Client-side Debugging
React DevTools
Chrome Developer Tools
Console logs for component props and state

✔ 3. Error Boundaries (React)
Catch runtime UI errors:
    class ErrorBoundary extends React.Component {
      constructor() { super(); this.state = { hasError: false }; }
      componentDidCatch() { this.setState({ hasError: true }); }
      render() {
        return this.state.hasError ? <h2>Error Occurred</h2> : this.props.children;
      }
    }

✔ 4. Global Express Error Handler
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ message: 'Server Error' });
    });

✔ 5. Cypress Debugging
    .debug() and .pause() for step-by-step checks

