import React from 'react';
import {TouchableNativeFeedback, View} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  StyledEpisode,
  StyledImageEpisode,
  StyledEpisodeGroup,
  StyledEpisodeText,
  StyledEpisodeTitle,
  StyledEpisodeDuration
} from './Episode.styled';

interface EpisodeProps {
  image: string;
  episode: string;
  title: string;
  duration: string;
}

function Episode({image, episode, title, duration}: EpisodeProps) {
  return (
    <TouchableNativeFeedback>
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
