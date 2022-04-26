import {Card} from '@components/atoms';
import useDimensions from '@hooks/useDimensions';
import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

interface ListCard {
  cards: Array<Card>;
  isBanner?: boolean;
}

function ListCard({cards, isBanner}: ListCard) {
  const {width} = useDimensions();

  const widthCard = width * (isBanner ? 0.78 : 0.672);
  const heightCard = widthCard * (isBanner ? 0.558 : 0.646);

  const initialSeparatorWidth = width * 0.075;
  const finalSeparatorWidth = width * 0.08 * 2;

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
                <Card {...item} width={widthCard} height={heightCard} />
              </View>
            );
          else if (index === cards.length - 1)
            return (
              <View style={{flexDirection: 'row'}}>
                <Card {...item} width={widthCard} height={heightCard} />
                <View style={{width: finalSeparatorWidth}} />
              </View>
            );
          return <Card {...item} width={widthCard} height={heightCard} />;
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default ListCard;
