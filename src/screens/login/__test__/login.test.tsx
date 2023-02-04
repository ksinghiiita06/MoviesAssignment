import React from 'react';
import Login from '../index';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MenuProvider} from 'react-native-popup-menu';
import {render} from '@testing-library/react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

describe('Login renders correctly', () => {
  const initialState = {appReducer: {languageCode: 'ar'}};
  const mockStore = configureStore();
  const store = mockStore(initialState);
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(
      <Provider store={store}>
        <MenuProvider>
          <SafeAreaProvider>
            <Login />
          </SafeAreaProvider>
        </MenuProvider>
      </Provider>,
    );
  });
  it('Login renders correctly ', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('Login renders correctly ', () => {
    // fireEvent.changeText(screen.getByTestId('emailInput'), 'kul@gmail.com');
    // fireEvent(screen.getByTestId('pwdInput'), 'onChangeText', 'Passw0rd');
  });
});
