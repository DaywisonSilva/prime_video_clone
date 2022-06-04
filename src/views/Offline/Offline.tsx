// hooks
import React from 'react';
import useDimensions from '@hooks/useDimensions';

// components
import {
  StyledCenter,
  StyledInfo,
  StyledOffilineContainerTitle,
  StyledOfflineContainer,
  StyledOfflineImage,
  StyledPadding,
  StyledSubtitleOffline,
  StyledText
} from './Offline.styled';
import DropShadow from 'react-native-drop-shadow';
import Title from '@components/atoms/Title';
import {View} from 'react-native';
import {IconButton} from '@components/atoms';
import Button from '@components/atoms/Button';

// utils
import {COLORS} from '@themes/default';
import {RFPercentage} from 'react-native-responsive-fontsize';

// mocks
import offlineData from '@mocks/offline.mock.json';
import {ListEpisode} from '@components/organisms';

function Offline() {
  return (
    <StyledOfflineContainer>
      <StyledPadding>
        <StyledOffilineContainerTitle>
          <View>
            <Title label="Você está offline" fontSize={RFPercentage(3.5)} />
            <StyledSubtitleOffline>Continue assistindo</StyledSubtitleOffline>
          </View>
          <IconButton icon="settings" iconColor="#fff" />
        </StyledOffilineContainerTitle>
      </StyledPadding>
      <DropShadow
        style={{
          shadowColor: COLORS.whiteBlue,
          shadowOffset: {
            width: 0,
            height: 5
          },
          shadowOpacity: 0.3,
          shadowRadius: 30
        }}>
        <StyledOfflineImage source={{uri: offlineData.url_cover}} />
      </DropShadow>
      <StyledCenter>
        <Title label="Invincible" />
        <StyledInfo>5 º episódio | 02:45</StyledInfo>
      </StyledCenter>
      <StyledCenter>
        <Button label="Continue assistindo" />
      </StyledCenter>
      <StyledPadding>
        <StyledText>Outros Downloads</StyledText>
      </StyledPadding>
      <ListEpisode episodes={offlineData.episodes} />
    </StyledOfflineContainer>
  );
}

export default Offline;
