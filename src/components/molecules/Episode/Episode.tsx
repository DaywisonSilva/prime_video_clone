import React from 'react';
import {StyledEpisode} from './Episode.styled';

interface EpisodeProps {
  image: string;
  episode: string;
  title: string;
  duration: string;
}

function Episode({image, episode, title, duration}: EpisodeProps) {
  return <StyledEpisode></StyledEpisode>;
}

export default Episode;
