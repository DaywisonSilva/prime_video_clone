// hooks
import React from 'react';

// components
import {TouchableNativeFeedback, View} from 'react-native';
import {
  StyledEpisode,
  StyledImageEpisode,
  StyledEpisodeGroup,
  StyledEpisodeText,
  StyledEpisodeTitle,
  StyledEpisodeDuration
} from './Episode.styled';

// utils
import {RFPercentage} from 'react-native-responsive-fontsize';

// types
interface EpisodeProps {
  image: string;
  episode: string;
  title: string;
  duration: string;
}

function Episode({image, episode, title, duration}: EpisodeProps) {
  return (
    <TouchableNativeFeedback useForeground>
      <StyledEpisode>
        <StyledImageEpisode source={{uri: image}} />
        <StyledEpisodeGroup>
          <View>
            <StyledEpisodeText fontSize={RFPercentage(2.2)}>
              {episode}
            </StyledEpisodeText>
            <StyledEpisodeTitle fontSize={RFPercentage(2)} numberOfLines={1}>
              {title}
            </StyledEpisodeTitle>
          </View>
          <View>
            <StyledEpisodeDuration>{duration}</StyledEpisodeDuration>
          </View>
        </StyledEpisodeGroup>
      </StyledEpisode>
    </TouchableNativeFeedback>
  );
}

export default Episode;
