import React, {useEffect, useState} from 'react';

// Components
import {ListTabs, ListVerticalCard} from '@components/molecules';
import {Search as SearchIcon} from 'react-native-feather';
import {
  StyledIconSearchContainer,
  StyledInputContainer,
  StyledListTabsContainer,
  StyledSearchContainer,
  StyledTextInput
} from './Search.styled';

// utils
import {COLORS} from '@themes/default';
import {Card} from '@components/atoms';
import API from '@api/index';

function Search() {
  const [bannerCards, setBannerCards] = useState<Array<Card | ContentCard>>([]);

  useEffect(() => {
    (async () => {
      const bannerCardsData: Array<Card> = await API.get('/banners');
      const contentCards: Array<ContentCard> = await API.get('/content');

      setBannerCards([...bannerCardsData, ...contentCards]);
    })();
  }, []);

  return (
    <StyledSearchContainer>
      <StyledInputContainer>
        <StyledTextInput
          underlineColorAndroid="transparent"
          placeholder="Pesquisar"
          placeholderTextColor={COLORS.darkBlueThird}
        />
        <StyledIconSearchContainer>
          <SearchIcon color={COLORS.darkBlueThird} />
        </StyledIconSearchContainer>
      </StyledInputContainer>

      <StyledListTabsContainer>
        <ListTabs
          list={[
            'Todos',
            'Animação',
            'Horror',
            'Comédia',
            'Suspense',
            'Ficção Científica'
          ]}
        />
      </StyledListTabsContainer>

      <ListVerticalCard cards={bannerCards} />
    </StyledSearchContainer>
  );
}

export default Search;
