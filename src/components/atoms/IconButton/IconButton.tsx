import React from 'react';
import {COLORS} from '@themes/default';
import {Download} from 'react-native-feather';
import {StyledIconButton, StyledIconButtonText} from './IconButton.styled';
import useDimensions from '@hooks/useDimensions';
import {RFPercentage} from 'react-native-responsive-fontsize';

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
