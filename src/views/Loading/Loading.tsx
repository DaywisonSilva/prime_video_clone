// hooks
import React, {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

//  components
import {ActivityIndicator} from 'react-native';
import LottieView from 'lottie-react-native';
import {StyledLoading} from './Loading.styled';

// utils
import API from '@api/index';
import {COLORS} from '@themes/default';

// assets
import AnimationPrimeVideo from '@assets/animations/prime-video.json';

// types
import {StackScreenProps} from '@react-navigation/stack';
type Props = StackScreenProps<RootStackParamList, 'Home'>;

function Loading({navigation}: Props) {
  useEffect(() => {
    (async () => {
      const netInfo = await NetInfo.fetch();

      if (netInfo.isConnected) {
        navigation.replace('Offline');
        return;
      }

      const bannerCards: Card[] = await API.get('/banners');
      const contentCards: ContentCard[] = await API.get('/content');
      const channelCards: ContentCard[] = await API.get('/channels');

      if (!bannerCards || !contentCards || !channelCards) {
        console.warn('Erro interno');
        return;
      }
      setTimeout(() => {
        navigation.replace('BottomTabs', {
          bannerCards,
          contentCards,
          channelCards
        });
      }, 1000);
    })();
  });

  return (
    <StyledLoading>
      <LottieView source={AnimationPrimeVideo} autoPlay loop={false} />

      <ActivityIndicator
        size="large"
        color={COLORS.whiteBlue}
        style={{marginTop: 200}}
      />
    </StyledLoading>
  );
}

export default Loading;
