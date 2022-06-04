// hooks
import React, {useEffect, useState} from 'react';

// components
import Title from '@components/atoms/Title';
import {StyledDownload, StyledTitleContainer} from './Download.styled';
import {ListVerticalCard} from '@components/molecules';

// services
import API from '@api/index';

function Download() {
  const [cards, setCards] = useState<Card[] | ContentCard[]>([]);

  useEffect(() => {
    (async () => {
      const banners: Card[] = await API.get('/banners');
      const content: ContentCard[] = await API.get('/content');

      setCards([...banners, ...content]);
    })();
  }, []);

  return (
    <StyledDownload>
      <StyledTitleContainer>
        <Title label="Downloads" />
      </StyledTitleContainer>
      <ListVerticalCard cards={cards} />
    </StyledDownload>
  );
}

export default Download;
