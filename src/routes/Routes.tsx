import React from 'react';

//  Views
import {Loading, Home} from '@views/index';

//  External Utils
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Loading: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
