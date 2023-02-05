import React from 'react';
import Movies from '../';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MenuProvider} from 'react-native-popup-menu';
import {render} from '@testing-library/react-native';

describe('Movies component with loading', () => {
  const mockStore = configureStore();
  const initialState = {
    appReducer: {},
    moviesReducer: {fetching: true, error: null},
  };
  const store = mockStore(initialState);
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(
      <Provider store={store}>
        <MenuProvider>
          <Movies />
        </MenuProvider>
      </Provider>,
    );
  });
  it('Movies renders correctly ', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
describe('Movies component with error', () => {
  const mockStore = configureStore();
  const initialState = {
    appReducer: {},
    moviesReducer: {
      fetching: false,
      error: {},
      moviesResponse: {},
    },
  };
  const store = mockStore(initialState);
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(
      <Provider store={store}>
        <MenuProvider>
          <Movies />
        </MenuProvider>
      </Provider>,
    );
  });
  it('Movies renders correctly ', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
// describe('Movies component renders correctly', () => {
//   const mockStore = configureStore();
//   const initialState = {
//     appReducer: {},
//     moviesReducer: {
//       fetching: false,
//       error: null,
//       moviesResponse: {results: []},
//     },
//   };
//   const store = mockStore(initialState);
//   let wrapper: any;
//   beforeEach(() => {
//     wrapper = render(
//       <Provider store={store}>
//         <MenuProvider>
//           <Movies />
//         </MenuProvider>
//       </Provider>,
//     );
//   });
//   it('Movies renders correctly ', () => {
//     expect(wrapper.toJSON()).toMatchSnapshot();
//   });
// });
