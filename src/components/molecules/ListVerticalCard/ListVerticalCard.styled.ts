import {RFPercentage} from 'react-native-responsive-fontsize';
import {COLORS} from '@themes/default';
import styled from 'styled-components/native';

interface StyledCardContainerProps {
  initialSeparator: boolean;
  finalSeparator: boolean;
}

const StyledScrollView = styled.ScrollView`
  padding: 0 24px;
  margin-top: 10px;
`;

const StyledResultContainer = styled.View<StyledCardContainerProps>`
  flex-direction: row;
  align-items: center;
  margin-top: ${props => (props.initialSeparator ? 10 : 20)}px;
  margin-bottom: ${props => (props.finalSeparator ? 20 : 0)}px;
`;

const StyledCardContainer = styled.View`
  width: 100px;
  height: 150px;
  border-radius: 20px;
`;

const StyledInfo = styled.TouchableOpacity`
  padding-left: 20px;
  height: 150px;
  justify-content: center;
`;

const StyledInfoTitle = styled.Text`
  color: ${COLORS.white};
  font-size: ${RFPercentage(2.2)}px;
  font-family: ${props => props.theme.fontFamily};
`;
const StyledInfoData = styled.Text`
  font-family: ${props => props.theme.fontFamilyMd};
  font-size: ${RFPercentage(2)}px;
  color: ${props => props.theme.textColor};
  margin-top: 4px;
`;
const StyledInfoLanguage = styled.Text`
  font-family: ${props => props.theme.fontFamilyMd};
  font-size: ${RFPercentage(2)}px;
  color: ${COLORS.whiteBlue};
  max-width: 100px;
  margin-top: 8px;
`;

export {
  StyledScrollView,
  StyledCardContainer,
  StyledResultContainer,
  StyledInfo,
  StyledInfoTitle,
  StyledInfoData,
  StyledInfoLanguage
};
