import React, {useEffect, useRef, useState} from 'react';

//  Components
import {FlatList, View} from 'react-native';
import {Card, Logo} from '@components/atoms';
import {StyledHomeSafeAreaView} from './Home.styled';

//  API
import API from '@api/index';

//  resources
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

function Home({navigation}: Props) {
  const [cards, setCards] = useState<Array<Card>>([]);

  useEffect(() => {
    setTimeout(() => {}, 2000);
    (async () => {
      const cards: Card[] = await API.get(
        'https://ea51-2804-d4b-9dd5-8b00-158c-59e2-c1a9-a3c8.sa.ngrok.io/banners'
      );
      setCards(cards);
    })();
  }, []);

  return (
    <StyledHomeSafeAreaView
    // onTouchStart={() => navigation.replace('Loading')}
    >
      <View
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 35
        }}>
        <Logo horizontal />
        <View style={{width: '100%', height: 172, marginTop: 20}}>
          {/* {cards.length ? ( */}
          <FlatList
            data={cards}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  width: 30
                }}
              />
            )}
            horizontal
            renderItem={({item}) => <Card {...item} />}
            keyExtractor={item => item.id.toString()}
          />
          {/* ) : null} */}

          {/* <Card name={cards[0].name!} url_card={cards[0].url_card} /> */}
        </View>
      </View>
    </StyledHomeSafeAreaView>
  );
}

export default Home;
