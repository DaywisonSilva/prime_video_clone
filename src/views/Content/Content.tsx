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

type Props = StackScreenProps<RootStackParamList, 'Content'>;

function Content({route, navigation}: Props) {
  const {id, urlCover} = route.params;

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
        <IconButton label="teste" icon="test" />
      </ScrollView>
    </View>
  );
}

export default Content;
