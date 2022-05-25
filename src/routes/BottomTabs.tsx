import React from 'react';

// hooks
import useDimensions from '@hooks/useDimensions';

// UI components
import {Platform, Text, View} from 'react-native';
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Download as DownloadIcon
} from 'react-native-feather';

// Views
import {Home, Search, Download} from '@views/index';

// utils
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';
import {COLORS} from '@themes/default';

const Tab = createBottomTabNavigator();
type Props = StackScreenProps<RootStackParamList, 'BottomTabs'>;

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function BottomTabs({route, navigation}: Props) {
  const {bannerCards} = route.params;
  const {width} = useDimensions();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.whiteBlue,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: COLORS.darkBlueSecondary,
          height: Platform.OS === 'ios' ? width * 0.22 : width * 0.2
        },
        tabBarShowLabel: false,

        tabBarIcon: ({color}) => {
          // You can return any component that you like here!
          switch (route.name) {
            case 'Home':
              return (
                <HomeIcon
                  width={width * 0.06}
                  height={width * 0.06}
                  color={color}
                />
              );
            case 'Search':
              return (
                <SearchIcon
                  width={width * 0.06}
                  height={width * 0.06}
                  color={color}
                />
              );

            case 'Download':
              return (
                <DownloadIcon
                  width={width * 0.06}
                  height={width * 0.06}
                  color={color}
                />
              );
          }
        }
      })}>
      <Tab.Screen name="Home" component={Home} initialParams={{bannerCards}} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Download" component={Download} />
    </Tab.Navigator>
  );
}
