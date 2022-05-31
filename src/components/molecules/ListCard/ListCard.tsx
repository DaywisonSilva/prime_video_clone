// hooks
import React from 'react';
import useDimensions from '@hooks/useDimensions';
import {useNavigation} from '@react-navigation/native';

// components
import {View, FlatList} from 'react-native';
import {Card} from '@components/atoms';
import {
  StyledLabel,
  StyledLabelContainer,
  StyledLabelEmphasis
} from './ListCard.styled';

// utils
import {RFPercentage} from 'react-native-responsive-fontsize';

// types
import {StackNavigationProp} from '@react-navigation/stack';

interface ListCard {
  cards: Array<ContentCard> | Array<Card>;
  isBanner?: boolean;
  label?: string;
  labelEmphasis?: string;
}

type Props = StackNavigationProp<RootStackParamList, 'Home'>;

function ListCard({cards, isBanner, label, labelEmphasis}: ListCard) {
  const {width} = useDimensions();
  const navigation = useNavigation<Props>();

  const widthCard = width * (isBanner ? 0.78 : 0.672);
  const heightCard = widthCard * (isBanner ? 0.558 : 0.646);

  const initialSeparatorWidth = width * 0.07;
  const finalSeparatorWidth = width * 0.07;

  const goToContentScreen = async ({
    id,
    urlCover,
    episodes
  }: {
    id: number;
    urlCover: string | '';
    episodes: Array<Episode> | [];
  }) => {
    navigation.navigate('Content', {id, urlCover, episodes});
  };

  return (
    <View>
      {label && (
        <StyledLabelContainer>
          <StyledLabel fontSize={RFPercentage(2.3)}>{label}</StyledLabel>
          {labelEmphasis && (
            <StyledLabelEmphasis fontSize={RFPercentage(2.3)}>
              {labelEmphasis}
            </StyledLabelEmphasis>
          )}
        </StyledLabelContainer>
      )}
      <View style={{width: '100%', height: heightCard}}>
        <FlatList
          data={cards}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: 18
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
                    onPress={
                      isBanner
                        ? () =>
                            goToContentScreen({
                              id: item.id,
                              urlCover: item.url_cover ? item.url_cover : '',
                              episodes: item.episodes ? item.episodes : []
                            })
                        : () => {}
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
                    onPress={
                      isBanner
                        ? () =>
                            goToContentScreen({
                              id: item.id,
                              urlCover: item.url_cover || '',
                              episodes: item.episodes || []
                            })
                        : () => {}
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
                onPress={
                  isBanner
                    ? () =>
                        goToContentScreen({
                          id: item.id,
                          urlCover: item.url_cover || '',
                          episodes: item.episodes || []
                        })
                    : () => {}
                }
              />
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
}

export default ListCard;
