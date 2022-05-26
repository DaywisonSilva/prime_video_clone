import {COLORS} from '@themes/default';
import React, {useState} from 'react';

//  Components
import {Image, TouchableOpacity, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

type CardProps = ContentCard & {
  width: number;
  height: number;
  onPress: () => void;
};

function Card({name, url_card, width, height, onPress}: CardProps) {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <TouchableOpacity activeOpacity={0.8} onPress={() => onPress()}>
        <View>
          <Image
            source={{uri: url_card}}
            style={{
              width,
              height,
              display: loading ? 'none' : 'flex'
            }}
            borderRadius={20}
            onLoadEnd={() => setTimeout(() => setLoading(false), 500)}
          />
        </View>
      </TouchableOpacity>
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
