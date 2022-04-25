import React from 'react';
import {Text} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import StyledLogoText from './Styled.Logo';

function Logo({}) {
  return (
    <>
      <StyledLogoText color="#00B9E7" fontSize={RFPercentage(5)}>
        prime
      </StyledLogoText>
      <StyledLogoText color="#fff" fontSize={RFPercentage(5)}>
        video
      </StyledLogoText>
    </>
  );
}

export default Logo;
