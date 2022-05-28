import {Dimensions, Platform} from 'react-native';
import styled from 'styled-components/native';
const {width} = Dimensions.get('screen');

const StyledSkeletonView = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${props => props.theme.backgroundColor};
`;

const StyledHomeView = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgroundColor};
  padding-bottom: ${Platform.OS === 'ios' ? width * 0.28 : width * 0.26}px;
`;

export {StyledSkeletonView, StyledHomeView};
