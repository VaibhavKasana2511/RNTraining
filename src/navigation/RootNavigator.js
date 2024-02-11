/* eslint-disable react/react-in-jsx-scope */
// Navigation/RootNavigator.js
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const userState = useSelector(state => state.auth.user);
  console.log('RootNavigator', userState);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {userState ? (
          <>
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
          </>
        ) : (
          <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
