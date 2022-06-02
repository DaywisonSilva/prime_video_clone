// hooks
import React from 'react';
import {RFPercentage} from 'react-native-responsive-fontsize';

// components
import {StyledTitleContainer} from './Title.styled';

interface TitleProps {
  label: string;
  fontSize?: number;
}

/**
 * @param fontSize use RFPercentage
 */
function Title({label, fontSize}: TitleProps) {
  return (
    <StyledTitleContainer fontSize={fontSize || RFPercentage(3.2)}>
      {label}
    </StyledTitleContainer>
  );
}

export default Title;
