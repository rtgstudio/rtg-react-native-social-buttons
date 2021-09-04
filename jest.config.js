module.exports = {
  preset: "react-native",
  clearMocks: true,
  coverageDirectory: "./coverage",
  moduleNameMapper: { },
  setupFiles: [
  ],
  setupFilesAfterEnv: [],
  testEnvironment: "node",
  transformIgnorePatterns: ["node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"],
  verbose: true,
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      line: 100,
    },
  },
};

