// hooks
import React from 'react';
import useDimensions from '@hooks/useDimensions';

// components
import {StyledIconButton, StyledIconButtonText} from './IconButton.styled';
import {Download} from 'react-native-feather';

// utils
import {COLORS} from '@themes/default';
import {RFPercentage} from 'react-native-responsive-fontsize';

// types
interface IconButtonProps {
  label?: string;
  icon: string;
}
function IconButton({label, icon}: IconButtonProps) {
  const {width} = useDimensions();

  return (
    <StyledIconButton>
      <Download
        stroke={COLORS.darkBlueThird}
        width={width * 0.078}
        height={width * 0.078}
      />
      {label && (
        <StyledIconButtonText fontSize={RFPercentage(2.2)}>
          {label}
        </StyledIconButtonText>
      )}
    </StyledIconButton>
  );
}

export default IconButton;
