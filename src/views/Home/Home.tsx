// hooks
import React from 'react';

//  Components
import {ScrollView, View} from 'react-native';
import {Logo} from '@components/atoms';
import {StyledHomeView} from './Home.styled';
import {ListCard, ListTabs} from '@components/molecules/';

//  types
import {StackScreenProps} from '@react-navigation/stack';
type Props = StackScreenProps<RootStackParamList, 'Home'>;

function Home({route}: Props) {
  const {bannerCards, contentCards, channelCards} = route.params;

  return (
    <StyledHomeView>
      <View
        style={{
          paddingTop: 35,
          marginBottom: 15
        }}>
        <View style={{marginBottom: 24.35, paddingLeft: '7.8%'}}>
          <Logo horizontal fontSize={3.5} />
        </View>

        <View style={{marginBottom: 21}}>
          <ListTabs list={['home', 'originais', 'tv', 'filmes']} />
        </View>

        <ScrollView>
          <View style={{marginBottom: 24}}>
            <ListCard cards={bannerCards} isBanner />
          </View>
          <View style={{marginBottom: 24}}>
            <ListCard
              cards={contentCards}
              label="Assista com o"
              labelEmphasis="Prime"
            />
          </View>
          <View style={{marginBottom: 24}}>
            <ListCard cards={channelCards} label="Seus canais" />
          </View>
        </ScrollView>
      </View>
    </StyledHomeView>
  );
}

export default Home;
