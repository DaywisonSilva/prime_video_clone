import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height} = Dimensions.get('screen');

interface StyledImageBackgroundProps {
  children: React.ReactNode;
}

const StyledImageBackground = styled.ImageBackground<StyledImageBackgroundProps>`
  height: ${height * 0.65}px;
  object-position: top;
`;

const StyledContentOverlay = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  bottom: 0;
`;

export {StyledImageBackground, StyledContentOverlay};
