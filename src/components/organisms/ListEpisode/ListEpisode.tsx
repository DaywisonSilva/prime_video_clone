// hooks
import React from 'react';

// components
import {ScrollView} from 'react-native';
import Episode from '@components/molecules/Episode';

function ListEpisode({episodes}: {episodes: Episode[]}) {
  return (
    <ScrollView>
      {episodes.map((episode, i) => (
        <Episode
          duration={episode.duration}
          episode={episode.episode}
          image={episode.image}
          title={episode.title}
          key={i}
        />
      ))}
    </ScrollView>
  );
}

export default ListEpisode;
