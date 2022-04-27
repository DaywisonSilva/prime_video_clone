import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {COLORS} from '@themes/default';
import React, {useState} from 'react';

//  Components
import {Image, TouchableOpacity, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

type CardProps = Card & {
  width: number;
  height: number;
};

type Props = StackNavigationProp<RootStackParamList, 'Home'>;

function Card({name, url_card, url_cover, width, height, id}: CardProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation<Props>();

  const goToContentScreen = async () => {
    navigation.navigate('Content', {id: id, urlCover: url_cover});
  };

  return (
    <>
      <TouchableOpacity activeOpacity={0.8} onPress={() => goToContentScreen()}>
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
