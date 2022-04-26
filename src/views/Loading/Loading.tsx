import React, {useEffect, useRef} from 'react';
import {StackScreenProps} from '@react-navigation/stack';

//  components
import {Logo} from '@components/atoms/index';
import {StyledLoading} from './Loading.styled';
import {Animated} from 'react-native';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const animatedStyle = {
  opacity: 0,
  transform: [{scale: 1.5}]
};

function Loading({navigation}: Props) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false
    }).start();
  });

  return (
    <StyledLoading onTouchStart={() => navigation.replace('Home')}>
      <Animated.View // Special animatable View
        style={{
          ...animatedStyle,
          opacity: fadeAnim
          // Bind opacity to animated value
        }}>
        <Logo />
      </Animated.View>
    </StyledLoading>
  );
}

export default Loading;
