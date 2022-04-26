import React from 'react';
import {Text, View} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import StyledLogoText from './Styled.Logo';

interface LogoProps {
  horizontal?: boolean;
}

function Logo({horizontal}: LogoProps) {
  return (
    <View
      style={{
        flexDirection: horizontal ? 'row' : 'column'
      }}>
      <StyledLogoText color="#00B9E7" fontSize={RFPercentage(5)}>
        prime
      </StyledLogoText>
      <StyledLogoText color="#fff" fontSize={RFPercentage(5)}>
        video
      </StyledLogoText>
    </View>
  );
}

export default Logo;
