import useDimensions from '@hooks/useDimensions';
import {COLORS} from '@themes/default';
import React, {useState} from 'react';

//  Components
import {Image, TouchableOpacity, View} from 'react-native';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

type CardProps = Card & {
  width: number;
  height: number;
};

function Card({
  name,
  url_card,
  url_cover,
  width,
  height
}: Omit<CardProps, 'id'>) {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <TouchableOpacity activeOpacity={0.8}>
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
            width={310}
            height={172}
            borderRadius={20}
          />
        </SkeletonPlaceholder>
      )}
    </>
  );
}
export default Card;
