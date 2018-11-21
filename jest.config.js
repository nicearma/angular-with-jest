module.exports = {
  "preset": "jest-preset-angular",
  "testURL": "http://localhost/",
  "setupTestFrameworkScriptFile": "<rootDir>/src/setupJest.ts",
  "modulePathIgnorePatterns": [
    "<rootDir>/.idea/",
    "<rootDir>/node_modules/"
  ],
  "watchPathIgnorePatterns": [
    "<rootDir>/.idea/",
    "<rootDir>/node_modules/"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/.idea/",
    "<rootDir>/node_modules/"
  ]
};
