import React from 'react';
import {TouchableNativeFeedback} from 'react-native';

// components
import {
  StyledButtonContainer,
  StyledOverflow,
  StyledText
} from './Button.styled';
import {Play} from 'react-native-feather';
import {COLORS} from '@themes/default';

// types
interface ButtonProps {
  label: string;
}

function Button({label}: ButtonProps) {
  return (
    <StyledOverflow>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#0ad', true)}>
        <StyledButtonContainer>
          <Play
            color={COLORS.white}
            fill={COLORS.white}
            style={{marginRight: 12}}
          />
          <StyledText>{label}</StyledText>
        </StyledButtonContainer>
      </TouchableNativeFeedback>
    </StyledOverflow>
  );
}

export default Button;
