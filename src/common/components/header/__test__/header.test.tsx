import configureStore from 'redux-mock-store';
import {render} from '@testing-library/react-native';
import React from 'react';
import Header from '..';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

describe('Common Header', () => {
  const initialState = {
    appReducer: {languageCode: 'ar'},
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(
      <SafeAreaProvider>
        <Provider store={store}>
          <Header />
        </Provider>
      </SafeAreaProvider>,
    );
  });
  it('Header renders correctly ', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
