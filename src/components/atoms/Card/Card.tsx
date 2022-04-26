import {COLORS} from '@themes/default';
import React, {useState} from 'react';

//  Components
import {Image, TouchableOpacity, View} from 'react-native';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function Card({name, url_card, url_cover}: Omit<Card, 'id'>) {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <TouchableOpacity activeOpacity={0.8}>
        <View>
          <Image
            source={{uri: url_card}}
            style={{
              width: 306,
              height: 172,
              display: loading ? 'none' : 'flex'
            }}
            borderRadius={20}
            onLoadEnd={() => setTimeout(() => setLoading(false), 1000)}
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
