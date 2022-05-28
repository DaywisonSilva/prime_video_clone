import {ListTabs} from '@components/molecules';
import {COLORS} from '@themes/default';
import React from 'react';
import {
  StyledListTabsContainer,
  StyledSearchContainer,
  StyledTextInput
} from './Search.styled';

function Search() {
  return (
    <StyledSearchContainer>
      <StyledTextInput
        underlineColorAndroid="transparent"
        placeholder="Pesquisar"
        placeholderTextColor={COLORS.darkBlueThird}
      />
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
