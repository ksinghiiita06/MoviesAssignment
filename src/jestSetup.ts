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
