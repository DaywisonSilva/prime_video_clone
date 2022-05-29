import React from 'react';

// Components
import {ListTabs} from '@components/molecules';
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

function Search() {
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
    </StyledSearchContainer>
  );
}

export default Search;
