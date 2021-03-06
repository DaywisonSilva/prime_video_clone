// hooks
import React from 'react';
import useDimensions from '@hooks/useDimensions';

//  Components
import {View, ScrollView} from 'react-native';
import {StyledImageBackground, StyledContentOverlay} from './Content.styled';
import {ListTabs} from '@components/molecules';
import BackButton from '@components/atoms/BackButton';
import {IconButton} from '@components/atoms';
import {ListEpisode} from '@components/organisms';
import LinearGradient from 'react-native-linear-gradient';

//  utils
import {COLORS} from '@themes/default';

// types
import {StackScreenProps} from '@react-navigation/stack';
type Props = StackScreenProps<RootStackParamList, 'Content'>;

function Content({route, navigation}: Props) {
  const {id, urlCover, episodes} = route.params;
  const {width} = useDimensions();

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <StyledImageBackground source={{uri: urlCover}} resizeMode="cover">
          <StyledContentOverlay>
            <LinearGradient
              colors={['transparent', COLORS.darkBluePrimary]}
              style={{flex: 1, zIndex: 2}}
            />
          </StyledContentOverlay>
        </StyledImageBackground>
        <BackButton onPress={() => navigation.goBack()} />
        <ListTabs list={['episódios', 'informações']} />
        <View
          style={{
            marginTop: width * 0.12,
            marginLeft: width * 0.07,
            marginBottom: width * 0.08
          }}>
          <IconButton label="Baixar todos" icon="download" />
        </View>
        <ListEpisode episodes={episodes} />
      </ScrollView>
    </View>
  );
}

export default Content;
