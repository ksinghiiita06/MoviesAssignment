import React from 'react';
import Login from '../index';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MenuProvider} from 'react-native-popup-menu';
import {render, fireEvent, screen} from '@testing-library/react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

describe('Login renders correctly', () => {
  const initialState = {appReducer: {languageCode: 'ar'}};
  const mockStore = configureStore();
  const store = mockStore(initialState);
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(
      <Provider store={store}>
        <MenuProvider>
          <Login />
        </MenuProvider>
      </Provider>,
    );
  });
  it('Login renders correctly ', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('Login renders correctly ', () => {
    fireEvent.changeText(screen.getByTestId('emailInput'), 'kul@gmail.com');
    fireEvent.changeText(screen.getByTestId('pwdInput'), 'Passw0rd');
    expect(screen.getByTestId('emailInput').props.value).toBe('kul@gmail.com');
    expect(screen.getByTestId('pwdInput').props.value).toBe('Passw0rd');
    fireEvent.press(screen.getByTestId('submitBtn'));
  });
});
