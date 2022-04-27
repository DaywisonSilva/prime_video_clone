import React, {useEffect, useState} from 'react';

//  Components
import {View} from 'react-native';
import {Logo} from '@components/atoms';
import {StyledHomeView} from './Home.styled';

//  resources
import {StackScreenProps} from '@react-navigation/stack';
import ListCard from '@components/molecules/ListCard';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

function Home({route}: Props) {
  const {bannerCards} = route.params;

  useEffect(() => {}, []);

  return (
    <StyledHomeView>
      <View
        style={{
          paddingTop: 35
        }}>
        <View style={{marginBottom: 24.35, paddingLeft: '7.8%'}}>
          <Logo horizontal fontSize={3.5} />
        </View>
        <ListCard cards={bannerCards} isBanner />
      </View>
    </StyledHomeView>
  );
}

export default Home;
