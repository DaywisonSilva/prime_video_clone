// hooks
import React from 'react';
import useDimensions from '@hooks/useDimensions';

// components
import {
  StyledContainerOfflineImage,
  StyledOffilineContainerTitle,
  StyledOfflineContainer,
  StyledOfflineImage,
  StyledSubtitleOffline
} from './Offline.styled';
import Title from '@components/atoms/Title';
import {View} from 'react-native';
import {IconButton} from '@components/atoms';
import Svg, {Defs, Ellipse, RadialGradient, Stop} from 'react-native-svg';

// utils
import {COLORS} from '@themes/default';

// mocks
import offlineData from '@mocks/offline.mock.json';

function Offline() {
  const {width} = useDimensions();

  return (
    <StyledOfflineContainer>
      <StyledOffilineContainerTitle>
        <View>
          <Title label="Você está offline" />
          <StyledSubtitleOffline>Continue assistindo</StyledSubtitleOffline>
        </View>
        <IconButton icon="settings" iconColor="#fff" />
      </StyledOffilineContainerTitle>
      <StyledContainerOfflineImage>
        <Svg width={200} height={200}>
          <Defs>
            <RadialGradient
              id="grad"
              cx="55"
              cy="125"
              rx="85"
              ry="55"
              fx="150"
              fy="75"
              gradientUnits="userSpaceOnUse">
              <Stop offset="0" stopColor={COLORS.whiteBlue} stopOpacity="1" />
              <Stop offset="1" stopColor={COLORS.darkBluePrimary} />
            </RadialGradient>
          </Defs>
          <Ellipse cx="55" cy="80" rx="55" ry="55" fill="url(#grad)" />
        </Svg>
        <StyledOfflineImage source={{uri: offlineData.url_cover}} />
      </StyledContainerOfflineImage>
    </StyledOfflineContainer>
  );
}

export default Offline;
