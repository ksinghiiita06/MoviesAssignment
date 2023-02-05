import configureStore from 'redux-mock-store';
import {render, fireEvent, screen} from '@testing-library/react-native';
import React from 'react';
import Header from '..';
import {Provider} from 'react-redux';
import {MenuProvider} from 'react-native-popup-menu';

describe('Common Header', () => {
  const initialState = {
    appReducer: {languageCode: 'ar'},
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(
      <Provider store={store}>
        <MenuProvider>
          <Header navigation={jest.fn()} />
        </MenuProvider>
      </Provider>,
    );
  });
  it('Header renders correctly ', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
    fireEvent.press(screen.getByTestId('backBtn'));
  });
});
