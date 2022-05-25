import React, {useEffect, useRef, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';

//  components
import {Logo} from '@components/atoms/index';
import {StyledLoading} from './Loading.styled';
import {ActivityIndicator, Animated} from 'react-native';
import API from '@api/index';
import {COLORS} from '@themes/default';

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
      try {
        const bannerCards: Card[] = await API.get('/banners');
        setTimeout(() => {
          navigation.replace('BottomTabs', {bannerCards});
        }, 1000);
      } catch (e) {
        console.warn(e);
      }
    })();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true
    }).start();
  });

  return (
    <StyledLoading>
      <Animated.View // Special animatable View
        style={{
          ...animatedStyle,
          opacity: fadeAnim,
          transform: [
            {
              scale: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.5]
              })
            }
          ]
          // Bind opacity to animated value
        }}>
        <Logo fontSize={5} />
      </Animated.View>
      {loading && (
        <ActivityIndicator
          size="large"
          color={COLORS.whiteBlue}
          style={{marginTop: 50}}
        />
      )}
    </StyledLoading>
  );
}

export default Loading;
