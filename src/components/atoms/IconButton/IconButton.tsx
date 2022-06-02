// hooks
import React from 'react';
import useDimensions from '@hooks/useDimensions';

// components
import {StyledIconButton, StyledIconButtonText} from './IconButton.styled';
import {Download, Settings} from 'react-native-feather';

// utils
import {COLORS} from '@themes/default';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {Dimensions} from 'react-native';

// types
interface IconButtonProps {
  label?: string;
  icon: 'download' | 'settings';
  iconColor?: string;
}

interface IconProp {
  iconColor?: string;
}

const {width} = Dimensions.get('screen');

const icons = {
  download: ({iconColor}: IconProp) => (
    <Download stroke={iconColor} width={width * 0.078} height={width * 0.078} />
  ),
  settings: ({iconColor}: IconProp) => (
    <Settings stroke={iconColor} width={width * 0.078} height={width * 0.078} />
  )
};

function IconButton({label, icon, iconColor}: IconButtonProps) {
  return (
    <StyledIconButton>
      {icons[icon]({iconColor: iconColor || COLORS.darkBlueThird})}
      {label && (
        <StyledIconButtonText fontSize={RFPercentage(2.2)}>
          {label}
        </StyledIconButtonText>
      )}
    </StyledIconButton>
  );
}

export default IconButton;
