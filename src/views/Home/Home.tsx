import React from 'react';
import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

function Home({navigation}: Props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#07a',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      // onTouchStart={() => navigation.replace('Loading')}
    >
      <Text style={{fontSize: 50, color: '#fff'}}>Home</Text>
    </View>
  );
}

export default Home;
