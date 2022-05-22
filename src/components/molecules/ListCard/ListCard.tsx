import {Card} from '@components/atoms';
import useDimensions from '@hooks/useDimensions';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

interface ListCard {
  cards: Array<Card>;
  isBanner?: boolean;
}

type Props = StackNavigationProp<RootStackParamList, 'Home'>;

function ListCard({cards, isBanner}: ListCard) {
  const {width} = useDimensions();
  const navigation = useNavigation<Props>();

  const widthCard = width * (isBanner ? 0.78 : 0.672);
  const heightCard = widthCard * (isBanner ? 0.558 : 0.646);

  const initialSeparatorWidth = width * 0.075;
  const finalSeparatorWidth = width * 0.08 * 2;

  const goToContentScreen = async ({
    id,
    urlCover,
    episodes
  }: {
    id: number;
    urlCover: string;
    episodes: Array<Episode>;
  }) => {
    navigation.navigate('Content', {id, urlCover, episodes});
  };

  return (
    <View style={{width: '100%', height: heightCard}}>
      <FlatList
        data={cards}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: '2%'
            }}
          />
        )}
        horizontal
        renderItem={({item, index}) => {
          if (index === 0)
            return (
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: initialSeparatorWidth
                  }}
                />
                <Card
                  {...item}
                  width={widthCard}
                  height={heightCard}
                  onPress={() =>
                    goToContentScreen({
                      id: item.id,
                      urlCover: item.url_cover,
                      episodes: item.episodes
                    })
                  }
                />
              </View>
            );
          else if (index === cards.length - 1)
            return (
              <View style={{flexDirection: 'row'}}>
                <Card
                  {...item}
                  width={widthCard}
                  height={heightCard}
                  onPress={() =>
                    goToContentScreen({
                      id: item.id,
                      urlCover: item.url_cover,
                      episodes: item.episodes
                    })
                  }
                />
                <View style={{width: finalSeparatorWidth}} />
              </View>
            );
          return (
            <Card
              {...item}
              width={widthCard}
              height={heightCard}
              onPress={() =>
                goToContentScreen({
                  id: item.id,
                  urlCover: item.url_cover,
                  episodes: item.episodes
                })
              }
            />
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default ListCard;
