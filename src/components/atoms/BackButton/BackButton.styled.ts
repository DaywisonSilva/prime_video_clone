import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');

const StyledBackButton = styled.View`
  width: ${width * 0.15}px;
  height: ${width * 0.15}px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  border-radius: 50px;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 15px;
`;

export {StyledBackButton, StyledTouchableOpacity};
