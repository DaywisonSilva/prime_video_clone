import {COLORS} from '@themes/default';
import {Dimensions} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');

const StyledOverflow = styled.View`
  width: ${width * 0.58}px;
  height: ${width * 0.58 * 0.22}px;
  border-radius: 11px;
  overflow: hidden;
`;

const StyledButtonContainer = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 11px;
  background-color: ${COLORS.darkBlueThird};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-family: ${props => props.theme.fontFamilyMd};
  color: ${COLORS.white};
  font-size: ${RFPercentage(2.2)}px;
`;

export {StyledButtonContainer, StyledOverflow, StyledText};
