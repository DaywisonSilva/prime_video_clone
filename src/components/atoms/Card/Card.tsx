import React, {useState} from 'react';

//  components
import {Image, TouchableNativeFeedback, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// utils
import {COLORS} from '@themes/default';
import {StyledCardContainer} from './Card.styled';

// types
type CardProps = ContentCard & {
  width: number;
  height: number;
  onPress: () => void;
};

function Card({name, url_card, width, height, onPress}: CardProps) {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <>
      <StyledCardContainer width={width} height={height} show={!loading}>
        <TouchableNativeFeedback
          useForeground
          background={TouchableNativeFeedback.Ripple('#ffffff60', true)}
          onPress={onPress}>
          <View>
            <Image
              source={{uri: url_card}}
              style={{
                width: '100%',
                height: '100%'
              }}
              borderRadius={20}
              onLoadEnd={() => setTimeout(() => setLoading(false), 500)}
            />
          </View>
        </TouchableNativeFeedback>
      </StyledCardContainer>
      {loading && (
        <SkeletonPlaceholder
          backgroundColor={COLORS.darkBlueSecondary}
          highlightColor={COLORS.darkBluePrimary}>
          <SkeletonPlaceholder.Item
            width={width}
            height={height}
            borderRadius={20}
          />
        </SkeletonPlaceholder>
      )}
    </>
  );
}
export default Card;
