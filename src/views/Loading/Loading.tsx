import React, {useEffect, useRef, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import NetInfo from '@react-native-community/netinfo';

//  components
// import {Logo} from '@components/atoms/index';
import {StyledLoading} from './Loading.styled';
import {ActivityIndicator, Animated} from 'react-native';
import API from '@api/index';
import {COLORS} from '@themes/default';
import LottieView from 'lottie-react-native';

// assets
import AnimationPrimeVideo from '@assets/animations/prime-video.json';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const animatedStyle = {
  opacity: 0,
  transform: [{scale: 1}]
};

function Loading({navigation}: Props) {
  const [loading, setLoading] = useState<boolean>(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    (async () => {
      const netInfo = await NetInfo.fetch();

      if (!netInfo.isConnected) {
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

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true
    }).start();
  });

  return (
    <StyledLoading>
      <LottieView source={AnimationPrimeVideo} autoPlay loop={false} />
      {loading && (
        <ActivityIndicator
          size="large"
          color={COLORS.whiteBlue}
          style={{marginTop: 200}}
        />
      )}
    </StyledLoading>
  );
}

export default Loading;
