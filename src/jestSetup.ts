export {};
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native'); // use original implementation, which comes with mocks out of the box
  RN.NativeModules.SettingsManager = {
    settings: {
      AppleLocale: jest.fn(),
      AppleLanguages: jest.fn(),
    },
  };
  return RN;
});

jest.mock('react-native-safe-area-context', () => {
  const inset = {top: 0, right: 0, bottom: 0, left: 0};
  return {
    ...jest.requireActual('react-native-safe-area-context'),
    SafeAreaProvider: jest.fn(({children}) => children),
    SafeAreaConsumer: jest.fn(({children}) => children(inset)),
    useSafeAreaInsets: jest.fn(() => inset),
    useSafeAreaFrame: jest.fn(() => ({x: 0, y: 0, width: 390, height: 844})),
  };
});
