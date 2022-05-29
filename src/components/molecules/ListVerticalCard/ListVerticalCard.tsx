import {Card} from '@components/atoms';
import React from 'react';
import {Text, View} from 'react-native';
import {
  StyledCardContainer,
  StyledInfo,
  StyledInfoData,
  StyledInfoLanguage,
  StyledInfoTitle,
  StyledResultContainer,
  StyledScrollView
} from './ListVerticalCard.styled';

interface ListVerticalCardProps {
  cards: Array<ContentCard>;
}

function ListVerticalCard({cards}: ListVerticalCardProps) {
  return (
    <StyledScrollView>
      {cards.map((card, index) => (
        <StyledResultContainer
          key={card.id}
          initialSeparator={index === 0}
          finalSeparator={cards.length - 1 === index ? true : false}>
          <StyledCardContainer>
            <Card
              width={100}
              height={150}
              id={card.id}
              name={card.name}
              url_card={card.url_cover || card.url_card}
              onPress={() => {}}
              key={card.id}
            />
          </StyledCardContainer>
          <StyledInfo>
            <StyledInfoTitle>{card.name}</StyledInfoTitle>
            <StyledInfoData>
              {card.episodes?.length
                ? `2021 | ${card.episodes?.length} episódios`
                : card.duration}
            </StyledInfoData>
            <StyledInfoLanguage>Dublado e legendado</StyledInfoLanguage>
          </StyledInfo>
        </StyledResultContainer>
      ))}
    </StyledScrollView>
  );
}

export default ListVerticalCard;
