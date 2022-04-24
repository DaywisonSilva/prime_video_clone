import React from 'react';

//  components
import {Logo} from '@components/atoms/index';
import {StyledLoading} from './Loading.styled';

function Loading() {
  return (
    <StyledLoading>
      <Logo />
    </StyledLoading>
  );
}

export default Loading;
