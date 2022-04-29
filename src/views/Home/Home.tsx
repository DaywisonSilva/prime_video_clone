import React, {useEffect, useState} from 'react';

//  Components
import {ScrollView, SectionList, View} from 'react-native';
import {Logo} from '@components/atoms';
import {StyledHomeView} from './Home.styled';

//  resources
import {StackScreenProps} from '@react-navigation/stack';
import ListCard from '@components/molecules/ListCard';
import Tab from '@components/atoms/Tab';
import {COLORS} from '@themes/default';
import ListTabs from '@components/molecules/ListTabs';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

function Home({route}: Props) {
  const {bannerCards} = route.params;

  useEffect(() => {}, []);

  return (
    <StyledHomeView>
      <View
        style={{
          paddingTop: 35,
          marginBottom: 35
        }}>
        <View style={{marginBottom: 24.35, paddingLeft: '7.8%'}}>
          <Logo horizontal fontSize={3.5} />
        </View>

        <View style={{marginBottom: 41}}>
          <ListTabs list={['home', 'originais', 'tv', 'filmes']} />
        </View>

        <ScrollView>
          <View style={{marginBottom: 24}}>
            <ListCard cards={bannerCards} isBanner />
          </View>
        </ScrollView>
      </View>
    </StyledHomeView>
  );
}

export default Home;
