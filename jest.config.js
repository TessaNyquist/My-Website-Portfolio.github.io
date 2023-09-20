module.exports = {
    // An array of file extensions your tests use
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  
    // Directories that Jest should search for tests in
    roots: ['<rootDir>/src'],
  
    // Test file match patterns
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  
    // Transform file paths before applying the `moduleNameMapper`
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  
    // Ignore specific files or directories during testing
    testPathIgnorePatterns: ['/node_modules/'],
  
    // Set up a module name mapper for custom module resolution
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
  
    // A list of reporter names for code coverage
    coverageReporters: ['json', 'lcov', 'text', 'html'],
  
    // Define coverage thresholds (optional)
    coverageThreshold: {
      global: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
  };
  