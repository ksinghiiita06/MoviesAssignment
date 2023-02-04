import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import store, {persistor} from './src/redux';
import {MenuProvider} from 'react-native-popup-menu';
import {PersistGate} from 'redux-persist/integration/react';
import {configureLocale} from './src/common/localize';
import {BACKGROUND_COLOR, PRIMARY_COLOR} from './src/common/colors';
import RootNavigation from './src/navigation';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const beforeLift = async () => {
    configureLocale();
  };
  return (
    <Provider store={store}>
      <PaperProvider>
        <MenuProvider>
          <PersistGate persistor={persistor} onBeforeLift={beforeLift}>
            <SafeAreaView style={[backgroundStyle, styles.safeareaStyle]}>
              <StatusBar
                backgroundColor={PRIMARY_COLOR}
                barStyle={'light-content'}
              />
              <RootNavigation />
            </SafeAreaView>
            <SafeAreaView style={styles.safearea2Style} />
          </PersistGate>
        </MenuProvider>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeareaStyle: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  safearea2Style: {
    backgroundColor: BACKGROUND_COLOR,
  },
});

export default App;
