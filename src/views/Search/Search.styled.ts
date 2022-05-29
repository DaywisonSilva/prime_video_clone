import {COLORS} from '@themes/default';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');

const StyledInputContainer = styled.View``;

const StyledSearchContainer = styled.View`
  flex: 1;
`;

const StyledListTabsContainer = styled.View`
  height: 40px;
`;

const StyledTextInput = styled.TextInput`
  width: ${width * 0.9}px;
  height: ${width * 0.84 * 0.17}px;
  background-color: ${COLORS.darkBlueSecondary};
  border-radius: ${width * 0.84 * 0.16}px;
  margin: 40px auto 25px auto;
  padding: 15px 30px;
  font-size: 16px;
  color: ${COLORS.white};
`;

const StyledIconSearchContainer = styled.View`
  position: absolute;
  bottom: ${width * 0.105}px;
  right: ${width * 0.105}px;
`;

export {
  StyledSearchContainer,
  StyledListTabsContainer,
  StyledTextInput,
  StyledIconSearchContainer,
  StyledInputContainer
};
