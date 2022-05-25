import React from 'react';

//  Views
import {Loading, Home} from '@views/index';

//  External Utils
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack';
import {COLORS} from '@themes/default';
import Content from '@views/Content';
import BottomTabs from './BottomTabs';

const Stack = createStackNavigator<RootStackParamList>();

const Routes = () => (
  <NavigationContainer
    theme={{
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: COLORS.darkBluePrimary,
        primary: COLORS.darkBlueSecondary
      }
    }}>
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      />*/}
      <Stack.Screen
        name="Content"
        component={Content}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
