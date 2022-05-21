import React from 'react';

//  Components
import {View, ScrollView} from 'react-native';
import {StyledImageBackground, StyledContentOverlay} from './Content.styled';

//  resources
import {StackScreenProps} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '@themes/default';
import BackButton from '@components/atoms/BackButton';
import {ListTabs} from '@components/molecules';
import {IconButton} from '@components/atoms';
import useDimensions from '@hooks/useDimensions';

type Props = StackScreenProps<RootStackParamList, 'Content'>;

function Content({route, navigation}: Props) {
  const {id, urlCover} = route.params;
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
        <View style={{marginTop: width * 0.12, marginLeft: width * 0.07}}>
          <IconButton label="Baixar todos" icon="test" />
        </View>
      </ScrollView>
    </View>
  );
}

export default Content;
