import React from 'react';
import {StyledBackButton, StyledTouchableOpacity} from './BackButton.styled';
import {ChevronLeft} from 'react-native-feather';
import {COLORS} from '@themes/default';

interface BackButtonProps {
  onPress: () => void;
}

function BackButton({onPress}: BackButtonProps) {
  return (
    <StyledTouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <StyledBackButton>
        <ChevronLeft
          color={COLORS.darkBlueThird}
          width="80%"
          height="80%"
          style={{right: 3}}
        />
      </StyledBackButton>
    </StyledTouchableOpacity>
  );
}

export default BackButton;
