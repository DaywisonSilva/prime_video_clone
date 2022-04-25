import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

//  components
import {Logo} from '@components/atoms/index';
import {StyledLoading} from './Loading.styled';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

function Loading({navigation}: Props) {
  return (
    <StyledLoading onTouchStart={() => navigation.replace('Home')}>
      <Logo />
    </StyledLoading>
  );
}

export default Loading;
