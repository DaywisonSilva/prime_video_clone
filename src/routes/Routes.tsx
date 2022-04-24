import React from 'react';

//  Views
import { Loading } from '@views/index';

//  External Utils
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator()

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Loading' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Loading" component={Loading} />
        </Stack.Navigator>
    </NavigationContainer>)

export default Routes