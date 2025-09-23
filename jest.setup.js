import '@testing-library/jest-native/extend-expect';

// Mock expo-image-picker
jest.mock('expo-image-picker', () => ({
  launchImageLibraryAsync: jest.fn(),
  MediaTypeOptions: {
    Images: 'images',
  },
}));

// Mock react-native-safe-area-context
jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }),
}));

// Mock dayjs
jest.mock('dayjs', () => {
  const originalDayjs = jest.requireActual('dayjs');
  return jest.fn(() => ({
    valueOf: () => 1640995200000, // 고정된 타임스탬프
    ...originalDayjs(),
  }));
});

// Mock navigation
const mockNavigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
  push: jest.fn(),
  pop: jest.fn(),
};

jest.mock('../app/src/navigations/RootStackNavigation', () => ({
  useRootStackNavigation: () => mockNavigation,
}));

// Mock Redux store
jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: jest.fn(),
}));
