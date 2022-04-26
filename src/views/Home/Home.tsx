import React, {useEffect, useState} from 'react';

//  Components
import {View} from 'react-native';
import {Logo} from '@components/atoms';
import {StyledHomeSafeAreaView} from './Home.styled';

//  resources
import {StackScreenProps} from '@react-navigation/stack';
import useDimensions from '@hooks/useDimensions';
import ListCard from '@components/molecules/ListCard';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

function Home({navigation, route}: Props) {
  const {bannerCards} = route.params;
  const {width} = useDimensions();

  const moveToRight = width * 0.078;

  useEffect(() => {}, []);

  return (
    <StyledHomeSafeAreaView>
      <View
        style={{
          paddingTop: 35
        }}>
        <View style={{marginBottom: 24.35, paddingLeft: '7.8%'}}>
          <Logo horizontal fontSize={3.5} />
        </View>
        <ListCard cards={bannerCards} isBanner />
      </View>
    </StyledHomeSafeAreaView>
  );
}

export default Home;
