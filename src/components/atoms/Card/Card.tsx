import React, {useState} from 'react';

//  components
import {Image, TouchableNativeFeedback, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// utils
import {COLORS} from '@themes/default';

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
      <View
        style={{
          width,
          height,
          display: loading ? 'none' : 'flex',
          overflow: 'hidden',
          borderRadius: 20
        }}>
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
      </View>
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
