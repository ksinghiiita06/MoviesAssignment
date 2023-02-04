import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from 'redux/reducers';
import Login from '../screens/login';
import Movies from '../screens/movies';
import {LOGIN_ROUTE_NAME, MOVIES_ROUTE_NAME} from './routes';

const Stack = createNativeStackNavigator();

//when user in logged-out state
const OnboardingNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={LOGIN_ROUTE_NAME}>
      <Stack.Screen
        name={LOGIN_ROUTE_NAME}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

//when user is logged-in state
export const InAppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={MOVIES_ROUTE_NAME}>
      <Stack.Screen
        name={MOVIES_ROUTE_NAME}
        component={Movies}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  const appReducer = useSelector((state: RootState) => state.appReducer);
  const {isLoggedIn} = appReducer;
  const getActiveNavigation = useCallback(() => {
    return isLoggedIn ? <InAppNavigation /> : <OnboardingNavigation />;
  }, [isLoggedIn]);

  return <NavigationContainer>{getActiveNavigation()}</NavigationContainer>;
};

export default RootNavigation;
