import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');

interface StyledTabProps {
  selected: boolean;
}

const StyledTab = styled.View<StyledTabProps>`
  padding: 0 ${width * 0.06}px;
  height: ${width * 0.26 * 0.37}px;
  justify-content: center;
  background-color: ${props =>
    props.selected ? props.theme.appChipColor : 'transparent'};
  border-radius: ${width * 0.26 * 0.4}px;
`;

const StyledTabText = styled.Text<StyledTabProps>`
  color: ${props => (props.selected ? props.theme.backgroundColor : 'white')};
  font-family: 'AmazonEmberDisplay-Md';
  text-align: center;
`;

export {StyledTab, StyledTabText};
