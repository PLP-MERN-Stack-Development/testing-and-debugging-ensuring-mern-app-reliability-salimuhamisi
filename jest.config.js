// jest.config.js - Unified Jest configuration for both client & server

module.exports = {
  projects: [
    // -------------------------
    // SERVER CONFIG
    // -------------------------
    {
      displayName: "server",
      testEnvironment: "node",   // MUST be node, not jsdom
      testMatch: ["<rootDir>/server/tests/**/*.test.js"],
      moduleFileExtensions: ["js", "json", "node"],
      setupFilesAfterEnv: ["<rootDir>/server/tests/setup.js"],

      // Prevent Jest from trying to transform MongoDB and other ESM deps
      transform: {}, // disable transforms (Node 18+ handles ESM)
      transformIgnorePatterns: ["/node_modules/"],

      coverageDirectory: "<rootDir>/coverage/server",
      collectCoverageFrom: [
        "server/src/**/*.js",
        "!server/src/config/**",
        "!**/node_modules/**",
      ],
    },

    // -------------------------
    // CLIENT CONFIG
    // -------------------------
    {
      displayName: "client",
      testEnvironment: "jsdom",
      testMatch: ["<rootDir>/client/src/**/*.test.{js,jsx}"],
      moduleFileExtensions: ["js", "jsx", "json"],

      setupFilesAfterEnv: ["<rootDir>/client/src/tests/setup.js"],

      // Use Babel for JSX + ESNext
      transform: {
        "^.+\\.(js|jsx)$": [
          "babel-jest",
          { presets: ["@babel/preset-env", "@babel/preset-react"] }
        ],
      },

      moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|webp|svg)$":
          "<rootDir>/client/src/tests/__mocks__/fileMock.js",
      },

      coverageDirectory: "<rootDir>/coverage/client",
      collectCoverageFrom: [
        "client/src/**/*.{js,jsx}",
        "!client/src/index.js",
        "!**/node_modules/**",
      ],
    },
  ],

  // -------------------------
  // GLOBAL CONFIG
  // -------------------------
  verbose: true,
  collectCoverage: true,
  coverageReporters: ["text", "lcov", "clover", "html"],
  testTimeout: 10000,
  
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 60,
      functions: 70,
      lines: 70,
    },
  },
};