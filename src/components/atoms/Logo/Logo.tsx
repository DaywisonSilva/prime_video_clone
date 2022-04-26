import React from 'react';
import {Text, View} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import StyledLogoText from './Styled.Logo';

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
