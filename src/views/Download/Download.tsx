// hooks
import Title from '@components/atoms/Title';
import React from 'react';
import {Text, View} from 'react-native';

// components
import {StyledDownload} from './Download.styled';

function Download() {
  return (
    <StyledDownload>
      <Title label="Você está offline" />
    </StyledDownload>
  );
}

export default Download;
