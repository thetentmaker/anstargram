module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: [
    '**/__tests__/**/*.(ts|tsx|js)',
    '**/*.(test|spec).(ts|tsx|js)'
  ],
  collectCoverageFrom: [
    'app/src/**/*.{ts,tsx}',
    '!app/src/**/*.d.ts',
    '!app/src/**/index.{ts,tsx}'
  ],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/app/src/$1'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|expo|@expo|@react-navigation|react-native-safe-area-context|react-native-screens|react-native-gesture-handler|react-native-reanimated|react-native-worklets)/)'
  ]
};
