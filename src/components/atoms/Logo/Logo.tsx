// hooks
import React from 'react';

// components
import {View} from 'react-native';
import StyledLogoText from './Styled.Logo';

// utils
import {RFPercentage} from 'react-native-responsive-fontsize';

// types
interface LogoProps {
  horizontal?: boolean;
  fontSize: number;
}

function Logo({horizontal, fontSize}: LogoProps) {
  return (
    <View
      style={{
        flexDirection: horizontal ? 'row' : 'column'
      }}>
      <StyledLogoText color="#00B9E7" fontSize={RFPercentage(fontSize)}>
        prime
      </StyledLogoText>
      {horizontal && <View style={{width: 10}} />}
      <StyledLogoText color="#fff" fontSize={RFPercentage(fontSize)}>
        video
      </StyledLogoText>
    </View>
  );
}

export default Logo;
